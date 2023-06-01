import React from 'react';
import {useStateContext} from "../../context/StateProvider.jsx";
import './styles/Addons.css'


const Addons = () => {
    const {planDuration} = useStateContext();
    const {addonBilling, setAddonBilling} = useStateContext();
    const {isChecked, setIsChecked} = useStateContext();

    const handleCheck = (e) => {
        const {id, checked} = e.target;

        setIsChecked((prevIsChecked) => ({
            ...prevIsChecked,
            [id]: checked,
        }));

        setAddonBilling((prevAddonBilling) => ({
            ...prevAddonBilling,
            [id]: {
                ...prevAddonBilling[id],
                enable: checked,
            },
        }));
    };

    const handleParentClick = (id) => {
        setIsChecked((prevIsChecked) => ({
            ...prevIsChecked,
            [id]: !prevIsChecked[id], // Toggle the checked state
        }));

        setAddonBilling((prevAddonBilling) => ({
            ...prevAddonBilling,
            [id]: {
                ...prevAddonBilling[id],
                enable: !prevAddonBilling[id].enable, // Toggle the enable state
            },
        }));
    };

    return (
        <React.Fragment>
            <div className={'addon-container'}>
                <h1 className="addon__header">Pick add-ons</h1>
                <h2 className="addon__subheader">Add-ons help enhance your gaming experience</h2>

                <div className="addon__group-container">
                    <div
                        className={`addon__group__item ${addonBilling['online-service'].enable ? 'addon__group__item--active' : ''}`}
                         onClick={() => handleParentClick('online-service')
                    }
                    >
                        <input type="checkbox"
                               id={'online-service'}
                               checked={isChecked['online-service']}
                               onChange={handleCheck}
                        />
                        <div className="addon__group__item__subgroup">
                            <h3 className="addon__group__item__header">Online service</h3>
                            <p>Access to multiplayer games</p>
                        </div>
                        <p className="price">{
                            planDuration === 'monthly' ? '+$1/mo' : '+$10/yr'
                        }</p>

                    </div>
                    <div
                        className={`addon__group__item ${addonBilling['larger-storage'].enable ? 'addon__group__item--active' : ''}`}
                        onClick={() => handleParentClick('larger-storage')}>
                        <input type="checkbox"
                               id={'larger-storage'}
                               checked={isChecked['larger-storage']}
                               onChange={handleCheck}
                        />
                        <div className="addon__group__item__subgroup">
                            <h3 className="addon__group__item__header">Larger storage</h3>
                            <p>Extra 1TB of cloud save</p>
                        </div>
                        <p className="price">{
                            planDuration === 'monthly' ? '+$2/mo' : '+$20/yr'
                        }</p>
                    </div>
                    <div
                        className={`addon__group__item ${addonBilling['customizable-profile'].enable ? 'addon__group__item--active' : ''}`}
                        onClick={() => handleParentClick('customizable-profile')}>
                        <input type="checkbox"
                               id={'customizable-profile'}
                               checked={isChecked['customizable-profile']}
                               onChange={handleCheck}
                        />
                        <div className="addon__group__item__subgroup">
                            <h3 className="addon__group__item__header">Customizable profile</h3>
                            <p>Custom theme on your profile</p>
                        </div>
                        <p className="price">{
                            planDuration === 'monthly' ? '+$2/mo' : '+$20/yr'
                        }</p>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
};

export default Addons;
