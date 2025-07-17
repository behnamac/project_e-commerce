import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaHeart, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Product = () => {
	const { id } = useParams<{ id: string }>();
	const { addItem, getItemQuantity } = useCart();
	const [selectedImage, setSelectedImage] = useState(0);
	const [selectedSize, setSelectedSize] = useState<string>('');
	const [selectedColor, setSelectedColor] = useState<string>('');
	const [quantity, setQuantity] = useState(1);

	const product = products.find((p) => p.id === id);

	if (!product) {
		return (
			<div className="c-center min-h-screen">
				<div className="text-center">
					<h1 className="mb-4 text-2xl font-bold text-gray-800">
						Product not found
					</h1>
					<Link to="/" className="text-blue-600 hover:underline">
						Back to Home
					</Link>
				</div>
			</div>
		);
	}

	const handleAddToCart = () => {
		addItem(product);
	};

	const cartQuantity = getItemQuantity(product.id);

	return (
		<div className="c-center min-h-screen py-8">
			<div className="c-space flex-col gap-8 lg:flex-row lg:items-start">
				{/* Back Button */}
				<div className="w-full lg:hidden">
					<Link
						to="/"
						className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
					>
						<FaArrowLeft />
						Back to Products
					</Link>
				</div>

				{/* Product Images */}
				<div className="w-full lg:w-1/2">
					<div className="mb-4 aspect-square overflow-hidden rounded-lg">
						<img
							src={product.images[selectedImage]}
							alt={product.name}
							className="h-full w-full object-cover"
						/>
					</div>
					{product.images.length > 1 && (
						<div className="flex gap-2">
							{product.images.map((image, index) => (
								<button
									key={index}
									onClick={() => setSelectedImage(index)}
									className={`aspect-square w-20 overflow-hidden rounded-lg border-2 ${
										selectedImage === index
											? 'border-blue-500'
											: 'border-gray-300'
									}`}
								>
									<img
										src={image}
										alt={`${product.name} ${index + 1}`}
										className="h-full w-full object-cover"
									/>
								</button>
							))}
						</div>
					)}
				</div>

				{/* Product Details */}
				<div className="w-full lg:w-1/2 lg:pl-8">
					{/* Back Button Desktop */}
					<div className="mb-4 hidden lg:block">
						<Link
							to="/"
							className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
						>
							<FaArrowLeft />
							Back to Products
						</Link>
					</div>

					<h1 className="mb-2 text-3xl font-bold text-gray-800">
						{product.name}
					</h1>

					{/* Rating */}
					<div className="mb-4 flex items-center gap-2">
						<div className="flex items-center">
							{Array.from({ length: 5 }).map((_, index) => (
								<FaStar
									key={index}
									className={`h-4 w-4 ${
										index < Math.floor(product.rating)
											? 'text-yellow-400'
											: 'text-gray-300'
									}`}
								/>
							))}
						</div>
						<span className="text-sm text-gray-600">
							{product.rating} ({product.reviews} reviews)
						</span>
					</div>

					{/* Price */}
					<div className="mb-6 flex items-center gap-3">
						<span className="text-3xl font-bold text-gray-900">
							${product.price}
						</span>
						{product.originalPrice && (
							<span className="text-xl text-gray-500 line-through">
								${product.originalPrice}
							</span>
						)}
						{product.originalPrice && (
							<span className="rounded-full bg-red-500 px-2 py-1 text-sm font-semibold text-white">
								{Math.round(
									((product.originalPrice - product.price) /
										product.originalPrice) *
										100,
								)}
								% OFF
							</span>
						)}
					</div>

					{/* Description */}
					<p className="mb-6 text-gray-600">{product.description}</p>

					{/* Size Selection */}
					{product.sizes && product.sizes.length > 1 && (
						<div className="mb-6">
							<h3 className="mb-3 text-lg font-semibold text-gray-800">
								Size
							</h3>
							<div className="flex gap-2">
								{product.sizes.map((size) => (
									<button
										key={size}
										onClick={() => setSelectedSize(size)}
										className={`rounded-lg border-2 px-4 py-2 text-sm font-medium transition-colors ${
											selectedSize === size
												? 'border-blue-500 bg-blue-50 text-blue-600'
												: 'border-gray-300 text-gray-700 hover:border-gray-400'
										}`}
									>
										{size}
									</button>
								))}
							</div>
						</div>
					)}

					{/* Color Selection */}
					{product.colors && product.colors.length > 1 && (
						<div className="mb-6">
							<h3 className="mb-3 text-lg font-semibold text-gray-800">
								Color
							</h3>
							<div className="flex gap-2">
								{product.colors.map((color) => (
									<button
										key={color}
										onClick={() => setSelectedColor(color)}
										className={`rounded-lg border-2 px-4 py-2 text-sm font-medium transition-colors ${
											selectedColor === color
												? 'border-blue-500 bg-blue-50 text-blue-600'
												: 'border-gray-300 text-gray-700 hover:border-gray-400'
										}`}
									>
										{color}
									</button>
								))}
							</div>
						</div>
					)}

					{/* Quantity */}
					<div className="mb-6">
						<h3 className="mb-3 text-lg font-semibold text-gray-800">
							Quantity
						</h3>
						<div className="flex items-center gap-3">
							<button
								onClick={() =>
									setQuantity(Math.max(1, quantity - 1))
								}
								className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50"
							>
								-
							</button>
							<span className="w-16 text-center text-lg font-semibold">
								{quantity}
							</span>
							<button
								onClick={() => setQuantity(quantity + 1)}
								className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50"
							>
								+
							</button>
						</div>
					</div>

					{/* Features */}
					<div className="mb-6">
						<h3 className="mb-3 text-lg font-semibold text-gray-800">
							Features
						</h3>
						<ul className="space-y-1">
							{product.features.map((feature, index) => (
								<li
									key={index}
									className="flex items-center gap-2 text-gray-600"
								>
									<div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
									{feature}
								</li>
							))}
						</ul>
					</div>

					{/* Stock Status */}
					<div className="mb-6">
						<span
							className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${
								product.inStock
									? 'bg-green-100 text-green-800'
									: 'bg-red-100 text-red-800'
							}`}
						>
							<div
								className={`h-2 w-2 rounded-full ${
									product.inStock
										? 'bg-green-500'
										: 'bg-red-500'
								}`}
							></div>
							{product.inStock ? 'In Stock' : 'Out of Stock'}
						</span>
					</div>

					{/* Action Buttons */}
					<div className="flex gap-4">
						<button
							onClick={handleAddToCart}
							disabled={!product.inStock}
							className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
						>
							<FaShoppingCart />
							{cartQuantity > 0
								? `Add More (${cartQuantity})`
								: 'Add to Cart'}
						</button>
						<button className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50">
							<FaHeart className="text-gray-600" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
