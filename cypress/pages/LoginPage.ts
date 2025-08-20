import { BasePage } from "./BasePage";
import { selectors } from "../support/selectors";
export class LoginPage extends BasePage {
  email = () => cy.get(selectors.login.email);
  password = () => cy.get(selectors.login.password);
  submit = () => cy.get(selectors.login.submit);
  visit() {
    this.open("/login");
  }
  signIn(email: string, pass: string) {
    cy.intercept("POST", "/login").as("login");
    this.visit();
    this.email().type(email);
    this.password().type(pass, { log: false });
    this.submit().click();
    cy.wait("@login");
  }
}
