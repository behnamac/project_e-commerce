import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa6';
import { SlBasket } from 'react-icons/sl';
import { FaRegHeart } from 'react-icons/fa';

function Navbar() {
	return (
		<nav>
			<div className="flex h-16 w-full min-w-[300px] items-center justify-between bg-gray-100">
				<div>
					<ul className="bg-red-500 flex items-center justify-center gap-3 w-[30%]">
						<li>Women</li>
						<li>Men</li>
						<li>Kids</li>
					</ul>
				</div>
				<span className="text-center text-3xl font-semibold">
					BENSTORE
				</span>
				<div className="flex items-center justify-center">
					<ul className="flex items-center justify-center gap-3">
						<li>HomePage</li>
						<li>About</li>
						<li>Contact</li>
						<li>Stores</li>
					</ul>
					<div className="flex items-center justify-center gap-2">
						<CiSearch />
						<FaRegUser />
						<FaRegHeart />
						<SlBasket />
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
