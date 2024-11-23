describe("Login Adopet", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="login-button"]').click();
  });
  it("Deve preencher os campos e concluir o login", () => {
    cy.get('[data-test="input-loginEmail"]').type("jlgirlyt@gmail.com");
    cy.get('[data-test="input-loginPassword"]').type("Senha123");
    cy.get('[data-test="submit-button"]').click();
  });
});
