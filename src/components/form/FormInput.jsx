// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import {useStateContext} from "../../context/StateProvider.jsx";


const FormInput = ({id, form_header, type, maxLength, pattern, placeholder, onFocus, onBlur, error}) => {
    const {formValues, setFormValues} = useStateContext();
    return (
        <>
            <label className={`form__input-header ${error ? 'error' : ''}`}
                   data-error={error}
            > {form_header} </label>
            <input
                type={type}
                id={id}
                className={`${error !== '' ? 'input-error' : ''}`}
                maxLength={maxLength}
                pattern={pattern}
                placeholder={placeholder}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={e => setFormValues({...formValues, [id]: e.target.value})}
                value={formValues[id]}
            />
        </>
    );
};

FormInput.propTypes = {
    id: PropTypes.string.isRequired,
    form_header: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
    pattern: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    onFocus: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    error: PropTypes.string,
}

export default FormInput;
