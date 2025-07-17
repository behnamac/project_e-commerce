import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCreditCard, FaLock } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Checkout = () => {
	const navigate = useNavigate();
	const { state, clearCart } = useCart();
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		address: '',
		city: '',
		state: '',
		zipCode: '',
		cardNumber: '',
		expiryDate: '',
		cvv: '',
		cardName: '',
	});

	const [isProcessing, setIsProcessing] = useState(false);

	if (state.items.length === 0) {
		navigate('/cart');
		return null;
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsProcessing(true);

		// Simulate payment processing
		await new Promise((resolve) => setTimeout(resolve, 2000));

		// Clear cart and redirect to success page
		clearCart();
		alert('Order placed successfully! Thank you for your purchase.');
		navigate('/');
	};

	const total = state.total * 1.08; // Including tax

	return (
		<div className="c-center min-h-screen py-8">
			<div className="c-space flex-col gap-8 lg:flex-row lg:items-start">
				{/* Checkout Form */}
				<div className="w-full lg:w-2/3">
					<div className="mb-6">
						<Link
							to="/cart"
							className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
						>
							<FaArrowLeft />
							Back to Cart
						</Link>
						<h1 className="mt-4 text-2xl font-bold text-gray-800">
							Checkout
						</h1>
					</div>

					<form onSubmit={handleSubmit} className="space-y-6">
						{/* Shipping Information */}
						<div className="rounded-lg border border-gray-200 bg-white p-6">
							<h2 className="mb-4 text-xl font-bold text-gray-800">
								Shipping Information
							</h2>
							<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
								<div>
									<label className="mb-2 block text-sm font-medium text-gray-700">
										First Name *
									</label>
									<input
										type="text"
										name="firstName"
										value={formData.firstName}
										onChange={handleInputChange}
										required
										className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
									/>
								</div>
								<div>
									<label className="mb-2 block text-sm font-medium text-gray-700">
										Last Name *
									</label>
									<input
										type="text"
										name="lastName"
										value={formData.lastName}
										onChange={handleInputChange}
										required
										className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
									/>
								</div>
								<div>
									<label className="mb-2 block text-sm font-medium text-gray-700">
										Email *
									</label>
									<input
										type="email"
										name="email"
										value={formData.email}
										onChange={handleInputChange}
										required
										className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
									/>
								</div>
								<div>
									<label className="mb-2 block text-sm font-medium text-gray-700">
										Phone *
									</label>
									<input
										type="tel"
										name="phone"
										value={formData.phone}
										onChange={handleInputChange}
										required
										className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
									/>
								</div>
								<div className="md:col-span-2">
									<label className="mb-2 block text-sm font-medium text-gray-700">
										Address *
									</label>
									<input
										type="text"
										name="address"
										value={formData.address}
										onChange={handleInputChange}
										required
										className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
									/>
								</div>
								<div>
									<label className="mb-2 block text-sm font-medium text-gray-700">
										City *
									</label>
									<input
										type="text"
										name="city"
										value={formData.city}
										onChange={handleInputChange}
										required
										className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
									/>
								</div>
								<div>
									<label className="mb-2 block text-sm font-medium text-gray-700">
										State *
									</label>
									<input
										type="text"
										name="state"
										value={formData.state}
										onChange={handleInputChange}
										required
										className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
									/>
								</div>
								<div>
									<label className="mb-2 block text-sm font-medium text-gray-700">
										ZIP Code *
									</label>
									<input
										type="text"
										name="zipCode"
										value={formData.zipCode}
										onChange={handleInputChange}
										required
										className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
									/>
								</div>
							</div>
						</div>

						{/* Payment Information */}
						<div className="rounded-lg border border-gray-200 bg-white p-6">
							<div className="mb-4 flex items-center gap-2">
								<FaCreditCard className="text-gray-600" />
								<h2 className="text-xl font-bold text-gray-800">
									Payment Information
								</h2>
							</div>
							<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
								<div className="md:col-span-2">
									<label className="mb-2 block text-sm font-medium text-gray-700">
										Card Number *
									</label>
									<input
										type="text"
										name="cardNumber"
										value={formData.cardNumber}
										onChange={handleInputChange}
										placeholder="1234 5678 9012 3456"
										required
										className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
									/>
								</div>
								<div className="md:col-span-2">
									<label className="mb-2 block text-sm font-medium text-gray-700">
										Name on Card *
									</label>
									<input
										type="text"
										name="cardName"
										value={formData.cardName}
										onChange={handleInputChange}
										required
										className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
									/>
								</div>
								<div>
									<label className="mb-2 block text-sm font-medium text-gray-700">
										Expiry Date *
									</label>
									<input
										type="text"
										name="expiryDate"
										value={formData.expiryDate}
										onChange={handleInputChange}
										placeholder="MM/YY"
										required
										className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
									/>
								</div>
								<div>
									<label className="mb-2 block text-sm font-medium text-gray-700">
										CVV *
									</label>
									<input
										type="text"
										name="cvv"
										value={formData.cvv}
										onChange={handleInputChange}
										placeholder="123"
										required
										className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
									/>
								</div>
							</div>
						</div>

						{/* Submit Button */}
						<button
							type="submit"
							disabled={isProcessing}
							className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
						>
							{isProcessing ? (
								<>
									<div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
									Processing...
								</>
							) : (
								<>
									<FaLock />
									Place Order - ${total.toFixed(2)}
								</>
							)}
						</button>
					</form>
				</div>

				{/* Order Summary */}
				<div className="w-full lg:w-1/3">
					<div className="rounded-lg border border-gray-200 bg-white p-6">
						<h2 className="mb-4 text-xl font-bold text-gray-800">
							Order Summary
						</h2>

						{/* Items */}
						<div className="mb-4 space-y-3">
							{state.items.map((item) => (
								<div
									key={item.product.id}
									className="flex items-center gap-3"
								>
									<div className="aspect-square h-12 w-12 overflow-hidden rounded">
										<img
											src={item.product.images[0]}
											alt={item.product.name}
											className="h-full w-full object-cover"
										/>
									</div>
									<div className="flex-1">
										<p className="text-sm font-medium text-gray-800">
											{item.product.name}
										</p>
										<p className="text-xs text-gray-600">
											Qty: {item.quantity}
										</p>
									</div>
									<p className="text-sm font-semibold text-gray-800">
										$
										{(
											item.product.price * item.quantity
										).toFixed(2)}
									</p>
								</div>
							))}
						</div>

						<hr className="my-4" />

						{/* Totals */}
						<div className="space-y-2">
							<div className="flex justify-between text-sm">
								<span className="text-gray-600">Subtotal</span>
								<span>${state.total.toFixed(2)}</span>
							</div>
							<div className="flex justify-between text-sm">
								<span className="text-gray-600">Shipping</span>
								<span className="text-green-600">Free</span>
							</div>
							<div className="flex justify-between text-sm">
								<span className="text-gray-600">Tax</span>
								<span>${(state.total * 0.08).toFixed(2)}</span>
							</div>
							<hr className="my-2" />
							<div className="flex justify-between text-lg font-bold">
								<span>Total</span>
								<span>${total.toFixed(2)}</span>
							</div>
						</div>
					</div>

					{/* Security Notice */}
					<div className="mt-4 rounded-lg border border-gray-200 bg-white p-4">
						<div className="flex items-center gap-2 text-sm text-gray-600">
							<FaLock className="text-green-600" />
							<span>
								Your payment information is secure and encrypted
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
