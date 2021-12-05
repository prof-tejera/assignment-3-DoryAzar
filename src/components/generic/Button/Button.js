import { memo } from 'react';
import './Button.css';
import className from 'classnames';
import PropTypes from 'prop-types';
import { T_STOPWATCH } from '../../../utils/helpers';

const Button =  memo(({ buttonTheme  = T_STOPWATCH, ...props }) => {

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
        [`icon_btn_${buttonTheme.toLowerCase()}`]: true,
        "btn": !isIconButton,
        [`btn_primary_${buttonTheme.toLowerCase()}`]: true
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

});

Button.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    isIconButton:  PropTypes.bool,
    iconName: PropTypes.string,
    classifiers: PropTypes.string,
    iconVisible: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
    buttonTheme: PropTypes.string
}

export default Button;
