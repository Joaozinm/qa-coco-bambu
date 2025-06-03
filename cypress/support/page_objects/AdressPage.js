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
  }

  newAdress() {
    cy.get(this.selectorsList().newAdressButton).click();
  }

  fillRegion(region) {
    cy.get(this.selectorsList().typeRegionField).clear().type(region);
  }

  selectRegion(unit) {
    cy.get(this.selectorsList().regionRestaurant)
      .contains("div", unit)
      .click({ force: true });
  }

  validateAdressComplementFieldsVisibility() {
    cy.get(this.selectorsList().adressComplementFields, { timeout: 10000 })
      .should("exist")
      .and("be.visible");
  }

  fillAdressComplementFields(street, number, complement) {
    cy.get(this.selectorsList().streetField).clear().type(street);
    cy.get(this.selectorsList().numberField).clear().type(number);
    cy.get(this.selectorsList().complementField).clear().type(complement);
  }
  submitAdress() {
    cy.get(this.selectorsList().submitButton).click();
  }
  validateAdressSubmission(street) {
    cy.contains("div", street, { timeout: 10000 }).should("exist");
  }
}

export default new AdressPage();
