// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import {useStateContext} from "../../context/StateProvider.jsx";

const DirectionButton = ({ id, text }) => {
    const { setFormPage } = useStateContext();

    const handleClick = (e) => {
        // navigate forward or backward based on button id
        e.preventDefault()

        if (e.target.id === 'button__go-back') {
            setFormPage((prevPage) => prevPage - 1);
        } else if (e.target.id === 'button__continue') {
            setFormPage((prevPage) => prevPage + 1);
        }
    }

    return (

        <button
            id={`button__${id}`}
            onClick={handleClick}
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
