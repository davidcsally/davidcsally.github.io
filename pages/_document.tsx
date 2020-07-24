import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
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
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-116662867-1" />
          <script dangerouslySetInnerHTML={{
            __html:
              `
                window.dataLayer = window.dataLayer || [];
                function gtag() { dataLayer.push(arguments); }
                gtag('js', new Date());

                gtag('config', 'UA-116662867-1');
              `
          }} />

          <script type="text/javascript" dangerouslySetInnerHTML={{
            __html:
              `
                (function (e, t) {
                  var n = e.amplitude || { _q: [], _iq: {} }; var r = t.createElement("script")
                    ; r.type = "text/javascript"; r.async = true
                    ; r.src = "https://cdn.amplitude.com/libs/amplitude-4.1.0-min.gz.js"
                    ; r.onload = function () {
                      if (e.amplitude.runQueuedFunctions) {
                        e.amplitude.runQueuedFunctions()
                      } else {
                        console.log("[Amplitude] Error: could not load SDK")
                      }
                    }
                    ; var i = t.getElementsByTagName("script")[0]; i.parentNode.insertBefore(r, i)
                    ; function s(e, t) {
                      e.prototype[t] = function () {
                        this._q.push([t].concat(Array.prototype.slice.call(arguments, 0))); return this
                      }
                    }
                  var o = function () { this._q = []; return this }
                    ; var a = ["add", "append", "clearAll", "prepend", "set", "setOnce", "unset"]
                    ; for (var u = 0; u < a.length; u++) { s(o, a[u]) } n.Identify = o; var c = function () {
                      this._q = []
                        ; return this
                    }
                    ; var l = ["setProductId", "setQuantity", "setPrice", "setRevenueType", "setEventProperties"]
                    ; for (var p = 0; p < l.length; p++) { s(c, l[p]) } n.Revenue = c
                    ; var d = ["init", "logEvent", "logRevenue", "setUserId", "setUserProperties", "setOptOut", "setVersionName", "setDomain", "setDeviceId", "setGlobalUserProperties", "identify", "clearUserProperties", "setGroup", "logRevenueV2", "regenerateDeviceId", "logEventWithTimestamp", "logEventWithGroups", "setSessionId"]
                    ; function v(e) {
                      function t(t) {
                        e[t] = function () {
                          e._q.push([t].concat(Array.prototype.slice.call(arguments, 0)))
                        }
                      }
                      for (var n = 0; n < d.length; n++) { t(d[n]) }
                    } v(n); n.getInstance = function (e) {
                      e = (!e || e.length === 0 ? "$default_instance" : e).toLowerCase()
                        ; if (!n._iq.hasOwnProperty(e)) { n._iq[e] = { _q: [] }; v(n._iq[e]) } return n._iq[e]
                    }
                    ; e.amplitude = n
                })(window, document);

                amplitude.getInstance().init("b0c1ca8fd4242b8efd53126145e19d4d");
              `
          }} />
          <noscript>You need to enable JavaScript to run this app. I promise it's ok</noscript>
        </body>
      </Html>
    )
  }
}

export default MyDocument
