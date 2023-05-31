import React, {useState, useContext, useRef} from 'react';
import PropTypes from 'prop-types';

const StateContext = React.createContext();

export function useStateContext() {
    return useContext(StateContext);
}

export function StateProvider({children}) {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const [formPage, setFormPage] = useState(2);

    const [planDuration, setPlanDuration] = useState('monthly');

    const [toggleStateDuration, setToggleStateDuration] = useState(false);

    return (
        <StateContext.Provider value={{
            formValues, setFormValues,
            formPage, setFormPage,
            planDuration, setPlanDuration,
            toggleStateDuration, setToggleStateDuration,
        }}>
            {children}
        </StateContext.Provider>
    );
}

StateProvider.propTypes = {
    children: PropTypes.any,
}
