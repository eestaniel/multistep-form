import React, {useState, useContext, useRef} from 'react';
import PropTypes from 'prop-types';

const StateContext = React.createContext();

export function useStateContext() {
    return useContext(StateContext);
}

export function StateProvider({children}) {
    // Form value state
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phone: '',
    });

    // Form page state
    const [formPage, setFormPage] = useState(3);

    // Plan duration state
    const [planDuration, setPlanDuration] = useState('monthly');

    // Toggle state for radio button in Plan.jsx
    const [toggleStateDuration, setToggleStateDuration] = useState(false);

    // Addon billing object
    const [addonBilling, setAddonBilling] = useState({
        'online-service': {
            enable: false,
            monthly: 1,
            yearly: 10,
        } ,
        'larger-storage': {
            enable: false,
            monthly: 2,
            yearly: 20,
        } ,
        'customizable-profile': {
            enable: false,
            monthly: 2,
            yearly: 20,
        }
    })

    const [isChecked, setIsChecked] = useState({
        'online-service' : false,
        'larger-storage' : false,
        'customizable-profile' : false,
    })


    return (
        <StateContext.Provider value={{
            formValues, setFormValues,
            formPage, setFormPage,
            planDuration, setPlanDuration,
            toggleStateDuration, setToggleStateDuration,
            addonBilling, setAddonBilling,
            isChecked, setIsChecked
        }}>
            {children}
        </StateContext.Provider>
    );
}

StateProvider.propTypes = {
    children: PropTypes.any,
}
