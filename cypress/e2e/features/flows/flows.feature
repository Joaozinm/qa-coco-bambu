Feature: Fluxos críticos da jornada de compra no sistema de delivery

  Scenario: Selecionar uma região e restaurante com sucesso
    Given que estou na tela de seleção de região
    When eu seleciono "São Paulo"
    Then devo visualizar o cardápio disponível
    And devo visualizar os produtos
