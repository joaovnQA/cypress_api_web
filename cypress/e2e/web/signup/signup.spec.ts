import { SignupPage } from "../../../pages/SignupPage";
const login = new SignupPage();
describe("Auth / Signup", () => {
  it("Validate that the user was able to signup", () => {
    login.signUp();
    cy.get("@usuarios").its("response.statusCode").should("eq", 201);
    cy.contains("Cadastro realizado com sucesso").should("be.visible");
    cy.url().should("include", "/home");
  });
});
