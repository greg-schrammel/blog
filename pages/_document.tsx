import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link
            rel="preload"
            href="/fonts/CircularStd-Black.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link href="/fonts.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
