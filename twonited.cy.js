/// <reference types="cypress" />

describe('Younited Test Suite', () => {

    beforeEach(() => {
      cy.visit('/')
      cy.get('button[id = "didomi-notice-agree-button"]').click()
    })
    
    it('Test Profil 1', () => {
      
      //Page 1 --------------------------------------------------
      //Page d'Email
      cy.url().should("equal", "https://fr-simulation.younited-credit.com/email")
      cy.title().should("equal", "Younited Credit")
  
      //Entrez email et Continuer
      cy.get('input[data-di-id = "#email-input"]').type("email@email.com")
      cy.get('button[data-test = "navigator-compact-forward"]').click({force : true})
  
      //Page 2 --------------------------------------------------
      //Page Situation Familliale
      cy.url().should("equal", "https://fr-simulation.younited-credit.com/familysituation")
      cy.title().should("equal", "Younited Credit")
  
      //Entrez les informations et Continuer
      cy.get('select[data-di-field-id = "maritalStatus"]').select(0)
      cy.get('select[data-di-field-id = "childNumberPropal"]').select(0)
      cy.get('input[id = "yucSelectAllOptins-input"]').check({force : true})
      cy.get('input[id = "yucOptin-input"]').uncheck({force : true})
      cy.get('button[data-test = "navigator-compact-forward"]').click(X )
  
      //Page 3 --------------------------------------------------
      //Page Logement
      cy.url().should("equal", "https://fr-simulation.younited-credit.com/housing")
      cy.title().should("equal", "Younited Credit")
  
      //Entrez les informations et Continuer
      cy.get('select[id = "housingStatus-input"]').select(0)
      cy.get('input[data-di-id = "#housingStatusFrom-input-month"]').type("01")
      cy.get('input[data-di-id = "#housingStatusFrom-input-year"]').type("2001")
  
      //Page 4 --------------------------------------------------
      //Page Emploi
      cy.url().should("equal", "https://fr-simulation.younited-credit.com/professionalsituation")
      cy.title().should("equal", "Younited Credit")
  
      //Selection de l'option "Locataire", inserez lels dates et Continuer
      cy.get('select[data-di-field-id = "professionalSituation"]').select(0)
      //On choisie CDI
      cy.get('select[data-di-field-id = "professionalSituation"]').select(3)
  
      //Page 5 --------------------------------------------------
      //Page Situation Professionelle
      cy.url().should("equal", "")
      cy.title().should("equal", "Younited Credit")
  
      //Select de la situation professionelle
      
  
      //Page 6 --------------------------------------------------
      //Page Identité
      cy.url().should("equal", "")
      cy.title().should("equal", "Younited Credit")
  
      //Selection Nom / Prenom
      
  
      //Page 7 --------------------------------------------------
      //Page Lieu de naissance
      cy.url().should("equal", "")
      cy.title().should("equal", "Younited Credit")
  
      //Entree des donnée de la date de naissance
      
  
      //Page 8 --------------------------------------------------
      //Page Telephone
      cy.url().should("equal", "https://cla-younited-fr.services.younited-credit.com/steps/contact/(cellphone//secondary:cellphone)")
      cy.title().should("equal", "Younited Credit")
  
      //Entree du numero de telephone
      
  
      //Page 9 --------------------------------------------------
      //Page Adresse
      cy.url().should("equal", "https://cla-younited-fr.services.younited-credit.com/steps/contact/address")
      cy.title().should("equal", "Younited Credit")
  
      //Entree de l'adresse
      
  
      //Page 10 --------------------------------------------------
      //Page Confirmation
      cy.url().should("equal", "https://cla-younited-fr.services.younited-credit.com/steps/open-banking/(open-banking-summary//secondary:open-banking-summary)")
      cy.title().should("equal", "Younited Credit")
  
      //Clicker sur le bouton continuer
      cy.get('button[data-di-id = "di-id-e5c7624f-f4cce29c"]').click()
  
      //Page 11 --------------------------------------------------
      //Page Banque
      cy.url().should("equal", "https://cla-younited-fr.services.younited-credit.com/steps/open-banking/institution-choice")
      cy.title().should("equal", "Younited Credit")
    })
})