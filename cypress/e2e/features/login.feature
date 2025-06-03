  Feature: Login

    Scenario: Login bem-sucedido com autenticação de dois fatores
      Given que acesso a página de login do sistema
      When informo minhas credenciais válidas:
        | campo     | valor            |
        | usuário   | usuario_valido   |
        | senha     | senha_valida     |
      And submeto o formulário de login
      Then devo ser redirecionado para a tela de autenticação de dois fatores
      When preencho o código de autenticação com "AAAAAA"
      And confirmo o código
      Then devo ser autenticado com sucesso
      And devo visualizar a página inicial do sistema
      And não devo mais visualizar elementos da tela de login