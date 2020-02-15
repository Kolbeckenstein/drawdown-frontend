import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>This is some additional content</p>
    <p>This should also appear if automation works.</p>
    <p>Some data:</p>
    <p>{data}</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    strapiSolution {
    }
  }
`
// export const pageQuery = graphql`
//   query IndexQuery {
//     strapiSolution {
//       id
//       Name
//       Number
//       Description
//     }
//   }
// `