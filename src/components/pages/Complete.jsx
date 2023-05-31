import React from 'react';
import './Complete.css'

const Complete = () => {
    return (
        <div className={'complete-container'}>
            <div className="complete__icon"></div>
            <h1 className="complete__title">Thank you!</h1>
            <p className="complete__paragraph">
                Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need
                support, please feel free to email us at support@loremgaming.com
            </p>
        </div>
    );
};

export default Complete;
