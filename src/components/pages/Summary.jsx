import React, {useState} from 'react';
import {useStateContext} from "../../context/StateProvider.jsx";
import DirectionButton from "../form/DirectionButton.jsx";

const Summary = () => {
    const {setFormPage} = useStateContext();
    const {plan} = useStateContext();
    const {planDuration} = useStateContext();
    const {addonBilling} = useStateContext();
    const [enabledPlan, setEnabledPlan] = useState({
        name: '',
        price: '0',
    })
    const [total, setTotal] = useState(0);

    const handleChangePlan = () => {
        setFormPage(2);
    }

    const handleConfirm = () => {
        setFormPage((prevPage) => prevPage + 1);
    }

    function doEnablePlan() {
        for (const [key, value] of Object.entries(plan)) {
            if (value.enable === true) {
                setEnabledPlan({
                    name: key,
                    price: value[planDuration],
                })
                setTotal(value[planDuration])
            }
        }

    }

    function calculateTotal() {
        const totalValue = Object.entries(addonBilling).reduce((acc, [key, value]) => {
            if (value.enable === true) {
                return acc + value[planDuration];
            }
            return acc;
        }, enabledPlan.price);

        setTotal(totalValue);
    }




    /* On component load */
    React.useEffect(() => {
        doEnablePlan()
        calculateTotal()
    }, [total]);




    return (
        <div className={'summary-container'}>
            <h1 className="summary__header">Finishing up</h1>
            <h2 className="summary__subheader">Double-check everything looks OK before confirming.</h2>

            <div className="summary__contenet-container">
                <div className="summary_content__plan-group">
                    <h4 className="summary__content-header">{enabledPlan.name} ({planDuration})</h4>
                    <p className="summary__plan-change" onClick={handleChangePlan}>Change</p>
                    <p className="summary__content-price">
                        {enabledPlan.price}/{planDuration === 'monthly' ? 'mo' : 'yr'}
                    </p>
                </div>
                <hr/>
                <div className="summary__content-addons-group">
                    {Object.entries(addonBilling).map(([key, value]) => {
                        if (value.enable === true) {
                            return (
                                <div className="summary__content-addon" key={key}>
                                    <p className="summary__content-addon__name">{key}</p>
                                    <p className="summary__content-addon__price">
                                        {value[planDuration]}/{planDuration === 'monthly' ? 'mo' : 'yr'}
                                    </p>
                                </div>
                            )
                        }
                    })}
                </div>

                <div className="summary__content__total-group">
                    <p className="summary__content__total-text">Total (per month)</p>
                    <p className="summary__content__total-price">
                        +${total}/{planDuration === 'monthly' ? 'mo' : 'yr'}
                    </p>
                </div>
            </div>

            <div className="form__plan__button-group">
                <DirectionButton id={'go-back'} text={'Go Back'}/>
                <button className="confirm" onClick={handleConfirm}>Confirm</button>
            </div>

        </div>
    );
};

export default Summary;
