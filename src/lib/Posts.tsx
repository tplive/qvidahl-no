// Copyright 2021 The Authors. Subject to the MIT license.
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'posts')

export function GetSortedPostsData() {
    // Get filnames under /posts
    const fileNames = fs.readdirSync(postsDir)
    const allPostsData = fileNames.map(fileName => {
        // Remove .md from filename to get id
        const id = fileName.replace(/\.md$/, '')

        // Read markdown
        const fullPath = path.join(postsDir, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use graymatter to parse post metadata
        const matterResult = matter(fileContents)

        // Combine data with id
        return {
            id,
            ...matterResult.data
        }
    })
    // // Sort posts by date
    // return allPostsData.sort(({ date: a }, { date: b }) => {
    //     if (a < b) {
    //         return 1
    //     } else if (a > b) {
    //         return -1
    //     } else {
    //         return 0
    //     }
    // })
    return allPostsData
}