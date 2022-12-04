import React from 'react';

const Select = (props) => {
	return (
		<>
			<label htmlFor={props.name} className='block text-sm font-medium text-warm-gray-900 sr-only '>
				{props.name}
			</label>

			<select
				id={props.name}
				name={props.name}
				onChange={props.onChange}
				className='block w-full rounded-md border border-gray-400/90 py-3 px-4 text-warm-gray-900 shadow-sm'>
				{props.config.map((option, index) => (
					<option key={index} value={option.name}>
						{option.name}
					</option>
				))}
			</select>
		</>
	);
};

export default Select;
