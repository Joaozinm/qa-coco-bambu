class BagPage {
  selectorsList() {
    const selectors = {
      addToCartButton: ".button-submit-content",
      bagItensContainer: ".item-list-component",
      bagLoadingOverlay: ".loading-container > .ng-tns-c3498370121-4",
    };
    return selectors;
  }

  addToCart(productName) {
    cy.get(this.selectorsList().addToCartButton, { timeout: 10000 })
      .contains(productName)
      .should("be.visible")
      .click();
    return this;
  }

  verifyProductInBag(productName) {
    cy.get(this.selectorsList().bagLoadingOverlay, { timeout: 10000 }).should(
      "not.exist"
    );

    cy.get(this.selectorsList().bagItensContainer, { timeout: 10000 })
      .should("contain.text", productName)
      .and("be.visible");
    return this;
  }
}

export default new BagPage();
