import { useContext  } from 'react';
import {  TimerContext } from '../../platform/TimerProvider';
import { TIMER_SETTINGS } from '../../utils/helpers';
import PropTypes from 'prop-types';
import Card from "./Card/Card";
import Display from "./Display/Display";
import Input from "./Input/Input";
import Button  from "./Button/Button";
import className from 'classnames';

const CONFIG = TIMER_SETTINGS.configurations;

const Timer = () => {

  const { ...context } = useContext(TimerContext);
  const { timerCounting, toggleCounting, toggleSide, completeTimer, selectedTimer, isComplete, setSettings, 
    resetWorkout, workouts, getWorkout, updateWorkout, currentWorkout, currentWorkoutId, deleteWorkout } = context;
  const settings = TIMER_SETTINGS.schema[selectedTimer];

  // play button style
  const playButtonStyle = [{
    "primary": true,
    "disabled": isComplete
  }];


  // Flips the card to display settings
  const flipSide = () => {
      toggleSide();
      const card = document.querySelector("#timer_panel");
      if (card) card.classList.toggle('is-flipped');
  }

  // Save settings  to context
  const saveSettings  = () => {
    const inputSettings = {};
    settings.forEach((setting) => {
      const input = document.querySelector(`#${setting.id}`)?.value;
      inputSettings[setting.id] = parseInt(input) || 0;

    });
    // save the settings to the context
    setSettings(inputSettings);

    // save settings in workouts
    const workout = getWorkout(currentWorkout);
    if (workout) {
        workout.settings = inputSettings;
        updateWorkout(workout);
        console.log(workouts);
    }
    flipSide();
  }


  const handleDelete  =  () =>  {
    const id = currentWorkoutId();
    deleteWorkout({"id": id});
    flipSide();
  }

  return (
    <>
      <Card side="front">
        <Display  />

        <div className="btn_bar">
            {timerCounting ? (
                  <Button 
                      id = "pause_btn"
                      value="pause"
                      classifiers="primary"
                      isIconButton={true} 
                      onClick={toggleCounting} 
                      iconName="pause"
                      buttonTheme={selectedTimer}
                  />
            ) : (

                  <Button 
                      id = "start_btn"
                      value="start"
                      classifiers={className(playButtonStyle)}
                      isIconButton={true} 
                      onClick={toggleCounting} 
                      iconName="play"
                      buttonTheme={selectedTimer}
                  />
            
            )}

            {timerCounting ? (
              <Button 
              id = "complete"
              value="complete"
              classifiers = "primary"
              isIconButton = {true}
              onClick={completeTimer}
              iconName="play-forward-outline"
              buttonTheme={selectedTimer}
            />
            
            )
            :  (
              <Button 
                id = "reset_btn"
                value="reset"
                classifiers = "primary"
                isIconButton = {true}
                onClick={resetWorkout}
                iconName="refresh-outline"
                buttonTheme={selectedTimer}
              />
            )}
          
            {settings && <Button 
              id = "settings_btn"
              value="settings"
              classifiers = "secondary"
              isIconButton = {true}
              onClick={flipSide}
              iconName="settings"
              buttonTheme={selectedTimer}
            />}
        </div>
      </Card>
      <Card side="back">
            <h1>Settings</h1>
            {settings && 
              <div className="settings-form" id="inputs">
                  {settings.map((setting, index) => 
                      <Input  key={index}
                              label={setting.label} 
                              type="number"
                              placeholder={`Between ${CONFIG[setting.type]?.min} and ${CONFIG[setting.type]?.max}`} 
                              value={context[setting.id]}
                              id={setting.id}
                      />
                      )
                  }
              </div>
              }
            <div className="btn_bar">
              <Button 
                  id = "back_btn"
                  value="back"
                  isIconButton = {true}
                  onClick={flipSide}
                  iconName="arrow-back-outline"
                  buttonTheme={selectedTimer}
              />
              <Button 
              onClick={saveSettings}
              buttonTheme={selectedTimer}>
                Save
              </Button>
              <Button 
                  id = "delete_btn"
                  value="delete"
                  isIconButton = {true}
                  onClick={handleDelete}
                  iconName="trash-outline"
                  buttonTheme={selectedTimer}
              />
            </div>
      </Card>
    </>
  );


  
}

Timer.propTypes = {
  settings: PropTypes.object,
}

export default Timer;
