import * as React from 'react'
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo'

interface BlogPageProps {
    data: {
        site: {
            siteMetadata: {
                title: string,
            }
        }
    }
}

export default class BlogPage extends React.Component<BlogPageProps> {

    public render() {
        return (
            <Layout>
                <SEO title="Blog" />
                <h1>My Weblog</h1>
                <h2>...yes that's what they were before they were 'blogs'..</h2>
                <p>
                    This will be a qvirious collection of articles and posts written by myself,
                    over the years, collected from all the other stale blogs I
                    have strewn around the Internets.
                </p>
                <a href="/page-2/">Go to page 2</a> <br />
            </Layout>
        );
    }

}

