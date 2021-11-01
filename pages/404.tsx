import Link from 'next/link'
import Head from 'next/head'

import Meta from 'components/meta'
import { Emoji } from 'components/emoji'
import { Greg } from 'components/🌈greg✨'

export default function all() {
  return (
    <div className="max-w-screen-md mx-auto flex flex-col justify-center items-center min-h-screen pb-24">
      <Head>
        <Meta title="404" description="not even a page" path="" image="/" />
      </Head>
      <Greg size={24} className="mb-4" />
      <p>that's the wrong url lol</p>
    </div>
  )
}
