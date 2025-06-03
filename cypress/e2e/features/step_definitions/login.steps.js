import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../support/page_objects/LoginPage";
import userData from "../../../fixtures/userData.json";

Given("que acesso a página de login do sistema", () => {
  LoginPage.accessLoginPage();
  LoginPage.verifyLoginPage();
});

When("informo minhas credenciais válidas:", (dataTable) => {
  const data = dataTable.rowsHash();
  LoginPage.fillEmail(data[userData.userSuccess.username]);
  LoginPage.fillPassword(data[userData.userSuccess.password]);
});

When("submeto o formulário de login", () => {
  LoginPage.submitButton();
});

Then(
  "devo ser redirecionado para a tela de autenticação de dois fatores",
  () => {
    LoginPage.validate2FAPage();
  }
);

When("preencho o código de autenticação com {string}", (code) => {
  LoginPage.fillAuthCode(code);
});

When("confirmo o código", () => {
  LoginPage.submitForm();
});

Then("devo ser autenticado com sucesso", () => {
  LoginPage.verifyLoginSuccess();
});

Then("devo visualizar a página inicial do sistema", () => {
  LoginPage.verifyLoginSuccess();
});

Then("não devo mais visualizar elementos da tela de login", () => {
  LoginPage.verifyLoginElementsNotVisible();
});
