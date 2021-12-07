import {useState} from 'react';

let workoutCount  = 0;

export const timers =  ['Stopwatch', 'Countdown', 'XY', 'Tabata'];


// Empty State Page
export const isEmptyState = () => {
    cy.get('.panel_inner')
    .find('img')
    .should('be.visible')
    .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
    })
}

// Is addButtonVisible
export const addButtonVisible  = () => {
    cy.get('.btn_primary')
    .should('be.visible')
}

export const appRestarted = () => {
    cy.get('.navigation')
    .find('li').find('a')
    .should('have.length', 2)
    isEmptyState()
}

export const openAddTimer = () => {
    cy.get('[data-test="add"')
    .click()
    cy.url().should('include', '/add')
}
 
// Adding a timer
export const addTimer = () => {
    const choice  = rand(3)
    cy.get(`#tab-${choice+1}`)
    .check({force: true})
    cy.wait(1000)
    cy.get('[data-test="redirect"]')
    .click()
    cy.wait(2000)
    cy.url().should('not.be', '/add')
    cy.get(`#element${workoutCount}`)
    .find('.primary_text')
    .should('have.text', `${timers[choice]} ${workoutCount}`)
    workoutCount =  workoutCount + 1
}

// Removing timer
export const deleteTimer  = (index) => {
    cy.get(`#delete_btn_${index}`)
    .click()
    cy.wait(1000)
    cy.get(`#delete_btn_${index}`).should('not.exist')
}

// Generic helper functions
const rand = (maxNumber) => {
    return Math.floor(Math.random() * (maxNumber + 1));
}



