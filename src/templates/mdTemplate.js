import React from "react"
import Layout from "../components/layout"
import { graphql, StaticQuery } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"

const shortcodes = { Link } // Provide common components here
export default function MdTemplate() {
  return (
    <StaticQuery
      query={graphql`
      query ($slug: String) {
        mdx(slug: { eq: $slug }, frontmatter: {type: { eq: "page" }}) {
          id
          body
          frontmatter {
            title
          }
        }
      }
`}
render={ data => (
    <Layout>
    <div>
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MDXProvider>
    </div>
    </Layout>
  )}
  />
  )
}