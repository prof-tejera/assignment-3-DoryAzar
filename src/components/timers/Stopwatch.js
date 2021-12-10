import Timer from "../generic/Timer";
import { useTimer } from "../../hooks/useTimer";
import PropTypes from 'prop-types';

const StopWatch = (settings)  =>  {

  /* 
   * Object for each type of timer for potential 
   * parallel running down the road
  */

  // Hook for the timer
  useTimer(settings);

  // Render the generic timer
  return <Timer />

}

StopWatch.propTypes = {
  settings: PropTypes.object,
}

export default StopWatch;
