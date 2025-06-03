import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../support/page_objects/HomePage";
import MenuPage from "../../../support/page_objects/MenuPage";

Given("que estou na tela de seleção de região com o usuário logado", () => {
  HomePage.accessHomePage();
  HomePage.verifyHomePage();
  HomePage.verifyUserNotLogged();
});

When("eu seleciono {string}", (unidade) => {
  HomePage.fillRegion(unidade);
  HomePage.selectRestaurant(unidade);
});

Then("devo visualizar o cardápio disponível", () => {
  MenuPage.validateMenuVisibility();
});

Then("devo visualizar os produtos", () => {
  MenuPage.validateProductsVisibility();
});
