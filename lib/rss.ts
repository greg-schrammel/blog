import fs from 'fs'
import { Feed } from 'feed'
import { getAllPosts } from 'lib/post'
import renderToString from 'next-mdx-remote/render-to-string'

const siteUrl = process.env.URL

const author = {
  name: 'greg',
  link: 'https://twitter.com/@___gregs',
}

const feed = new Feed({
  title: 'greg',
  description: `I write about code sometimes`,
  id: siteUrl,
  link: siteUrl,
  language: 'pt-br',
  // image: `${siteUrl}/favicon.png`,
  favicon: `${siteUrl}/favicon.png`,
  copyright: 'nop',
  feedLinks: {
    rss: `${siteUrl}/feed.xml`,
    json: `${siteUrl}/feed.json`,
    atom: `${siteUrl}/atom.xml`,
  },
  author,
})

export const generateRSSFeed = async () => {
  if (process.env.NODE_ENV === 'development') return
  const allPosts = getAllPosts(['title', 'date', 'slug', 'image', 'content'])

  await Promise.all(
    allPosts.map(async (post) => {
      const contentSource = await renderToString(post.content)
      const content = await contentSource.renderedOutput
      feed.addItem({
        title: post.title,
        id: post.slug,
        link: `${siteUrl}/${post.slug}`,
        description: post.description,
        content,
        author: [author],
        date: new Date(post.date),
        image: post.image ? siteUrl + post.image : siteUrl + '/favicon.png',
      })
    }),
  )

  fs.writeFileSync('./public/feed.xml', feed.rss2())
  fs.writeFileSync('./public/atom.xml', feed.atom1())
  fs.writeFileSync('./public/feed.json', feed.json1())
}
