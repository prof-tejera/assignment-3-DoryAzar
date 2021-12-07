import  {useState} from 'react';
import { timers, addTimer, isEmptyState, addButtonVisible, openAddTimer, deleteTimer, appRestarted } from '../tests';

/// <reference types="cypress" />


describe('Testing Home', () => {   
    
    it('Cypress is working', () => {     
        expect(true).to.equal(true)   
    }) 
    
    it('The app is opened', () => {   
        cy.visit('http://localhost:3000') 
    })

    it('App started and is mounted correctly', () => {
        appRestarted();
    })

    it('empty state image is loaded', () => {
        isEmptyState()
    })

    it('"add set" button is loaded', () =>{
        addButtonVisible()
    })

    it('opening add set form', () =>{
        openAddTimer();
    })

    it('add one timer randomly with default settings', () => {
        addTimer();
    })

    it(('remove the first timer in the list'), () => {
        deleteTimer(0);
    })




})