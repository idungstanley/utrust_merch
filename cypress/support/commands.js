// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import 'cypress-mailosaur'
Cypress.Commands.add('select_country', (countryName) => {
    cy.get('#downshift-5-input').clear()
    cy.get('#downshift-5-input').type(countryName)
    cy.get('.DropdownBase_optionsHolder__1pxWH .DropdownBase_options__2ce5J.DropdownBase_has-items__2Vdd5')
    .find(".Item_root__2Bw5D")
    .each(($el,index,$list)=>{
        const text_select = $el.text()
        if(text_select === countryName){
            cy.wrap($el).click()
        }
    })
})
Cypress.Commands.add('select_currency', (currency) => {
    cy.get('#downshift-4-input').clear()
    cy.get('#downshift-4-input').type(currency)
    cy.get('.DropdownBase_optionsHolder__1pxWH .DropdownBase_options__2ce5J.DropdownBase_has-items__2Vdd5')
    .find(".Item_root__2Bw5D")
    .each(($el,index,$list)=>{
        const text_select = $el.text()
        if(text_select.includes(currency)){
            cy.wrap($el).click()
        }
    })
})

Cypress.Commands.add('copy_and_visit', (selector) => { 
    let contentText;
    cy.get(selector).then((link)=>{
        contentText = link.text()
        cy.visit(contentText)
    })
 })
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })