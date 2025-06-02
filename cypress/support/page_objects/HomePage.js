class HomePage {
  selectorsList() {
    const selectors = {
      typeRegionField: "[placeholder='Informe seu endereço']",
      regionRestaurant: "[_nghost-ng-c3020357099='']",
    };
    return selectors;
  }

  accessHomePage() {
    cy.visit("/");
  }

  verifyHomePage() {
    cy.get(this.selectorsList().typeRegionField, { timeout: 10000 })
      .should("exist")
      .and("be.visible");
  }

  fillRegion(region) {
    cy.get(this.selectorsList().typeRegionField).clear().type(region);
  }

  selectRestaurant(unit) {
    cy.get(this.selectorsList().regionRestaurant)
      .contains(unit)
      .click({ force: true });
  }

  validarCardapioVisivel() {
    cy.location("pathname", { timeout: 10000 }).should("eq", "/delivery");
  }
}

export default new HomePage();
