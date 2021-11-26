import * as React from 'react';
import { Link, PageProps, graphql } from "gatsby";

import Layout from '../components/layout';
import SEO from '../components/seo';


interface BlogPageProps extends PageProps {
    data: {
        site: {
            siteMetadata: {
                title: string,
            }
        }
    }
}

export const pageQuery = graphql`
    query BlogQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`

export default class BlogPage extends React.Component<BlogPageProps> {

    public render() {
        return (
            <Layout>
                <SEO title="Blog" />
                <h1>My Weblog</h1>
                <h2>...yes that's what they were before they were 'blogs'..</h2>
                <p>This will be a qvirious collection of articles and posts written by myself, over the years, collected from all the other stale blogs I have strewn around the Internets.</p>
                
                <Link to="/page-2/">Go to page 2</Link> <br />
                <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
            </Layout>
        );
    }

}

