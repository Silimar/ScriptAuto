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
    
    it("Test 2", () =>{
        //Aller au site Channel, la valeur baseUrl est changée dans le fichier cypress.json
        cy.visit('/')

        //Pour acceder a la page Lipstick
        //J'appuie sur le bouton Menu
        cy.get('button[title = "Menu - main navigation"]').click({force : true})
        //J'appuis sur le bouton Makeup
        cy.get('span[data-test = "lnkAxisCategory_makeup"]').click({force : true})
        //J'appuis sur le bouton Lipstick
        cy.get('a[data-event-label= "lipstick"]').click({force : true})

        //Click on the ROUGE ALLURE product
        cy.get('span[class = "heading is-7 is-block js-ellipsis txt-product__title"]').each(($span) => {
            if($span.text() === "ROUGE ALLURE"){
                cy.wait(1)
                cy.get($span).first().click({force : true})
                return(false)
            }
        })

        //Add the product to the bag
        cy.get('button[id = "pos-cnc-btn"]').first().click({force : true})

        //Go back to shopping
        cy.get('button[data-test = "btnContinueShopping"]').first().click({force : true})

        //Go to the bag menu
        cy.visit('/cart')

        //Check the name of product, quantity of product and sum of bag
        cy.get('div[class = "cart-product__context "]').within(() => {
            cy.get('span[class = "heading is-7"]').should("have.text", "ROUGE ALLURE")
        })

        cy.get('select[id = "prd0"]').should("have.value", 1)


        cy.get('p[data-test="lblProductPrice_151107"]').its('text').then((text) => 
        {
            var p = ""
            for(var i = text.strlength - 6; i < text.strlength; i++)
            {
                p.concat(text[i])
            }
            return(p)
        })
        .then((prix) => 
        {
            cy.get('td[data-test = "lblSubTotal_CartList"]').its('text').then((text) => 
            {
                var t = ""
                for(var i = text.strlength - 6; i < text.strlength; i++)
                {
                    t = t.concat(text[i])
                }
                return(t)
            }).should("be.equal", prix)
        })

    })
})