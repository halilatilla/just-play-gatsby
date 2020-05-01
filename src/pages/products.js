import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

const ComponentName = () => {
  const {
    allContentfulMovies: { data },
  } = useStaticQuery(graphql`
    {
      allContentfulMovies {
        data: nodes {
          contentful_id
          name
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)
  return (
    <>
      {data.map(movie => {
        return (
          <div key={movie.contentful_id}>
            <p> {movie.name} </p>
            <Link to={`/movies/${movie.contentful_id}`}>
              {" "}
              Go to movie detail
            </Link>
            <Image fluid={movie.image.fluid} />
          </div>
        )
      })}
    </>
  )
}

export default ComponentName
