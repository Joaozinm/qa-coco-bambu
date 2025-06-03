import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../support/page_objects/HomePage";
import MenuPage from "../../../support/page_objects/MenuPage";

Given("que estou na página de produtos com o usuário logado", () => {
  HomePage.accessHomePage();
  HomePage.verifyHomePage();
  HomePage.fillRegion(unidade);
  HomePage.selectRestaurant(unidade);
  MenuPage.validateProductsVisibility();
  MenuPage.validateMenuVisibility();
  HomePage.verifyUserNotLogged();
});

When('eu clico em "ADICIONAR" no produto {string}', (produto) => {
  ProductPage.addToCart(produto);
});

Then("devo visualizar o cardápio disponível", () => {
  MenuPage.validateMenuVisibility();
});
