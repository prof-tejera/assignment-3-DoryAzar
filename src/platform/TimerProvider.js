import React, { useState, useContext, useCallback } from 'react';
import { T_STOPWATCH, T_COUNTDOWN, T_XY, T_TABATA, WORK_MODE, REST_MODE, formatTime } from '../utils/helpers';
import { SettingsContext } from './SettingsProvider';

export const TimerContext = React.createContext({});

export const TimerProvider = ({ children }) => {

    // Fetch content from Settings Provider
    const { ...settingsContext } = useContext(SettingsContext);

    const { 
        selectedTimer,
        startTime,
        stopTime,
        restStartTime,
        totalRounds, setSettings, hasNext
     } = settingsContext;

    const [statusMessage, setStatusMessage] = useState("");
    const [timerCounting, setTimerCounting] =  useState(false);
    const [counter, setCounter] = useState(startTime);
    const [currentRound, setCurrentRound] = useState(1);
    const [mode, setMode] = useState(WORK_MODE);
    const [isFrontSide, setIsFrontSide] = useState(true);
    const [isComplete, setToComplete] = useState(false);

    const [restRound, setRestRound] = useState(1);


    // Start the timer
    const startTimer = () => {
        setToComplete(false);
        
        // counting up
        if (T_STOPWATCH) 
            return setInterval(() => {
                startCounting();
            }, 1000);

        // counting down can be done with timeout
        else 
            return setTimeout(() => {
                startCounting();
            }, startTime)
    }

        // private function: start the counter
        const startCounting =  () => {
            switch(selectedTimer) {
                case T_STOPWATCH:
                    setCounter((counter) => counter + 1);
                    break;
                case T_TABATA:
                    setCounter((counter) => counter - 1);
                    if (counter === 0 && mode === REST_MODE) {
                        setMode(WORK_MODE);
                        setCounter(startTime);
                        setCurrentRound(currentRound + 1);
                    } else if (counter === 0 && mode === WORK_MODE) {
                        setMode(REST_MODE);
                        setCounter(restStartTime);
                        setRestRound(restRound + 1);
                    }
                    break;
                default:
                    // /CountDown and XY have the same principles
                    setCounter((counter) => counter - 1);
                    if (counter === 0) {
                        resetTimer(false);
                        setCurrentRound((currentRound) => currentRound + 1);
                    }
    
            }
        }

    // Pause the timer
    const pauseTimer = (interval) => {
        clearInterval(interval);
        clearTimeout(interval);
    }

    // Reset the timer: keeps the timer runner
    // but reinitializes the counter
    const resetTimer = (resetMode = true) => {
        
        setCounter(mode === WORK_MODE? startTime : restStartTime);

        if (!!resetMode) {
            setMode(WORK_MODE); 
            setToComplete(false);
            setTimerCounting(false);
            setCurrentRound(1);
            setRestRound(0);
        }
    }


    // Initializes the timer
    const initializeTimer = (settings) => {
        setSettings(settings);
        setCounter(mode === WORK_MODE? startTime : restStartTime);
        if (selectedTimer !== T_TABATA) {
            setCounter(mode === WORK_MODE? startTime : restStartTime);
            setMode(WORK_MODE); 
            setToComplete(false);
            setTimerCounting(false);
            setCurrentRound(1);
            setRestRound(0);
        }
    }

    // Resets all the timer controls upon  exit
    const exitTimer = useCallback(() => {
        // setTimerCounting(false);
        setToComplete(false);
        setCurrentRound(1);
    }, []);

    // End the timer
    const completeTimer = (interval) => {
        clearInterval(interval);
        clearTimeout(interval);
        if (!hasNext())
            toggleCounting();
        setCounter(stopTime);
        setCurrentRound(totalRounds);
        setRestRound(totalRounds);
        setMode(WORK_MODE);
        setToComplete(true);
        return true;
    }

    // Toggle timer on, off
    const toggleCounting  = () => {
        setTimerCounting(!timerCounting);
    }

    // Toggle between timer and settings card
    const toggleSide = () => {
        if (!isFrontSide) resetTimer();
        setIsFrontSide(!isFrontSide);
    }


    // Check if the timer completed
    const isTimerOver = () =>  {
        
        // countdown
        if (startTime >= stopTime) 
            return  timerCounting && counter <= stopTime && currentRound === totalRounds  
            && (selectedTimer === T_TABATA? restRound === totalRounds : true);
        
        // countup
        else
            return  timerCounting && counter >= stopTime && currentRound === totalRounds;
    }

    // Conversation handler
    const messenger = () => {

        // Use duration and elapsed time to control messaging
        const duration = mode === WORK_MODE? Math.abs(startTime - stopTime) : Math.abs(restStartTime - stopTime) ;
        const refTime = mode === WORK_MODE? startTime : restStartTime;
        const elapsed = duration !== 0? Math.abs(counter-refTime)/duration : 1;

        // Generic Beginning and Ending Messages
        if (mode === REST_MODE && (counter === startTime + 1 || counter === startTime - 1)) return "Breathe...";
        if (mode === WORK_MODE && (counter === startTime + 1 || counter === startTime - 1)) return "Let's move that body!";
        if (isComplete)  return "You made it! Again?";  

        // Breathing messages
        if (!timerCounting && counter !== startTime && counter !== stopTime ) return "Let's take a breath...";
        if (mode === REST_MODE && restRound === totalRounds && duration >=5 && elapsed >= 0.8) return  "Almost done!";
        if (mode === REST_MODE && duration >=5 && elapsed >= 0.8) return  "We're about to start again";
        if (mode === REST_MODE && duration >=5 && elapsed >= 0.6 ) return  "Take a deep breath";


        // Goal reaching messages
        if (duration >= 10 && elapsed >= 0.8 ) return "Your goal is near...";
        if (duration >= 10 && elapsed >= 0.6 ) return "Keep moving";

        // Main messages
        if (selectedTimer === T_XY) return `Round ${currentRound} of ${totalRounds}`;
        if ([T_STOPWATCH, T_COUNTDOWN].includes(selectedTimer)) return `Counting to ${formatTime(stopTime)}`;
        if (selectedTimer === T_TABATA) return `${mode} -  Round ${currentRound} of ${totalRounds}`;
    }

    return <TimerContext.Provider 
            value={{ 
                currentRound, setCurrentRound,
                mode, setMode,
                statusMessage, setStatusMessage, 
                timerCounting, toggleCounting, setTimerCounting,
                counter, setCounter,
                isFrontSide, toggleSide,
                isComplete, setToComplete,
                isTimerOver, startTimer, pauseTimer, resetTimer, initializeTimer, 
                exitTimer, completeTimer, messenger, 
                ...settingsContext

            }}>
            {children}
        </TimerContext.Provider>;
};

export default TimerProvider;