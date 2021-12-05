import { useContext, useEffect} from 'react';
import { TimerContext } from '../platform/TimerProvider';
import Panel from "../components/generic/Panel/Panel";

const TimersView = () => {

  const { workouts, selectedTimer, setSelectedTimer, currentWorkout, hasNext, isEmpty, calculateTotalWorkout, getWorkoutProperty } = useContext(TimerContext);

  useEffect(() => {
    if (hasNext())
        setSelectedTimer(workouts[currentWorkout].type);
  }, [currentWorkout, workouts, hasNext, setSelectedTimer]);  

 
  return (
    <>
      <div>
        <div>Total Workouts: {workouts.length}</div>
        <div>Total Workouts Duration: {calculateTotalWorkout()} seconds</div>
        <div>Current Workout: {getWorkoutProperty(hasNext()? currentWorkout : currentWorkout - 1, 'title')} - {selectedTimer}</div>
      </div>
      <Panel id="timer_panel">
        {isEmpty()? (<div>Let's start your workout</div>) : (
         hasNext()? (workouts[currentWorkout].C) : (workouts[currentWorkout-1].C)
        )}
      </Panel>
    </>

  );

}


export default TimersView;
