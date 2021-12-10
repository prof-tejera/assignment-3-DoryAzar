import { memo, useContext } from 'react';
import { TimerContext } from '../../../platform/TimerProvider';
import { Fragment } from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';
import className from 'classnames';

const Tabs = memo(({ tabItems }) => {

    const {selectedTimer, setSelectedTimer, setTimerCounting } = useContext(TimerContext);
    
    // select tab if included in tab list provided, otherwise select first item in tab list
    const tabSelected  = tabItems.includes(selectedTimer)? selectedTimer : tabItems[0];

    // Tab style
    const tabStyle = [{
        [`${tabSelected.toLowerCase()}`]: true, 
    }];
    
    const handleChange =  (e) => {
        const value = e.target.value || tabSelected;
        setSelectedTimer(value);
        setTimerCounting(false);
    }

    return  (
        <div className="btn_bar">
            <div className="tab_control">
                { tabItems.length <= 4 && tabItems.map((tabItem, index) =>
                    <Fragment key={index}>
                        <input  type="radio" 
                                name={"radio" + (index + 1)} 
                                value={tabItem} 
                                id={"tab-" + (index + 1)} 
                                checked={tabSelected === tabItem} 
                                onChange={handleChange}
                        />
                        <label htmlFor={"tab-" + (index + 1)} 
                                className={className(tabStyle, "tab_control_" + (index+1))}>
                            <p>{tabItem}</p>
                        </label>
                    </Fragment>
                )}
                <div className="tab_control_color"></div>
            </div>
        </div>
    );
});


Tabs.propTypes = {
    tabItems: PropTypes.arrayOf(PropTypes.string).isRequired,
    selected: PropTypes.string
}

export default Tabs;