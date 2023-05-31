/// <reference types="cypress" />

describe("Comparaison de prix", () => {

    beforeEach(() => {
        cy.visit('/')
        cy.get('button#didomi-notice-agree-button').click()
    })

    it('Comparaison de prix', () => {

        //Afficher les produits "Homme"
        cy.get('a[href="https://www.decathlon.fr/browse/c0-homme/_/N-1qu1ue2?opeco=opeco:HP_MENU_homme&type=opeco"]').click()

        //Selection du resultat "Sauce Labs Fleece Jacket"
        cy.get('div[role="listitem"]').eq(4).click()
    })
})