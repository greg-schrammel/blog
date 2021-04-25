import 'css/tailwind.css'
import React from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <main className="antialized">
      <Head>
        <meta name="theme-color" content="#000" />
      </Head>
      <Component {...pageProps} />
    </main>
  )
}
