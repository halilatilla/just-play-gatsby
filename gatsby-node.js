const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetMovies {
      movies: allContentfulMovies {
        nodes {
          contentful_id
        }
      }
    }
  `)

  result.data.movies.nodes.forEach(movie => {
    createPage({
      path: `/movies/${movie.contentful_id}`,
      component: path.resolve("src/templates/movie-template.js"),
      context: {
        contentful_id: movie.contentful_id,
      },
    })
  })
}
