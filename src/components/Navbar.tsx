import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import { FaRegUser, FaRegHeart, FaBell } from 'react-icons/fa';
import { SlBasket } from 'react-icons/sl';
import { IoMenuSharp } from 'react-icons/io5';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectCartItemCount } from '../store/slices/cartSlice';
import { selectTheme, toggleTheme } from '../store/slices/themeSlice';

function Navbar() {
	const dispatch = useAppDispatch();
	const theme = useAppSelector(selectTheme);
	const cartItemCount = useAppSelector(selectCartItemCount);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navLinks = [
		{ href: '/', label: 'About us' },
		{ href: '/products', label: 'Products', hasDropdown: true },
		{ href: '/collection', label: 'Collection' },
		{ href: '/new', label: 'New' },
		{ href: '/sales', label: 'Sales' },
	];

	return (
		<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md dark:bg-gray-900/80">
			<div className="container mx-auto px-4">
				<div className="flex h-16 items-center justify-between">
					{/* Logo */}
					<Link to="/" className="flex items-center gap-2">
						<div className="text-2xl font-bold text-gray-900 dark:text-white">
							Trend
						</div>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex lg:items-center lg:space-x-8">
						{navLinks.map((link, index) => (
							<Link
								key={index}
								to={link.href}
								className="group relative flex items-center gap-1 text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
							>
								{link.label}
								{link.hasDropdown && (
									<svg
										className="h-4 w-4 transition-transform group-hover:rotate-180"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								)}
							</Link>
						))}
					</div>

					{/* Right Side Actions */}
					<div className="flex items-center gap-4">
						{/* Theme Toggle */}
						<button
							onClick={() => dispatch(toggleTheme())}
							className="btn btn-ghost btn-sm btn-circle"
							title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
						>
							{theme === 'light' ? (
								<FaMoon className="h-4 w-4" />
							) : (
								<FaSun className="h-4 w-4" />
							)}
						</button>

						{/* Notification */}
						<button className="btn btn-ghost btn-sm btn-circle">
							<FaBell className="h-4 w-4" />
						</button>

						{/* Wishlist */}
						<button className="btn btn-ghost btn-sm btn-circle">
							<FaRegHeart className="h-4 w-4" />
						</button>

						{/* Cart */}
						<Link
							to="/cart"
							className="btn btn-ghost btn-sm btn-circle relative"
						>
							<SlBasket className="h-4 w-4" />
							{cartItemCount > 0 && (
								<span className="badge badge-primary badge-xs absolute -right-1 -top-1">
									{cartItemCount}
								</span>
							)}
						</Link>

						{/* User Profile */}
						<button className="btn btn-ghost btn-sm btn-circle">
							<FaRegUser className="h-4 w-4" />
						</button>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="btn btn-ghost btn-sm btn-circle lg:hidden"
						>
							<IoMenuSharp className="h-5 w-5" />
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="lg:hidden">
						<div className="border-t border-gray-200 py-4 dark:border-gray-700">
							<div className="flex flex-col space-y-4">
								{navLinks.map((link, index) => (
									<Link
										key={index}
										to={link.href}
										className="text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
										onClick={() => setIsMenuOpen(false)}
									>
										{link.label}
									</Link>
								))}
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
