import Link from 'next/link'
import Head from 'next/head'

import Meta from 'components/meta'
import getAllPostPreviews from 'lib/getAllPosts'

const posts = getAllPostPreviews()

export default function all() {
  return (
    <main className="max-w-screen-md mx-auto px-6">
      <Head>
        <Meta
          title="blog do gregory"
          description="acho que é um blog"
          image={`/thumb.png`}
          path=""
          largeImage
        />
      </Head>
      <h1 className="text-lg font-bold mt-20 mb-8">gregs</h1>
      <ul className="">
        {posts.map(({ link, module: { default: Component, meta } }) => {
          return (
            <li key={link} className="py-6">
              <Link href={link}>
                <a>
                  <div className="py-2">
                    <h2 className="text-xl font-medium text-accent1">{meta.title}</h2>
                    {/* <div className="prose max-w-none">
                    <Component />
                  </div> */}
                  </div>
                </a>
              </Link>
              <time dateTime={meta.date}>
                {new Date(meta.date).toLocaleString('pt-br', {
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
