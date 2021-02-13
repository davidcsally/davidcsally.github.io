// eslint-disable-next-line object-curly-newline
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import GA from '../src/scripts/googleAnalytics'
import fonts from '../src/styles/fonts'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />

          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-116662867-1"
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: GA }}
          />
          <style dangerouslySetInnerHTML={{ __html: fonts }} />
        </body>
      </Html>
    )
  }
}
