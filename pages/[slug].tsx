import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Link from 'next/link'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import prism from 'remark-prism'

import { getAllPosts, getPostBySlug } from 'lib/post'
import Meta from 'components/meta'
import { Emoji } from 'components/emoji'
import { Audio } from 'components/audio'
import { Greg } from 'components/🌈greg✨'

const components = {
  // pre: (props) => <pre {...props} className="border-none" />,
  Audio,
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'image', 'content'])
  const content = await renderToString(post.content, {
    components,
    mdxOptions: { remarkPlugins: [prism] },
  })
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
      <Meta
        title={title}
        image={image}
        cardType={image ? 'summary_large_image' : 'summary'}
        path={router.pathname}
      />
      <Greg />
      <div className="py-6">
        {/* <h1 className="text-xl text-white font-bold"></h1> */}
        <div className="prose max-w-none mt-6 md:mt-10 pb-8">{hydratedContent}</div>
        <time className="text-sm text-gray-500" dateTime={date}>
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
