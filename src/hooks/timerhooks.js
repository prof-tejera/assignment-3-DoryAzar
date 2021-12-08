import { useEffect, useRef } from 'react';


// Hook used to start the timers
export const useTimerStarter = (context) => {
  
  const {timerCounting, startTimer, isTimerOver, pauseTimer, completeTimer, nextWorkout, setTimerCounting, hasNext, isLastWorkout} = context;
  const runningTimer = useRef();
  const runningDelay = useRef();
  const completeTimerRef = useRef()
  completeTimerRef.current  = completeTimer;


  // If it is the last Workout complete timers
  useEffect(() => {
    
    if (isLastWorkout()) {
      completeTimerRef.current(runningTimer.current);
    }
  }, [isLastWorkout])

  useEffect(() => {

    if (timerCounting && !isTimerOver()) runningTimer.current = startTimer()
    
    // adding one second timeout for switching context between timers
    else if (isTimerOver()) runningDelay.current = setTimeout(hasNext()? nextWorkout : completeTimer(runningTimer.current), 1000); 
    
    else pauseTimer(runningTimer.current); 
    
    return () => {
      pauseTimer(runningTimer.current);
      clearTimeout(runningDelay.current);
    }
  }, [timerCounting, startTimer, isTimerOver, pauseTimer, completeTimer, setTimerCounting, nextWorkout, hasNext]);

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