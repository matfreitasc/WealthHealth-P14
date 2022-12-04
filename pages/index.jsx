import { useState } from 'react';
import DataTable from '../components/dataTables';
import CreateEmployee from '../components/CreateEmployee';
import Sidebar from '../components/Sidebar';
import { useSelector } from 'react-redux';

const tables = [
	{
		name: 'First Name',
		key: 'firstName',
	},
	{
		name: 'Last Name',
		key: 'lastName',
	},
	{
		name: 'Start Date',
		key: 'startDate',
	},
	{
		name: 'Department',
		key: 'department',
	},
	{
		name: 'Date of Birth',
		key: 'dob',
	},
	{
		name: 'Street',
		key: 'street',
	},
	{
		name: 'City',
		key: 'city',
	},
	{
		name: 'State',
		key: 'state',
	},
	{
		name: 'Zip Code',
		key: 'zip',
	},
];

export default function Home() {
	const [open, setOpen] = useState(false);
	const employees = useSelector((state) => state.employees.employees);
	return (
		<>
			<CreateEmployee isOpen={open} setOpen={setOpen} />
			<Sidebar />
			<div className='flex flex-1 flex-col md:pl-64'>
				<main className='flex-1'>
					<div className='py-10 space-y-10'>
						<div className='mx-auto max-w-7xl px-4 sm:px-6 md:px-8'>
							<div className='sm:flex sm:items-center'>
								<div className='sm:flex-auto'>
									<h1 className='text-xl font-semibold text-gray-900'>Current Employees</h1>
								</div>
								<div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'>
									<button
										type='button'
										onClick={() => setOpen(true)}
										className='inline-flex items-center justify-center rounded-md border border-transparent bg-gray-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto'>
										Create Employee
									</button>
								</div>
							</div>
							<DataTable headers={tables} data={employees} />
						</div>
					</div>
				</main>
			</div>
		</>
	);
}
