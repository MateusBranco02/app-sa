describe('Tela de Funcionário', () => {
  it('Deve navegar até Cadastro de Funcionário e cadastrar um novo funcionário', () => {
    cy.visit('http://localhost:5173/');
    cy.wait(1000);
    cy.get('.botao').contains('FUNCIONÁRIO').click();
    cy.wait(1000);
    cy.get('.botao').contains('CADASTRAR').click();
    cy.wait(1000);
    cy.get('.input-nome').type('Leandro Vargas');
    cy.wait(1000);
    cy.get('.input-funcao').type('Aluno');
    cy.wait(1000);
    cy.get('.input-telefone').type('48998543601');
    cy.wait(1000);
    cy.get('.input-email').type('leandro@gmail.com');
    cy.wait(1000);
    cy.get('.input-cpf').type('87360145289');
    cy.wait(1000);
    cy.get('.btnCadastrar').click();
    cy.wait(1000);
  });

  it('Deve editar um funcionário', () => {
    cy.visit('http://localhost:5173/');
    cy.wait(1000);
    cy.get('.botao').contains('FUNCIONÁRIO').click();
    cy.wait(1000);
    cy.get('.botao').contains('FUNCIONÁRIOS').click();
    cy.wait(1000);
    cy.get('.p-nome').contains('Leandro Vargas').scrollIntoView();
    cy.get('.lista-funcionarios li').contains('Nome: Leandro Vargas').closest('li').find('.icone-editar').click();
    cy.wait(1000);
    cy.get('.input-cpf').type('87360145289');
    cy.wait(1000);
    cy.get('.btnConfirmar').contains('Confirmar').click();
    cy.wait(1000);
    cy.get('.input-nome').clear().type('Leandro Vargas Dev');
    cy.wait(1000);
    cy.get('.input-funcao').clear().type('Aluno Senai!');
    cy.wait(1000);
    cy.get('.btnEditar').contains('EDITAR').click();
    cy.wait(1000);
    cy.get('a').contains('LISTA DE FUNCIONÁRIOS').click();
  });

  it('Deve remover um funcionário', () => {
    cy.visit('http://localhost:5173/');
    cy.wait(1000);
    cy.get('.botao').contains('FUNCIONÁRIO').click();
    cy.wait(1000);
    cy.get('.botao').contains('FUNCIONÁRIOS').click();
    cy.wait(1000);
    cy.get('.p-nome').contains('Leandro Vargas Dev').scrollIntoView();
    cy.wait(1000);
    cy.get('.lista-funcionarios li').contains('Nome: Leandro Vargas Dev').closest('li').find('.icone-remover').click();
    cy.wait(1000);
    cy.get('.input-cpf').type('87360145289');
    cy.wait(1000);
    cy.get('.btnConfirmar').contains('Confirmar').click();
    cy.wait(1000);
    cy.get('a').contains('LISTA DE FUNCIONÁRIOS').click();
    cy.wait(1000);
  });
});
