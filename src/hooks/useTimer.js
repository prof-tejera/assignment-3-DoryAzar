import { useContext, useState } from 'react';
import {  TimerContext } from '../platform/TimerProvider'; 
import { useTimerStarter, useTimerInitializer  } from './timerhooks';
import { TIMER_SETTINGS, loadFromStorage } from '../utils/helpers';

export const useTimer = () => {

    const { ...context } = useContext(TimerContext);
    const { selectedTimer } = context;
    
    // Load from browser local storage if available. Otherwise load from timers.json
    const [inputSettings] = useState(loadFromStorage(selectedTimer) || TIMER_SETTINGS.settings[selectedTimer]);

    useTimerInitializer(inputSettings, context);

    useTimerStarter(context);

}