const cupom = require('./cupom');

test('Exercício 1', () => {
  expect(cupom.imprime_dados_loja()).toBe(
    `Arcos Dourados Com. de Alimentos LTDA
Av. Projetada Leste, 500 EUC F32/33/34
Br. Sta Genebra - Campinas - SP
CEP:13080-395 Tel (19) 3756-7408
Loja 1317 (PDP)
CNPJ: 42.591.651/0797-34
IE: 244.898.500.113
`);
});

test('Exercício 2 - tudo vazio', () => {

  let expected = "\n";
  expected += ", 0 \n";
  expected += " -  - \n";
  expected += "CEP: Tel \n";
  expected += "\n";
  expected +="CNPJ: \n";
  expected += "IE: \n";

  cupom.dados.nome_loja = "";
  cupom.dados.logradouro = "";
  cupom.dados.numero = 0;
  cupom.dados.complemento = "";
  cupom.dados.bairro = "";
  cupom.dados.municipio = "";
  cupom.dados.estado = "";
  cupom.dados.cep = "";
  cupom.dados.telefone = "";
  cupom.dados.observacao = "";
  cupom.dados.cnpj = "";
  cupom.dados.inscricao_estadual = "";

  expect(cupom.imprime_dados_loja()).toBe(expected);
});

test('Exercício 2 - customizado', () => {

  // Defina seus próprios valores para as variáveis a seguir
  cupom.dados.nome_loja = "Smelly Cat";
  cupom.dados.logradouro = "Rua Etheria";
  cupom.dados.numero = 205;
  cupom.dados.complemento = "Perto da velhinha que mora em uma caverna";
  cupom.dados.bairro = "Br. Templo do Cristal";
  cupom.dados.municipio = "Beach City";
  cupom.dados.estado = "BC";
  cupom.dados.cep = "78051-604";
  cupom.dados.telefone = "(66)4002-8922";
  cupom.dados.observacao = "Por Favor ignorar os exército Intergalácticos em guerra tentando dominar o planeta";
  cupom.dados.cnpj = "53.409.609/0001-85";
  cupom.dados.inscricao_estadual = "512.670.302.653";
  
  let expected = "Smelly Cat\n";
  expected += "Rua Etheria, 205 Perto da velhinha que mora em uma caverna\n";
  expected += "Br. Templo do Cristal - Beach City - BC\n";
  expected += "CEP:78051-604 Tel (66)4002-8922\n";
  expected += "Por Favor ignorar os exército Intergalácticos em guerra tentando dominar o planeta\n";
  expected +="CNPJ: 53.409.609/0001-85\n";
  expected += "IE: 512.670.302.653\n";

  //E atualize o texto esperado abaixo
  expect(cupom.imprime_dados_loja()).toBe(expected);
});
