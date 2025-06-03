import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../support/page_objects/LoginPage";
import userData from "../../../fixtures/userData.json";

Given("que estou na página de login", () => {
  LoginPage.accessLoginPage();
  LoginPage.verifyLoginPage();
});

When("realizo o login com credenciais válidas", () => {
  LoginPage.fillEmail(userData.userSuccess.username);
  LoginPage.fillPassword(userData.userSuccess.password);
  LoginPage.submitButton();
  LoginPage.validate2FAPage();
});

When("informo o código de autenticação {string}", (code) => {
  LoginPage.fillAuthCode(code);
  LoginPage.submitForm();
});

Then("devo acessar a página inicial do sistema", () => {
  LoginPage.verifyLoginSuccess();
});

Then("não devo ver a tela de login", () => {
  LoginPage.verifyLoginElementsNotVisible();
});
