import 'css/tailwind.css'
import 'css/code-highlight.css'

import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} font-sans antialized`}>
      <Component {...pageProps} />
    </main>
  )
}
