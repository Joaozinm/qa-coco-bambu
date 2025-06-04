import MenuPage from "../support/page_objects/MenuPage";
import BagPage from "../support/page_objects/BagPage";
import ProductPage from "../support/page_objects/ProductPage";

describe("Fluxo de adicionar produto ao carrinho", () => {
  it("Deve selecionar o produto e adicioná-lo ao carrinho", () => {
    // GIVEN - que estou na página de produtos com o usuário logado e seleciono um produto
    cy.fastLogin();
    MenuPage.visitMenuPage();
    MenuPage.validateMenuVisibility();
    MenuPage.validateProductsVisibility();
    MenuPage.selectProduct("Camarão Coco Bambu (Inteiro)");

    // WHEN - eu clico em "ADICIONAR" na tela do produto {string}
    ProductPage.addToCart("Camarão Coco Bambu (Inteiro)");

    // THEN -  devo visualizar o produto na sacola
    MenuPage.openBag();
    BagPage.verifyProductInBag("Camarão Coco Bambu (Inteiro)");
  });
});
