import { useContext, useEffect} from 'react';
import { TimerContext } from '../platform/TimerProvider';
import Panel from "../components/generic/Panel/Panel";
import { Link } from "react-router-dom";

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
        {!isEmpty() && <div>Current Workout: {getWorkoutProperty(hasNext()? currentWorkout : currentWorkout - 1, 'title')} - {selectedTimer}</div>}
      </div>
      <Panel id="timer_panel">
        {isEmpty()? (
          <>
            <img src={process.env.PUBLIC_URL + '/fitness.png'} alt="No Workouts found"/>
            <Link className="route-link" to="/add">Add a workout set</Link>
          </>
        ) : (
         hasNext()? (workouts[currentWorkout].C) : (workouts[currentWorkout-1].C)
        )}
      </Panel>
    </>

  );

}


export default TimersView;
