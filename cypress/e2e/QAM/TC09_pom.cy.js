import Login from '../pageObjects/login'

describe('Login', () => {
    const login = new Login()

    it('Sign in', () => {
        cy.visit('https://conduit-realworld-example-app.fly.dev/#/login')
        login.email().type('luizaboaventuram@gmail.com')
        login.password().type('123456')
        login.signInButton().should('be.visible').click()
    })
})