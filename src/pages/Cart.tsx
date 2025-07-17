import { Link } from 'react-router-dom';
import { FaTrash, FaArrowLeft, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Cart = () => {
	const { state, updateQuantity, removeItem, clearCart } = useCart();

	if (state.items.length === 0) {
		return (
			<div className="c-center min-h-screen py-8">
				<div className="c-space flex-col gap-8 text-center">
					<div className="flex flex-col items-center gap-4">
						<div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
							<FaShoppingCart className="h-12 w-12 text-gray-400" />
						</div>
						<h1 className="text-2xl font-bold text-gray-800">
							Your cart is empty
						</h1>
						<p className="text-gray-600">
							Looks like you haven't added any items to your cart
							yet.
						</p>
					</div>
					<Link
						to="/"
						className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
					>
						<FaArrowLeft />
						Continue Shopping
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="c-center min-h-screen py-8">
			<div className="c-space flex-col gap-8 lg:flex-row lg:items-start">
				{/* Cart Items */}
				<div className="w-full lg:w-2/3">
					<div className="mb-6 flex items-center justify-between">
						<h1 className="text-2xl font-bold text-gray-800">
							Shopping Cart
						</h1>
						<button
							onClick={clearCart}
							className="text-sm text-red-600 hover:text-red-800"
						>
							Clear Cart
						</button>
					</div>

					<div className="space-y-4">
						{state.items.map((item) => (
							<div
								key={item.product.id}
								className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4"
							>
								{/* Product Image */}
								<div className="aspect-square h-24 w-24 overflow-hidden rounded-lg">
									<img
										src={item.product.images[0]}
										alt={item.product.name}
										className="h-full w-full object-cover"
									/>
								</div>

								{/* Product Details */}
								<div className="flex flex-1 flex-col justify-between">
									<div>
										<Link
											to={`/product/${item.product.id}`}
											className="text-lg font-semibold text-gray-800 hover:text-blue-600"
										>
											{item.product.name}
										</Link>
										<p className="text-sm text-gray-600">
											{item.product.description.substring(
												0,
												100,
											)}
											...
										</p>
									</div>

									<div className="flex items-center justify-between">
										<div className="flex items-center gap-4">
											{/* Quantity Controls */}
											<div className="flex items-center gap-2">
												<button
													onClick={() =>
														updateQuantity(
															item.product.id,
															item.quantity - 1,
														)
													}
													className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 hover:bg-gray-50"
												>
													-
												</button>
												<span className="w-8 text-center font-semibold">
													{item.quantity}
												</span>
												<button
													onClick={() =>
														updateQuantity(
															item.product.id,
															item.quantity + 1,
														)
													}
													className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 hover:bg-gray-50"
												>
													+
												</button>
											</div>

											{/* Price */}
											<div className="text-right">
												<div className="font-semibold text-gray-900">
													$
													{(
														item.product.price *
														item.quantity
													).toFixed(2)}
												</div>
												<div className="text-sm text-gray-600">
													${item.product.price} each
												</div>
											</div>
										</div>

										{/* Remove Button */}
										<button
											onClick={() =>
												removeItem(item.product.id)
											}
											className="text-red-600 hover:text-red-800"
										>
											<FaTrash />
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Order Summary */}
				<div className="w-full lg:w-1/3">
					<div className="rounded-lg border border-gray-200 bg-white p-6">
						<h2 className="mb-4 text-xl font-bold text-gray-800">
							Order Summary
						</h2>

						<div className="space-y-3">
							<div className="flex justify-between">
								<span className="text-gray-600">
									Subtotal ({state.items.length} items)
								</span>
								<span className="font-semibold">
									${state.total.toFixed(2)}
								</span>
							</div>
							<div className="flex justify-between">
								<span className="text-gray-600">Shipping</span>
								<span className="font-semibold text-green-600">
									Free
								</span>
							</div>
							<div className="flex justify-between">
								<span className="text-gray-600">Tax</span>
								<span className="font-semibold">
									${(state.total * 0.08).toFixed(2)}
								</span>
							</div>
							<hr className="my-4" />
							<div className="flex justify-between text-lg font-bold">
								<span>Total</span>
								<span>${(state.total * 1.08).toFixed(2)}</span>
							</div>
						</div>

						<Link
							to="/checkout"
							className="mt-6 block w-full rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-blue-700"
						>
							Proceed to Checkout
						</Link>

						<Link
							to="/"
							className="mt-4 block w-full rounded-lg border border-gray-300 px-6 py-3 text-center font-semibold text-gray-700 transition-colors hover:bg-gray-50"
						>
							Continue Shopping
						</Link>
					</div>

					{/* Promo Code */}
					<div className="mt-4 rounded-lg border border-gray-200 bg-white p-6">
						<h3 className="mb-3 font-semibold text-gray-800">
							Promo Code
						</h3>
						<div className="flex gap-2">
							<input
								type="text"
								placeholder="Enter code"
								className="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
							/>
							<button className="rounded-lg bg-gray-800 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-900">
								Apply
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
