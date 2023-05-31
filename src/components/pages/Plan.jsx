import React from 'react';
import {useStateContext} from "../../context/StateProvider.jsx";
import {ToggleSlider} from 'react-toggle-slider';


const Plan = () => {
    const {planDuration, setPlanDuration} = useStateContext();
    const {setFormPage} = useStateContext();
    const {toggleStateDuration, setToggleStateDuration} = useStateContext();

    const handleClick = (e) => {
        e.preventDefault()
        if (e.target.id === 'button__go-back') {
            setFormPage(1);
        } else if (e.target.id === 'button__continue') {
            setFormPage(3);
        }
    }

    const handleToggle = () => {
        if (toggleStateDuration === false) {
            setPlanDuration('yearly');
            setToggleStateDuration(true);
        } else {
            setPlanDuration('monthly');
            setToggleStateDuration(false);
        }
    }


    return (
        <div className={'plan-container'}>
            <h1 className="form__header">Select your plan</h1>
            <h2 className="form__subheader">You have the option of monthly or yearly billing.</h2>

            <div className="form__group-plan">
                <div className="form__group-plan__item">
                    <h3 className="form__group-plan__item__header">Arcade</h3>
                    {planDuration === 'monthly' ?
                        <p className="form__group-plan__item__price">$9/mo</p>
                        :
                        <>
                            <p className="form__group-plan__item__price">$90/yr</p>
                            <p className="form__group-plan__item__discount">2 months free</p>
                        </>
                    }
                </div>
                <div className="form__group-plan__item">
                    <h3 className="form__group-plan__item__header">Advanced</h3>
                    {planDuration === 'monthly' ?
                        <p className="form__group-plan__item__price">$12/mo</p>
                        :
                        <>
                            <p className="form__group-plan__item__price">$120/yr</p>
                            <p className="form__group-plan__item__discount">2 months free</p>
                        </>
                    }
                </div>
                <div className="form__group-plan__item">
                    <h3 className="form__group-plan__item__header">Pro</h3>
                    {planDuration === 'monthly' ?
                        <p className="form__group-plan__item__price">$15/mo</p>
                        :
                        <>
                            <p className="form__group-plan__item__price">$150/yr</p>
                            <p className="form__group-plan__item__discount">2 months free</p>
                        </>
                    }
                </div>
            </div>

            <div className="form__plan__duration-group">
                <ToggleSlider
                    classname={'form__plan__toggle'}
                    onToggle={handleToggle}
                    active={toggleStateDuration}
                />
            </div>

            <div className="form__plan__button-group">
                <button id="button__go-back" onClick={handleClick}>Go Back</button>
                <button id="button__continue" onClick={handleClick}>Continue</button>
            </div>

        </div>
    );
};

export default Plan;
