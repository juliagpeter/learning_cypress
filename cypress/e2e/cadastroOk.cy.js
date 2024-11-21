describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Júlia');
    cy.get('input[name="email"]').type('jlgirlyt@gmail.com');
    cy.get('input[name="password"]').type('Senha123');
    cy.get('input[name="confirm_password"]').type('Senha123')
    cy.contains('button', 'Cadastrar').click();
  })
})