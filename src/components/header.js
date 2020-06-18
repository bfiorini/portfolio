/** @jsx jsx */
import { Flex, jsx, Link as TLink, Styled } from "theme-ui"
import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header sx={{ variant: "styles.header", mb: 3 }}>
    <Flex as="nav" sx={{ alignItems: "baseline" }}>
      <TLink as={Link} to="/">
        <h1>{siteTitle}</h1>
      </TLink>
      <TLink as={Link} to="/about">
        <h2>à propos</h2>
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
