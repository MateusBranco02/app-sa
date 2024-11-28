describe('Tela Cadastro de EPI', () => {
  it('Navegar até Cadastro de EPI', () => {
    cy.visit('http://localhost:5173/');
    cy.wait(1000);
    cy.get('.botao').contains('EPI').click();
    cy.wait(1000);
    cy.get('.button').contains('Cadastrar').click();
    cy.wait(1000);
    cy.get('.input-nome').type('Luva');
    cy.wait(1000);
    cy.get('.input-imagem').type('https://static.superproatacado.com.br/storage/1000/luva-nitrilica-wk23-poliester-t9-g-1649425217.jpg');
    cy.wait(1000);
    cy.get('.input-quantidade').type('20');
    cy.wait(1000);
    cy.get('.submit-button').contains('CADASTRAR').click();
    cy.wait(1000);
    cy.get('p').contains('Voltar').click();
    cy.get('p').contains('Voltar').click();
    cy.wait(1000);
    cy.get('.button').contains("Epi's").click();
    cy.wait(2000);
  });
});