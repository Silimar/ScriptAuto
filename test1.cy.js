describe('Authentification', () => {

  beforeEach(() => {

    cy.visit('https://www.backmarket.fr/')
    cy.get('button[data-qa="accept-cta"]').click()

  })

  it('Authentification échouée', () => {
    cy.get('a[data-test="icon-avatar"]').click()
    cy.get('input[id="signin-email"]').type('blablabla@blabla.bla')
    cy.get('input[id="signin-password"]').type('blablabla')

    cy.get('button[data-qa="signin-submit-button"]').click()

    cy.get('p[class="text-red-700 mt-4 body-2-light"]').should("be.visible")
  })

})