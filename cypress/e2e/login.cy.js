import LoginPage from "../support/page_objects/LoginPage";
import MenuPage from "../support/page_objects/MenuPage";
import userData from "../fixtures/userData.json";

describe("Fluxo de Login com Autenticação de Dois Fatores", () => {
  it("Deve realizar login com sucesso usando 2FA", () => {
    // GIVEN -  que estou na página de login
    LoginPage.accessLoginPage().verifyLoginPage();

    // WHEN - realizo o login com credenciais válidas
    LoginPage.fillEmail(userData.userSuccess.username)
      .fillPassword(userData.userSuccess.password)
      .submitButton();

    // AND - informo o código de autenticação "AAAAAA"
    LoginPage.validate2FAPage()
      .closeAlertButton()
      .fillAuthCode("AAAAAA")
      .submitForm();

    // THEN - devo acessar a página de menu de produtos
    MenuPage.validateMenuVisibility();
  });

  it("Deve lidar com código de autenticação inválido", () => {
    LoginPage.accessLoginPage().verifyLoginPage();

    LoginPage.fillEmail(userData.userSuccess.username)
      .fillPassword(userData.userSuccess.password)
      .submitButton();

    LoginPage.validate2FAPage()
      .closeAlertButton()
      .fillAuthCode("INVALID")
      .submitForm();

    cy.contains("div", "O código digitado está inválido ou expirou.").should(
      "be.visible"
    );
  });
});
