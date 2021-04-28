import { GetStaticProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'

import Meta from 'components/meta'
import { getAllPosts, Post } from 'lib/post'
import { Emoji } from 'components/emoji'

export const getStaticProps: GetStaticProps<{ allPosts: Post[] }> = async (ctx) => {
  const allPosts = getAllPosts(['title', 'date', 'slug'])
  const AllPostsSorted = allPosts.sort((a, b) =>
    new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : 1,
  )
  return {
    props: { allPosts: AllPostsSorted },
  }
}

export default function all({ allPosts }: { allPosts: Post[] }) {
  return (
    <main className="max-w-screen-md mx-auto p-6">
      <Head>
        <Meta
          title="blog do gregory"
          description="acho que é um blog"
          image={`/thumb.png`}
          path="/"
          cardType="summary_large_image"
        />
      </Head>
      <h1 className="text-xl font-semibold my-8">
        <Emoji label="rainbow" emoji="🌈" />
        <span className="mx-2">greg</span>
        <Emoji label="sparkles" emoji="✨" />
      </h1>
      <ul className="">
        {allPosts.map(({ slug, date, title }) => {
          return (
            <li key={slug} className="py-5">
              <Link href={`/${slug}`}>
                <a>
                  <div className="py-2">
                    <h2 className="text-lg font-medium text-accent1">{title}</h2>
                    {/* <div className="prose max-w-none">
                    <Component />
                  </div> */}
                  </div>
                </a>
              </Link>
              <time dateTime={date} className="text-accent2 text-md">
                {new Date(date).toLocaleString('pt-br', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
