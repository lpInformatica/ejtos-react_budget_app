import React, {useContext} from 'react';
import {TiDelete} from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import '../css/style.css'

const ExpenseItem = (props) => {
    const {currency, dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
		const expense = {
			name: name,
			cost: 10,
		};
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
	}

    const decreaseAllocation = (name) => {
		const expense = {
			name: name,
			cost: 10,
		};
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency.substring(0, 1)} {props.cost}</td>
        <td><button id="increase" class="button" onClick={event => increaseAllocation(props.name)}>+</button></td>
        <td><button id="decrease" class="button" onClick={event => decreaseAllocation(props.name)}>-</button></td>
        <td><TiDelete id="delete" class="button" size='1.8em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
