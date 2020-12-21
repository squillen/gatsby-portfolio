import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import DynamicHeader from "../../components/DynamicHeader"
import Modal from "../../components/Modal"
import '../../styles/main.scss'

const PhotosPage = ({ data }) => {
  const [imageSet, setImageSet] = useState(null)
  const [currentHeader, setCurrentHeader] = useState(null)
  const [imageIndex, setImageIndex] = useState(-1)
  const setSelectedImageInfo = (data, idx, header) => {
    setImageSet(data)
    setImageIndex(idx)
    setCurrentHeader(header)
  }
  const handleDisplay = (data, header) => displayPhotos(data, header, setSelectedImageInfo)
  const scrollImages = (direction) => {
    if (direction < 0) {
      if (imageIndex > 1) setImageIndex(imageIndex - 1)
      else setImageIndex(imageSet.length - 1)
    } else {
      if (imageIndex >= imageSet.length - 1) setImageIndex(0)
      else setImageIndex(imageIndex + 1)
    }
  }
  const currentImage = imageIndex >= 0 && imageSet[imageIndex].node
  const content = currentImage && (
    <div className="image-carousel">
      <div className="close" onClick={() => setImageIndex(-1)}>X</div>
      <div className="prev" onClick={() => scrollImages(-1)}>-</div>
      <figure className="carousel-photo">
        <Img
          key={currentImage.id}
          fluid={currentImage.image.childImageSharp.fluid}
          alt={currentImage.alt}
          fadeIn={true}
          title={currentImage.city}
        />
        <figcaption className="photo-caption">{`${currentImage.city} - ${currentImage.description}`}</figcaption>
      </figure>
      <div className="next" onClick={() => scrollImages(1)}>+</div>
    </div>
  )

  return (
    <main className="photos-page-container">
      <DynamicHeader header="Photos" id="home" headerArrowRight />
      <section className="toc">
        <h3 className="toc-header">Locations:</h3>
        <ul className="state-options-list">
          <Link to="#New Mexico"><li className="list-item-newMexico">New Mexico</li></Link>
          <Link to="#Texas"><li className="list-item-texas">Texas</li></Link>
          {/* <Link to="#Texas"><li className="list-item-florida">Florida</li></Link> */}
        </ul>
      </section>
      {/* NM PHOTOS */}
      {handleDisplay(data.newMexico, 'New Mexico')}

      {/* TEXAS PHOTOS */}
      {handleDisplay(data.texas, 'Texas')}
      <Modal
        content={content}
        displayModal={imageIndex >= 0}
        header={currentHeader}
      />
    </main>
  )
}

export const query = graphql`
  {

    texas: allTexasPhotosYaml {
      edges {
        node {
          alt
          description
          city
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          id
        }
      }
    }

    newMexico: allNewMexicoPhotosYaml {
      edges {
        node {
          alt
          description
          city
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          id
        }
      }
    }


  }
`

function displayPhotos(data, header, setSelectedImageInfo) {
  return (
    <section className="photos-container">
      <div className="section-header">
        <h2 className="photos-container-header">{header}</h2>
        <Link className="home" to="#home">^</Link>
      </div>
      <ul className="photos-list" id={header}>
        {
          data.edges.map(({ node }, idx) => (
            <li className="photo-list-item" onClick={() => setSelectedImageInfo(data.edges, idx, header)}>
              {/* <div className="overlay"></div> */}
              <Img
                data-hover={node.city}
                style={{ display: 'inherit' }}
                key={node.id}
                className="photo"
                fluid={node.image.childImageSharp.fluid}
                alt={node.alt}
              />
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default PhotosPage
