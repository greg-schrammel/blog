import { GetStaticProps } from 'next'
import Link from 'next/link'

import Meta from 'components/meta'
import { getAllPosts, Post } from 'lib/post'
import { generateRSSFeed } from 'lib/rss'
import { Emoji } from 'components/emoji'
import { Greg } from 'components/🌈greg✨'

export const getStaticProps: GetStaticProps<{ allPosts: Post[] }> = async (ctx) => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'tags'])
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
    <main className="max-w-screen-md mx-auto p-6">
      <Meta
        title="blog do gregory"
        description="eu escrevo algo aleatório todos os dias"
        image={`/thumb.png`}
        path="/"
        cardType="summary_large_image"
      />

      <Greg />
      <ul className="my-12">
        {allPosts.map(({ slug, date, title }) => {
          return (
            <li key={slug} className="rounded-xl my-6 cursor-pointer hover:opacity-60 w-auto">
              <Link href={`/${slug}`} passHref>
                <a>
                  <div className="flex flex-col">
                    <h1 className="mb-1 text-regular font-semibold text-accent1">{title}</h1>
                    <time dateTime={date} className=" text-gray-500 text-sm">
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
