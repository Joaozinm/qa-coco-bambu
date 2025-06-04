class ProfileNavPage {
  selectorsList() {
    const selectors = {};
    return selectors;
  }

  accessProfileNavPage() {
    cy.visit("/perfil");
    return this;
  }

  accessAdressesPage() {
    cy.contains("div", "Endereços", { timeout: 10000 }).should("exist").click();
    return this;
  }
}

export default new ProfileNavPage();
