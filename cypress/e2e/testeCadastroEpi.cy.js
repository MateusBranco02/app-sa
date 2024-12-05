describe('Tela Cadastro de EPI', () => {
  it('Deve navegar até Cadastro de EPI e cadastrar um novo item', () => {
    cy.visit('http://localhost:5173/');
    cy.wait(1000);
    cy.get('.botao').contains('EPI').click();
    cy.wait(1000);
    cy.get('.botao').contains('CADASTRAR').click();
    cy.wait(1000);
    cy.get('.input-nome').type('Luva-teste');
    cy.wait(1000);
    cy.get('.input-imagem').type('https://static.superproatacado.com.br/storage/1000/luva-nitrilica-wk23-poliester-t9-g-1649425217.jpg');
    cy.wait(1000);
    cy.get('.input-quantidade').type('20');
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
    cy.get('p').contains('Item: Luva-teste').scrollIntoView();
    cy.wait(1000);
    cy.get('.lista-epis').contains('Item: Luva-teste').closest('li').find('.btnRetirar').click();
    cy.wait(1000);
    cy.get('.input-cpf').type('80356365897');
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
    cy.get('p').contains('Epi: Luva-teste');
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
    cy.get('p').contains('Item: Luva-teste').scrollIntoView();
    cy.wait(1000);
    cy.get('.lista-epis').contains('Item: Luva-teste').closest('li').find('.btnDevolver').click();
    cy.wait(1000);
    cy.get('.input-cpf').type('80356365897');
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
    cy.get('p').contains('Epi: Luva-teste').scrollIntoView();
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
    cy.get('p').contains('Item: Luva-teste').scrollIntoView();
    cy.wait(2000);
    cy.get('p').contains('Item: Luva-teste').closest('li').find('.icone-editar').click();
    cy.wait(1000);
    cy.get('.input-nome').clear().type('TESTE-FUNCIONOU');
    cy.wait(1000);
    cy.get('.input-imagem').clear().type('https://protenge.com.br/wp-content/uploads/2021/12/procut-7073-1.png');
    cy.wait(1000);
    cy.get('.input-quantidade').clear().invoke('val', '').type('18');
    cy.wait(1000);
    cy.get('.btnEditar').contains('EDITAR').click();
    cy.wait(1000);
    cy.get('p').contains('Item: TESTE-FUNCIONOU').scrollIntoView();
    cy.wait(1000);
  });

  it('Deve remover o EPI selecionado', () => {
    cy.visit('http://localhost:5173/');
    cy.wait(1000);
    cy.get('.botao').contains('EPI').click();
    cy.wait(1000);
    cy.get('.botao').contains('EPIS').click();
    cy.wait(1000);
    cy.get('p').contains('Item: TESTE-FUNCIONOU').scrollIntoView();
    cy.wait(2000);
    cy.get('p').contains('Item: TESTE-FUNCIONOU').closest('li').find('.icone-remover').click();
    cy.wait(1000);
    cy.get('h3').contains('Tem certeza que deseja remover o item: TESTE-FUNCIONOU?');
    cy.wait(1000);
    cy.get('.btnConfirmar').contains('Confirmar').click();
    cy.wait(2000);
  });
});
