import { selectors } from "./selectors";
export const Web = {
  login(email: string, pass: string) {
    cy.session([email, pass], () => {
      cy.visit("/login");
      cy.get(selectors.login.email).type(email);
      cy.get(selectors.login.password).type(pass, { log: false });
      cy.get(selectors.login.submit).click();
      cy.url().should("include", "/dashboard");
    });
  },
};
