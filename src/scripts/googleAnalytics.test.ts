import googleAnalytics from './googleAnalytics'

// Like most snapshot tests, this is pretty much pointless, but
// if we had a method with a few different strings it could be useful-
// maybe for something like head tag titles and descriptions.
describe('googleAnalytics', () => {
  it('matches the snapshot', () => {
    expect(googleAnalytics).toMatchInlineSnapshot(`
      "
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-116662867-1');
      "
    `)
  })
})
