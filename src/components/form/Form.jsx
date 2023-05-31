import React from 'react';
import FormInput from "./FormInput.jsx";
import PropTypes from 'prop-types';
import {useStateContext} from "../../context/StateProvider.jsx";

const Form = ({handleFocus, handleBlur, errors}) => {
    const { stateRef } = useStateContext();


    return (
        <form className="form-input-container">
            <FormInput
                id="name"
                form_header="Name"
                type="text"
                placeholder="e.g. Stephen King"
                pattern="[a-zA-Z ]+"
                maxLength={null}
                onFocus={handleFocus}
                onBlur={handleBlur}
                error={errors.name}
            />
            <FormInput
                id="email"
                form_header="Email Address"
                type="text"
                placeholder="e.g. stephenking@lorem.com"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                maxLength={254}
                onFocus={handleFocus}
                onBlur={handleBlur}
                error={errors.email}
            />
            <FormInput
                id="phone"
                form_header="Phone Number"
                type="text"
                placeholder="e.g. +1 234 567 890"
                pattern="^\+[1-9]\d{1,14}$"
                maxLength={15}
                onFocus={handleFocus}
                onBlur={handleBlur}
                error={errors.phone}
            />
        </form>
    );
};

Form.propTypes = {
    handleFocus: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    setFormValues: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
}

export default Form;
