import React, {useContext, useState, useReducer} from 'react';
import {AppContext} from '../context/AppContext';
import '../css/style.css'

const Currencies = () => {
	const {dispatch} = useContext(AppContext);
	//const [state, dispatch] = useReducer(AppReducer, {currency: '£ Pound'});
	const [currency, setCurrency] = useState('');
	{/*
				<select className="custom-select" id="inputGroupSelect03" onChange={(event) => handleOnChange(event)} style={{backgroundColor: "lightgreen"}}>
	*/}
	
	const handleOnChange = (event) => {
		setCurrency(event.target.value);
		dispatch({type: 'CHG_CURRENCY', payload: event.target.value });
	};
	
	return (
		<div>
			<div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
				<label className="input-group-text" htmlFor="inputGroupSelect03" style={{color: "white", backgroundColor: "lightgreen", height: '30px'}}>Currency ({currency})</label>
				<select className="custom-select" id="inputGroupSelect03" onChange={handleOnChange} style={{backgroundColor: "lightgreen", width: "250px"}}>
					<option value="$ Dollar" name="dollar">$ Dollar</option>
					<option defaultValue value="£ Pound" name="pound">£ Pound</option>
					<option value="€ Euro" name="euro">€ Euro</option>
					<option value="&#8377; Rupee" name="rupee">&#8377; Rupee</option>
				</select>
			</div>
		</div>
    );
};

export default Currencies;
