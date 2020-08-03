import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Brand New PC Configuration Tiers</h1>
    <table>
      <thead>
      </thead>
      <tbody>
        <tr>
          <td>test cell</td>
          <td>test 2</td>
          <td>asdas</td>
          <td>asdas</td>
          <td>asdas</td>
          <td>asdas</td>
          <td>asdas</td>
          <td>asdas</td>
          <td>asdas</td>
          <td>asdas</td>
        </tr>
      </tbody>
    </table>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage