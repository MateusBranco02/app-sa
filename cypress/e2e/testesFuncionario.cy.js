describe('Tela de Funcionário', () => {
  it('Realizar os testes das funcionalidades de funcionário com sucesso!', () => {
    cy.visit('http://localhost:5173/');

    cy.wait(1000);
    cy.get('.botao').contains('FUNCIONÁRIO').click();
    cy.wait(1000);
    cy.get('.botao').contains('CADASTRAR').click();
    cy.wait(1000);
    cy.get('.input-nome').type('Cadastro de usuário');
    cy.wait(1000);
    cy.get('.input-funcao').type('Aluno');
    cy.wait(1000);
    cy.get('.input-telefone').type('48998543601');
    cy.wait(1000);
    cy.get('.input-email').type('cadastrar@email.com');
    cy.wait(1000);
    cy.get('.input-cpf').type('87360145289');
    cy.wait(1000);
    cy.get('.btnCadastrar').click();
    cy.wait(2000);

    cy.get('.botao').contains('FUNCIONÁRIO').click();
    cy.wait(1000);
    cy.get('.botao').contains('FUNCIONÁRIOS').click();
    cy.wait(1000);
    cy.get('.p-nome').contains('Cadastro de usuário');
    cy.wait(1000);
    cy.get('.lista-funcionarios li').contains('Nome: Cadastro de usuário').closest('li').find('.icone-editar').click();
    cy.wait(1000);
    cy.get('.input-cpf').type('87360145289');
    cy.wait(1000);
    cy.get('.btnConfirmar').contains('Confirmar').click();
    cy.wait(1000);
    cy.get('.input-nome').clear().type('Cadastro de Usuário');
    cy.wait(1000);
    cy.get('.input-funcao').clear().type('Nome Alterado!');
    cy.wait(1000);
    cy.get('.btnEditar').contains('EDITAR').click();
    cy.wait(1000);
    cy.get('a').contains('LISTA DE FUNCIONÁRIOS').click();

    cy.wait(2000);
    cy.get('.botao').contains('FUNCIONÁRIO').click();
    cy.wait(1000);
    cy.get('.botao').contains('FUNCIONÁRIOS').click();
    cy.wait(1000);
    cy.get('.p-nome').contains('Cadastro de Usuário');
    cy.wait(1000);
    cy.get('.lista-funcionarios li').contains('Nome: Cadastro de Usuário').closest('li').find('.icone-remover').click();
    cy.wait(1000);
    cy.get('.input-cpf').type('87360145289');
    cy.wait(1000);
    cy.get('.btnConfirmar').contains('Confirmar').click();
    cy.wait(1000);
    cy.get('a').contains('LISTA DE FUNCIONÁRIOS').click();
    cy.wait(1000);
  });
});