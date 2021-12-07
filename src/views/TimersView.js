import { useContext, useEffect, Fragment} from 'react';
import { TimerContext } from '../platform/TimerProvider';
import Panel from "../components/generic/Panel/Panel";
import Button from "../components/generic/Button/Button";
import Dashboard from "../components/generic/Dashboard/Dashboard";
import { useHistory } from 'react-router-dom';

const TimersView = () => {

	const { workouts, selectedTimer, setSelectedTimer, currentWorkout, hasNext, isEmpty, 
		calculateTotalWorkout, getWorkoutProperty, deleteCurrentWorkout, deleteWorkout, isCurrentWorkout, scrollToCurrentWorkout } = useContext(TimerContext);

	const history = useHistory();

	useEffect(() => {
		if (hasNext()) {
			setSelectedTimer(workouts[currentWorkout].type);
			scrollToCurrentWorkout();
		}
	}, [currentWorkout, workouts, hasNext, setSelectedTimer, scrollToCurrentWorkout]); 


	// Handle the deletion from the list
	const handleDelete = (e) => {
		const id = parseInt(e.target.attributes.value.value) || null;
		if (id) {
			deleteWorkout({"id": id});
		}	
	}

	// handle redirect
	const handleRedirect = () => {
		history.push("/add");
	}

	return (
		<div className="horizontal_inline">
			{!isEmpty() && 
				<div className="vertical_inline">
				<Dashboard>
					<h1>My Workout</h1>
					<div>{workouts.length} set(s) for a total of {calculateTotalWorkout()} seconds </div>
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
										id = "delete_btn"
										value={getWorkoutProperty(index, 'id')}
										isIconButton = {true}
										onClick={workout.id === currentWorkout? deleteCurrentWorkout : handleDelete}
										iconName="trash-outline"
										buttonTheme={selectedTimer}
									/>
								</div>
							</Fragment>
						)
					}
					</div>
				</Dashboard>
				{!isEmpty() && <div className="spacer-6"></div>}
				</div>
			} 
			<div className="vertical_inline">
			<Panel id="timer_panel">
				{isEmpty()? (
				<>
					<img src={process.env.PUBLIC_URL + '/fitness.png'} alt="No Workouts found"/>
					<p className="conversation">Go ahead and start creating your workout by adding sets</p>
					<div className="spacer-6"></div>
				</>
				) : (
				hasNext()? (workouts[currentWorkout].C) : (workouts[currentWorkout-1].C)
				)}
			</Panel>
			<Button 
				onClick={handleRedirect}
				buttonTheme={selectedTimer}>
					Add sets
            </Button>
			</div>

			
		</div>

	);

}


export default TimersView;
