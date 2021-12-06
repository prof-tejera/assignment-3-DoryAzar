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
      {!isEmpty() && 
        <div>
          <div>Total Workouts: {workouts.length}</div>
          <div>Total Workouts Duration: {calculateTotalWorkout()} seconds</div>
          <div>Current Workout: {getWorkoutProperty(hasNext()? currentWorkout : currentWorkout - 1, 'title')} - {selectedTimer}</div>
        </div>
      }
      <Panel id="timer_panel">
        {isEmpty()? (
          <>
            <img src={process.env.PUBLIC_URL + '/fitness.png'} alt="No Workouts found"/>
            <p className="conversation">Go ahead and start creating your workout by adding sets</p>
            <Link className="route-link" to="/add">Add workout sets</Link>
          </>
        ) : (
         hasNext()? (workouts[currentWorkout].C) : (workouts[currentWorkout-1].C)
        )}
      </Panel>
      {!isEmpty() && <Link className="route-link" to="/add">Add workout sets</Link>}
    </>

  );

}


export default TimersView;
