/* eslint-disable no-undef */

const siteUrl = 'http://localhost:3000/';

describe( 'spec.cy.js', () => {
  it( 'should visit', () => {
    
    cy.visit(siteUrl) 
  
    cy.get('[data-test="one-button"]').should('be.visible');
    cy.get('[data-test="many-button"]').should('be.visible');

    cy.get('[data-test="one-button"]').should('be.visible').click();
    cy.wait(500)
    cy.get('[data-test="one-dog"]').should('be.visible');

    cy.get('[data-test="many-button"]').should('be.visible').click();
    cy.get('[data-test="many-dogs"]').should('be.visible');
  })
})