import * as React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import '../../styles/main.scss'

const photos = graphql`
  {
    allTexasPhotosYaml {
      edges {
        node {
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      } 
    }
  }
`

const PhotosPage = () => {
  console.log('photos :>> ', photos);
  return (
    <main className="container">
      photossssss
      {
        photos && Array.isArray(photos) && photos.map(photo => (
          <Img
            className="photo"
            fixed={photo.file.childImageSharp.fluid}
            alt="headshot"
          />
        ))
      }
    </main>
  )
}

export default PhotosPage
