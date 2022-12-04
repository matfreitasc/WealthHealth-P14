import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../slices/employeeSlice';
import Select from './Select';
import config from '../data/config.json';
import { XMarkIcon } from '@heroicons/react/20/solid';

const CreateEmployee = (props) => {
	const dispatch = useDispatch();

	const [employee, setEmployee] = useState({
		firstName: '',
		lastName: '',
		street: '',
		city: '',
		state: '',
		zip: '',
		dob: '',
		startDate: '',
		department: '',
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			employee.firstName &&
			employee.lastName &&
			employee.street &&
			employee.city &&
			employee.state &&
			employee.zip &&
			employee.dob &&
			employee.startDate &&
			employee.department
		) {
			dispatch(addEmployee(employee));
			setEmployee({
				firstName: '',
				lastName: '',
				street: '',
				city: '',
				state: '',
				zip: '',
				dob: '',
				startDate: '',
				department: '',
			});
			props.setOpen(false);
		}
	};
	const handleClose = () => {
		props.setOpen(false);
		setEmployee({
			firstName: '',
			lastName: '',
			street: '',
			city: '',
			state: '',
			zip: '',
			dob: '',
			startDate: '',
			department: '',
		});
	};

	return (
		<>
			{props.isOpen ? (
				<>
					<div className='absolute z-20 grid grid-cols-1 content-center justify-items-center bg-gray-500/80 h-screen w-full '>
						<div className='bg-white w-9/12 rounded-md p-10 relative '>
							<XMarkIcon className='w-10 h-10 absolute top-5 right-5 cursor-pointer' onClick={handleClose} />
							<div className='py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12'>
								<h3 className='text-xl font-medium text-warm-gray-900 border-b-2 border-spacing-2'>Create Employee</h3>
								<form className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'>
									<div>
										<label htmlFor='first-name' className='block text-sm font-medium text-warm-gray-900'>
											First name
										</label>
										<div className='mt-1'>
											<input
												type='text'
												name='first-name'
												id='first-name'
												autoComplete='given-name'
												onChange={(e) => setEmployee({ ...employee, firstName: e.target.value })}
												className='border block w-full rounded-md border-gray-400/90 py-3 px-4 text-warm-gray-900 shadow-sm'
											/>
										</div>
									</div>
									<div>
										<label htmlFor='last-name' className='block text-sm font-medium text-warm-gray-900'>
											Last name
										</label>
										<div className='mt-1'>
											<input
												type='text'
												name='last-name'
												id='last-name'
												autoComplete='family-name'
												onChange={(e) => setEmployee({ ...employee, lastName: e.target.value })}
												className='block w-full rounded-md border border-gray-400/90 py-3 px-4 text-warm-gray-900 shadow-sm'
											/>
										</div>
									</div>
									<div>
										<label htmlFor='dob' className='block text-sm font-medium text-warm-gray-900'>
											Date Of Birth
										</label>
										<div className='mt-1'>
											<input
												id='dob'
												name='dob'
												type='Date'
												onChange={(e) => setEmployee({ ...employee, dob: e.target.value })}
												className='block w-full rounded-md border border-gray-400/90 py-3 px-4 text-warm-gray-900 shadow-sm'
											/>
										</div>
									</div>
									<div>
										<label htmlFor='startDate' className='block text-sm font-medium text-warm-gray-900'>
											Start Date
										</label>
										<div className='mt-1'>
											<input
												id='startDate'
												name='startDate'
												type='Date'
												onChange={(e) => setEmployee({ ...employee, startDate: e.target.value })}
												className='block w-full rounded-md border border-gray-400/90 py-3 px-4 text-warm-gray-900 shadow-sm'
											/>
										</div>
									</div>
									<h1 className='col-span-2 text-xl font-medium text-warm-gray-900 border-b-2 border-spacing-2'>Address</h1>
									<div>
										<label htmlFor='street' className='block text-sm font-medium text-warm-gray-900'>
											Street
										</label>
										<div className='mt-1'>
											<input
												id='street'
												name='Street'
												type='text'
												onChange={(e) => setEmployee({ ...employee, street: e.target.value })}
												className='block w-full rounded-md border border-gray-400/90 py-3 px-4 text-warm-gray-900 shadow-sm'
											/>
										</div>
									</div>
									<div>
										<label htmlFor='city' className='block text-sm font-medium text-warm-gray-900'>
											City
										</label>
										<div className='mt-1'>
											<input
												id='city'
												name='city'
												type='text'
												onChange={(e) => setEmployee({ ...employee, city: e.target.value })}
												className='block w-full rounded-md border border-gray-400/90 py-3 px-4 text-warm-gray-900 shadow-sm'
											/>
										</div>
									</div>
									<div>
										<label htmlFor='state' className='block text-sm font-medium text-warm-gray-900'>
											State
										</label>
										<div className='mt-1'>
											<Select
												config={config.states}
												onChange={(e) => setEmployee({ ...employee, state: e.target.value })}
												name='States'
											/>
										</div>
									</div>
									<div>
										<label htmlFor='zip' className='block text-sm font-medium text-warm-gray-900'>
											Zip
										</label>
										<div className='mt-1'>
											<input
												id='zip'
												name='zip'
												type='text'
												onChange={(e) => setEmployee({ ...employee, zip: e.target.value })}
												className='block w-full rounded-md border border-gray-400/90 py-3 px-4 text-warm-gray-900 shadow-sm'
											/>
										</div>
									</div>
									<h1 className='col-span-2 text-xl font-medium text-warm-gray-900 border-b-2 border-spacing-2'>Department</h1>
									<div>
										<div className='mt-1'>
											<Select
												config={config.department}
												onChange={(e) => setEmployee({ ...employee, department: e.value })}
												name='Department'
											/>
										</div>
									</div>

									<div className='sm:col-span-2 sm:flex sm:justify-end'>
										<button
											type='submit'
											onClick={handleSubmit}
											className='mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gray-800 px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-slate-600 focus:outline-none focus:ring-2 sm:w-auto'>
											Save
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</>
			) : null}
		</>
	);
};

export default CreateEmployee;
