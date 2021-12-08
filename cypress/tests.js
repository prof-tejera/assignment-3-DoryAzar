import { get } from "lodash";
import settings from "../src/utils/timers.json";


let workoutCount  = 0;
let indexCount = 0;


export const timers =  ['Stopwatch', 'Countdown', 'XY', 'Tabata'];
export let configuredTimers = [];

// Refresh the app
export const refresh = (localhost)  => {
    configuredTimers = [];
    workoutCount = 0;
    indexCount =  0;
    cy.visit(localhost)
}


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
export const addTimer = (number = 1) => {

    // add the 5 timers
    for(let i = 0; i < number; i++){
        openAddTimer();
        cy.wait(1000)
        const choice  = rand(3)
        const name = `${timers[choice]} ${workoutCount}`
        cy.get(`#tab-${choice+1}`)
        .check({force: true})
        cy.wait(1000)
        cy.get('[data-test="redirect"]')
        .click()
        cy.wait(2000)
        cy.url().should('not.be', '/add')
        cy.get(`#element${indexCount}`)
        .find('.primary_text')
        .should('have.text', name)
        const id  = workoutCount;
        configuredTimers.push(name)
        workoutCount++;
        indexCount++;
    }

    //validate total duration
    const totalDuration = getWorkoutDuration();
    cy.get('#total_duration')
    .should('have.text', totalDuration)  

}

// Removing timer
export const deleteTimer  = (index) => {
    const name  = configuredTimers[index];
    cy.get(`#delete_btn_${index}`)
    .click()
    cy.wait(1000)
    cy.get(`#delete_btn_${index}`).should('not.exist')
    configuredTimers = configuredTimers.filter(w => w.name === name);
    indexCount--;
}

// Run workout
export const runWorkout = (timersToAdd) => {

    // 1 second is added in between timers 
    const transitionTime = timersToAdd + 1;

    const totalWorkout = (getWorkoutDuration()+transitionTime) * 1000;
    cy.get('#start_btn')
    .click()
    cy.wait(1000)
    cy.get('#start_btn').should('not.exist')
    cy.wait(totalWorkout)
    cy.wait(5000)  // test safety transition
    cy.get('#start_btn').should('exist')
}


// Pause workout
export const pauseWorkout = () => {
    cy.get('#start_btn')
    .click()
    cy.wait(1000)
    cy.get('#pause_btn')
    .should('exist')
    .click()
    cy.wait(1000)
    cy.get('#start_btn').should('exist')
    cy.get('#reset_btn').should('exist')
}

// Skip workout
export const skipTimer = (index) => {
    cy.get('#start_btn')
    .click()
    cy.wait(1000)
    cy.get('#complete').should('exist')
    .click()
    cy.get(`[tabindex=${index+1}]`).should('have.class', 'selected')
}

// Reset workout
export const resetWorkout = () => {
    cy.get('#pause_btn')
    .should('exist')
    .click()
    cy.wait(1000)
    cy.get('#reset_btn')
    .should('exist')
    .click()
    cy.wait(1000)
    cy.get("[tabindex=0]").should('have.class', 'selected')

}

// Get workout duration from the UI
export const getWorkoutDuration = () => {
        
        // Compute total workout
        const totalWorkout = (total, timer) => {
            const type = timer.split(" ");
            let { startTime = 0, stopTime = 0, totalRounds = 1, restStartTime = 0} = settings.settings[type[0]];
            let duration = Math.abs((startTime - stopTime) + restStartTime) * totalRounds; 
            return total + duration;
        }

        return configuredTimers.length !== 0 ? configuredTimers.reduce(totalWorkout, 0) : 0;
    
}

// Generic helper functions
const rand = (maxNumber) => {
    return Math.floor(Math.random() * (maxNumber + 1));
}



