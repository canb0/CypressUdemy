describe('User', () => {
    it('should be able to navigate', () => {
        cy.visit('www.swtestacademy.com');
        cy.title().should('eq', 'Software Test Academy');
    });

    it('should be able to open automation category', () => {
        cy.visit('www.swtestacademy.com/category/test-automation/');
        cy.title().should('eq', 'Automation');
    });
});
