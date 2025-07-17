import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
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

			{/* Categories Section */}
			<section className="bg-base-200 py-12">
				<div className="container mx-auto px-4">
					<div className="mb-12 text-center">
						<h2 className="text-base-content mb-4 text-4xl font-bold">
							Shop by Category
						</h2>
						<p className="text-base-content/70 text-lg">
							Explore our wide range of products
						</p>
					</div>

					<div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
						{categories.map((category) => (
							<Link
								key={category.id}
								to={`/category/${category.id}`}
								className="card bg-base-100 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
							>
								<div className="card-body text-center p-4">
									<div className="avatar placeholder mb-2">
										<div className="bg-primary text-primary-content w-12 h-12 rounded-full">
											<span className="text-lg font-bold">
												{category.name.charAt(0)}
											</span>
										</div>
									</div>
									<h3 className="card-title text-sm justify-center">
										{category.name}
									</h3>
									<p className="text-xs text-base-content/60">
										{category.count} items
									</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			<section className="bg-base-100 py-12">
				<div className="container mx-auto px-4">
					<div className="mb-12 text-center">
						<h2 className="text-base-content mb-4 text-4xl font-bold">
							Our Products
						</h2>
						<p className="text-base-content/70 text-lg">
							Discover our collection of premium bags and
							accessories
						</p>
					</div>

					{/* Search and Filter */}
					<div className="mb-8 flex flex-col items-center justify-between gap-6 lg:flex-row">
						<div className="form-control w-full max-w-md">
							<div className="input-group">
								<input
									type="text"
									placeholder="Search products..."
									value={searchTerm}
									onChange={(e) =>
										setSearchTerm(e.target.value)
									}
									className="input input-bordered w-full"
								/>
								<button className="btn btn-square">
									<svg
										className="h-4 w-4"
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
								</button>
							</div>
						</div>

						<div className="flex flex-wrap gap-2">
							<button
								onClick={() => handleCategoryChange('all')}
								className={`btn btn-sm ${selectedCategory === 'all' ? 'btn-primary' : 'btn-outline'}`}
							>
								All ({products.length})
							</button>
							{categories.map((category) => (
								<button
									key={category.id}
									onClick={() =>
										handleCategoryChange(category.id)
									}
									className={`btn btn-sm ${selectedCategory === category.id ? 'btn-primary' : 'btn-outline'}`}
								>
									{category.name} ({category.count})
								</button>
							))}
						</div>
					</div>

					{/* Results Count */}
					{searchTerm && (
						<div className="mb-6 text-center">
							<p className="text-base-content/70">
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
							<p className="text-base-content/70 mb-4 text-lg">
								No products found matching your criteria.
							</p>
							<button
								onClick={() => {
									setSearchTerm('');
									handleCategoryChange('all');
								}}
								className="btn btn-primary"
							>
								Clear filters
							</button>
						</div>
					)}
				</div>
			</section>

			{/* Features Section */}
			<section className="bg-base-200 py-12">
				<div className="container mx-auto px-4">
					<div className="mb-12 text-center">
						<h2 className="text-base-content mb-4 text-4xl font-bold">
							Why Choose BENSTORE?
						</h2>
						<p className="text-base-content/70 text-lg">
							We offer the best quality and service
						</p>
					</div>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						<div className="card bg-base-100 shadow-xl">
							<div className="card-body text-center">
								<div className="avatar placeholder mb-4">
									<div className="bg-primary text-primary-content w-16 rounded-full">
										<svg
											className="h-8 w-8"
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
								</div>
								<h3 className="card-title justify-center text-xl">
									Premium Quality
								</h3>
								<p className="text-base-content/70">
									All our products are made with the finest
									materials
								</p>
							</div>
						</div>

						<div className="card bg-base-100 shadow-xl">
							<div className="card-body text-center">
								<div className="avatar placeholder mb-4">
									<div className="bg-success text-success-content w-16 rounded-full">
										<svg
											className="h-8 w-8"
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
								</div>
								<h3 className="card-title justify-center text-xl">
									Fast Shipping
								</h3>
								<p className="text-base-content/70">
									Free shipping on orders over $50
								</p>
							</div>
						</div>

						<div className="card bg-base-100 shadow-xl">
							<div className="card-body text-center">
								<div className="avatar placeholder mb-4">
									<div className="bg-accent text-accent-content w-16 rounded-full">
										<svg
											className="h-8 w-8"
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
								</div>
								<h3 className="card-title justify-center text-xl">
									Customer Support
								</h3>
								<p className="text-base-content/70">
									24/7 support to help you with any questions
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Newsletter Section */}
			<section className="bg-primary text-primary-content py-12">
				<div className="container mx-auto px-4 text-center">
					<h2 className="mb-4 text-3xl font-bold">Stay Updated</h2>
					<p className="text-primary-content/80 mb-6">
						Subscribe to our newsletter for the latest products and
						offers
					</p>
					<div className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row">
						<input
							type="email"
							placeholder="Enter your email"
							className="input input-bordered flex-1"
						/>
						<button className="btn btn-secondary">Subscribe</button>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
