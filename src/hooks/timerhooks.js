import { useEffect, useRef } from 'react';


// Hook used to start the timers
export const useTimerStarter = (context) => {
  
  const {timerCounting, startTimer, isTimerOver, pauseTimer, completeTimer, nextWorkout, setTimerCounting, isLastWorkout} = context;
  const runningTimer = useRef();
  const runningDelay = useRef();
  const completeTimerRef = useRef()
  completeTimerRef.current  = completeTimer;

  useEffect(() => {

    if (timerCounting && !isTimerOver()) runningTimer.current = startTimer()
    
    // adding one second timeout for switching context between timers
    else if (isTimerOver()) {
      if (isLastWorkout()) 
        completeTimer(runningTimer.current);
      else 
        runningDelay.current = setTimeout(nextWorkout, 1000);
    }
    
    else pauseTimer(runningTimer.current); 
    
    return () => {
      pauseTimer(runningTimer.current);
      clearTimeout(runningDelay.current);
    }
  }, [timerCounting, startTimer, isTimerOver, pauseTimer, completeTimer, setTimerCounting, nextWorkout, isLastWorkout]);

  return  runningTimer.current;

};

//Hook use to initialize timers
export const useTimerInitializer = (inputSettings, context, workouts) => {

  const {setSettings, exitTimer } = context; 

  useEffect(() => {
    
    setSettings(inputSettings);

    // on exit reinitialize to input settings
    return () => exitTimer();
    

  }, [setSettings, exitTimer, inputSettings]);  
}