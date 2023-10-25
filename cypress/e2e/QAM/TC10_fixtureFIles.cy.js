// describe('Login', () => {
//     it('Sign in', () => {
//         cy.visit('https://conduit-realworld-example-app.fly.dev/#/login')
//         cy.fixture('userLoginDetails').then((user) => {
//             cy.get('input[type=email]').type(user.email)
//             cy.get('input[type=password]').type(user.password)
//         })
//         cy.get('.btn').contains('Login').should('be.visible').click()
//     })
// })

describe('Login', () => {

    let userDetails

    beforeEach(() => {
        cy.fixture('userLoginDetails').then((user) => {
            userDetails = user
        })
    })

    it('Sign in', () => {
        cy.visit('https://conduit-realworld-example-app.fly.dev/#/login')
        cy.get('input[type=email]').type(userDetails.email)
        cy.get('input[type=password]').type(userDetails.password)
        cy.get('.btn').contains('Login').should('be.visible').click()
    })
})

describe('Login', () => {
    beforeEach(() => {
        cy.fixture('userLoginDetails').as('user')
    })

    it('Sign in', function () { 
        cy.visit('https://conduit-realworld-example-app.fly.dev/#/login')
        cy.get('input[type=email]').type(this.user.email)
        cy.get('input[type=password]').type(this.user.password)
        cy.get('.btn').contains('Login').should('be.visible').click()
    })
})