import { Link } from 'react-router-dom';
import { FaTrash, FaArrowLeft, FaShoppingCart } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
	selectCartItems,
	selectCartTotal,
	updateQuantity,
	removeItem,
	clearCart,
} from '../store/slices/cartSlice';

const Cart = () => {
	const dispatch = useAppDispatch();
	const items = useAppSelector(selectCartItems);
	const total = useAppSelector(selectCartTotal);

	if (items.length === 0) {
		return (
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<div className="placeholder avatar mb-6">
							<div className="w-24 rounded-full bg-neutral text-neutral-content">
								<FaShoppingCart className="h-12 w-12" />
							</div>
						</div>
						<h1 className="mb-4 text-3xl font-bold text-base-content">
							Your cart is empty
						</h1>
						<p className="text-base-content/70 mb-8">
							Looks like you haven't added any items to your cart
							yet.
						</p>
						<Link to="/" className="btn btn-primary">
							<FaArrowLeft className="mr-2" />
							Continue Shopping
						</Link>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
				{/* Cart Items */}
				<div className="lg:col-span-2">
					<div className="mb-6 flex items-center justify-between">
						<h1 className="text-3xl font-bold text-base-content">
							Shopping Cart
						</h1>
						<button
							onClick={() => dispatch(clearCart())}
							className="btn btn-ghost btn-sm text-error"
						>
							Clear Cart
						</button>
					</div>

					<div className="space-y-4">
						{items.map((item) => (
							<div
								key={item.product.id}
								className="card bg-base-100 shadow-xl"
							>
								<div className="card-body p-6">
									<div className="flex gap-4">
										{/* Product Image */}
										<div className="avatar">
											<div className="h-24 w-24 rounded-lg">
												<img
													src={item.product.images[0]}
													alt={item.product.name}
													className="h-full w-full object-cover"
												/>
											</div>
										</div>

										{/* Product Details */}
										<div className="flex-1">
											<Link
												to={`/product/${item.product.id}`}
												className="card-title text-lg transition-colors hover:text-primary"
											>
												{item.product.name}
											</Link>
											<p className="text-base-content/70 mb-4 text-sm">
												{item.product.description.substring(
													0,
													100,
												)}
												...
											</p>

											<div className="flex items-center justify-between">
												<div className="flex items-center gap-4">
													{/* Quantity Controls */}
													<div className="join">
														<button
															onClick={() =>
																dispatch(
																	updateQuantity(
																		{
																			productId:
																				item
																					.product
																					.id,
																			quantity:
																				item.quantity -
																				1,
																		},
																	),
																)
															}
															className="btn btn-sm join-item"
														>
															-
														</button>
														<button className="btn btn-disabled btn-sm join-item">
															{item.quantity}
														</button>
														<button
															onClick={() =>
																dispatch(
																	updateQuantity(
																		{
																			productId:
																				item
																					.product
																					.id,
																			quantity:
																				item.quantity +
																				1,
																		},
																	),
																)
															}
															className="btn btn-sm join-item"
														>
															+
														</button>
													</div>

													{/* Price */}
													<div className="text-right">
														<div className="text-lg font-bold text-primary">
															$
															{(
																item.product
																	.price *
																item.quantity
															).toFixed(2)}
														</div>
														<div className="text-base-content/60 text-sm">
															$
															{item.product.price}{' '}
															each
														</div>
													</div>
												</div>

												{/* Remove Button */}
												<button
													onClick={() =>
														dispatch(
															removeItem(
																item.product.id,
															),
														)
													}
													className="btn btn-ghost btn-sm text-error"
												>
													<FaTrash />
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Order Summary */}
				<div className="lg:col-span-1">
					<div className="card sticky top-4 bg-base-100 shadow-xl">
						<div className="card-body">
							<h2 className="card-title mb-4 text-xl">
								Order Summary
							</h2>

							<div className="space-y-3">
								<div className="flex justify-between">
									<span className="text-base-content/70">
										Subtotal ({items.length} items)
									</span>
									<span className="font-semibold">
										${total.toFixed(2)}
									</span>
								</div>
								<div className="flex justify-between">
									<span className="text-base-content/70">
										Shipping
									</span>
									<span className="font-semibold text-success">
										Free
									</span>
								</div>
								<div className="flex justify-between">
									<span className="text-base-content/70">
										Tax
									</span>
									<span className="font-semibold">
										${(total * 0.08).toFixed(2)}
									</span>
								</div>
								<div className="divider"></div>
								<div className="flex justify-between text-lg font-bold">
									<span>Total</span>
									<span className="text-primary">
										${(total * 1.08).toFixed(2)}
									</span>
								</div>
							</div>

							<div className="card-actions mt-6">
								<Link
									to="/checkout"
									className="btn btn-primary w-full"
								>
									Proceed to Checkout
								</Link>
								<Link to="/" className="btn btn-outline w-full">
									Continue Shopping
								</Link>
							</div>
						</div>
					</div>

					{/* Promo Code */}
					<div className="card mt-4 bg-base-100 shadow-xl">
						<div className="card-body">
							<h3 className="card-title mb-3 text-lg">
								Promo Code
							</h3>
							<div className="w-full join">
								<input
									type="text"
									placeholder="Enter code"
									className="input-bordered input flex-1 join-item"
								/>
								<button className="btn join-item">Apply</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
