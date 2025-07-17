import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
	product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	const [isWishlisted, setIsWishlisted] = useState(false);
	const { addItem, getItemQuantity } = useCart();
	const quantity = getItemQuantity(product.id);

	const handleAddToCart = (e: React.MouseEvent) => {
		e.preventDefault();
		addItem(product);
	};

	const handleWishlist = (e: React.MouseEvent) => {
		e.preventDefault();
		setIsWishlisted(!isWishlisted);
	};

	return (
		<div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg">
			<Link to={`/product/${product.id}`}>
				<div className="relative aspect-square overflow-hidden">
					<img
						src={product.images[0]}
						alt={product.name}
						className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
					/>
					{product.originalPrice && (
						<div className="absolute top-2 left-2 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white">
							{Math.round(
								((product.originalPrice - product.price) /
									product.originalPrice) *
									100,
							)}
							% OFF
						</div>
					)}
					<button
						onClick={handleWishlist}
						className={`absolute top-2 right-2 rounded-full p-2 transition-colors ${
							isWishlisted
								? 'bg-red-500 text-white'
								: 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
						}`}
					>
						<FaHeart className="h-4 w-4" />
					</button>
				</div>
			</Link>

			<div className="p-4">
				<Link to={`/product/${product.id}`}>
					<h3 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-800 hover:text-blue-600">
						{product.name}
					</h3>
				</Link>

				<div className="mb-2 flex items-center gap-1">
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
					<span className="ml-1 text-sm text-gray-600">
						({product.reviews})
					</span>
				</div>

				<div className="mb-3 flex items-center gap-2">
					<span className="text-xl font-bold text-gray-900">
						${product.price}
					</span>
					{product.originalPrice && (
						<span className="text-sm text-gray-500 line-through">
							${product.originalPrice}
						</span>
					)}
				</div>

				<div className="flex items-center justify-between">
					<span
						className={`text-sm font-medium ${
							product.inStock ? 'text-green-600' : 'text-red-600'
						}`}
					>
						{product.inStock ? 'In Stock' : 'Out of Stock'}
					</span>
					<button
						onClick={handleAddToCart}
						disabled={!product.inStock}
						className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
					>
						<FaShoppingCart className="h-4 w-4" />
						{quantity > 0 ? `(${quantity})` : 'Add to Cart'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
