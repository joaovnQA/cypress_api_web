import { faker } from "@faker-js/faker";
describe("Auth / Login", () => {
  it("Validate that the user was able to signup", () => {
    const fakeName = faker.person.fullName();
    const fakeEmail = faker.internet.email();
    const fakePassword = faker.internet.password();
    cy.api({
      method: "POST",
      url: `${Cypress.env("apiUrl")}/usuarios`,
      body: {
        nome: fakeName,
        email: fakeEmail,
        password: fakePassword,
        administrador: "true",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq("Cadastro realizado com sucesso");
      expect(response.body).to.include.keys("_id");
    });
  });
});
