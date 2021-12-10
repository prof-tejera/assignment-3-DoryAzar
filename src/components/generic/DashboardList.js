import { memo, Fragment, useContext, useEffect } from 'react';
import { TimerContext } from '../../platform/TimerProvider';
import Button from './Button/Button';


const DashboardList =  memo(() => {

    const { workouts, selectedTimer, setSelectedTimer, resetTimer, currentWorkout, hasNext, 
		calculateTotalWorkout, getWorkoutProperty, deleteCurrentWorkout, deleteWorkout, isCurrentWorkout, scrollToCurrentWorkout } = useContext(TimerContext);


	useEffect(() => {
		if (hasNext()) {
			setSelectedTimer(workouts[currentWorkout].type);
			scrollToCurrentWorkout();
		}
	}, [currentWorkout, workouts, hasNext, setSelectedTimer, scrollToCurrentWorkout]); 


	// Handle the deletion from the list
	const handleDelete = (e) => {
		resetTimer();
		const id = parseInt(e.target.attributes.value.value);
		if (id === currentWorkout) 
			deleteCurrentWorkout()
		else if (id || id === 0) 
				deleteWorkout({"id": id});
	}

    return (
        <>
            <h1>My Workout</h1>
            <div>{workouts.length} set(s) for a total of <span id="total_duration">{calculateTotalWorkout()}</span> seconds </div>
            <div className="scrollable">
            {workouts.map((workout, index) => 
                    <Fragment key={index}>
                        <div id={`element${index}`}className="horizontal_inline">
                            <div tabIndex={index} className={isCurrentWorkout(index)? `${workout.type.toLowerCase()} selected` : ''} autoFocus={isCurrentWorkout(index)}>
                                <div className="list_item">
                                    <div className="primary_text">{getWorkoutProperty(index, 'title')}</div>
                                    <div className="secondary_text">{getWorkoutProperty(index, 'type')}</div>
                                </div>
                            </div>
                            <Button 
                                id = {`delete_btn_${index}`}
                                value={getWorkoutProperty(index, 'id')}
                                isIconButton = {true}
                                onClick={handleDelete}
                                iconName="trash-outline"
                                buttonTheme={selectedTimer}
                            />
                        </div>
                    </Fragment>
                )
            }
            </div>
        </>
    );
});


export default DashboardList;