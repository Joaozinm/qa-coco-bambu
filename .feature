Feature: Fluxos críticos da jornada de compra no sistema de delivery

  Scenario: Selecionar uma região e restaurante com sucesso
    Given que estou na tela de seleção de região
    When eu seleciono "São Paulo - Unidade Jardins"
    Then devo visualizar o cardápio disponível
    And devo ser redirecionado para a página de produtos

  Scenario: Adicionar um item com sucesso
    Given que estou na página de produtos
    When eu clico em "Adicionar ao carrinho" no produto "Camarão Internacional"
    Then o item deve aparecer no carrinho
    And o total deve ser atualizado corretamente

  Scenario: Finalizar pedido com sucesso
    Given que tenho itens no carrinho e um endereço válido selecionado
    When eu clico em "Finalizar pedido"
    Then devo ver a confirmação de pedido com número e estimativa de entrega

  Scenario: Cadastrar endereço válido com sucesso
    Given que estou na tela de cadastro de endereço
    When eu preencho todos os campos obrigatórios corretamente
    And clico em "Salvar"
    Then o novo endereço deve ser salvo e exibido na lista de endereços disponíveis

  Scenario: Remover item com sucesso
    Given que tenho o item "Camarão Internacional" no meu carrinho
    When eu clico em "Remover"
    Then o item deve desaparecer do carrinho
    And o valor total deve ser atualizado corretamente
