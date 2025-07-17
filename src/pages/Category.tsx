import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { FaFilter, FaSort, FaTimes } from 'react-icons/fa';
import { products, categories, brands, colors } from '../data/products';
import ProductCard from '../components/ProductCard';

interface FilterState {
	priceRange: [number, number];
	selectedColors: string[];
	selectedBrands: string[];
}

interface SortOption {
	value: string;
	label: string;
}

const Category = () => {
	const { categoryId } = useParams<{ categoryId: string }>();
	const [filters, setFilters] = useState<FilterState>({
		priceRange: [0, 500],
		selectedColors: [],
		selectedBrands: [],
	});
	const [sortBy, setSortBy] = useState('popularity');
	const [showFilters, setShowFilters] = useState(false);

	const sortOptions: SortOption[] = [
		{ value: 'popularity', label: 'Most Popular' },
		{ value: 'rating', label: 'Highest Rated' },
		{ value: 'price-low', label: 'Price: Low to High' },
		{ value: 'price-high', label: 'Price: High to Low' },
		{ value: 'newest', label: 'Newest First' },
	];

	const category = categories.find((cat) => cat.id === categoryId);
	const categoryProducts = useMemo(() => {
		return products.filter((product) => product.category === categoryId);
	}, [categoryId]);

	const filteredProducts = useMemo(() => {
		let filtered = categoryProducts.filter((product) => {
			// Price filter
			if (
				product.price < filters.priceRange[0] ||
				product.price > filters.priceRange[1]
			) {
				return false;
			}

			// Color filter
			if (filters.selectedColors.length > 0) {
				const productColors = product.colors || [];
				if (
					!filters.selectedColors.some((color) =>
						productColors.includes(color),
					)
				) {
					return false;
				}
			}

			// Brand filter
			if (filters.selectedBrands.length > 0) {
				if (!filters.selectedBrands.includes(product.brand)) {
					return false;
				}
			}

			return true;
		});

		// Sorting
		switch (sortBy) {
			case 'rating':
				filtered.sort((a, b) => b.rating - a.rating);
				break;
			case 'price-low':
				filtered.sort((a, b) => a.price - b.price);
				break;
			case 'price-high':
				filtered.sort((a, b) => b.price - a.price);
				break;
			case 'newest':
				filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
				break;
			case 'popularity':
			default:
				filtered.sort((a, b) => b.reviews - a.reviews);
				break;
		}

		return filtered;
	}, [categoryProducts, filters, sortBy]);

	const availableColors = useMemo(() => {
		const colors = new Set<string>();
		categoryProducts.forEach((product) => {
			product.colors?.forEach((color) => colors.add(color));
		});
		return Array.from(colors);
	}, [categoryProducts]);

	const availableBrands = useMemo(() => {
		const brands = new Set<string>();
		categoryProducts.forEach((product) => {
			brands.add(product.brand);
		});
		return Array.from(brands);
	}, [categoryProducts]);

	const handleColorToggle = (color: string) => {
		setFilters((prev) => ({
			...prev,
			selectedColors: prev.selectedColors.includes(color)
				? prev.selectedColors.filter((c) => c !== color)
				: [...prev.selectedColors, color],
		}));
	};

	const handleBrandToggle = (brand: string) => {
		setFilters((prev) => ({
			...prev,
			selectedBrands: prev.selectedBrands.includes(brand)
				? prev.selectedBrands.filter((b) => b !== brand)
				: [...prev.selectedBrands, brand],
		}));
	};

	const clearFilters = () => {
		setFilters({
			priceRange: [0, 500],
			selectedColors: [],
			selectedBrands: [],
		});
	};

	if (!category) {
		return (
			<div className="container mx-auto px-4 py-8">
				<div className="text-center">
					<h1 className="text-2xl font-bold text-error">
						Category not found
					</h1>
				</div>
			</div>
		);
	}

	return (
		<div className="container mx-auto px-4 py-8">
			{/* Header */}
			<div className="mb-8">
				<h1 className="mb-2 text-3xl font-bold">{category.name}</h1>
				<p className="text-base-content/60">
					{filteredProducts.length} of {categoryProducts.length}{' '}
					products
				</p>
			</div>

			{/* Sort and Filter Controls */}
			<div className="mb-6 flex flex-col gap-4 lg:flex-row">
				{/* Sort Dropdown */}
				<div className="flex-1">
					<select
						value={sortBy}
						onChange={(e) => setSortBy(e.target.value)}
						className="select-bordered select w-full max-w-xs"
					>
						{sortOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
				</div>

				{/* Filter Toggle Button */}
				<button
					onClick={() => setShowFilters(!showFilters)}
					className="btn btn-outline"
				>
					<FaFilter className="mr-2" />
					Filters
					{showFilters && <FaTimes className="ml-2" />}
				</button>
			</div>

			<div className="flex flex-col gap-8 lg:flex-row">
				{/* Sidebar Filters */}
				{showFilters && (
					<div className="lg:w-80">
						<div className="rounded-lg bg-base-100 p-6 shadow-lg">
							<div className="mb-4 flex items-center justify-between">
								<h3 className="text-lg font-semibold">
									Filters
								</h3>
								<button
									onClick={clearFilters}
									className="btn btn-ghost btn-sm"
								>
									Clear All
								</button>
							</div>

							{/* Price Range */}
							<div className="mb-6">
								<h4 className="mb-3 font-medium">
									Price Range
								</h4>
								<div className="flex items-center gap-2">
									<input
										type="range"
										min="0"
										max="500"
										value={filters.priceRange[1]}
										onChange={(e) =>
											setFilters((prev) => ({
												...prev,
												priceRange: [
													prev.priceRange[0],
													parseInt(e.target.value),
												],
											}))
										}
										className="range range-primary range-sm flex-1"
									/>
									<span className="text-sm font-medium">
										${filters.priceRange[0]} - $
										{filters.priceRange[1]}
									</span>
								</div>
							</div>

							{/* Colors */}
							{availableColors.length > 0 && (
								<div className="mb-6">
									<h4 className="mb-3 font-medium">Colors</h4>
									<div className="space-y-2">
										{availableColors.map((color) => (
											<label
												key={color}
												className="flex cursor-pointer items-center gap-2"
											>
												<input
													type="checkbox"
													checked={filters.selectedColors.includes(
														color,
													)}
													onChange={() =>
														handleColorToggle(color)
													}
													className="checkbox checkbox-sm"
												/>
												<span className="text-sm">
													{color}
												</span>
											</label>
										))}
									</div>
								</div>
							)}

							{/* Brands */}
							{availableBrands.length > 0 && (
								<div className="mb-6">
									<h4 className="mb-3 font-medium">Brands</h4>
									<div className="space-y-2">
										{availableBrands.map((brand) => (
											<label
												key={brand}
												className="flex cursor-pointer items-center gap-2"
											>
												<input
													type="checkbox"
													checked={filters.selectedBrands.includes(
														brand,
													)}
													onChange={() =>
														handleBrandToggle(brand)
													}
													className="checkbox checkbox-sm"
												/>
												<span className="text-sm">
													{brand}
												</span>
											</label>
										))}
									</div>
								</div>
							)}
						</div>
					</div>
				)}

				{/* Products Grid */}
				<div className="flex-1">
					{filteredProducts.length > 0 ? (
						<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
							{filteredProducts.map((product) => (
								<ProductCard
									key={product.id}
									product={product}
								/>
							))}
						</div>
					) : (
						<div className="py-12 text-center">
							<div className="mb-4 text-6xl">😕</div>
							<h3 className="mb-2 text-xl font-semibold">
								No products found
							</h3>
							<p className="text-base-content/60 mb-4">
								Try adjusting your filters to find what you're
								looking for.
							</p>
							<button
								onClick={clearFilters}
								className="btn btn-primary"
							>
								Clear Filters
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Category;
