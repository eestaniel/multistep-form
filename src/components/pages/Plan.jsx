import React from 'react';
import {useStateContext} from "../../context/StateProvider.jsx";
import {ToggleSlider} from 'react-toggle-slider';
import './styles/Plan.css';

const Plan = () => {
    const {plan, setPlan} = useStateContext();
    const {planDuration, setPlanDuration} = useStateContext();
    const {toggleStateDuration, setToggleStateDuration} = useStateContext();
    const {selectedPlan, setSelectedPlan} = useStateContext();


    const handlePlanSelection = (e) => {
        e.preventDefault();
        setSelectedPlan(e.currentTarget.id);
        // enable the plan that was clicked
        setPlan({
            ...plan, [e.currentTarget.id]: {
                ...plan[e.currentTarget.id], enable: true
            }
        })
        // disable the other plans
        for (let key in plan) {
            if (key !== e.currentTarget.id) {
                setPlan(prevPlan => ({
                    ...prevPlan,
                    [key]: {
                        ...prevPlan[key],
                        enable: false
                    }
                }));
            }
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
                <div
                    className={`form__group-plan__item ${selectedPlan === 'arcade' ? 'form__group-plan__item--selected' : ''}`}
                    id={'arcade'}
                    onClick={handlePlanSelection}
                >
                    <img src={'src/assets/images/icon-arcade.svg'} alt={'arcade-icon'}/>
                    <div className="form__group-sub-group">
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
                </div>
                <div
                    className={`form__group-plan__item ${selectedPlan === 'advanced' ? 'form__group-plan__item--selected' : ''}`}
                     id={'advanced'}
                     onClick={handlePlanSelection}
                >
                    <img src={'src/assets/images/icon-advanced.svg'} alt={'arcade-icon'}/>
                    <div className="form__group-sub-group">
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

                </div>
                <div
                    className={`form__group-plan__item ${selectedPlan === 'pro' ? 'form__group-plan__item--selected' : ''}`}
                    id={'pro'}
                    onClick={handlePlanSelection}
                >
                    <img src={'src/assets/images/icon-pro.svg'} alt={'arcade-icon'}/>
                    <div className="form__group-sub-group">
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

            </div>

            <div className="form__plan__duration-group">
                <ToggleSlider
                    classname={'form__plan__toggle'}
                    onToggle={handleToggle}
                    active={toggleStateDuration}
                />
            </div>


        </div>
    );
};

export default Plan;
