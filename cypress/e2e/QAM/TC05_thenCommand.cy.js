describe('Create and mark-unmark as favorite', () => {

    beforeEach(() => {
        cy.SignIn('luizaboaventuram@gmail.com', '123456')
    })

    it('Sign in', () => {
        cy.contains("Your Feed", {timeout:10000}).should("be.visible")
    })
    
    it("Create a post", () => {
        cy.get('ul.navbar-nav').children().contains('New Article').click()
        cy.hash().should('include', '#/editor')

        cy.get('form').within(($form) => {
            cy.get('input').first().type('Test 2')
            cy.get('input').eq(1).type('Test 1')
            cy.get('textarea').first().type('Test 2')
            cy.get('.btn').contains('Publish Article').should('be.visible').click()
        })
        cy.url().should('include', 'article')
    })

    it('Mark-unmark as favorite', () => {
        cy.get('ul.navbar-nav').children().contains('Luiza').click()
        cy.contains('Profile').should('be.visible').click()
        cy.get('.ion-heart').first().click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')

        cy.get('.btn-primary').first().then(($fav) => {
            const favCount = $fav.text()
            expect(parseInt(favCount)).to.eq(1)

        }).click()
        cy.reload()
        cy.contains('Luiza doesn\'t have favorites.').should('be.visible')
        cy.go('back')
        cy.go('forward')
    })
})