// function importAll(r) {
//   return r.keys().map((fileName) => ({
//     link: fileName.substr(1).replace(/\.mdx$|\/index\.mdx$/, ''),
//     module: r(fileName),
//   }))
// }

// const sortPosts = (a, b) =>
//   new Date(a.module.meta.date).getTime() > new Date(b.module.meta.date).getTime() ? -1 : 1

// export default function getAllPostPreviews() {
//   return importAll(require.context('pages/?preview', true, /\.mdx$/)).sort(sortPosts)
// }

import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'posts')

export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .map((fileName) => fileName.replace(/\.mdx$|\/index\.mdx$/, ''))
}

export type Post = {
  slug: string
  date: string
  title: string
  description: string
  image: string
  content: string
}

export function getPostBySlug(slug, fields = []): Post {
  const fullPath = join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return fields.reduce((r, field) => {
    if (field === 'content') r[field] = content
    if (field === 'slug') r[field] = slug
    if (data[field]) r[field] = data[field]
    return r
  }, {})
}

export function getAllPosts(fields = []): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs.map((slug) => getPostBySlug(slug, fields))
  return posts
}
