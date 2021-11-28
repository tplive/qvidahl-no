import * as React from 'react'
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo'

interface AboutPageProps {
    data: {
        site: {
            siteMetadata: {
                title: string,
            }
        }
    }
}

export default class AboutPage extends React.Component<AboutPageProps> {

    public render() {
        return (
            <Layout>
                <SEO title="About" />
                <h1>About Qvidahl Invent</h1>
                <h2>and me...</h2>
                <p>This is where I brag shamelessly about my achievements. More on that if/when they happen.</p>
                <p>I'm <a href="https://twitter.com/qvidahl" target="_blank">@qvidahl</a> on Twitter</p>
            </Layout>
        );
    }

}

