const BASE_URL = "https://dummyjson.com/carts";

export const CartRequests = {
  addToCart(payload) {
    return cy.request({
      method: "POST",
      url: `${BASE_URL}/add`,
      body: payload,
      failOnStatusCode: false,
    });
  },

  updateCart(cartId, payload) {
    return cy.request({
      method: "PUT",
      url: `${BASE_URL}/${cartId}`,
      body: payload,
      failOnStatusCode: false,
    });
  },

  deleteCart(cartId) {
    return cy.request({
      method: "DELETE",
      url: `${BASE_URL}/${cartId}`,
      failOnStatusCode: false,
    });
  },
};
