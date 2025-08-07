import { Link } from 'react-router-dom';
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaLinkedin,
	FaEnvelope,
	FaPhone,
	FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-900 text-white">
			<div className="container mx-auto px-4 py-16">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
					{/* Company Info */}
					<div>
						<h3 className="mb-4 text-2xl font-bold">Trend</h3>
						<p className="mb-6 text-gray-400">
							Your premier destination for high-quality fashion
							and accessories. We offer the finest selection of
							premium products for every lifestyle.
						</p>
						<div className="flex gap-4">
							<a
								href="#"
								className="rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-blue-600 hover:text-white"
							>
								<FaFacebook className="h-4 w-4" />
							</a>
							<a
								href="#"
								className="rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-blue-400 hover:text-white"
							>
								<FaTwitter className="h-4 w-4" />
							</a>
							<a
								href="#"
								className="rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-pink-600 hover:text-white"
							>
								<FaInstagram className="h-4 w-4" />
							</a>
							<a
								href="#"
								className="rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-blue-700 hover:text-white"
							>
								<FaLinkedin className="h-4 w-4" />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="mb-6 text-lg font-semibold">
							Quick Links
						</h4>
						<ul className="space-y-3">
							<li>
								<Link
									to="/"
									className="text-gray-400 transition-colors hover:text-white"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									to="/products"
									className="text-gray-400 transition-colors hover:text-white"
								>
									Products
								</Link>
							</li>
							<li>
								<Link
									to="/collection"
									className="text-gray-400 transition-colors hover:text-white"
								>
									Collection
								</Link>
							</li>
							<li>
								<Link
									to="/new"
									className="text-gray-400 transition-colors hover:text-white"
								>
									New Arrivals
								</Link>
							</li>
							<li>
								<Link
									to="/sales"
									className="text-gray-400 transition-colors hover:text-white"
								>
									Sales
								</Link>
							</li>
						</ul>
					</div>

					{/* Customer Service */}
					<div>
						<h4 className="mb-6 text-lg font-semibold">
							Customer Service
						</h4>
						<ul className="space-y-3">
							<li>
								<Link
									to="/contact"
									className="text-gray-400 transition-colors hover:text-white"
								>
									Contact Us
								</Link>
							</li>
							<li>
								<Link
									to="/shipping"
									className="text-gray-400 transition-colors hover:text-white"
								>
									Shipping Info
								</Link>
							</li>
							<li>
								<Link
									to="/returns"
									className="text-gray-400 transition-colors hover:text-white"
								>
									Returns & Exchanges
								</Link>
							</li>
							<li>
								<Link
									to="/faq"
									className="text-gray-400 transition-colors hover:text-white"
								>
									FAQ
								</Link>
							</li>
							<li>
								<Link
									to="/size-guide"
									className="text-gray-400 transition-colors hover:text-white"
								>
									Size Guide
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className="mb-6 text-lg font-semibold">
							Contact Info
						</h4>
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<FaMapMarkerAlt className="text-blue-400" />
								<span className="text-gray-400">
									123 Fashion Street, City, State 12345
								</span>
							</div>
							<div className="flex items-center gap-3">
								<FaPhone className="text-blue-400" />
								<span className="text-gray-400">
									+1 (123) 456-7890
								</span>
							</div>
							<div className="flex items-center gap-3">
								<FaEnvelope className="text-blue-400" />
								<span className="text-gray-400">
									info@trend.com
								</span>
							</div>
						</div>

						{/* Newsletter */}
						<div className="mt-8">
							<h5 className="mb-4 text-sm font-semibold">
								Newsletter
							</h5>
							<div className="flex gap-2">
								<input
									type="email"
									placeholder="Your email"
									className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
								/>
								<button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
									Subscribe
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-12 border-t border-gray-800 pt-8">
					<div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 sm:flex-row">
						<p>&copy; {currentYear} Trend. All rights reserved.</p>
						<div className="flex gap-6">
							<Link
								to="/privacy"
								className="transition-colors hover:text-white"
							>
								Privacy Policy
							</Link>
							<Link
								to="/terms"
								className="transition-colors hover:text-white"
							>
								Terms of Service
							</Link>
							<Link
								to="/sitemap"
								className="transition-colors hover:text-white"
							>
								Sitemap
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
