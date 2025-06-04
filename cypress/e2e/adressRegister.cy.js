import AdressPage from "../support/page_objects/AdressPage";
import ProfileNavPage from "../support/page_objects/ProfileNavPage";

describe("Fluxo de registro de novo endereço", () => {
  it("Deve preencher a região, os campos obrigatórios e salvar", () => {
    // GIVEN - que estou logado no sistema
    cy.fastLogin();
    ProfileNavPage.accessProfileNavPage();
    ProfileNavPage.accessAdressesPage();

    // WHEN - acesso a aba Perfil e cadastro um novo endereço válido na região {string}
    AdressPage.validateAdressPage();
    AdressPage.newAdress();
    AdressPage.fillRegion("Brasília");
    AdressPage.selectRegion("Brasília");
    AdressPage.validateAdressComplementFieldsVisibility();
    AdressPage.fillAdressComplementFields("Teste Street", "123", "Apt 456");
    AdressPage.submitAdress();

    // THEN - o novo endereço deve aparecer listado em Meus endereços
    AdressPage.validateAdressSubmission("Teste Street");
  });
});
