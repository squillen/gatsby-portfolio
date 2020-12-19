import * as React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import '../../styles/main.scss'

export const query = graphql`
  {
    allTexasPhotosYaml {
      edges {
        node {
          alt
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

const PhotosPage = ({ data }) => {
  return (
    <main className="container">
      photossssss
      {
        data.allTexasPhotosYaml.edges.map(({ node }) => (
          <Img
            className="photo"
            fluid={node.image.childImageSharp.fluid}
            alt={node.alt}
          />
        ))
      }
    </main>
  )
}

export default PhotosPage



// childImageSharp {
//   fluid {
//     ...GatsbyImageSharpFluid
//   }
// }