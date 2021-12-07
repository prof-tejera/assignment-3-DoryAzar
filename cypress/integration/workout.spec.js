/// <reference types="cypress" />

// Starting Up the application
// Test case 1: Validate Navigation
// Test case 2: Validate initial empty workout
// Test case 3: Add a timer
// Test case 4: Removing a timer



describe('Testing Home', () => {   
    it('is working', () => {     
        expect(true).to.equal(true)   
    }) 
    
    it('opens the app', () => {   
        cy.visit('http://localhost:3000') 
    })

    it('navigation items loaded', () => {
        cy.get('.navigation')
        .find('li').find('a')
        .should('have.length', 2)
    })

    it('empty state image loaded', () => {
        cy.get('.panel_inner')
        .find('img')
        .should('be.visible')
        .and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0)
        })
    })

    it('"add set" button loaded', () =>{
        cy.get('.btn_primary')
        .should('be.visible')
    })

    it('opening add set form', () =>{
        cy.get('.btn_primary')
        .click()
        cy.wait(2000)
        cy.url().should('include', '/add')

    })

    it('add first stopwatch timer with default settings', () => {
        const elementName =  'Stopwatch 0';
        cy.get('[data-test="redirect"]')
        .click()
        cy.wait(2000)
        cy.url().should('not.be', '/add')
        cy.get('#element0')
        .find('.primary_text')
        .should('have.text', elementName)

    })


})