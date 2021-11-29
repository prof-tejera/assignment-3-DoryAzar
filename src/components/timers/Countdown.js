import Timer from '../../components/generic/Timer';
import { useTimer } from "../../hooks/useTimer";

const Countdown = () => {

  /* 
   * Object for each type of timer for potential 
   * parallel running down the road
  */

  // Hook for the timer
  useTimer();

  // Render the generic timer
  return <Timer />
  
}

export default Countdown;
