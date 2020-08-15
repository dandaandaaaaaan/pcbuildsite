import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Collapsible from 'react-collapsible';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = ({data}) => {
  const {html, frontmatter} = data.allMarkdownRemark.edges[0].node;
  const {html2, frontmatter2} = data.allMarkdownRemark.edges[1].node;
  return(
    <Layout>
      <SEO title="Home" />
      <h1>Brand New PC Configuration Tiers</h1>
      <Collapsible trigger={frontmatter.title}>
        <div dangerouslySetInnerHTML={{__html: html}}></div>
      </Collapsible>
      <Collapsible trigger={data.allMarkdownRemark.edges[1].node.frontmatter.title}>
        <div dangerouslySetInnerHTML={{__html: data.allMarkdownRemark.edges[1].node.html}}></div>
      </Collapsible>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "home"}}}, sort: {fields: frontmatter___title}) {
      edges {
        node {
          html
          frontmatter{
            title
          }
        }
      }
    }
  }
`

export default IndexPage
