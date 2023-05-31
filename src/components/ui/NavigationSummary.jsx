import React from 'react';

const NavigationSummary = () => {
    return (
        <div className={'form__navigation'}>
            <ul className="form__navigation__list">

                <li className="form__navigation__list__item">
                    <h2 className="form__navigation__list__item__header">STEP 1</h2>
                    <p className="form__navigation__list__item__paragraph">YOUR INFO</p>
                </li>

                <li className="form__navigation__list__item">
                    <h2 className="form__navigation__list__item__header">STEP 2</h2>
                    <p className="form__navigation__list__item__paragraph">SELECT PLAN</p>
                </li>

                <li className="form__navigation__list__item">
                    <h2 className="form__navigation__list__item__header">STEP 3</h2>
                    <p className="form__navigation__list__item__paragraph">ADD-ONS</p>
                </li>

                <li className="form__navigation__list__item">
                    <h2 className="form__navigation__list__item__header">STEP 4</h2>
                    <p className="form__navigation__list__item__paragraph">SUMMARY</p>
                </li>

            </ul>
        </div>
    );
};

export default NavigationSummary;
