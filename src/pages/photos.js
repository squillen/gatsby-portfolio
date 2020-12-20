import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import DynamicHeader from "../../components/DynamicHeader"
import Modal from "../../components/Modal"
import '../../styles/main.scss'

const PhotosPage = ({ data }) => {
  const [imageSet, setImageSet] = useState(null)
  const [imageIndex, setImageIndex] = useState(-1)
  const setSelectedImageInfo = (data, idx) => {
    setImageSet(data)
    setImageIndex(idx)
  }
  const handleDisplay = (data, header) => displayPhotos(data, header, setSelectedImageInfo)
  const scrollImages = (direction) => {
    if (direction < 0) {
      if (imageIndex > 1) setImageIndex(imageIndex - 1)
      else setImageIndex(0)
    } else {
      if (imageIndex >= imageSet.length - 1) setImageIndex(imageSet.length - 1)
      else setImageIndex(imageIndex + 1)
    }
  }
  const currentImage = imageIndex >= 0 && imageSet[imageIndex].node
  const content = currentImage && (
    <div className="image-carousel">
      <div className="close" onClick={() => setImageIndex(-1)}>X</div>
      {imageIndex > 0 && <div className="prev" onClick={() => scrollImages(-1)}>-</div>}
      <Img
        key={currentImage.id}
        className="carousel-photo"
        fluid={currentImage.image.childImageSharp.fluid}
        alt={currentImage.alt}
      />
      {imageIndex < imageSet.length - 1 && <div className="next" onClick={() => scrollImages(1)}>+</div>}
    </div>
  )

  return (
    <main className="container">
      <DynamicHeader header="Photos" />

      {/* NM PHOTOS */}
      {handleDisplay(data.newMexico, 'New Mexico')}

      {/* TEXAS PHOTOS */}
      {handleDisplay(data.texas, 'Texas')}
      <Modal
        content={content}
        displayModal={imageIndex >= 0}
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
      <h2 className="photos-container-header">{header}</h2>
      <ul className="photos-list">
        {
          data.edges.map(({ node }, idx) => (
            <li className="photo-list-item" onClick={() => setSelectedImageInfo(data.edges, idx)}>
              <div className="overlay" />
              <Img
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
