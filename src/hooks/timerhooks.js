import { useEffect, useRef } from 'react';


// Hook used to start the timers
export const useTimerStarter = (context) => {
  
  const {timerCounting, startTimer, isTimerOver, pauseTimer, completeTimer, nextWorkout, setTimerCounting, inWorkout} = context;
  const runningTimer = useRef();
  const runningDelay = useRef();

  useEffect(() => {
    if (timerCounting && !isTimerOver()) runningTimer.current = startTimer()
    else if (isTimerOver()) runningDelay.current = setTimeout(inWorkout()? nextWorkout : completeTimer(runningTimer.current), 1000);
    else pauseTimer(runningTimer.current); 
    return () => {
      pauseTimer(runningTimer.current);
      clearTimeout(runningDelay.current);
    }
  }, [timerCounting, startTimer, isTimerOver, pauseTimer, completeTimer, setTimerCounting, nextWorkout, inWorkout]);

  return  runningTimer.current;

};

//Hook use to initialize timers
export const useTimerInitializer = (inputSettings, context) => {

  const {setSettings, exitTimer } = context; 

  useEffect(() => {
    
    setSettings(inputSettings);

    // on exit reinitialize to input settings
    return () => exitTimer();
    

  }, [setSettings, exitTimer, inputSettings]);  
}