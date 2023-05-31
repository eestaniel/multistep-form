import React from 'react';
import NavigationSummary from "./ui/NavigationSummary.jsx";
import PersonalInfo from "./pages/PersonalInfo.jsx";
import Plan from "./pages/Plan.jsx";
import Addons from "./pages/Addons.jsx";
import Summary from "./pages/Summary.jsx";
import {useStateContext} from "../context/StateProvider.jsx";


const MultiStepForm = () => {
        const {formPage} = useStateContext();
        const {formValues, setFormValues} = useStateContext();



        return (
            <div className={'form-container'}>
                <NavigationSummary/>
                {formPage === 1 && <PersonalInfo formValues={formValues} setFormValues={setFormValues}/>}
                {formPage === 2 && <Plan />}
                {formPage === 3 && <Addons />}
                {formPage === 4 && <Summary />}
            </div>
        );
    }
;

export default MultiStepForm;
