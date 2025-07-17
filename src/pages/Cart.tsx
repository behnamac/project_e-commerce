import { Link } from 'react-router-dom';
import { FaTrash, FaArrowLeft, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Cart = () => {
	const { state, updateQuantity, removeItem, clearCart } = useCart();

	if (state.items.length === 0) {
		return (
			<div className="hero bg-base-200 min-h-screen">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<div className="avatar placeholder mb-6">
							<div className="bg-neutral text-neutral-content w-24 rounded-full">
								<FaShoppingCart className="h-12 w-12" />
							</div>
						</div>
						<h1 className="text-base-content mb-4 text-3xl font-bold">
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
						<h1 className="text-base-content text-3xl font-bold">
							Shopping Cart
						</h1>
						<button
							onClick={clearCart}
							className="btn btn-ghost btn-sm text-error"
						>
							Clear Cart
						</button>
					</div>

					<div className="space-y-4">
						{state.items.map((item) => (
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
												className="card-title hover:text-primary text-lg transition-colors"
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
																updateQuantity(
																	item.product
																		.id,
																	item.quantity -
																		1,
																)
															}
															className="btn join-item btn-sm"
														>
															-
														</button>
														<button className="btn join-item btn-sm btn-disabled">
															{item.quantity}
														</button>
														<button
															onClick={() =>
																updateQuantity(
																	item.product
																		.id,
																	item.quantity +
																		1,
																)
															}
															className="btn join-item btn-sm"
														>
															+
														</button>
													</div>

													{/* Price */}
													<div className="text-right">
														<div className="text-primary text-lg font-bold">
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
														removeItem(
															item.product.id,
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
					<div className="card bg-base-100 sticky top-4 shadow-xl">
						<div className="card-body">
							<h2 className="card-title mb-4 text-xl">
								Order Summary
							</h2>

							<div className="space-y-3">
								<div className="flex justify-between">
									<span className="text-base-content/70">
										Subtotal ({state.items.length} items)
									</span>
									<span className="font-semibold">
										${state.total.toFixed(2)}
									</span>
								</div>
								<div className="flex justify-between">
									<span className="text-base-content/70">
										Shipping
									</span>
									<span className="text-success font-semibold">
										Free
									</span>
								</div>
								<div className="flex justify-between">
									<span className="text-base-content/70">
										Tax
									</span>
									<span className="font-semibold">
										${(state.total * 0.08).toFixed(2)}
									</span>
								</div>
								<div className="divider"></div>
								<div className="flex justify-between text-lg font-bold">
									<span>Total</span>
									<span className="text-primary">
										${(state.total * 1.08).toFixed(2)}
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
					<div className="card bg-base-100 mt-4 shadow-xl">
						<div className="card-body">
							<h3 className="card-title mb-3 text-lg">
								Promo Code
							</h3>
							<div className="join w-full">
								<input
									type="text"
									placeholder="Enter code"
									className="input input-bordered join-item flex-1"
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
