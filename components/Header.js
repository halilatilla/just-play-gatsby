import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
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
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default ComponentName
