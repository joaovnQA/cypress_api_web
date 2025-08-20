import { BasePage } from "./BasePage";
import { selectors } from "../support/selectors";
import { faker } from "@faker-js/faker";
export class SignupPage extends BasePage {
  name = () => cy.get(selectors.signup.name);
  email = () => cy.get(selectors.signup.emailSignup);
  password = () => cy.get(selectors.signup.passwordSignup);
  submit = () => cy.get(selectors.signup.submitSignup);
  visit() {
    this.open("/cadastrarusuarios");
  }
  signUp() {
    const fakeName = faker.person.fullName();
    const fakeEmail = faker.internet.email();
    const fakePassword = faker.internet.password();
    cy.intercept("POST", "/usuarios").as("usuarios");
    this.visit();
    this.name().type(fakeName);
    this.email().type(fakeEmail);
    this.password().type(fakePassword, { log: false });
    this.submit().click();
    cy.wait("@usuarios");
  }
}
