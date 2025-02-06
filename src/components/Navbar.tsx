import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa6';
import { SlBasket } from 'react-icons/sl';
import { FaRegHeart } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMenuSharp } from 'react-icons/io5';

function Navbar() {
	const navButtons = [
		{ icon: IoSearch, label: 'Search' },
		{ icon: FaRegHeart, label: 'Favorites' },
		{ icon: FaRegUser, label: 'Profile' },
	];

	return (
		<nav className="flex w-full items-center justify-center">
			<div className="mx-auto h-12 w-full max-w-[1920px] min-w-[300px] flex-col border-b-2 border-b-gray-300 bg-gray-100 lg:h-32">
				<div className="flex h-full w-full items-center justify-between lg:h-1/2">
					<span className="absolute font-display left-2 text-2xl font-semibold md:left-1/2 md:-translate-x-1/2 lg:top-4 lg:text-3xl">
						BENSTORE
					</span>
					<button className="hidden h-10 w-36 translate-x-6 items-center justify-center gap-2 rounded-xs md:flex">
						<FaPhoneAlt />
						<span> +1-123456789</span>
					</button>

					<div className="flex w-[170px] items-center justify-center gap-2">
						{navButtons.map((button, index) => (
							<button
								key={index}
								className="hidden h-10 w-10 items-center justify-center hover:cursor-pointer lg:flex"
							>
								<button.icon />
							</button>
						))}
					</div>
					<IoMenuSharp className="h-10 w-10 -translate-x-2 hover:cursor-pointer lg:hidden" />
				</div>
				<div className="relative hidden h-1/2 w-full items-center justify-center pl-5 lg:flex">
					<ul className="ml-5 flex items-center justify-center gap-16">
						<li>Home</li>
						<li>BackPack</li>
						<li>Messenger Bags</li>
						<li>Brifcase</li>
						<li>Totes</li>
						<li>Clutches</li>
					</ul>
					<div className="absolute right-6 flex items-center justify-center gap-2">
						<SlBasket className="text-xl" />
						<span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-800 text-center text-white">
							0
						</span>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
