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
    cy.contains("div", "Endereços").click();
    return this;
  }
}

export default new ProfileNavPage();
