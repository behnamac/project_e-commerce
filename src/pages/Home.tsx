import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import PlaceholderImage from '../components/PlaceholderImage';
import { products } from '../data/products';
import { FaStar, FaHeart, FaArrowRight } from 'react-icons/fa';

function Home() {
	const [selectedFilter, setSelectedFilter] = useState('Everything');

	const filters = [
		'Everything',
		'Popular',
		'Hot',
		'Recent',
		'Products',
		'Work',
	];

	// Filter products for different sections
	const exclusiveProducts = products.slice(0, 6);
	const newCollection = products.slice(6, 9);

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
				<div className="container mx-auto px-4 py-20">
					<div className="grid items-center gap-12 lg:grid-cols-2">
						{/* Hero Content */}
						<div className="space-y-8">
							<h1 className="text-5xl font-bold leading-tight text-gray-900 lg:text-6xl dark:text-white">
								Use Fashion Into Your{' '}
								<span className="text-blue-600 dark:text-blue-400">
									All Collection
								</span>
							</h1>
							<p className="text-xl text-gray-600 dark:text-gray-300">
								Shopping is a bit of a relaxing hobby for me,
								which is sometimes troubling.
							</p>
							<button className="btn btn-primary btn-lg">
								Learn More
								<FaArrowRight className="ml-2" />
							</button>
						</div>

						{/* Hero Image */}
						<div className="relative">
							<div className="relative overflow-hidden rounded-2xl">
								<PlaceholderImage
									width={600}
									height={600}
									className="h-[600px] w-full object-cover"
									alt="Fashion Model"
								/>
							</div>
						</div>
					</div>

					{/* Side Navigation */}
					<div className="absolute right-8 top-1/2 hidden -translate-y-1/2 space-y-4 lg:block">
						<div className="flex flex-col space-y-4">
							<button className="flex items-center gap-3 rounded-full bg-white/80 p-3 backdrop-blur-sm dark:bg-gray-800/80">
								<FaStar className="text-yellow-500" />
								<span className="text-sm font-medium">
									Favourite
								</span>
							</button>
							<button className="flex items-center gap-3 rounded-full bg-white/80 p-3 backdrop-blur-sm dark:bg-gray-800/80">
								<FaHeart className="text-red-500" />
								<span className="text-sm font-medium">
									Popular
								</span>
							</button>
							<div className="rounded-full bg-white/80 p-3 backdrop-blur-sm dark:bg-gray-800/80">
								<p className="text-xs text-gray-600 dark:text-gray-300">
									Our brands follow process
								</p>
								<button className="btn btn-primary btn-xs mt-2">
									Get All
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						<div className="flex items-center gap-4">
							<div className="avatar">
								<div className="w-16 rounded-full">
									<PlaceholderImage
										width={64}
										height={64}
										alt="Quality Product"
									/>
								</div>
							</div>
							<div>
								<h3 className="text-lg font-semibold">
									Quality Product
								</h3>
								<p className="text-sm text-gray-600 dark:text-gray-300">
									Lorem ipsum dolor sit amet consectet uruam.
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<div className="avatar">
								<div className="w-16 rounded-full">
									<PlaceholderImage
										width={64}
										height={64}
										alt="Best Production"
									/>
								</div>
							</div>
							<div>
								<h3 className="text-lg font-semibold">
									Best Production
								</h3>
								<p className="text-sm text-gray-600 dark:text-gray-300">
									Lorem ipsum dolor sit amet consectet uruam.
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<div className="avatar">
								<div className="w-16 rounded-full">
									<PlaceholderImage
										width={64}
										height={64}
										alt="100% Authentic"
									/>
								</div>
							</div>
							<div>
								<h3 className="text-lg font-semibold">
									100% Authentic
								</h3>
								<p className="text-sm text-gray-600 dark:text-gray-300">
									Lorem ipsum dolor sit amet consectet uruam.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Exclusive Products Section */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="mb-12">
						<h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
							Exclusive Products
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-300">
							Shopping is a bit of a relaxing hobby for me, which
							is sometimes troubling.
						</p>
					</div>

					{/* Filter Buttons */}
					<div className="mb-8 flex flex-wrap gap-4">
						{filters.map((filter) => (
							<button
								key={filter}
								onClick={() => setSelectedFilter(filter)}
								className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
									selectedFilter === filter
										? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
										: 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
								}`}
							>
								{filter}
							</button>
						))}
						<select className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white">
							<option>Filters</option>
						</select>
					</div>

					{/* Products Grid */}
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{exclusiveProducts.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				</div>
			</section>

			{/* New Collection Section */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="mb-12">
						<h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
							New Collection
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-300">
							Shopping is a bit of a relaxing hobby for me, which
							is sometimes troubling.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						{newCollection.map((product) => (
							<div
								key={product.id}
								className="group relative overflow-hidden rounded-2xl"
							>
								<img
									src={product.images[0]}
									alt={product.name}
									className="h-96 w-full object-cover transition-transform duration-300 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
								<div className="absolute bottom-6 left-6 text-white">
									<h3 className="text-xl font-semibold">
										{product.name}
									</h3>
									<p className="text-2xl font-bold">
										${product.price}
									</p>
								</div>
								<button className="absolute right-4 top-4 rounded-full bg-white/20 p-2 backdrop-blur-sm">
									<FaHeart className="text-white" />
								</button>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Limited Offer Banner */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="rounded-2xl bg-blue-600 p-8 text-white">
						<div className="grid items-center gap-8 lg:grid-cols-2">
							<div className="space-y-4">
								<h2 className="text-3xl font-bold">
									LIMITED OFFER
								</h2>
								<p className="text-xl">
									Get 40% off this sunday and win special
									gift.
								</p>
								<button className="btn btn-secondary">
									Grab It Now
									<FaArrowRight className="ml-2" />
								</button>
							</div>
							<div className="relative">
								<PlaceholderImage
									width={400}
									height={256}
									className="h-64 w-full rounded-lg object-cover"
									alt="Limited Offer"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Newsletter Section */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
							Subscribe our newsletter to get all updates
						</h2>
						<div className="flex flex-col gap-4 sm:flex-row">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 rounded-lg border border-gray-300 px-4 py-3 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
							/>
							<button className="btn btn-primary">
								Subscribe
							</button>
						</div>
						<p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
							You will be able to unsubscribe at any time. Read
							our Privacy Policy here.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
