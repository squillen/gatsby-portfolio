import React, { useState } from "react"
import DefaultHelmet from "../../components/DefaultHelmet"
import { Link, graphql } from "gatsby"
import { FaChevronUp } from 'react-icons/fa'
import Img from "gatsby-image"
import arrow from '../images/svgs/arrows/straight-arrow-outline-white.svg'
import DynamicHeader from "../../components/DynamicHeader"
import Modal from "../../components/Modal"
import blob from '../images/svgs/blobs/blob2.svg'
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
      if (imageIndex >= 1) setImageIndex(imageIndex - 1)
      else setImageIndex(imageSet.length - 1)
    } else {
      if (imageIndex >= imageSet.length - 1) setImageIndex(0)
      else setImageIndex(imageIndex + 1)
    }
  }

  const handleKeyDown = (e) => {
    const event = window.event || e
    console.log('event :>> ', event);
    const { keyCode } = event || {}
    if (keyCode === 37) scrollImages(-1)
    else if (keyCode === 39) scrollImages(1)
  }

  const currentImage = imageIndex >= 0 && imageSet[imageIndex].node
  const content = currentImage && (
    <div className="image-carousel">
      <div className="image-carousel-header">{currentHeader}</div>
      <div className="close-btn-container">
        <div className="close-btn" onClick={() => setImageIndex(-1)}>X</div>
      </div>
      <div className="prev" onClick={() => scrollImages(-1)}><img src={arrow} className="button-arrow" /></div>
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
      <div className="next" onClick={() => scrollImages(1)}><img src={arrow} className="button-arrow" /></div>
    </div>
  )

  return (
    <main className="photos-page-container" onKeyDown={handleKeyDown}>
      <DefaultHelmet
        title="Photos - Sean Quillen"
        description="Some photos by Sean Quillen across several US states include Arizona, Maine, Texas, and New Mexico."
      />
      <DynamicHeader header="Photos" id="home" headerArrowRight />
      <section className="photos-page-intro">
        {<img src={blob} alt="blob" className='blob' />}
        <p>
          I got into photography at the beginning of the pandemic. (Isn&apos;t it weird how we're so casual about a &quot;pandemic&quot; now?)
        </p>
        <p>
          I fell in love with it almost immediately because it&apos;s so fun and approachable. It gives you a way to be artistic without actually being artistic. At my novice level, at least. No shade intended. 😅
        </p>
        <p>I have a <a target="_blank" href="https://www.nikonusa.com/en/nikon-products/product/dslr-cameras/d7500.html">Nikon D7500</a> and shoot primarily with my <a target="_blank" href="https://www.nikonusa.com/en/nikon-products/product/camera-lenses/af-s-nikkor-50mm-f1.4g.html">AF-S fixed Nikon 50mm F1.4G</a> lens.</p>
        <p>
          For even more photos, check out my <a href="https://unsplash.com/@squillen" target="_blank">Unsplash</a> page.
        </p>
      </section> 
      <section className="toc">
        <h3 className="toc-header">locations:</h3>
        <ul className="state-options-list">
          <Link to="#Arizona"><li className="list-item-arizona">Arizona</li></Link>
          <Link to="#Maine"><li className="list-item-maine">Maine</li></Link>
          <Link to="#New Mexico"><li className="list-item-newMexico">New Mexico</li></Link>
          <Link to="#Texas"><li className="list-item-texas">Texas</li></Link>
        </ul>
      </section>
      {/* MAINE PHOTOS */}
      {handleDisplay(data.arizona, 'Arizona')}

      {/* MAINE PHOTOS */}
      {handleDisplay(data.maine, 'Maine')}
      
      {/* NM PHOTOS */}
      {handleDisplay(data.newMexico, 'New Mexico')}

      {/* TEXAS PHOTOS */}
      {handleDisplay(data.texas, 'Texas')}
      <Modal
        content={content}
        displayModal={imageIndex >= 0}
        handleKeyDown={handleKeyDown}
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

    maine: allMainePhotosYaml {
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

    arizona: allArizonaPhotosYaml {
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
        <h2 onClick={() => setSelectedImageInfo(data.edges, 0, header)} className={`photos-container-header-${header.split(' ').join('-')}`}>{header}</h2>
        <Link className="home" to="#home"><FaChevronUp /></Link>
      </div>
      <ul className="photos-list" id={header}>
        {
          data.edges.map(({ node }, idx) => (
            <li className="photo-list-item" onClick={() => setSelectedImageInfo(data.edges, idx, header)}>
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
