import React from 'react';
import './NavigationSummary.css'
import {useStateContext} from "../../context/StateProvider.jsx";

const NavigationSummary = () => {

    const {formPage} = useStateContext();

    return (
        <div className={'form__navigation'}>
            <ul className="form__navigation__list">

                <li className={`form__navigation__list__item `}>
                    <div className={`form__number ${formPage === 1 ? 'currentPage' : ''}`}>1</div>
                    <div className="form_navigation-group">
                        <h2 className="form__navigation__list__item__header">STEP 1</h2>
                        <p className="form__navigation__list__item__paragraph">YOUR INFO</p>
                    </div>

                </li>

                <li className={`form__navigation__list__item`}>
                    <div className={`form__number ${formPage === 2 ? 'currentPage' : ''}`}>2</div>
                    <div className="form_navigation-group">
                        <h2 className="form__navigation__list__item__header">STEP 2</h2>
                        <p className="form__navigation__list__item__paragraph">SELECT PLAN</p>
                    </div>


                </li>

                <li className={`form__navigation__list__item `}>
                    <div className={`form__number ${formPage === 3 ? 'currentPage' : ''}`}>3</div>
                    <div className="form_navigation-group">
                        <h2 className="form__navigation__list__item__header">STEP 3</h2>
                    <p className="form__navigation__list__item__paragraph">ADD-ONS</p>
                    </div>


                </li>

                <li className={`form__navigation__list__item`}>
                    <div className={`form__number ${formPage >= 4 ? 'currentPage' : ''}`}>4</div>
                    <div className="form_navigation-group">
                        <h2 className="form__navigation__list__item__header">STEP 4</h2>
                        <p className="form__navigation__list__item__paragraph">SUMMARY</p>
                    </div>

                </li>

            </ul>
        </div>
    );
};

export default NavigationSummary;
