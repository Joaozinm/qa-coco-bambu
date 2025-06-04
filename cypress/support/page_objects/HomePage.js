class HomePage {
  selectorsList() {
    const selectors = {
      typeRegionField: "[placeholder='Informe seu endereço']",
      regionRestaurant: "[_nghost-ng-c3020357099='']",
      loginButton: ".login-text",
    };
    return selectors;
  }

  accessHomePage() {
    cy.visit("/");
    return this;
  }

  verifyHomePage() {
    cy.get(this.selectorsList().typeRegionField, { timeout: 10000 })
      .should("exist")
      .and("be.visible");
    return this;
  }

  verifyUserLogged() {
    cy.get(this.selectorsList().loginButton, { timeout: 5000 })
      .should("exist")
      .and("not.be.visible");
    return this;
  }

  fillRegion(region) {
    cy.get(this.selectorsList().typeRegionField).clear().type(region);
    return this;
  }

  selectRestaurant(unit) {
    cy.get(this.selectorsList().regionRestaurant)
      .contains(unit)
      .click({ force: true });
    return this;
  }

  validarCardapioVisivel() {
    cy.location("pathname", { timeout: 10000 }).should("eq", "/delivery");
    return this;
  }
}

export default new HomePage();
