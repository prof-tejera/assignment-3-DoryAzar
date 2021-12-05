import  { memo, useContext, useEffect } from 'react';
import './Display.css';
import PropTypes from 'prop-types';
import {  TimerContext } from '../../../platform/TimerProvider';
import * as utils from "../../../utils/helpers";
import className from 'classnames';

const Display = memo(() => {
    const { counter, timerCounting,  statusMessage, setStatusMessage, 
        messenger, isComplete, setCounter, startTime, selectedTimer } = useContext(TimerContext);

    const successStyle = [{
        [`${selectedTimer.toLowerCase()}`]: !isComplete, 
        "success": isComplete
    }];

    useEffect(() => {
        setCounter(startTime);
    }, [setCounter, startTime])

    useEffect(() => {
        setStatusMessage(messenger());
    }, [setStatusMessage, messenger]);
		
    return (

        // Return is stylized circular display
        <div className="display_circular">
            <div className="marker">
                { statusMessage && <p className={className("header", successStyle)}>{ statusMessage }</p>}
                {!isComplete && <p className={className("value neonText", successStyle)}>{ utils.formatTime(counter) }</p>}
                {isComplete && <p className={className("value neonText", successStyle)}>Nice!</p>}
            </div>
        
            { 
                // Animate if timer is on
                !!timerCounting && 
                    <>
                        <div className="display_circular_back-1"></div>
                        <div className="display_circular_back-2"></div>
                    </>
            }
        </div>

    );
});


Display.propTypes = {
	timerCounting: PropTypes.bool,
    statusMessage: PropTypes.string,
    counter: PropTypes.string
}


export default Display;
