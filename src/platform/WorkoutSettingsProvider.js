import React, { useState } from 'react';
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
import { T_STOPWATCH, T_COUNTDOWN, T_XY, T_TABATA } from '../utils/helpers';

export const WorkoutSettingsContext = React.createContext({});


const WORKOUTS = [
    { id: 0, title: "workout 1", type: T_STOPWATCH, settings: {"startTime": 0,"stopTime": 2}, C: <Stopwatch  key={0} settings={{"startTime": 0,"stopTime": 2}} /> },
    { id: 1, title: "workout 2", type: T_STOPWATCH, settings: {"startTime": 0,"stopTime": 3} , C: <Stopwatch  key={1} settings={{"startTime": 0,"stopTime": 3}} /> },
    // { id: 2, title: "workout 3", type: T_COUNTDOWN, settings: {"startTime": 10,"stopTime": 0},  C: <Countdown  key={2} settings={{"startTime": 10,"stopTime": 0}} /> },
    // { id: 3, title: "workout 4", type: T_XY, settings: {"startTime": 10,"totalRounds": 2}, C: <XY key={3} settings={{"startTime": 10,"totalRounds": 2}}/> },
    // { id: 4, title: "workout 5", type: T_TABATA, settings: {"startTime": 10,"restStartTime": 5,"totalRounds": 5}, C: <Tabata key={4} settings={{"startTime": 10,"restStartTime": 5,"totalRounds": 5}}/> }
  ];

export const WorkoutSettingsProvider = ({ children }) => {

    const [ workouts, setWorkouts ] = useState(WORKOUTS);
    const [ currentWorkout, setCurrentWorkout ]  = useState(0);


    // CRUD: Create workout
    const createWorkout  = (title, type, settings) => {
        const id = workouts.length;
        setWorkouts([...workouts, {
            id, 
            title,
            type, 
            "C": componentizeWorkout(type, settings)
        }]);
        return id;
    }

    // CRUD: Retrieve workout
    const retrieveWorkout = ({ id }) => workouts.find(workout => `${workout.id}` === `${id}`);

    // CRUD: Update workout
    const updateWorkout =  workout => {
        const C = componentizeWorkout(workout.id, workout.type, workout.settings);
        const updatedWorkout =  {...workout, "C": C};
        const updatedWorkouts = workouts.map(w => (w.id === workout.id ? updatedWorkout : w));
        setWorkouts(updatedWorkouts);
    }

    // CRUD: Delete workout
    const deleteWorkout = ({ id }) => {
        const updatedWorkouts = workouts.filter(w => w.id !== id);
        setWorkouts(updatedWorkouts);
    }

    // Get workout based on position
    const getWorkout = (position) => !isEmpty() && hasNext()? workouts[position] : null;

    // Get workout position
    const getWorkoutPosition = ({ id }) => workouts.findIndex(workout => `${workout.id}` === `${id}`);

    // Get Workout Property
    const getWorkoutProperty = (index, property) => !isEmpty()? workouts[index][property] : null;
    
    const currentWorkoutId = () => getWorkoutProperty(currentWorkout, 'id');

    // Componentize the workout
    const componentizeWorkout =  (id, type, settings) => {
        switch(type) {
            case T_COUNTDOWN:
                return <Countdown settings={settings} key={id} />
            case T_XY:
                return <XY settings={settings} key={id} />
            case T_TABATA:
                return <Tabata settings={settings} key={id} />
            default:
                return <Stopwatch settings={settings} key={id} />
        } 
    }

    // Check if workout is empty
    const isEmpty = () => workouts.length ===  0;

    // Checks if current workout is  within workouts
    const hasNext = () => currentWorkout < workouts.length;


    // Get the next workout
    const nextWorkout = () => {
        if (hasNext())
            setCurrentWorkout(currentWorkout + 1);
    }

    // Reset Workout
    const resetWorkout = () => {
        setCurrentWorkout(0);
    }

    const calculateTotalWorkout = () => {

        // Compute total workout
        const totalWorkout = (total, workout) => {
            let { startTime = 0, stopTime = 0, totalRounds = 1, restStartTime = 0} = workout.settings;
            let duration = Math.abs((startTime - stopTime) + restStartTime) * totalRounds; 
            return total + duration;
        }

        return !isEmpty() ? WORKOUTS.reduce(totalWorkout, 0) : 0;
    }

    return <WorkoutSettingsContext.Provider 
            value={{ 
                workouts, setWorkouts, hasNext, isEmpty,
                currentWorkout, setCurrentWorkout, nextWorkout, 
                resetWorkout, calculateTotalWorkout,
                createWorkout, retrieveWorkout, updateWorkout, deleteWorkout, 
                componentizeWorkout, getWorkout, getWorkoutPosition, getWorkoutProperty, currentWorkoutId
            }}>
            {children}
        </WorkoutSettingsContext.Provider>;
}

export default WorkoutSettingsProvider;