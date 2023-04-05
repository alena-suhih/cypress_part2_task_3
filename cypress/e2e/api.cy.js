import { faker } from "@faker-js/faker";

describe("pet store", () => {
  const id = faker.datatype.number();
  const username = faker.internet.userName();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const password = faker.internet.password();
  const phone = faker.phone.number();

  it("should create user", () => {
    cy.createUser(id, username, firstName, lastName, email, password, phone);
  });

  it("should update user", () => {
    cy.createUser(id, username, firstName, lastName, email, password, phone);
    cy.request({
      url: `/v2/user/${username}`,
      method: "PUT",
      body: {
        id: 0,
        username: "username",
        firstName: "Test",
        lastName: "Testov",
        email: "email@email.com",
        password: "password",
        phone: 1234567890,
        userStatus: 0,
      },
    }).then((response) => {
      expect(response.status).to.be.eql(200);
    });
  });

  it("should delete user", () => {
    cy.createUser(id, username, firstName, lastName, email, password, phone);
    cy.request("DELETE", `/v2/user/${username}`).then((response) => {
      expect(response.status).to.be.eql(200);
    });
  });
});
