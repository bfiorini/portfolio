import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Galleries from "../components/galleries"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Galleries />
  </Layout>
)

export default IndexPage
