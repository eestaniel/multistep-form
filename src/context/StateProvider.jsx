import React, { useState, useContext, useRef }  from 'react';
import PropTypes from 'prop-types';

const StateContext = React.createContext();

export function useStateContext() {
    return useContext(StateContext);
}

export function StateProvider ({ children })  {
    const [formValues, setFormValues] = useState({
            name: '',
            email: '',
            phone: '',
        });

    const [formPage, setFormPage] = useState(1);

    return (
        <StateContext.Provider value={{formValues, setFormValues, formPage, setFormPage}}>
            {children}
        </StateContext.Provider>
    );
}

export function StateRefProvider ({ children })  {
    const stateRef = useRef({
        name: '',
        email: '',
        phone: '',
    });

        return (
        <StateContext.Provider value={stateRef}>
            {children}
        </StateContext.Provider>
        );
}


StateProvider.propTypes = {
    children: PropTypes.any,
}

StateRefProvider.propTypes = {
    children: PropTypes.any,
}
