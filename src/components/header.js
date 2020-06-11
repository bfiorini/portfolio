/** @jsx jsx */
import { Box, Flex, jsx, Styled, Link as TLink } from "theme-ui"
import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header sx={{ variant: "styles.header", mb: 2 }}>
    <Flex as="nav" sx={{ alignItems: "baseline" }}>
      <Styled.h1>
        <TLink
          as={Link}
          to="/"
          sx={{
            fontSize: 7,
            py: 2,
            mr: 4,
            fontWeight: "bold",
            variant: "styles.navlink",
          }}
        >
          {siteTitle}
        </TLink>
      </Styled.h1>
      <TLink
        as={Link}
        to="/contact"
        sx={{ fontSize: 3, py: 2, variant: "styles.navlink" }}
      >
        CONTACT
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
