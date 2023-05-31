import React from 'react';
import './NavigationSummary.css'
import {useStateContext} from "../../context/StateProvider.jsx";

const NavigationSummary = () => {

    const {formPage} = useStateContext();

    return (
        <div className={'form__navigation'}>
            <ul className="form__navigation__list">

                <li className={`form__navigation__list__item ${formPage === 1 ? 'currentPage' : ''}`}>
                    <div className="form__number">1</div>
                    <h2 className="form__navigation__list__item__header">STEP 1</h2>
                    <p className="form__navigation__list__item__paragraph">YOUR INFO</p>
                </li>

                <li className={`form__navigation__list__item ${formPage === 2 ? 'currentPage' : ''}`}>
                    <div className="form__number">2</div>

                    <h2 className="form__navigation__list__item__header">STEP 2</h2>
                    <p className="form__navigation__list__item__paragraph">SELECT PLAN</p>
                </li>

                <li className={`form__navigation__list__item ${formPage === 3 ? 'currentPage' : ''}`}>
                    <div className="form__number">3</div>

                    <h2 className="form__navigation__list__item__header">STEP 3</h2>
                    <p className="form__navigation__list__item__paragraph">ADD-ONS</p>
                </li>

                <li className={`form__navigation__list__item ${formPage >= 4 ? 'currentPage' : ''}`}>
                    <div className="form__number">4</div>

                    <h2 className="form__navigation__list__item__header">STEP 4</h2>
                    <p className="form__navigation__list__item__paragraph">SUMMARY</p>
                </li>

            </ul>
        </div>
    );
};

export default NavigationSummary;
