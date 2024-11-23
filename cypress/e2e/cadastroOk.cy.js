describe('Cadastro Adopet', () => {
  it('Deve preencher os campos e concluir o cadastro', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Júlia');
    cy.get('[data-test="input-email"]').type('jlgirlyt@gmail.com');
    cy.get('[data-test="input-password"]').type('Senha123');
    cy.get('[data-test="input-confirm-password"]').type('Senha123')
    cy.get('[data-test="submit-button"]').click();
  })
})