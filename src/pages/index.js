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
<<<<<<< HEAD
    <p>This should also appear if automation works.</p>
    <p>Some data:</p>
=======
    <p>This should also appear if deploy automation works.</p>
    <p>If integration works, data should appear below: </p>
    {data.allStrapiSolution.edges.map(document => (
      <div>
        <h3>{document.node.Number}: {document.node.Name}</h3>
        <p>{document.node.Description}</p>
      </div>
    ))}
>>>>>>> f69b12f78de48fbb2e710f2833244b27e99a78e3
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

<<<<<<< HEAD
//     allStrapiSolution {
//       edges {
//         node {
//           Name
//         }
//       }
//     }
//   }
// `
=======
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
>>>>>>> f69b12f78de48fbb2e710f2833244b27e99a78e3

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