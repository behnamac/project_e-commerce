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
		<div className="hover-lift group card bg-base-100 shadow-xl transition-all duration-300 hover:shadow-2xl">
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
					<div className="badge badge-error absolute left-2 top-2">
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
					className={`btn btn-sm btn-circle absolute right-2 top-2 ${
						isWishlisted ? 'btn-error' : 'bg-base-100/80 btn-ghost'
					}`}
				>
					<FaHeart className="h-4 w-4" />
				</button>
			</figure>

			<div className="card-body p-4">
				<Link to={`/product/${product.id}`}>
					<h2 className="card-title line-clamp-2 text-base transition-colors hover:text-primary">
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
					<span className="text-xl font-bold text-primary">
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
