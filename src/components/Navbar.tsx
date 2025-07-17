import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import { FaRegUser, FaRegHeart } from 'react-icons/fa';
import { SlBasket } from 'react-icons/sl';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMenuSharp } from 'react-icons/io5';
import { useCart } from '../context/CartContext';

function Navbar() {
	const { state } = useCart();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const cartItemCount = state.items.reduce(
		(total, item) => total + item.quantity,
		0,
	);

	const navButtons = [
		{
			icon: IoSearch,
			label: 'Search',
			action: () => console.log('Search'),
		},
		{
			icon: FaRegHeart,
			label: 'Favorites',
			action: () => console.log('Favorites'),
		},
		{
			icon: FaRegUser,
			label: 'Profile',
			action: () => console.log('Profile'),
		},
	];

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/category/backpack', label: 'Backpacks' },
		{ href: '/category/messenger', label: 'Messenger Bags' },
		{ href: '/category/briefcase', label: 'Briefcases' },
		{ href: '/category/tote', label: 'Tote Bags' },
		{ href: '/category/clutch', label: 'Clutches' },
		{ href: '/category/tshirt', label: 'T-Shirts' },
		{ href: '/category/shoes', label: 'Shoes' },
	];

	return (
		<div className="navbar bg-base-100 shadow-lg">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<IoMenuSharp className="h-5 w-5" />
					</div>
					{isMenuOpen && (
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
						>
							{navLinks.map((link, index) => (
								<li key={index}>
									<Link
										to={link.href}
										className="hover:text-primary"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					)}
				</div>
				<Link to="/" className="btn btn-ghost font-display text-xl">
					BENSTORE
				</Link>
			</div>

			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					{navLinks.map((link, index) => (
						<li key={index}>
							<Link
								to={link.href}
								className="hover:text-primary transition-colors"
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</div>

			<div className="navbar-end">
				<div className="mr-4 hidden items-center gap-2 md:flex">
					<button className="btn btn-ghost btn-sm">
						<FaPhoneAlt className="h-4 w-4" />
						<span className="hidden lg:inline">+1-123456789</span>
					</button>
				</div>

				<div className="flex items-center gap-2">
					{navButtons.map((button, index) => (
						<button
							key={index}
							onClick={button.action}
							className="btn btn-ghost btn-circle"
							title={button.label}
						>
							<button.icon className="h-5 w-5" />
						</button>
					))}

					<Link
						to="/cart"
						className="btn btn-ghost btn-circle relative"
					>
						<SlBasket className="h-5 w-5" />
						{cartItemCount > 0 && (
							<span className="badge badge-primary badge-sm absolute -top-1 -right-1">
								{cartItemCount}
							</span>
						)}
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
