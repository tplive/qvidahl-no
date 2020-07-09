import * as React from 'react';
import { Link, PageProps, graphql } from "gatsby";

import Layout from '../components/layout';
import SEO from '../components/seo';


interface AboutPageProps extends PageProps {
    data: {
        site: {
            siteMetadata: {
                title: string,
            }
        }
    }
}

export const pageQuery = graphql`
    query AboutQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`

export default class AboutPage extends React.Component<AboutPageProps> {

    public render() {
        return (
            <Layout>
                <SEO title="About" />
                <h1>About Qvidahl Invent</h1>
                <h2>and me...</h2>
                <p>This is where I brag shamelessly about my achievements. More on that.</p>
                <p>I'm <a href="https://twitter.com/qvidahl" target="_blank">@qvidahl</a> on Twitter</p>
                
                <Link to="/page-2/">Go to page 2</Link> <br />
                <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
            </Layout>
        );
    }

}

