describe('Login', () => {
    it('Sign in', () => {
        cy.visit('https://conduit-realworld-example-app.fly.dev/#/login')
        cy.get('input[type=email]').type('luizaboaventuram@gmail.com')
        cy.get('input[type=password]').type('123456')
        cy.get('.btn').contains('Login').should('be.visible').click()
    })
})