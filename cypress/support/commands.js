Cypress.Commands.add(
  "createUser",
  (id, username, firstName, lastName, email, password, phone) => {
    cy.request({
      url: "/v2/user",
      method: "POST",
      body: {
        id: id,
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phone: phone,
        userStatus: 0,
      },
    }).then((response) => {
      expect(response.status).to.be.eql(200);
      console.log(response.body);
      expect(response.body).to.be.eql({
        code: 200,
        type: "unknown",
        message: id.toString(),
      });
    });
  }
);
