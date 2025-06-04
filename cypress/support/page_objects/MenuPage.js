class MenuPage {
  selectorsList() {
    const selectors = {
      menuGrid: "delivery-menu",
      products: "div.items-container",
      loadingOverlay: ".spinner",
      bagIcon: ".bag-button-items-quantity",
      itemCard: "div.item-card-container .item-name",
    };
    return selectors;
  }

  visitMenuPage() {
    cy.visit("/delivery");
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

  selectProduct(productName) {
    cy.contains(this.selectorsList().itemCard, productName, {
      timeout: 10000,
    })
      .scrollIntoView()
      .should("exist")
      .then(($el) => {
        cy.wrap($el).click({ force: true });
      });
  }

  openBag() {
    cy.get(this.selectorsList().bagIcon).click();
  }
}

export default new MenuPage();
