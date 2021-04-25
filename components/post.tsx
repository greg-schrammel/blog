import { useRouter } from 'next/router'
import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react'
import Meta from 'components/meta'

export const mdxComponents = {
  pre: ({ className, ...props }) => (
    <pre className={`${className} rounded-md bg-card py-3 px-4 overflow-x-auto`} {...props} />
  ),
  'pre.code': ({ className, ...props }) => (
    <code className={`${className} text-gray-200`} {...props} />
  ),
}

export default function Post({ children, meta }) {
  const date = new Date(meta.date).toLocaleString('pt-br', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
  const router = useRouter()
  return (
    <article className="max-w-screen-md mx-auto px-6">
      <Head>
        <Meta
          title={meta.title}
          description={meta.description}
          image={meta.image}
          path={router.pathname}
        />
      </Head>
      <div className="py-12">
        {/* <h1 className="text-xl text-white font-bold"></h1> */}
        <div className="prose max-w-none mt-6 md:mt-10 pb-8">
          <MDXProvider components={mdxComponents}>{children}</MDXProvider>
        </div>
        <time className="text-sm text-accent2" dateTime={meta.date}>
          {date}
        </time>
      </div>
    </article>
  )
}
