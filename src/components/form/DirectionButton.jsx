// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import {useStateContext} from "../../context/StateProvider.jsx";
import Validate from "../../utils/Validate.jsx";

const DirectionButton = ({id, text}) => {
    const {formPage, setFormPage} = useStateContext();
    const {setErrors} = useStateContext();
    const {formValues} = useStateContext();


    const handleClick = (e) => {
        // navigate forward or backward based on button id
        e.preventDefault()

        if (e.target.id === 'button__go-back') {
            setFormPage((prevPage) => prevPage - 1);
        } else if (e.target.id === 'button__continue') {
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
                    formPage === 1 && id === 'continue' ? 'solo' : ''
            }`}
            onClick={
                formPage === 1 && id === 'continue' ? handleValidate : handleClick
            }
        >
            {text}
        </button>
    );
};

DirectionButton.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
}

export default DirectionButton;
