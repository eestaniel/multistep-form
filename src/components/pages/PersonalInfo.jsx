import React from 'react';
import Form from "../form/Form.jsx";
import Validate from "../../utils/Validate.jsx";
import { useStateContext } from "../../context/StateProvider.jsx";
import './styles/PersonalInfo.css'

const PersonalInfo = () => {

    const { setFormValues } = useStateContext();
    const { errors, setErrors } = useStateContext();

    const handleFocus = (e) => {
        e.preventDefault()
        setErrors({...errors, [e.target.id]: null})
    }

    const handleBlur = (e) => {
        e.preventDefault()
        let inputErrors = Validate(e)
        setErrors({...errors, [e.target.id]: inputErrors[e.target.id]})
    }




    return (
        <div className={'info-container main-container'}>
            <h1 className="info__header">Personal info</h1>
            <p className="info__paragraph">Please provide your name, email address, and phone number.</p>
            <Form
                handleFocus={handleFocus}
                handleBlur={handleBlur}
                setFormValues={setFormValues}
                errors={errors}
            />
        </div>
    );
};



export default PersonalInfo;
