describe('Working with plugins', () => {
    it('File upload', () => {
        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')

        // Upload file
        const fileName = 'cypress.pdf'
        cy.get('[type="file"]').attachFile(fileName);

        cy.get('[type="submit"]').should('be.visible').click()

        // Verificar a mensagem
        cy.contains("You've uploaded a file. Your notes on the file were:").should('be.visible');
    })
})