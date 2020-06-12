/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Canva = ({ children }) => {
  return <div sx={{ margin: [3, 5] }}>{children}</div>
}

Canva.propTypes = {
  children: PropTypes.node.isRequired,
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Canva>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </Canva>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
