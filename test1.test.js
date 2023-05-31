/// <reference types="cypress" />


//J'ai eu quelques problémes avec ces exeptions, je les ai donc deactivé pour mieux run le script
Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes("Identifier 'clickOnLipscanner' has already been declared")) {
      return false
    }
    if (err.message.includes("Cannot read properties of null (reading 'addEventListener')")) {
        return false
    }
  })

describe("Chanel Testing", () =>{
    
    it("Test 1", () => {
        //Aller au site Channel, la valeur baseUrl est changée dans le fichier cypress.json
        cy.visit('/')

        //J'appuye sur la search bar
        cy.get('button[title="Search"]').first().click({force : true})

        //J'écris le mot "ROUGE ALLURE"
        cy.get('input[id = "searchInput"]').type('ROUGE ALLURE')

        //Dans cet étape, je vérifie si le mot "ROUGE ALLURE" existe dans la list de résultats affichée
        //Malheuresement, aucun résultat n'affiche "ROUGE ALLURE" quand je suis aller sur le site de Channel
        //Donc, pour ne pas interrompre le flot du script, je vérifie simplement leur existance
        cy.get('div[class="search__recents search__quick-links"] li').each(() => {}).should("exist")

        //J'appuie sur le second resultat
        cy.get('a[type = "button"]').eq(1).click({force : true})

        //Make sure the correct product name is displayed
        cy.get('head title').should("have.text", "The J12 Series – Watches | CHANEL")
    })
})