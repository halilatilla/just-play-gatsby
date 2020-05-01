import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const {
    site: {
      siteMetadata: { author, data, description, halo, title },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          data
          description
          halo
          title
        }
      }
    }
  `)
  return (
    <>
      <h1> {title} </h1>
      <h1> {author} </h1>
      <h1> {data} </h1>
      <h1> {description} </h1>
      <h1> {halo} </h1>
    </>
  )
}

export default ComponentName
