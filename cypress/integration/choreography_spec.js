describe('the cookie bar and chatbot are properly choreographed', () => {
  before(() => {
    cy.visit('/')
  })

  context('on a users first visit', () => {
    it('displays the cookie banner after the page has loaded', () => {
      cy.get('[data-testid="cookie-bar"]').should('be.visible')
    })

    it('does not show the chatbot', () => {
      cy.get('[data-testid="chatbot"]').should('not.exist')
    })

    it('displays the cookie banner after the page has loaded', () => {
      cy.get('[data-testid="cookie-bar"]').should('be.visible')
    })

    it('closes the cookie bar after accepting', () => {
      cy.get('[data-testid="cookie-bar"]').within(() => {
        cy.get('button').click()
      })
      cy.get('[data-testid="cookie-bar"]').should('not.exist')
    })

    it('opens the chatbot after the cookie bar has been closed', () => {
      cy.get('[data-testid="chatbot"]', { timeout: 10000 }).should('be.visible')
    })
  })
})
