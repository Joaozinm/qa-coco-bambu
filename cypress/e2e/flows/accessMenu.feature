Feature: Selecionar região e acessar restaurante

  Scenario: Selecionar uma região e restaurante com sucesso
    Given que estou na tela de seleção de região
    When eu seleciono "Brasília"
    Then devo visualizar o cardápio disponível
    And devo visualizar os produtos