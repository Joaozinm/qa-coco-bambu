class MenuPage {
  selectorsList() {
    const selectors = {
      addToCartButton: ".button-submit-content",
    };
    return selectors;
  }

  addToCart(productName) {
    cy.get(this.selectorsList().addToCartButton)
      .contains(productName)
      .should("be.visible")
      .click();
  }
}

export default new MenuPage();
