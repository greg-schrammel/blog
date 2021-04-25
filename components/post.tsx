import Head from 'next/head'
import { useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'

export const mdxComponents = {
  pre: ({ className, ...props }) => (
    <pre className={`${className} rounded-md bg-card py-3 px-4 overflow-x-auto`} {...props} />
  ),
  'pre.code': ({ className, ...props }) => (
    <code className={`${className} text-gray-200`} {...props} />
  ),
}

const url = process.env.URL
const twitterHandle = '@O_Super_Gregory'

export default function Post({ children, meta }) {
  const router = useRouter()
  return (
    <article className="max-w-screen-md mx-auto px-6">
      <Head>
        <title>greg</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="twitter:site" content={twitterHandle} />
        <meta name="twitter:creator" content={twitterHandle} />
        <meta name="twitter:card" content={'summary'} />
        <meta name="twitter:image" content={meta.image || `${url}/favicon.png`} />
        <meta name="og:title" content={meta.title} />
        {meta.description && <meta name="og:description" content={meta.description} />}
        <meta property="og:image" content={`${url}/favicon.png`} />
        <meta property="og:url" content={`${url}/${router.pathname}`} />
        <meta property="og:type" content="article" />
      </Head>
      <div className="py-12">
        {/* <h1 className="text-xl text-white font-bold"></h1> */}
        <div className="prose max-w-none mt-6 md:mt-10 pb-8">
          <MDXProvider components={mdxComponents}>{children}</MDXProvider>
        </div>
        <time className="text-sm text-accent2" dateTime={meta.date}>
          {meta.date}
        </time>
      </div>
    </article>
  )
}
