import 'cypress-file-upload';

Cypress.Commands.add("SignIn", (email, password) => {

    cy.visit('/#/login')
    cy.title('eq','Conduit')
    cy.location('protocol').should('eq', 'https:')
    cy.get('form').within(($form) => {
        cy.get('input[type=email]').type(email)
        cy.get('input[type=password]').type(password)
        cy.root().submit() // submits criados pelo 'within'
    })
})
