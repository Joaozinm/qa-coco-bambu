import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../../support/page_objects/HomePage";
import ProductsPage from "../../../../support/page_objects/ProductsPage";

Given("que estou na tela de seleção de região", () => {
  HomePage.accessHomePage();
  HomePage.verifyHomePage();
});

When("eu seleciono {string}", (unidade) => {
  HomePage.fillRegion(unidade);
  HomePage.selectRestaurant(unidade);
});

Then("devo visualizar o cardápio disponível", () => {
  ProductsPage.validateMenuVisibility();
});

Then("devo visualizar os produtos", () => {
  ProductsPage.validateProductsVisibility();
});
