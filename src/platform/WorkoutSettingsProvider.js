import React, { useState, useCallback } from 'react';
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
import { T_STOPWATCH, T_COUNTDOWN, T_XY, T_TABATA } from '../utils/helpers';

export const WorkoutSettingsContext = React.createContext({});

const WORKOUT_SETTINGS = [
    {"startTime": 0,"stopTime": 2},
    {"startTime": 0,"stopTime": 3},
    {"startTime": 10,"stopTime": 0},
    {"startTime": 10,"totalRounds": 2},
    {"startTime": 10,"restStartTime": 5,"totalRounds": 5}
]

const WORKOUTS = [
    { type: T_STOPWATCH, C: <Stopwatch  key={0} settings={WORKOUT_SETTINGS[0]} /> },
    { type: T_STOPWATCH, C: <Stopwatch  key={1} settings={WORKOUT_SETTINGS[1]} /> },
    { type: T_COUNTDOWN, C: <Countdown  key={2} settings={WORKOUT_SETTINGS[2]} /> },
    { type: T_XY, C: <XY key={3} settings={WORKOUT_SETTINGS[3]}/> },
    { type: T_TABATA, C: <Tabata key={4} settings={WORKOUT_SETTINGS[4]}/> }
  ];

export const WorkoutSettingsProvider = ({ children }) => {

    const [ workouts, setWorkouts ] = useState(WORKOUTS);
    const [ currentWorkout, setCurrentWorkout ]  = useState(0);

    // Checks if current workout is  within workouts
    const inWorkout = useCallback(() => currentWorkout < workouts.length,  [currentWorkout, workouts]);


    // Get the next workout
    const nextWorkout = () => {
        if (inWorkout())
            setCurrentWorkout(currentWorkout + 1);
    }

    // Reset Workout
    const resetWorkout = () => {
        setCurrentWorkout(0);
    }

    const calculateTotalWorkout = () => {

        // Compute total workout
            const totalWorkout = (total, settings) => {
            let { startTime = 0, stopTime = 0, totalRounds = 1, restStartTime = 0} = settings;
            let duration = Math.abs((startTime - stopTime) + restStartTime) * totalRounds; 
            return total + duration;
        }

        return WORKOUT_SETTINGS.reduce(totalWorkout, 0);
    }

    return <WorkoutSettingsContext.Provider 
            value={{ 
                workouts, setWorkouts,
                currentWorkout, setCurrentWorkout, nextWorkout, inWorkout,
                resetWorkout, calculateTotalWorkout
            }}>
            {children}
        </WorkoutSettingsContext.Provider>;
}

export default WorkoutSettingsProvider;