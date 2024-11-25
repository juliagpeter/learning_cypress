describe("Login Adopet", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="login-button"]').click();
  });
  it("Deve preencher os campos e concluir o login", () => {
    cy.login('jlgirlyt@gmail.com', 'Senha123');
  });
});
