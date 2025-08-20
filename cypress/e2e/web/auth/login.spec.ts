import users from "../../../fixtures/users.json";
import { LoginPage } from "../../../pages/LoginPage";
const login = new LoginPage();
describe("Auth / Login", () => {
  it("Validate that the user was able to login", () => {
    login.signIn(users.user.email, users.user.password);
    cy.get("@login").its("response.statusCode").should("eq", 200);
    cy.url().should("include", "/home");
  });
  it("Try to sign in with an invalid password", () => {
    login.signIn(users.user.email, users.user.invalidPass);
    cy.get("@login").its("response.statusCode").should("eq", 401);
    cy.contains("Email e/ou senha inválidos").should("be.visible");
  });
});
