Feature: Adicionar itens ao carrinho

    Scenario: Adicionar item ao carrinho com sucesso
    Given que estou na página de produtos com o usuário logado e seleciono um produto
    When eu clico em "ADICIONAR" no produto "Camarão Coco Bambu (Meio)"
    Then devo visualizar o produto na sacola