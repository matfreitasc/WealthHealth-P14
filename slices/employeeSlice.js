import { createSlice } from '@reduxjs/toolkit';
import { ReactNode } from 'react';

const initialState = {
	employees: [],
	employee: {
		firstName: '',
		lastName: '',
		startDate: '',
		department: '',
		dob: '',
		strett: '',
		city: '',
		state: '',
		zip: '',
	},
};

export const employeeSlice = createSlice({
	name: 'createEmployee',
	initialState,
	reducers: {
		// take the received employee and add it to the state array
		addEmployee: (state, action) => {
			state.employees.push(action.payload);
		},
	},
});

export const { addEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
