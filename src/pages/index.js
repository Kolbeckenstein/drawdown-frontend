import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>This is some additional content</p>
    <p>This should also appear if deploy automation works.</p>
    <p>If integration works, data should appear below: </p>
    {data.allStrapiSolution.edges.map(document => (
      <div>
        <h3>{document.node.Number}: {document.node.Name}</h3>
        <p>{document.node.Description}</p>
      </div>
    ))}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiSolution {
      edges {
        node {
          Name
          Number
          Description
        }
      }
    }
  }
`

// export const pageQuery = graphql`
//   query IndexQuery {
//     strapiSolution {
//       Name
//     }
//   }
// `
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