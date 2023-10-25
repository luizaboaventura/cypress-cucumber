describe('Create and mark-unmark as favorite', () => {

    beforeEach(() => {
        cy.visit('https://conduit-realworld-example-app.fly.dev/#/login')
        cy.title('eq','Conduit')
        cy.location('protocol').should('eq', 'https:')
        cy.get('input[type=email]').type('luizaboaventuram@gmail.com')
        cy.get('input[type=password]').type('123456')
        cy.get('.btn').contains('Login').should('be.visible').click()
    })

    it('Sign in', () => {
        cy.contains("Your Feed", {timeout:10000}).should("be.visible")
    })
    
    it("Create a post", () => {
        cy.contains('New Article').click()

        // esses dois são a mesma coisa
        cy.hash().should('include', '#/editor')
        //cy.location('hash').should('include', '#/editor')

        cy.get('input[placeholder="Article Title"]').type('Test 12')
        cy.get('input[placeholder="What\'s this article about?"]').type('Test 1')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Test 2')
        cy.get('.btn').contains('Publish Article').should('be.visible').click()
        cy.url().should('include', 'article')
    })

    it('Mark-unmark as favorite', () => {
        cy.get('.nav-link').contains('Luiza').click()
        cy.contains('Profile').should('be.visible').click()
        cy.get('.ion-heart').click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')

        cy.get('.ion-heart').click()
        cy.reload()
        cy.contains('Luiza doesn\'t have favorites.').should('be.visible')
        cy.go('back')
        //cy.go(-1)
        cy.go('forward')
        //cy.go(1)
    })
})