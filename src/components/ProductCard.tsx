import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Product } from '../data/products';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addItem, selectItemQuantity } from '../store/slices/cartSlice';

interface ProductCardProps {
	product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	const [isWishlisted, setIsWishlisted] = useState(false);
	const dispatch = useAppDispatch();
	const quantity = useAppSelector((state) =>
		selectItemQuantity(state, product.id),
	);

	const handleAddToCart = (e: React.MouseEvent) => {
		e.preventDefault();
		dispatch(addItem(product));
	};

	const handleWishlist = (e: React.MouseEvent) => {
		e.preventDefault();
		setIsWishlisted(!isWishlisted);
	};

	return (
		<div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
			{/* Product Image */}
			<div className="relative aspect-square overflow-hidden">
				<Link to={`/product/${product.id}`}>
					<img
						src={product.images[0]}
						alt={product.name}
						className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
					/>
				</Link>

				{/* Discount Badge */}
				{product.originalPrice && (
					<div className="absolute left-3 top-3 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">
						{Math.round(
							((product.originalPrice - product.price) /
								product.originalPrice) *
								100,
						)}
						% OFF
					</div>
				)}

				{/* Wishlist Button */}
				<button
					onClick={handleWishlist}
					className={`absolute right-3 top-3 rounded-full p-2 transition-all duration-200 ${
						isWishlisted
							? 'bg-red-500 text-white'
							: 'bg-white/80 text-gray-600 backdrop-blur-sm hover:bg-red-500 hover:text-white dark:bg-gray-800/80 dark:text-gray-300'
					}`}
				>
					<FaHeart className="h-4 w-4" />
				</button>

				{/* Add to Cart Button */}
				<button
					onClick={handleAddToCart}
					disabled={!product.inStock}
					className={`absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
						quantity > 0
							? 'bg-blue-600 text-white'
							: 'bg-white/90 text-gray-800 backdrop-blur-sm hover:bg-blue-600 hover:text-white dark:bg-gray-800/90 dark:text-white'
					} ${!product.inStock ? 'cursor-not-allowed opacity-50' : ''}`}
				>
					{quantity > 0 ? (
						`${quantity} in cart`
					) : (
						<>
							<FaShoppingCart className="mr-1 inline h-3 w-3" />
							Add to Cart
						</>
					)}
				</button>
			</div>

			{/* Product Info */}
			<div className="p-4">
				<Link to={`/product/${product.id}`}>
					<h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
						{product.name}
					</h3>
				</Link>

				{/* Rating */}
				<div className="mb-3 flex items-center gap-2">
					<div className="flex">
						{Array.from({ length: 5 }).map((_, index) => (
							<svg
								key={index}
								className={`h-4 w-4 ${
									index < Math.floor(product.rating)
										? 'text-yellow-400'
										: 'text-gray-300'
								}`}
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
						))}
					</div>
					<span className="text-sm text-gray-600 dark:text-gray-400">
						({product.reviews})
					</span>
				</div>

				{/* Price */}
				<div className="flex items-center gap-2">
					<span className="text-xl font-bold text-gray-900 dark:text-white">
						${product.price}
					</span>
					{product.originalPrice && (
						<span className="text-sm text-gray-500 line-through dark:text-gray-400">
							${product.originalPrice}
						</span>
					)}
				</div>

				{/* Stock Status */}
				<div className="mt-3">
					<span
						className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
							product.inStock
								? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
								: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
						}`}
					>
						{product.inStock ? 'In Stock' : 'Out of Stock'}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
