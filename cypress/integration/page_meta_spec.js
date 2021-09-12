describe('the page is working correctly', () => {
  it('responds with a 200 status code', () => {
    cy.request({
      url: '/',
    }).then((res) => {
      expect(res.status).to.eq(200)
    })
  })
})
