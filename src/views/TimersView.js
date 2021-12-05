import { useContext, useEffect } from 'react';
import { TimerContext } from '../platform/TimerProvider';
import Panel from "../components/generic/Panel/Panel";

const TimersView = () => {

  const { workouts, selectedTimer, setSelectedTimer, currentWorkout, inWorkout } = useContext(TimerContext);

  useEffect(() => {
    if (inWorkout())
        setSelectedTimer(workouts[currentWorkout].type);
  }, [currentWorkout, workouts, inWorkout, setSelectedTimer]);  

  return (
    <>
      <div>
        {selectedTimer}
      </div>
      <Panel id="timer_panel">
        {inWorkout()? (workouts[currentWorkout].C) : (workouts[currentWorkout-1].C) }
      </Panel>
    </>

  );

}


export default TimersView;
