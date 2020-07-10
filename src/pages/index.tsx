import * as React from "react"
import { Link, PageProps, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

interface IndexPageProps extends PageProps {
    data: {
        site: {
            siteMetadata: {
                title: string,
            }
        }
    }
}

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`
export default class IndexPage extends React.Component<IndexPageProps> {

    public render() {
        return (
            <Layout>
                <SEO title="Home" />
                <h1>Home of Qvirious Inventions!</h1>
                <p>Qvidahl Invent is my consulting company, where I deliver IT services such as workshops on specific topics, classes on specific technologies, custom software solutions and much more...</p>
                <p>Now let's create something great together!</p>
                <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>

                </div>
                <Link to="/page-2/">Go to page 2</Link> <br />
                <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
            </Layout>
        );
    }

}
