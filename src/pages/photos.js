import * as React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import '../../styles/main.scss'
import DynamicHeader from "../../components/DynamicHeader"

export const query = graphql`
  {
    allPhotosYaml {
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
  console.log('data :>> ', data);
  return (
    <main className="container">
      <DynamicHeader header="My Photos" />
      {
        data.allPhotosYaml.edges.map(({ node }) => (
          <Img
            key={node.id}
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