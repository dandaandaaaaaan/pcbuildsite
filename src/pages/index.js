import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BuildViewer from "../templates/buildViewer"


const IndexPage = () => {
  return(
    <Layout>
      <SEO title="Home" />
      <h1>Brand New PC Configuration Tiers</h1>
      <BuildViewer></BuildViewer>
    </Layout>
  )
}

export default IndexPage
