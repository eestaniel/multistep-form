import React from 'react';

const Validate = (formValues) => {
    let errors = {}
    // handle on blur
    if (formValues.type === 'blur') {
        // handle empty input
        if (!formValues.target.value.trim()) {
            errors[formValues.target.id] = `${formValues.target.id} required`
        }
        // handle mismatch pattern based on
        else if (formValues.target.validity.patternMismatch) {
            if (formValues.target.id === 'name') {
                errors[formValues.target.id] = 'Name must contain only letters'
            } else if (formValues.target.id === 'email') {
                errors[formValues.target.id] = 'Must be a valid email address'
            } else if (formValues.target.id === 'phone') {
                errors[formValues.target.id] = 'Must be a valid phone number'
            }
        }
    }
    // handle button click
    else {
        if (!formValues.name.trim()) {
            errors.name = 'Name required'
        }
        if (!formValues.email.trim()) {
            errors.email = 'Email required'
        }
        if (!formValues.phone.trim()) {
            errors.phone = 'Phone required'
        }
    }


    return errors
};

export default Validate;
