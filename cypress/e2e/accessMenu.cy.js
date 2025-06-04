import HomePage from "../support/page_objects/HomePage";
import MenuPage from "../support/page_objects/MenuPage";

describe("Fluxo de acesso ao cardápio e visualização de produtos", () => {
  it("Deve preencher a região, selecionar o restarante e visualizar os produtos", () => {
    // GIVEN - que estou na tela de seleção de região
    HomePage.accessHomePage();
    HomePage.verifyHomePage();

    // WHEN -  eu seleciono {string}
    HomePage.fillRegion("Brasília");
    HomePage.selectRestaurant("Brasília");

    // THEN -  devo visualizar o cardápio disponível
    MenuPage.validateMenuVisibility();

    // AND -  devo visualizar os produtos
    MenuPage.validateProductsVisibility();
  });
});
