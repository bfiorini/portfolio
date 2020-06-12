/** @jsx jsx */
import { Box, Button, jsx, Label, Input, Textarea } from "theme-ui"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Box
      as="form"
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
      action="/contact-success"
      sx={{ maxWidth: ["640px"] }}
    >
      <input type="hidden" name="bot-field" />
      <Label htmlFor="name">Nom</Label>
      <Input type="text" name="name" id="name" required />
      <Label htmlFor="email">Email</Label>
      <Input type="email" name="email" id="email" required />
      <Label htmlFor="subject">Sujet</Label>
      <Input type="text" name="subject" id="subject" required />
      <Label htmlFor="message">Message</Label>
      <Textarea name="message" id="message" rows="5" required />
      <br />
      <Button
        type="submit"
        sx={{
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "secondary",
          },
        }}
      >
        Envoyer
      </Button>
    </Box>
  </Layout>
)

export default ContactPage
