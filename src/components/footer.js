/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"
import PropTypes from "prop-types"

const SocialListItem = ({ link, icon }) => {
  return (
    <li sx={{ display: "inline", mr: 2 }}>
      <Link href={link}>
        <FontAwesomeIcon
          icon={icon}
          size="lg"
          sx={{
            color: "muted",
            "&:hover": {
              color: "primary",
            },
          }}
        />
      </Link>
    </li>
  )
}

SocialListItem.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.any,
}

const Footer = () => (
  <footer sx={{ mt: 5 }}>
    <ul sx={{ m: 0, p: 0 }}>
      <SocialListItem
        link="https://www.instagram.com/cabrisexplorateurs/"
        icon={faInstagram}
      />
      <SocialListItem
        link="https://www.instagram.com/cabrisexplorateurs/"
        icon={faFacebookF}
      />
    </ul>
  </footer>
)

Footer.propTypes = {}

export default Footer
