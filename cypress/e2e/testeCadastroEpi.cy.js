describe('Tela Cadastro de EPI', () => {
  it('Deve navegar até Cadastro de EPI e cadastrar um novo item', () => {
    cy.visit('http://localhost:5173/');
    cy.wait(1000);
    cy.get('.botao').contains('EPI').click();
    cy.wait(1000);
    cy.get('.botao').contains('CADASTRAR').click();
    cy.wait(1000);
    cy.get('.input-nome').type('Máscara');
    cy.wait(1000);
    cy.get('.input-imagem').type('https://cdn.awsli.com.br/2126/2126528/produto/135495613/f871fa1a82.jpg');
    cy.wait(1000);
    cy.get('.input-quantidade').type('120');
    cy.wait(1000);
    cy.get('.btnCadastrar').contains('CADASTRAR').click();
    cy.wait(1000);
  });

  it('Deve retirar o EPI cadastrado', () => {
    cy.visit('http://localhost:5173/');
    cy.wait(1000);
    cy.get('.botao').contains('EPI').click();
    cy.wait(1000);
    cy.get('.botao').contains('EPIS').click();
    cy.wait(1000);
    cy.get('p').contains('Item: Máscara').scrollIntoView();
    cy.wait(1000);
    cy.get('.lista-epis').contains('Item: Máscara').closest('li').find('.btnRetirar').click();
    cy.wait(1000);
    cy.get('.input-cpf').type('45678901233');
    cy.wait(1000);
    cy.get('.input-quantidade').type('1');
    cy.wait(1000);
    cy.get('.btnCadastrar').contains('Retirar').click();
    cy.wait(1000);
    cy.get('.btnVoltar').contains('Voltar').click();
    cy.wait(1000);
  });

  it('Deve verificar o histórico do EPI retirado', () => {
    cy.visit('http://localhost:5173/');
    cy.wait(1000);
    cy.get('.botao').contains('EPI').click();
    cy.wait(1000);
    cy.get('.botao').contains('HISTÓRICO').click();
    cy.get('p').contains('Epi: Máscara');
    cy.wait(1000);
    cy.get('p').contains('Status: Retirado');
    cy.wait(1000);
    cy.get('.btnVoltar').contains('Voltar').click();
    cy.wait(1000);
  });

  it('Deve devolver o EPI cadastrado', () => {
    cy.visit('http://localhost:5173/');
    cy.wait(1000);
    cy.get('.botao').contains('EPI').click();
    cy.wait(1000);
    cy.get('.botao').contains('EPIS').click();
    cy.wait(1000);
    cy.get('p').contains('Item: Máscara').scrollIntoView();
    cy.wait(1000);
    cy.get('.lista-epis').contains('Item: Máscara').closest('li').find('.btnDevolver').click();
    cy.wait(1000);
    cy.get('.input-cpf').type('45678901233');
    cy.wait(1000);
    cy.get('.input-quantidade').type('1');
    cy.wait(1000);
    cy.get('.btnCadastrar').contains('Devolver').click();
    cy.wait(1000);
    cy.get('.btnVoltar').contains('Voltar').click();
    cy.wait(1000);
  });

  it('Deve verificar o histórico do EPI devolvido', () => {
    cy.visit('http://localhost:5173/');
    cy.wait(1000);
    cy.get('.botao').contains('EPI').click();
    cy.wait(1000);
    cy.get('.botao').contains('HISTÓRICO').click();
    cy.get('p').contains('Epi: Máscara').scrollIntoView();
    cy.wait(1000);
    cy.get('p').contains('Status: Devolvido');
    cy.wait(1000);
    cy.get('.btnVoltar').contains('Voltar').click();
    cy.wait(1000);
  });

  it('Deve editar o EPI cadastrado', () => {
    cy.visit('http://localhost:5173/');
    cy.wait(1000);
    cy.get('.botao').contains('EPI').click();
    cy.wait(1000);
    cy.get('.botao').contains('EPIS').click();
    cy.wait(1000);
    cy.get('p').contains('Item: Máscara').scrollIntoView();
    cy.wait(2000);
    cy.get('p').contains('Item: Máscara').closest('li').find('.icone-editar').click();
    cy.wait(1000);
    cy.get('.input-nome').clear().type('Máscara Azul');
    cy.wait(1000);
    cy.get('.input-imagem').clear().type('https://vj-parafusos.com.br/wp-content/uploads/2019/11/mascara_respiratoria_pro_safety_pff2_pro_agro_c_valvula_741_1_20181025170830-600x400.png');
    cy.wait(1000);
    cy.get('.input-quantidade').clear().invoke('val', '').type('18');
    cy.wait(1000);
    cy.get('.btnEditar').contains('EDITAR').click();
    cy.wait(1000);
    cy.get('p').contains('Item: Máscara Azul').scrollIntoView();
    cy.wait(1000);
  });

  it('Deve remover o EPI selecionado', () => {
    cy.visit('http://localhost:5173/');
    cy.wait(1000);
    cy.get('.botao').contains('EPI').click();
    cy.wait(1000);
    cy.get('.botao').contains('EPIS').click();
    cy.wait(1000);
    cy.get('p').contains('Item: Máscara Azul').scrollIntoView();
    cy.wait(2000);
    cy.get('p').contains('Item: Máscara Azul').closest('li').find('.icone-remover').click();
    cy.wait(1000);
    cy.get('h3').contains('Tem certeza que deseja remover o item: Máscara Azul?');
    cy.wait(1000);
    cy.get('.btnConfirmar').contains('Confirmar').click();
    cy.wait(2000);
  });
});
