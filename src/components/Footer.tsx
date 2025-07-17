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
			<div className="c-center py-12">
				<div className="c-space flex-col gap-8 lg:flex-row lg:items-start">
					{/* Company Info */}
					<div className="w-full lg:w-1/4">
						<h3 className="font-display mb-4 text-2xl font-bold">
							BENSTORE
						</h3>
						<p className="mb-4 text-gray-300">
							Your premier destination for high-quality bags and
							accessories. We offer the finest selection of
							premium products for every lifestyle.
						</p>
						<div className="flex gap-4">
							<a
								href="#"
								className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white transition-colors hover:bg-blue-600"
							>
								<FaFacebook />
							</a>
							<a
								href="#"
								className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white transition-colors hover:bg-blue-600"
							>
								<FaTwitter />
							</a>
							<a
								href="#"
								className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white transition-colors hover:bg-blue-600"
							>
								<FaInstagram />
							</a>
							<a
								href="#"
								className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white transition-colors hover:bg-blue-600"
							>
								<FaLinkedin />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div className="w-full lg:w-1/4">
						<h4 className="mb-4 text-lg font-semibold">
							Quick Links
						</h4>
						<ul className="space-y-2">
							<li>
								<Link
									to="/"
									className="text-gray-300 transition-colors hover:text-white"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									to="/?category=backpack"
									className="text-gray-300 transition-colors hover:text-white"
								>
									Backpacks
								</Link>
							</li>
							<li>
								<Link
									to="/?category=messenger"
									className="text-gray-300 transition-colors hover:text-white"
								>
									Messenger Bags
								</Link>
							</li>
							<li>
								<Link
									to="/?category=briefcase"
									className="text-gray-300 transition-colors hover:text-white"
								>
									Briefcases
								</Link>
							</li>
							<li>
								<Link
									to="/?category=tote"
									className="text-gray-300 transition-colors hover:text-white"
								>
									Tote Bags
								</Link>
							</li>
						</ul>
					</div>

					{/* Customer Service */}
					<div className="w-full lg:w-1/4">
						<h4 className="mb-4 text-lg font-semibold">
							Customer Service
						</h4>
						<ul className="space-y-2">
							<li>
								<Link
									to="/contact"
									className="text-gray-300 transition-colors hover:text-white"
								>
									Contact Us
								</Link>
							</li>
							<li>
								<Link
									to="/shipping"
									className="text-gray-300 transition-colors hover:text-white"
								>
									Shipping Info
								</Link>
							</li>
							<li>
								<Link
									to="/returns"
									className="text-gray-300 transition-colors hover:text-white"
								>
									Returns & Exchanges
								</Link>
							</li>
							<li>
								<Link
									to="/faq"
									className="text-gray-300 transition-colors hover:text-white"
								>
									FAQ
								</Link>
							</li>
							<li>
								<Link
									to="/size-guide"
									className="text-gray-300 transition-colors hover:text-white"
								>
									Size Guide
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div className="w-full lg:w-1/4">
						<h4 className="mb-4 text-lg font-semibold">
							Contact Info
						</h4>
						<div className="space-y-3">
							<div className="flex items-center gap-3">
								<FaMapMarkerAlt className="text-blue-400" />
								<span className="text-gray-300">
									123 Store Street, City, State 12345
								</span>
							</div>
							<div className="flex items-center gap-3">
								<FaPhone className="text-blue-400" />
								<span className="text-gray-300">
									+1 (123) 456-7890
								</span>
							</div>
							<div className="flex items-center gap-3">
								<FaEnvelope className="text-blue-400" />
								<span className="text-gray-300">
									info@benstore.com
								</span>
							</div>
						</div>

						{/* Newsletter */}
						<div className="mt-6">
							<h5 className="mb-3 text-sm font-semibold">
								Newsletter
							</h5>
							<div className="flex gap-2">
								<input
									type="email"
									placeholder="Your email"
									className="flex-1 rounded-lg border border-gray-600 bg-gray-800 px-3 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
								/>
								<button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
									Subscribe
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-gray-800">
				<div className="c-center py-6">
					<div className="c-space flex-col gap-4 text-center text-sm text-gray-400 sm:flex-row sm:justify-between">
						<p>
							&copy; {currentYear} BENSTORE. All rights reserved.
						</p>
						<div className="flex gap-6">
							<Link to="/privacy" className="hover:text-white">
								Privacy Policy
							</Link>
							<Link to="/terms" className="hover:text-white">
								Terms of Service
							</Link>
							<Link to="/sitemap" className="hover:text-white">
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
