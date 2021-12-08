import { addTimer, isEmptyState, addButtonVisible, openAddTimer, deleteTimer, 
    appRestarted, runWorkout, pauseWorkout, refresh, skipTimer, resetWorkout } from '../tests';

/// <reference types="cypress" />


// Test Controls
const timersToAdd = 15;
const localhost = 'http://localhost:3000';

describe('Testing Home', () => {   
    
    it('Cypress is working', () => {     
        expect(true).to.equal(true)   
    }) 
    
    it('The app is opened', () => {   
        refresh(localhost);
    })

    it('App started and is mounted correctly', () => {
        appRestarted();
    })

    it('empty state image is loaded', () => {
        isEmptyState();
    })

    it('"add set" button is loaded', () =>{
        addButtonVisible();
    })

    it('open "add set" form', () =>{
        openAddTimer();

    })

    it('add one timer randomly with default settings', () => {
        refresh(localhost);
        addTimer();
    })

    it(('remove the first timer in the list'), () => {
        deleteTimer(0);
    })

    it((`add ${timersToAdd} random default timers and validate total duration`), () => {
        addTimer(timersToAdd); 
    })

    it(('start workout'), () => {
        runWorkout(timersToAdd);
    })

    it(('start workout, pause it'), () => {
        refresh(localhost);
        addTimer(timersToAdd);
        cy.wait(2000)
        pauseWorkout();
    })

    it(('start workout, skip the first'), () => {
        refresh(localhost);
        addTimer(timersToAdd);
        cy.wait(2000)
        skipTimer(0);
    })

    it(('start workout, reset when it passes first timer'), () => {
        refresh(localhost);
        addTimer(timersToAdd);
        cy.wait(2000)
        skipTimer(0);
        resetWorkout();
    })


})