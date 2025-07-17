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
		<div className="card bg-base-100 hover-lift group shadow-xl transition-all duration-300 hover:shadow-2xl">
			<figure className="relative overflow-hidden">
				<Link to={`/product/${product.id}`}>
					<img
						src={product.images[0]}
						alt={product.name}
						className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
					/>
				</Link>

				{/* Badge for discount */}
				{product.originalPrice && (
					<div className="badge badge-error absolute top-2 left-2">
						{Math.round(
							((product.originalPrice - product.price) /
								product.originalPrice) *
								100,
						)}
						% OFF
					</div>
				)}

				{/* Wishlist button */}
				<button
					onClick={handleWishlist}
					className={`btn btn-circle btn-sm absolute top-2 right-2 ${
						isWishlisted ? 'btn-error' : 'btn-ghost bg-base-100/80'
					}`}
				>
					<FaHeart className="h-4 w-4" />
				</button>
			</figure>

			<div className="card-body p-4">
				<Link to={`/product/${product.id}`}>
					<h2 className="card-title hover:text-primary line-clamp-2 text-base transition-colors">
						{product.name}
					</h2>
				</Link>

				{/* Rating */}
				<div className="mb-2 flex items-center gap-2">
					<div className="rating rating-sm">
						{Array.from({ length: 5 }).map((_, index) => (
							<input
								key={index}
								type="radio"
								name={`rating-${product.id}`}
								className="mask mask-star-2 bg-orange-400"
								checked={index < Math.floor(product.rating)}
								readOnly
							/>
						))}
					</div>
					<span className="text-base-content/60 text-sm">
						({product.reviews})
					</span>
				</div>

				{/* Price */}
				<div className="mb-3 flex items-center gap-2">
					<span className="text-primary text-xl font-bold">
						${product.price}
					</span>
					{product.originalPrice && (
						<span className="text-base-content/50 text-sm line-through">
							${product.originalPrice}
						</span>
					)}
				</div>

				{/* Stock status and Add to cart */}
				<div className="card-actions items-center justify-between">
					<span
						className={`badge ${product.inStock ? 'badge-success' : 'badge-error'}`}
					>
						{product.inStock ? 'In Stock' : 'Out of Stock'}
					</span>

					<button
						onClick={handleAddToCart}
						disabled={!product.inStock}
						className={`btn btn-primary btn-sm ${quantity > 0 ? 'btn-outline' : ''}`}
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
