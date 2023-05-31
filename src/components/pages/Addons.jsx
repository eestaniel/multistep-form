import React from 'react';
import {useStateContext} from "../../context/StateProvider.jsx";
import DirectionButton from "../form/DirectionButton.jsx";


const Addons = () => {
    const {planDuration} = useStateContext();
    ;

    return (
        <React.Fragment>
            <div className={'addon-container'}>
                <h1 className="addon__header">Pick add-ons</h1>
                <h2 className="addon__subheader">Add-ons help enhance your gaming experience</h2>
                <div className="addon__group-container">
                    <div className="addon__group__item">
                        <input type="checkbox" id={'online-service'}/>
                        <h3 className="addon__group__item__header">Online Services</h3>
                        <p className="price">{
                            planDuration === 'monthly' ? '$1/month' : '$10/year'
                        }</p>

                    </div>
                </div>
            </div>

            <div className="form__plan__button-group">
                <DirectionButton id={'go-back'} text={'Go Back'}/>
                <DirectionButton id={'continue'} text={'Continue'}/>
            </div>
        </React.Fragment>

    );
};

export default Addons;
