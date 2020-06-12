/** @jsx jsx */
import { Box, Flex, jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Gallery = ({ title, images }) => {
  return (
    <>
      <h4>{title}</h4>
      <Flex sx={{ flexFlow: [`column nowrap`, `row wrap`] }}>
        {images.map((img, i) => (
          <div key={i}>
            <Box sx={{ display: [`none`, `block`], mr: 2 }}>
              <a href={img.node.childImageSharp.fluid.src}>
                <Img fixed={img.node.childImageSharp.fixed} />
              </a>
            </Box>
            <Box sx={{ display: [`block`, `none`], mb: 1 }}>
              <Img fluid={img.node.childImageSharp.fluid} />
            </Box>
          </div>
        ))}
      </Flex>
    </>
  )
}

Gallery.propTypes = {
  title: PropTypes.string,
  images: PropTypes.any,
}

const Galleries = () => {
  const data = useStaticQuery(graphql`
    query {
      montagnes: allFile(filter: { relativePath: { regex: "/montagnes/" } }) {
        edges {
          node {
            publicURL
            childImageSharp {
              fluid(maxWidth: 1500) {
                ...GatsbyImageSharpFluid
              }
              fixed(height: 310) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      jardin: allFile(filter: { relativePath: { regex: "/jardin/" } }) {
        edges {
          node {
            publicURL
            childImageSharp {
              fluid(maxWidth: 1500) {
                ...GatsbyImageSharpFluid
              }
              fixed(height: 310) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Gallery title="montagnes" images={data.montagnes.edges} />
      <Gallery title="jardin" images={data.jardin.edges} />
    </>
  )
}

Galleries.propTypes = {}

export default Galleries
