import React from 'react';
import DirectionButton from "../form/DirectionButton.jsx";
import './Footer.css';

const Footer = () => {

    return (
        <>
            <div className="footer">
                <div className="form__plan__button-group">
                    <DirectionButton id={'go-back'} text={'Go back'}/>
                    <DirectionButton id={'continue'} text={'Next Step'}/>
                </div>
            </div>
        </>
    );
};

export default Footer;
