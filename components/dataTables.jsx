import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

export default function DataTable(props) {
	const data = props.data;

	const [currentPage, setCurrentPage] = useState(1);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const [search, setSearch] = useState('');

	const lastPostIndex = currentPage * rowsPerPage;
	const firstPostIndex = lastPostIndex - rowsPerPage;
	const currentPosts = data.slice(firstPostIndex, lastPostIndex);

	const totalPage = Math.ceil(data.length / rowsPerPage) || 1;

	return (
		<div className='mt-8'>
			<div className='py-2 flex flex-row justify-between w-full'>
				<div className=''>
					Show
					<select
						title='filter'
						value={rowsPerPage}
						onChange={(e) => {
							setRowsPerPage(e.target.value);
						}}
						className='border border-gray-300 rounded-md shadow-sm py-1 mx-2 px-2 bg-white text-base sm:text-sm'>
						<option>10</option>
						<option>25</option>
						<option>50</option>
						<option>100</option>
					</select>
					entries
				</div>
				<div className='max-w-7xl px-4 sm:px-6 lg:px-8 border-b-2 borde-gray-900 '>
					<div className='flex flex-1'>
						<label htmlFor='search-field' className='sr-only'>
							Search for employee
						</label>
						<div className='relative w-full text-gray-400 focus-within:text-gray-600'>
							<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center'>
								<MagnifyingGlassIcon className='h-5 w-5' aria-hidden='true' />
							</div>
							<input
								id='search-field'
								onChange={(e) => {
									setSearch(e.target.value);
								}}
								className='block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm'
								placeholder='Search for user'
								type='search'
								name='search'
							/>
						</div>
					</div>
				</div>
			</div>

			<div className='flex flex-col'>
				<div className='my-2 mx-4 overflow-x-hidden sm:-mx-8 lg:-mx-10'>
					<div className='inline-block min-w-full py-2 align-middle px-10 '>
						<div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
							<table className='min-w-full divide-y divide-gray-300 '>
								<thead className='bg-gray-50 '>
									<tr>
										{props.headers.map((header, index) => (
											<th
												key={index}
												scope='col'
												className='py-5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6 whitespace-nowrap '>
												<a href='#' className='group inline-flex '>
													{header.name}
													<span className='ml-2 flex-none rounded text-gray-400'>
														<ChevronDownIcon className='h-5 w-5' aria-hidden='true' />
													</span>
												</a>
											</th>
										))}
									</tr>
								</thead>
								<tbody className='divide-y divide-gray-200 bg-white'>
									{currentPosts.length > 0 ? (
										currentPosts
											.filter((row) => {
												return props.headers
													.map((header) => {
														return row[header.key].toString().toLowerCase().includes(search.toLowerCase());
													})
													.reduce((acc, curr) => acc || curr);
											})
											.map((data, index) => (
												<tr key={index}>
													{props.headers.map((header, index) => (
														<td
															key={index}
															className='py-4 pl-4 pr-3 whitespace-nowrap text-sm font-medium text-gray-900 sm:pl-6'>
															{data[header.key]}
														</td>
													))}
												</tr>
											))
									) : (
										<tr>
											<td className='text-md p-2 whitespace-nowrap items-center text-center' colSpan='9'>
												No data available in table
											</td>
										</tr>
									)}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-row items-center justify-between mt-8'>
				<div className=' flex flex-row items-center '>
					Showing {data.length >= rowsPerPage ? rowsPerPage : data.length} of {data.length} entries
				</div>
				<div className='flex flex-row space-x-10 items-center'>
					<button
						type='button'
						className='p-2 bg-gray-800 rounded-lg text-white w-20'
						onClick={() => {
							if (currentPage > 1) {
								setCurrentPage(currentPage - 1);
							}
						}}>
						<span className=''>Previous</span>
					</button>
					<div>page 1 of {totalPage}</div>
					<button
						type='button'
						className=' w-20 p-2 bg-gray-800 rounded-lg text-white '
						onClick={() => {
							if (currentPage < totalPage) {
								setCurrentPage(currentPage + 1);
							}
						}}>
						<span className=''>Next</span>
					</button>
				</div>
			</div>
		</div>
	);
}
