import * as React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page deux" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <a href="/">Go back to the homepage</a>
  </Layout>
)

export default SecondPage
