describe("Login Adopet", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="login-button"]').click();
    cy.intercept(
      "POST",
      "https://adopet-api-i8qu.onrender.com/adotante/login",
      {
        statusCode: 400,
      }
    ).as("stubPost");
  });
});
it("Deve falhar mesmo com os campos preenchidos corretamente", () => {
  cy.login("emailfalso@gmail.com", "Senha123");
});
