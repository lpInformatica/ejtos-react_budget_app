import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
	//const [budget, setBudget] = useState('');
	const {dispatch} = useContext(AppContext);
	const {budget, currency, remaining, budgetMaxValue, budgetIncreaseStep, expenses} = useContext(AppContext);
	

	const handleOnChange = (event) => {
		if (event.target.value > budgetMaxValue) {
			alert('The budget amount cannot exceed £ ' + budgetMaxValue);
			return
		}
		const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
		}, 0);
		if (event.target.value < totalExpenses) {
			alert('You cannot reduce the budget lower than the spending (£ ' + totalExpenses + ')');
			return
		}
		if (event.target.value < totalExpenses) {
			alert('The value cannot exceed remaining funds (£ ' + remaining + ')');
			return
		}
		dispatch({type: 'SET_BUDGET', payload: event.target.value });
		return
	}
	return (
		<div className='alert alert-secondary'>
{/*
		<span>Budget: £{budget}</span>
*/}
			<label>Budget: {currency.substring(0, 1)}</label>
			<input
				required='required'
				type='number'
				id='budget'
				value={budget}
				style={{marginLeft: '2rem' , size: 10, width: '120px'}}
				step={budgetIncreaseStep}
				onChange={event => handleOnChange(event)}>
			</input>
		</div>
	);
};

export default Budget;

