import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

function Home() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [selectedCategory, setSelectedCategory] = useState<string>('all');
	const [searchTerm, setSearchTerm] = useState('');

	// Initialize category from URL params
	useEffect(() => {
		const categoryFromUrl = searchParams.get('category');
		if (categoryFromUrl) {
			setSelectedCategory(categoryFromUrl);
		}
	}, [searchParams]);

	const handleCategoryChange = (category: string) => {
		setSelectedCategory(category);
		if (category === 'all') {
			setSearchParams({});
		} else {
			setSearchParams({ category });
		}
	};

	const filteredProducts = products.filter((product) => {
		const matchesCategory =
			selectedCategory === 'all' || product.category === selectedCategory;
		const matchesSearch =
			product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			product.description
				.toLowerCase()
				.includes(searchTerm.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	return (
		<div className="min-h-screen">
			<Hero />

			<section className="c-center py-12">
				<div className="c-space flex-col gap-8">
					<div className="text-center">
						<h2 className="mb-4 text-3xl font-bold text-gray-800">
							Our Products
						</h2>
						<p className="text-gray-600">
							Discover our collection of premium bags and
							accessories
						</p>
					</div>

					{/* Search and Filter */}
					<div className="flex w-full flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
						<div className="relative max-w-md flex-1">
							<input
								type="text"
								placeholder="Search products..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="w-full rounded-lg border border-gray-300 px-4 py-2 pl-10 focus:border-blue-500 focus:outline-none"
							/>
							<svg
								className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</div>

						<div className="flex flex-wrap gap-2">
							<button
								onClick={() => handleCategoryChange('all')}
								className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
									selectedCategory === 'all'
										? 'bg-blue-600 text-white'
										: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
								}`}
							>
								All ({products.length})
							</button>
							{categories.map((category) => (
								<button
									key={category.id}
									onClick={() =>
										handleCategoryChange(category.id)
									}
									className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
										selectedCategory === category.id
											? 'bg-blue-600 text-white'
											: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
									}`}
								>
									{category.name} ({category.count})
								</button>
							))}
						</div>
					</div>

					{/* Results Count */}
					{searchTerm && (
						<div className="text-center">
							<p className="text-gray-600">
								Found {filteredProducts.length} product
								{filteredProducts.length !== 1 ? 's' : ''} for "
								{searchTerm}"
							</p>
						</div>
					)}

					{/* Products Grid */}
					{filteredProducts.length > 0 ? (
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
							{filteredProducts.map((product) => (
								<ProductCard
									key={product.id}
									product={product}
								/>
							))}
						</div>
					) : (
						<div className="py-12 text-center">
							<div className="mb-4 text-6xl">🔍</div>
							<p className="text-lg text-gray-600">
								No products found matching your criteria.
							</p>
							<button
								onClick={() => {
									setSearchTerm('');
									handleCategoryChange('all');
								}}
								className="mt-4 text-blue-600 hover:text-blue-800"
							>
								Clear filters
							</button>
						</div>
					)}
				</div>
			</section>

			{/* Features Section */}
			<section className="c-center bg-white py-12">
				<div className="c-space flex-col gap-8">
					<div className="text-center">
						<h2 className="mb-4 text-3xl font-bold text-gray-800">
							Why Choose BENSTORE?
						</h2>
						<p className="text-gray-600">
							We offer the best quality and service
						</p>
					</div>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						<div className="text-center">
							<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
								<svg
									className="h-8 w-8 text-blue-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<h3 className="mb-2 text-xl font-semibold text-gray-800">
								Premium Quality
							</h3>
							<p className="text-gray-600">
								All our products are made with the finest
								materials
							</p>
						</div>

						<div className="text-center">
							<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
								<svg
									className="h-8 w-8 text-green-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 className="mb-2 text-xl font-semibold text-gray-800">
								Fast Shipping
							</h3>
							<p className="text-gray-600">
								Free shipping on orders over $50
							</p>
						</div>

						<div className="text-center">
							<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
								<svg
									className="h-8 w-8 text-purple-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
									/>
								</svg>
							</div>
							<h3 className="mb-2 text-xl font-semibold text-gray-800">
								Customer Support
							</h3>
							<p className="text-gray-600">
								24/7 support to help you with any questions
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Newsletter Section */}
			<section className="c-center bg-gray-50 py-12">
				<div className="c-space flex-col gap-6 text-center">
					<h2 className="text-2xl font-bold text-gray-800">
						Stay Updated
					</h2>
					<p className="text-gray-600">
						Subscribe to our newsletter for the latest products and
						offers
					</p>
					<div className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
						<input
							type="email"
							placeholder="Enter your email"
							className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
						/>
						<button className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-700">
							Subscribe
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
