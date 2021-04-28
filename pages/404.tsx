import Link from 'next/link'
import Head from 'next/head'

import Meta from 'components/meta'
import { Emoji } from 'components/emoji'

export default function all() {
  return (
    <main className="max-w-screen-md mx-auto flex flex-col justify-center items-center">
      <Head>
        <Meta title="404" description="não é uma pagina" path="" image="/" />
      </Head>
      <Link href="/">
        <a className="text-xl font-semibold mt-20 mb-8">
          <Emoji label="rainbow" emoji="🌈" />
          <span className="mx-2">greg</span>
          <Emoji label="sparkles" emoji="✨" />
        </a>
      </Link>
      <p>Pagina não encontrada</p>
    </main>
  )
}
