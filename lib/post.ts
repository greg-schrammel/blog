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

export function getPostBySlug(slug, wantedFields = []): Post {
  const fullPath = join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  if (!data.date) return

  return wantedFields.reduce((r, field) => {
    if (field === 'content') r[field] = content
    if (field === 'slug') r[field] = slug
    if (data[field]) r[field] = data[field]
    return r
  }, {})
}

export function getAllPosts(wantedFields = []): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs.map((slug) => getPostBySlug(slug, wantedFields))
  return posts
}
