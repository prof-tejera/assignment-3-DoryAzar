// Add helpers here. This is usually code that is just JS and not React code. Example: write a function that
// calculates number of minutes when passed in seconds. Things of this nature that you don't want to copy/paste
// everywhere.
import timers from '../utils/timers.json';


// read from a collection of timers
export const readCollection = (arr, keyName) => {
    return arr.map((item) => {
        return item[keyName];
    });
}


// Fetch timer info from collection of timers
export const getTimer = (timerName, arr) =>  {
    function isTimer(timer) {
        return timer.type === timerName;
    }
    return arr.find((isTimer)).C;
}

// match a property in a setting JSON
const isMatch = (setting, value) => {
    return setting.id === value; 
}


// Get a property from a setting JSON
export const getSetting = (value, settings) => {
    const match = settings.find((setting) => isMatch(setting, value));
    return match.value;
}


// Format time to string
export const formatTime = (timer) => {
    const seconds = `0${(timer % 60)}`.slice(-2)
    const fetchedMinutes = `${Math.floor(timer / 60)}`
    const minutes = `0${fetchedMinutes % 60}`.slice(-2)
    const hours = `0${Math.floor(timer / 3600)}`.slice(-2)
  
    return `${hours}:${minutes}:${seconds}`
}


// Load from storage
export const loadFromStorage = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch(e) {
        return false;
    }
}

// Save settings to storage
export const saveToStorage  = (key, value)  => {
    localStorage.setItem(key, JSON.stringify(value));
}


// Timer types
export const T_STOPWATCH = "Stopwatch";
export const T_COUNTDOWN = "Countdown";
export const T_TABATA = "Tabata";
export const T_XY = "XY";
export const WORK_MODE = "Work";
export const REST_MODE = "Rest";

// Timer settings from json
export const TIMER_SETTINGS = timers;