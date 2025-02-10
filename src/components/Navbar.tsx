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
	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/backPack', label: 'BackPack' },
		{ href: '/messengerBags', label: 'Messenger Bags' },
		{ href: '/brifcase', label: 'Brifcase' },
		{ href: '/totes', label: 'Totes' },
		{ href: '/clutches', label: 'Clutches' },
	];

	return (
		<nav className="c-center">
			<div className="c-space h-12 flex-col border-b-2 border-b-gray-300 bg-gray-100 lg:h-32">
				<div className="c-between h-full w-full  lg:h-1/2">
					<span className="absolute left-2 md:left-1/2 md:-translate-x-1/2 lg:top-4">
						<a
							href="/"
							className="font-display text-2xl font-semibold lg:text-3xl"
						>
							BENSTORE
						</a>
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
					<button className="h-10 w-10 -translate-x-2 hover:cursor-pointer lg:hidden">
						<IoMenuSharp className="h-full w-full" />
					</button>
				</div>
				<div className="relative hidden h-1/2 w-full items-center justify-center pl-5 lg:flex">
					<ul className="ml-5 flex items-center justify-center gap-16">
						{navLinks.map((link, index) => (
							<li
								key={index}
								className="flex h-full items-center justify-center"
							>
								<a
									href={link.href}
									className="flex h-full items-center justify-center"
								>
									{link.label}
								</a>
							</li>
						))}
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
