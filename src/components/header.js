/** @jsx jsx */
import { Flex, jsx, Link as TLink, Styled } from "theme-ui"
import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header sx={{ variant: "styles.header", mb: 2 }}>
    <Flex as="nav" sx={{ alignItems: "baseline" }}>
      <TLink as={Link} to="/" sx={{ mr: 4 }}>
        <h1>{siteTitle}</h1>
      </TLink>
      <TLink as={Link} to="/contact">
        <h2>contact</h2>
      </TLink>
    </Flex>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
