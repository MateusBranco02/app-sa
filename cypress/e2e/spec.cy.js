describe('Tela Cadastro de Funcionário', () => {
  it('Navegar até Cadastro de Funcionário', () => {
    cy.visit('http://localhost:5173/');
    cy.wait(1000);
    cy.get('.botao').contains('Funcionario').click();
    cy.wait(1000);
    cy.get('.button').contains('Cadastrar').click();
    cy.wait(1000);
  });
});