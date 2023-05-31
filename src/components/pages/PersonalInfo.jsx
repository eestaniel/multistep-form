import React from 'react';
import Form from "../form/Form.jsx";
import Validate from "../../utils/Validate.jsx";
import { useStateContext } from "../../context/StateProvider.jsx";

const PersonalInfo = () => {

    const [errors, setErrors] = React.useState({})
    const { formValues, setFormValues } = useStateContext();
    const {setFormPage} = useStateContext();


    const handleFocus = (e) => {
        e.preventDefault()
        setErrors({...errors, [e.target.id]: null})
    }

    const handleBlur = (e) => {
        e.preventDefault()
        let inputErrors = Validate(e)
        setErrors({...errors, [e.target.id]: inputErrors[e.target.id]})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let formErrors = Validate(formValues)
        setErrors(formErrors)
        if (Object.keys(formErrors).length === 0) {
            setFormPage(2)
        }
    }


    return (
        <div className={'info-container'}>
            <h1 className="info__header">Personal info</h1>
            <p className="info__paragraph">Please provide your name, email address, and phone number.</p>
            <Form
                handleFocus={handleFocus}
                handleBlur={handleBlur}
                setFormValues={setFormValues}
                errors={errors}
            />
            <button id="form__button" onClick={handleSubmit}>Next Step</button>

        </div>
    );
};



export default PersonalInfo;
