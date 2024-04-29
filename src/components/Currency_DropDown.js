import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const { dispatch } = useContext(AppContext);
    const [currency, setCurrency] = useState('£');


    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value; // Get the selected currency value
        setCurrency(newCurrency); // Update the currency state variable with the selected value
       console.log(newCurrency)
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    };


    

    return (
        <div>
            <div className='row'>
                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <select className="custom-select" id="inputGroupSelect03" onChange={handleCurrencyChange}>
                        <option defaultValue value="£">Pound</option>
                        <option value="$">US Dollar</option>
                        <option value="₹">Rupee</option>
                        <option value="€">Euro</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Currency;
