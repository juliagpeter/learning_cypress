describe("Cadastro Adopet", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="register-button"]').click();
  });
  it("Deve preencher os campos e concluir o cadastro", () => {
    cy.signUp("Júlia", "jlgirlyt@gmail.com", "Senha123");
  });
});
