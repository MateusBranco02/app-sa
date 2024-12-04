describe('Tela Cadastro de EPI', () => {
  it('Navegar até Cadastro de EPI', () => {
    // cadastrar//
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

    //retirar//

    cy.get('.botao').contains('EPI').click();
    cy.wait(1000);
    cy.get('.botao').contains('EPIS').click();
    cy.wait(1000);
    cy.get('.btnRetirar').contains('Retirar').click();
    cy.wait(1000);
    cy.get('.input-cpf').type('80356365897');
    cy.wait(1000);
    cy.get('.input-quantidade').type('10');
    cy.wait(1000);
    cy.get('.btnCadastrar').contains('Retirar').click();
    cy.wait(1000);

    //devolver//

    cy.get('.btnDevolver').contains('Devolver').click();
    cy.wait(1000);
    cy.get('.input-cpf').type('80356365897');
    cy.wait(1000);
    cy.get('.input-quantidade').type('10'); cy.wait(1000);
    cy.get('.btnCadastrar').contains('Devolver').click(); cy.wait(1000);


  });
});