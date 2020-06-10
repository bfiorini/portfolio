import { Link } from "theme-ui"
import React from "react"

const Footer = () => (
  <footer>
    © {new Date().getFullYear()}, Built with
    {` `}
    <Link href="https://www.gatsbyjs.org">Gatsby</Link>
  </footer>
)

Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
