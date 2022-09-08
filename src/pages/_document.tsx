import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ReactElement } from 'react'

class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="pt-BR" dir="ltr">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge,chrome=1" />
          <meta name="author" content="pr333do" />
          <meta name="theme-color" content="#1e242a" />
          {/* <link rel="shortcut icon" href="miscellaneous/favicon.ico" /> */}
          {/* <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="miscellaneous/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="miscellaneous/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="miscellaneous/favicon-16x16.png"
          />
          <link rel="manifest" href="miscellaneous/site.webmanifest" /> */}

          <link
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
