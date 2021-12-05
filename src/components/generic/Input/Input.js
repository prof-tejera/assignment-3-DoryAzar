import { memo, useState, useEffect } from 'react';
import './Input.css';
import PropTypes from 'prop-types';

const Input = memo((props) => {

    const { label, placeholder, ...inputAttributes } = props;
    const [value, setValue] = useState(props.value);


    // Update the context with the new prop value
    useEffect(() => {
        setValue(props.value);
    }, [setValue, props.value]);
    

    const handleChange = (e) => {
        setValue(e.target.value);
        if (props.onChange) props.onChange(e);
    }

    return (
        <>
        {label && 
            <fieldset>
                <label className="settings-label" >{label}</label>
                <input  {...inputAttributes} value={value} placeholder={placeholder} onChange={handleChange} />
            </fieldset>
        }
        </>
    );

});

Input.propTypes = {
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
    placeholder: PropTypes.string,
}

export default Input;