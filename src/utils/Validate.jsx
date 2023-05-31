import React from 'react';

const Validate = (formValues) => {
    let errors = {}
    // handle on blur
    if (formValues.type === 'blur') {
        const id = formValues.target.id

        switch (id) {
            // handle validation for name
            case 'name':
                // handle empty input
                if (!formValues.target.value.trim()) {
                    errors.name = 'Name required'
                }
                // handle mismatch pattern
                else if (formValues.target.value.match(/[^a-zA-Z ]+/g)) {
                    errors.name = 'Name must contain only letters'
                }
                // handle full name
                else {
                    let name = formValues.target.value.trim().split(' ')
                    if (name.length < 2) {
                        errors.name = 'Full name required'
                    }
                }
                break;
            // handle validation for email
            case 'email':
                // handle empty input
                if (!formValues.target.value.trim()) {
                    errors.email = 'Email required'
                }
                // handle mismatch pattern
                else {
                    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
                    if (!emailPattern.test(formValues.target.value)) {
                        errors.email = 'Must be a valid email address';
                    }
                }
                break;
            // handle validation for phone
            case 'phone':
                // handle empty input
                if (!formValues.target.value.trim()) {
                    errors.phone = 'Phone number required'
                }
                // handle mismatch pattern
                else {
                    const phonePattern = /^\+?1?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
                    if (!phonePattern.test(formValues.target.value)) {
                        errors.phone = 'Must be a valid phone number';
                    }
                }
                break;

        }
    }




    // handle button click
    else {

        // handle validation for name
        //handle empty input
        if (!formValues.name.trim()) {
            errors.name = 'Name required'
        }
        // handle mismatch pattern
        else if (formValues.name.match(/[^a-zA-Z ]+/g)) {
            errors.name = 'Name must contain only letters'
        }
        // handle full name
        else {
            let name = formValues.name.trim().split(' ')
            if (name.length < 2) {
                errors.name = 'Full name required'
            }
        }

        // handle validation for email
        // handle empty input
        if (!formValues.email.trim()) {
            errors.email = 'Email required'
        }
        // handle mismatch pattern
        else {
            const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            if (!emailPattern.test(formValues.email)) {
                errors.email = 'Must be a valid email address';
            }
        }

        // handle validation for phone
        // handle empty input
        if (!formValues.phone.trim()) {
            errors.phone = 'Phone number required'
        } else {
            const phoneNumberPattern = /^\+?1?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
            if (!phoneNumberPattern.test(formValues.phone)) {
                errors[formValues.target.id] = 'Must be a valid phone number'
            }
        }

    }


    return errors
};

export default Validate;
