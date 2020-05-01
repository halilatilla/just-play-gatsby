import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

const ComponentName = ({
  data: {
    movie: {
      name,
      image: { fluid },
    },
  },
}) => {
  return (
    <div>
      {name}
      <Image fluid={fluid} />
    </div>
  )
}

export const query = graphql`
  query GetMovie($contentful_id: String) {
    movie: contentfulMovies(contentful_id: { eq: $contentful_id }) {
      name
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default ComponentName
