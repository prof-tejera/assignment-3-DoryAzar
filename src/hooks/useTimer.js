import { useContext, useState } from 'react';
import {  TimerContext } from '../platform/TimerProvider'; 
import { useTimerStarter, useTimerInitializer  } from './timerhooks';
import { TIMER_SETTINGS, loadFromStorage } from '../utils/helpers';

export const useTimer = (settings) => {

    const { ...context } = useContext(TimerContext);
    const { selectedTimer } = context;
    const timerSettings = settings.settings;
    
    /* Load from browser local storage if available. 
     * Otherwise, load from provided prop settings. 
     * In any case, default from timers.json
     */
    const [inputSettings] = useState(loadFromStorage(selectedTimer) || timerSettings || TIMER_SETTINGS.settings[selectedTimer]);

    useTimerInitializer(inputSettings, context);

    useTimerStarter(context);

}