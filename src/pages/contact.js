/** @jsx jsx */
import { Box, Button, Field, jsx, Label, Textarea } from "theme-ui"
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
      <Field label="Nom" name="name" id="name" type="text" required />
      <Field label="Email" name="email" id="email" type="email" required />
      <Field label="Sujet" name="subject" id="subject" type="text" required />
      <Label htmlFor="message">Message</Label>
      <Textarea name="message" id="message" rows={5} required />
      <br />
      <Button type="submit">Envoyer</Button>
    </Box>
  </Layout>
)

export default ContactPage
