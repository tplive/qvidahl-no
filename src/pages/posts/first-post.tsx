// Copyright 2021 The Authors. Subject to the MIT license.
import Link from 'next/link'
import Head from 'next/head'
import BlogPost from '../../components/BlogPost'

export default function FirstPost() {
    return (
        <BlogPost home={false} title="BlogPost title for First Post">
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First post!</h1>
            <h2><Link href="/blog"><a>Return</a></Link></h2>
        </BlogPost>
    )
}