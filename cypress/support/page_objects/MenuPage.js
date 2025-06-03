class MenuPage {
  selectorsList() {
    const selectors = {
      menuGrid: "delivery-menu",
      products: "div.items-container",
      loadingOverlay: ".spinner",
    };
    return selectors;
  }

  validateMenuVisibility() {
    cy.get(this.selectorsList().loadingOverlay, { timeout: 10000 }).should(
      "not.exist"
    );

    cy.url().should("include", "/delivery");

    cy.get(this.selectorsList().menuGrid, { timeout: 15000 })
      .should("exist")
      .then(($el) => {
        if ($el.is(":hidden")) {
          cy.wrap($el).scrollIntoView();
        }
      })
      .should("be.visible");
  }

  validateProductsVisibility() {
    cy.get(this.selectorsList().products, { timeout: 15000 })
      .should("exist")
      .and("have.length.greaterThan", 0);
  }
}

export default new MenuPage();
