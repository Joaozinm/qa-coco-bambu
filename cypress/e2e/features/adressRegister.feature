  Feature: Cadastro de endereço
  
  Scenario: Cadastrar um novo endereço com sucesso
    Given que estou logado no sistema
    When acesso a aba Perfil e cadastro um novo endereço válido na região "Brasília"
    Then o novo endereço deve aparecer listado em Meus endereços