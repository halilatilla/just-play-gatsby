import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image-1.jpg"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image-1.jpg" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image-1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ImageComp = () => {
  const {
    fixed: {
      childImageSharp: { fixed },
    },
    fluid: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(getImages)
  console.log(fixed)
  console.log(fluid)

  return (
    <section className="images">
      <article className="single-img">
        <h3>basic img</h3>
        <img src={img} width="100%" />
      </article>
      <article className="single-img">
        <h3>fixed img/blur</h3>
        <Image fixed={fixed} />
      </article>
      <article className="single-img">
        <h3>flud img/svg</h3>
        <Image fluid={fluid} />
      </article>
    </section>
  )
}

export default ImageComp
