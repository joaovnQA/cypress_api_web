describe("Auth / Login", () => {
  it("Validate that the user was able to login", () => {
    cy.fixture("users.json").then((login) => {
      const email = login.user.email;
      const password = login.user.password;
      cy.api({
        method: "POST",
        url: `${Cypress.env("apiUrl")}/login`,
        body: {
          email: email,
          password: password,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq("Login realizado com sucesso");
        expect(response.body).to.include.keys("authorization");
      });
    });
  });
});
