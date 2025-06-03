import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProfileNavPage from "../../../support/page_objects/ProfileNavPage";
import AdressPage from "../../../support/page_objects/AdressPage";

Given("que estou logado no sistema", () => {
  cy.fastLogin();
  ProfileNavPage.accessProfileNavPage();
  ProfileNavPage.accessAdressesPage();
});

When(
  "acesso a aba Perfil e cadastro um novo endereço válido na região {string}",
  (unidade) => {
    AdressPage.validateAdressPage();
    AdressPage.newAdress();
    AdressPage.fillRegion(unidade);
    AdressPage.selectRegion(unidade);
    AdressPage.validateAdressComplementFieldsVisibility();
    AdressPage.fillAdressComplementFields("Teste Street", "123", "Apt 456");
  }
);

Then("o novo endereço deve aparecer listado em Meus endereços", () => {
  AdressPage.validateAdressSubmission("Teste Street");
});
