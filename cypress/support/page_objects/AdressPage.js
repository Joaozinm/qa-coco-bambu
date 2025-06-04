class AdressPage {
  selectorsList() {
    const selectors = {
      typeRegionField: "[placeholder='Informe seu endereço']",
      regionRestaurant: "[_nghost-ng-c3020357099='']",
      newAdressButton: "[alt='Add']",
      adressComplementFields: ".complement-form",
      streetField: "#rua",
      numberField: "#numero",
      complementField: "#complemento",
      submitButton: "[type='submit']",
    };
    return selectors;
  }

  validateAdressPage() {
    cy.url().should("include", "/endereco");
    return this;
  }

  newAdress() {
    cy.get(this.selectorsList().newAdressButton).click();
    return this;
  }

  fillRegion(region) {
    cy.get(this.selectorsList().typeRegionField).clear().type(region);
    return this;
  }

  selectRegion(unit) {
    cy.contains("div", unit).click({ force: true });
    return this;
  }

  validateAdressComplementFieldsVisibility() {
    cy.get(this.selectorsList().adressComplementFields, { timeout: 15000 })
      .should("exist")
      .and("be.visible");
    return this;
  }

  fillAdressComplementFields(street, number, complement) {
    cy.get(this.selectorsList().streetField).clear().type(street);
    cy.get(this.selectorsList().numberField).clear().type(number);
    cy.get(this.selectorsList().complementField).clear().type(complement);
    return this;
  }
  submitAdress() {
    cy.get(this.selectorsList().submitButton).click();
    return this;
  }
  validateAdressSubmission(street) {
    cy.contains("div", street, { timeout: 10000 }).should("exist");
    return this;
  }
}

export default new AdressPage();
