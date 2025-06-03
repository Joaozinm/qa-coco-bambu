Feature: Login

  Scenario: Login bem-sucedido com autenticação de dois fatores
    Given que estou na página de login
    When realizo o login com credenciais válidas
    And informo o código de autenticação "AAAAAA"
    Then devo acessar a página inicial do sistema
    And não devo ver a tela de login
