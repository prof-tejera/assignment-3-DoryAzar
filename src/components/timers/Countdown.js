import Timer from "../generic/Timer";
import { useTimer } from "../../hooks/useTimer";
import PropTypes from 'prop-types';

const Countdown = (settings) => {

  /* 
   * Object for each type of timer for potential 
   * parallel running down the road
  */

  // Hook for the timer
  useTimer(settings);

  // Render the generic timer
  return <Timer />
  
}

Countdown.propTypes = {
  settings: PropTypes.object,
}

export default Countdown;
