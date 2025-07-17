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
		<footer className="footer footer-center bg-neutral text-neutral-content p-10">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
					{/* Company Info */}
					<div>
						<h3 className="font-display mb-4 text-2xl font-bold">
							BENSTORE
						</h3>
						<p className="text-neutral-content/80 mb-4">
							Your premier destination for high-quality bags and
							accessories. We offer the finest selection of
							premium products for every lifestyle.
						</p>
						<div className="flex gap-2">
							<a
								href="#"
								className="btn btn-circle btn-sm btn-ghost"
							>
								<FaFacebook />
							</a>
							<a
								href="#"
								className="btn btn-circle btn-sm btn-ghost"
							>
								<FaTwitter />
							</a>
							<a
								href="#"
								className="btn btn-circle btn-sm btn-ghost"
							>
								<FaInstagram />
							</a>
							<a
								href="#"
								className="btn btn-circle btn-sm btn-ghost"
							>
								<FaLinkedin />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="mb-4 text-lg font-semibold">
							Quick Links
						</h4>
						<ul className="space-y-2">
							<li>
								<Link to="/" className="link link-hover">
									Home
								</Link>
							</li>
							<li>
								<Link
									to="/?category=backpack"
									className="link link-hover"
								>
									Backpacks
								</Link>
							</li>
							<li>
								<Link
									to="/?category=messenger"
									className="link link-hover"
								>
									Messenger Bags
								</Link>
							</li>
							<li>
								<Link
									to="/?category=briefcase"
									className="link link-hover"
								>
									Briefcases
								</Link>
							</li>
							<li>
								<Link
									to="/?category=tote"
									className="link link-hover"
								>
									Tote Bags
								</Link>
							</li>
						</ul>
					</div>

					{/* Customer Service */}
					<div>
						<h4 className="mb-4 text-lg font-semibold">
							Customer Service
						</h4>
						<ul className="space-y-2">
							<li>
								<Link to="/contact" className="link link-hover">
									Contact Us
								</Link>
							</li>
							<li>
								<Link
									to="/shipping"
									className="link link-hover"
								>
									Shipping Info
								</Link>
							</li>
							<li>
								<Link to="/returns" className="link link-hover">
									Returns & Exchanges
								</Link>
							</li>
							<li>
								<Link to="/faq" className="link link-hover">
									FAQ
								</Link>
							</li>
							<li>
								<Link
									to="/size-guide"
									className="link link-hover"
								>
									Size Guide
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className="mb-4 text-lg font-semibold">
							Contact Info
						</h4>
						<div className="space-y-3">
							<div className="flex items-center gap-3">
								<FaMapMarkerAlt className="text-primary" />
								<span className="text-neutral-content/80">
									123 Store Street, City, State 12345
								</span>
							</div>
							<div className="flex items-center gap-3">
								<FaPhone className="text-primary" />
								<span className="text-neutral-content/80">
									+1 (123) 456-7890
								</span>
							</div>
							<div className="flex items-center gap-3">
								<FaEnvelope className="text-primary" />
								<span className="text-neutral-content/80">
									info@benstore.com
								</span>
							</div>
						</div>

						{/* Newsletter */}
						<div className="mt-6">
							<h5 className="mb-3 text-sm font-semibold">
								Newsletter
							</h5>
							<div className="join w-full">
								<input
									type="email"
									placeholder="Your email"
									className="input input-bordered join-item flex-1"
								/>
								<button className="btn btn-primary join-item">
									Subscribe
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="divider"></div>
				<div className="text-neutral-content/60 flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
					<p>&copy; {currentYear} BENSTORE. All rights reserved.</p>
					<div className="flex gap-6">
						<Link to="/privacy" className="link link-hover">
							Privacy Policy
						</Link>
						<Link to="/terms" className="link link-hover">
							Terms of Service
						</Link>
						<Link to="/sitemap" className="link link-hover">
							Sitemap
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
