import userData from "../fixtures/userData.json";
import LoginPage from "./page_objects/LoginPage";
import MenuPage from "./page_objects/MenuPage";
import { CartRequests } from "./requests/cartRequests";

// Login rápido com sessão

Cypress.Commands.add("fastLogin", () => {
  cy.session("user_session", () => {
    LoginPage.accessLoginPage().verifyLoginPage();

    // Preenche credenciais e submete
    LoginPage.fillEmail(userData.userSuccess.username)
      .fillPassword(userData.userSuccess.password)
      .submitButton();

    // Valida a tela de 2FA e preenche o código
    LoginPage.validate2FAPage()
      .closeAlertButton()
      .fillAuthCode("AAAAAA")
      .submitForm();

    // Verificação
    MenuPage.validateMenuVisibility();
  });
});

// Comandos personalizados para requisições da api dummyJSON
Cypress.Commands.add("addToCart", (payload) => {
  return CartRequests.addToCart(payload);
});

Cypress.Commands.add("updateCart", (cartId, payload) => {
  return CartRequests.updateCart(cartId, payload);
});

Cypress.Commands.add("deleteCart", (cartId) => {
  return CartRequests.deleteCart(cartId);
});
