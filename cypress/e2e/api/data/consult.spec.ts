describe("Data / Consult", () => {
  it("Validate that it is possible to consult user data by email", () => {
    cy.fixture("users.json").then((login) => {
      const email = login.user.email;
      const password = login.user.password;
      cy.api({
        method: "GET",
        url: `${Cypress.env("apiUrl")}/usuarios`,
        qs: {
          email: email,
        },
      }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body).to.have.property("quantidade", 1);
        expect(res.body).to.have.property("usuarios");
        expect(res.body.usuarios).to.be.an("array").with.length(1);
        const user = res.body.usuarios[0];
        expect(user).to.have.property("nome", "joaoQA");
        expect(user).to.have.property("email", email);
        expect(user).to.have.property("password", password);
        expect(user).to.have.property("administrador", "false");
        expect(user).to.have.property("_id").that.is.a("string");
      });
    });
  });
});
