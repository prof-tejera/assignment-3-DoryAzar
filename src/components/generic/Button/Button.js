import  { useContext } from 'react';
import {  TimerContext } from '../../../platform/TimerProvider';
import './Button.css';
import className from 'classnames';
import PropTypes from 'prop-types';

const Button =  ({...props}) => {
    const { selectedTimer } = useContext(TimerContext);
    const { 
        id,
        value = "",
        isIconButton = false, 
        iconName = "", 
        classifiers = "btn_primary", 
        iconVisible = true,
        children, 
        ...buttonAttributes} = props; 


    const buttonStyle = [{
        "icon_btn": isIconButton,
        [`icon_btn_${selectedTimer.toLowerCase()}`]: true,
        "btn": !isIconButton,
        [`btn_primary_${selectedTimer.toLowerCase()}`]: true
    }];

    const iconVisibility = [{
        "show": iconVisible,
        "hide": !iconVisible
    }];

    return (   

        // Returns a stylized text or icon button
        <div id={id} value={value} className={className(buttonStyle, classifiers)} { ...buttonAttributes} >
            { isIconButton && 
                <ion-icon value={value} class={className(iconVisibility)} name={iconName}></ion-icon>
            }
            {!isIconButton && children}
        </div>
    );

}

Button.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    isIconButton:  PropTypes.bool,
    iconName: PropTypes.string,
    classifiers: PropTypes.string,
    iconVisible: PropTypes.bool,
	onClick: PropTypes.func.isRequired
}

export default Button;
