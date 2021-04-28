import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Link from 'next/link'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import { getAllPosts, getPostBySlug } from 'lib/post'
import Meta from 'components/meta'
import { Emoji } from 'components/emoji'

export const components = {
  // pre: ({ className, ...props }) => (
  //   <pre className={`${className} rounded-md bg-card py-3 px-4 overflow-x-auto`} {...props} />
  // ),
  // 'pre.code': ({ className, ...props }) => (
  //   <code className={`${className} text-gray-200`} {...props} />
  // ),
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'image', 'content'])
  const content = await renderToString(post.content, { components })
  return {
    props: {
      ...post,
      content,
    },
  }
}

export default function Post({ title, date, slug, image, content }) {
  const router = useRouter()
  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />
  }
  const hydratedContent = hydrate(content, { components })
  return (
    <article className="max-w-screen-md mx-auto p-6">
      <Head>
        <Meta title={title} image={image} cardType="summary" path={router.pathname} />
      </Head>
      <Link href="/">
        <a className="text-md font-semibold text-accent2">
          <Emoji label="rainbow" emoji="🌈" />
          <span className="mx-2">greg</span>
          <Emoji label="sparkles" emoji="✨" />
        </a>
      </Link>
      <div className="py-6">
        {/* <h1 className="text-xl text-white font-bold"></h1> */}
        <div className="prose max-w-none mt-6 md:mt-10 pb-8">{hydratedContent}</div>
        <time className="text-sm text-accent2" dateTime={date}>
          {new Date(date).toLocaleString('pt-br', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </time>
      </div>
    </article>
  )
}
