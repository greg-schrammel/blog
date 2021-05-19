import { GetStaticProps } from 'next'
import Link from 'next/link'

import Meta from 'components/meta'
import { getAllPosts, Post } from 'lib/post'
import { generateRSSFeed } from 'lib/rss'
import { Emoji } from 'components/emoji'

export const getStaticProps: GetStaticProps<{ allPosts: Post[] }> = async (ctx) => {
  const allPosts = getAllPosts(['title', 'date', 'slug'])
  const allPostsSorted = allPosts.sort((a, b) =>
    new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : 1,
  )

  generateRSSFeed()

  return {
    props: { allPosts: allPostsSorted },
  }
}

export default function All({ allPosts }: { allPosts: Post[] }) {
  return (
    <main className="max-w-screen-md mx-auto px-6 py-14">
      <Meta
        title="blog do gregory"
        description="eu escrevo algo aleatório todos os dias"
        image={`/thumb.png`}
        path="/"
        cardType="summary_large_image"
      />
      <h1 className="text-xl font-semibold mb-8">
        <Emoji label="rainbow" emoji="🌈" />
        <span className="mx-2">greg</span>
        <Emoji label="sparkles" emoji="✨" />
      </h1>
      <ul className="">
        {allPosts.map(({ slug, date, title }) => {
          return (
            <li key={slug} className="py-5">
              <Link href={`/${slug}`} passHref>
                <a>
                  <div className="flex flex-col">
                    <h1 className="py-1 text-lg font-semibold text-accent1">{title}</h1>
                    <time dateTime={date} className="text-accent2 text-md">
                      {new Date(date).toLocaleString('pt-br', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                  </div>
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
