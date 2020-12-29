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
          allMdx(filter: {frontmatter: {type: {eq: "home"}, visible: {eq: true}}}, sort: {fields: frontmatter___order}) {
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
    {data.allMdx.edges.map(item => <Collapsible trigger={item.node.frontmatter.title}>
      <MDXRenderer>{item.node.body}</MDXRenderer>
    </Collapsible>)}
    </MDXProvider>
    </div>
    )}
    />
  )
}
