import React from 'react';
import { CalendarIcon, FolderIcon, HomeIcon, UsersIcon } from '@heroicons/react/24/outline';

import Image from 'next/image';

const navigation = [
	{ name: 'Dashboard', href: '#', icon: HomeIcon, current: false },
	{ name: 'Team', href: '#', icon: UsersIcon, current: true },
	{ name: 'Projects', href: '#', icon: FolderIcon, current: false },
	{ name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const Sidebar = () => {
	return (
		<div className='hidden md:fixed md:inset-y-0 md:flex md:w-60 md:flex-col'>
			<div className='flex min-h-0 flex-1 flex-col bg-gray-800'>
				<div className='flex flex-1 flex-col overflow-y-auto pt-5 pb-4'>
					<div className='flex flex-shrink-0 items-center px-4'>
						<Image src='/images/logo.png' alt='logo' width={50} height={50} />
					</div>
					<nav className='mt-5 flex-1 space-y-1 px-2'>
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className={classNames(
									item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
									'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
								)}>
								<item.icon
									className={classNames(
										item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
										'mr-3 flex-shrink-0 h-6 w-6'
									)}
									aria-hidden='true'
								/>
								{item.name}
							</a>
						))}
					</nav>
				</div>
				<div className='flex flex-shrink-0 bg-gray-700 p-4'>
					<a href='#' className='group block w-full flex-shrink-0'>
						<div className='flex items-center'>
							<div>
								<Image src='/images/employee.png' alt='emplyee' width={50} height={50} className='rounded-full' />
							</div>
							<div className='ml-3'>
								<p className='text-sm font-medium text-white'>Jake</p>
								<p className='text-xs font-medium text-gray-300 group-hover:text-gray-200'>View profile</p>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
