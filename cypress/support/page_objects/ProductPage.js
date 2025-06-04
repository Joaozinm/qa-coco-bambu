class ProductPage {
  selectorsList() {
    const selectors = {
      addToCartButton: ".button-submit-content",
      itemQuantity: ".counter-number",
    };
    return selectors;
  }

  addToCart() {
    cy.get(this.selectorsList().itemQuantity, { timeout: 10000 }).should(
      ($el) => {
        const value = parseInt($el.text().trim());
        expect(value).to.be.greaterThan(0);
      }
    );
    cy.get(this.selectorsList().addToCartButton, { timeout: 10000 })
      .should("exist")
      .should("be.visible")
      .click();
  }
}

export default new ProductPage();
