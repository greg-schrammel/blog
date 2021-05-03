import 'css/tailwind.css'
import 'css/code-highlight.css'
import React from 'react'

export default function App({ Component, pageProps }) {
  return (
    <main className="antialized">
      <Component {...pageProps} />
    </main>
  )
}
