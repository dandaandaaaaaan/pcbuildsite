import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Collapsible from 'react-collapsible';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = ({data}) => {
  //const {html, frontmatter} = data.allMarkdownRemark.edges[0].node;
  //const {html2, frontmatter2} = data.allMarkdownRemark.edges[1].node;
  return(
    <Layout>
      <SEO title="Home" />
      <h1>Brand New PC Configuration Tiers</h1>
      <Collapsible trigger={data.allMdx.edges[0].node.frontmatter.title}>
        <div className="collapsibleContent" dangerouslySetInnerHTML={{__html: data.allMdx.edges[0].node.excerpt}}></div>
      </Collapsible>
      <Collapsible trigger={data.allMdx.edges[1].node.frontmatter.title}>
        <div className="collapsibleContent" dangerouslySetInnerHTML={{__html: data.allMdx.edges[1].node.excerpt}}></div>
      </Collapsible>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    allMdx(filter: {frontmatter: {type: {eq: "home"}}}, sort: {fields: frontmatter___title}) {
      edges {
        node {
          excerpt
          frontmatter{
            title
          }
        }
      }
    }
  }
`

export default IndexPage
