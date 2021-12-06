import { useContext  } from 'react';
import { TIMER_SETTINGS, T_STOPWATCH, T_COUNTDOWN, T_XY, T_TABATA } from '../utils/helpers';
import Card from '../components/generic/Card/Card';
import Input from '../components/generic/Input/Input';
import Button from '../components/generic/Button/Button';
import { TimerContext } from '../platform/TimerProvider';
import Panel from '../components/generic/Panel/Panel';
import Tabs from '../components/generic/Tabs/Tabs';
import { useHistory } from 'react-router-dom';

const CONFIG = TIMER_SETTINGS.configurations;

const AddView = () => {

    const { ...context } = useContext(TimerContext);
    
    const { selectedTimer, workouts, createWorkout, resetWorkout } = context;
    
    const settings = TIMER_SETTINGS.schema[selectedTimer];
    const defaultSettings = TIMER_SETTINGS.settings[selectedTimer];
    const history = useHistory();
    
    // Add & Go
    const addAndRedirect = () => {
        saveSettings();
        history.push("/");
    }

    // Save settings  to context
    const saveSettings  = () => {
        resetWorkout();
        const inputSettings = {};
        const title  =  document.querySelector("#title")?.value;
        settings.forEach((setting) => {
            const input = document.querySelector(`#${setting.id}`)?.value;
            inputSettings[setting.id] = parseInt(input) || 0;

        });

        // save settings in workouts
        createWorkout(title, selectedTimer, inputSettings);
    }
 
    return (
        <>  
            <div className="spacer-10"></div>
            <h1>What type of workout set timer?</h1>
            <div className="spacer-4"></div>
            <Tabs tabItems={[T_STOPWATCH, T_COUNTDOWN, T_XY, T_TABATA]} />
            <div className="spacer-6"></div>
            <h1>Settings</h1>
            <Panel>
                <Card side="front">
                     <div className="spacer-4"></div>
                    {settings && 
                    <div className="settings-form" id="inputs">
                        <Input      key="title"
                                    label="Workout set name"
                                    type="text"
                                    placeholder="Name for this workout set"
                                    value={`${selectedTimer} ${workouts.length}`}
                                    id="title"
                                    maxLength={20}
                        />
                        {settings.map((setting, index) => 
                            <Input  key={index}
                                    label={setting.label} 
                                    type="number"
                                    placeholder={`Between ${CONFIG[setting.type]?.min} and ${CONFIG[setting.type]?.max}`} 
                                    value={defaultSettings[setting.id]}
                                    id={setting.id}
                            />
                            )
                        }
                    </div>
                    }
                </Card>
            </Panel>
            <div className="btn_bar">
                    <Button 
                        id = "back_btn"
                        value="back"
                        isIconButton = {true}
                        onClick={history.goBack}
                        iconName="arrow-back-outline"
                        buttonTheme={selectedTimer}
                    />
                    <Button 
                    onClick={addAndRedirect}
                    buttonTheme={selectedTimer}>
                        Add and go
                    </Button>
                    <div className="horizontal-spacer-4"></div>
                    <Button 
                    onClick={saveSettings}
                    buttonTheme={selectedTimer}>
                        Keep adding
                    </Button>
            </div>
        </>

  );

}


export default AddView;
