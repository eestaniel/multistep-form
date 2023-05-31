import React, {useState} from 'react';
import NavigationSummary from "./ui/NavigationSummary.jsx";
import PersonalInfo from "./pages/PersonalInfo.jsx";
import {useStateContext} from "../context/StateProvider.jsx";

const MultiStepForm = () => {
        const {formPage} = useStateContext();
        const {formValues, setFormValues} = useStateContext();



        return (
            <div className={'form-container'}>
                <NavigationSummary/>
                {formPage === 1 && <PersonalInfo formValues={formValues} setFormValues={setFormValues}/>}
            </div>
        );
    }
;

export default MultiStepForm;
