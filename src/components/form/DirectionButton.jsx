// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import {useStateContext} from "../../context/StateProvider.jsx";
import Validate from "../../utils/Validate.jsx";


const DirectionButton = ({id, text}) => {
    const {formPage, setFormPage} = useStateContext();
    const {setErrors} = useStateContext();
    const {formValues} = useStateContext();
    const {plan} = useStateContext();


    const handleClick = (e) => {
        // navigate forward or backward based on button id
        e.preventDefault()

        if (formPage === 2 && id === 'continue') {
            let valid = false;
            for (let key in plan) {
                if (plan[key].enable === true) {
                    valid = true;
                }
            }
            if (valid) {
                setFormPage((prevPage) => prevPage + 1);
            } else {
                alert('Please select a plan');
            }
        } else if (id === 'go-back') {
            setFormPage((prevPage) => prevPage - 1);
        } else if (id === 'continue') {
            setFormPage((prevPage) => prevPage + 1);
        }
    }
    const handleValidate = (e) => {
        e.preventDefault()
        console.log('clicked')
        let formErrors = Validate(formValues)
        setErrors(formErrors)
        if (Object.keys(formErrors).length === 0) {
            setFormPage(2)
        }
    }

    return (

        <button
            id={`button__${id}`}
            className={`button__${
                formPage === 1 && id === 'go-back' ? 'hidden' :
                    formPage === 1 && id === 'continue' ? 'solo' : 
                        formPage === 4 && id === 'continue' ? 'confirm' : 
                            formPage === 5 && id === 'go-back' ? 'hidden' : 
                                formPage === 5 && id === 'continue' ? 'hidden' : ''
            }`}
            onClick={
                formPage === 1 && id === 'continue' ? handleValidate : handleClick
            }
        >
            {
                formPage === 4 && id === 'continue' ? 'Confirm' : text
            }
        </button>

    );
};

DirectionButton.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
}

export default DirectionButton;
