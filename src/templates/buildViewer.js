import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Collapsible from 'react-collapsible';


const shortcodes = { Link } // Provide common components here
export default function BuildViewer() {
  return (
    <StaticQuery
        query={graphql`
        query {
            allMdx(filter: {frontmatter: {type: {eq: "home"}}}, sort: {fields: frontmatter___order}) {
              edges {
                node {
                  id
                  body
                  frontmatter{
                    title
                  }
                }
              }
            }
          }
    `}
    render={ data => (
    <div className="BuildViewer">
    <MDXProvider components={shortcodes}>
    <Collapsible trigger={data.allMdx.edges[0].node.frontmatter.title}>
        <MDXRenderer>{data.allMdx.edges[0].node.body}</MDXRenderer>
    </Collapsible>
    <Collapsible trigger={data.allMdx.edges[1].node.frontmatter.title}>
        <MDXRenderer>{data.allMdx.edges[1].node.body}</MDXRenderer>
    </Collapsible>
    <Collapsible trigger={data.allMdx.edges[2].node.frontmatter.title}>
        <MDXRenderer>{data.allMdx.edges[2].node.body}</MDXRenderer>
    </Collapsible>
    </MDXProvider>
    </div>
    )}
    />
  )
}
