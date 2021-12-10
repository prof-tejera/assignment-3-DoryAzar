import { useContext, useEffect  } from 'react';
import { TimerContext } from '../platform/TimerProvider';
import Panel from "../components/generic/Panel/Panel";
import Button from "../components/generic/Button/Button";
import Dashboard from "../components/generic/Dashboard/Dashboard";
import DashboardList from "../components/generic/DashboardList";
import { useHistory } from 'react-router-dom';

const TimersView = () => {

	const { workouts, selectedTimer, setSelectedTimer, currentWorkout, hasNext, isEmpty
		, scrollToCurrentWorkout, resetTimer } = useContext(TimerContext);

	const history = useHistory();

	useEffect(() => {
		if (hasNext()) {
			setSelectedTimer(workouts[currentWorkout].type);
			scrollToCurrentWorkout();
		}
	}, [currentWorkout, workouts, hasNext, setSelectedTimer, scrollToCurrentWorkout]); 


	// handle redirect
	const handleRedirect = () => {
		resetTimer();
		history.push("/add");
	}

	return (
		<div className="horizontal_inline">
			{!isEmpty() && 
				<div className="vertical_inline">
				<Dashboard>
					<DashboardList activeMode={true}/>
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
				hasNext()? (workouts[currentWorkout].C)  : (workouts[currentWorkout-1].C)
				)}
			</Panel>
			<Button 
				data-test="add"
				onClick={handleRedirect}
				buttonTheme={selectedTimer}>
					Add sets
            </Button>
			</div>

			
		</div>

	);

}


export default TimersView;
