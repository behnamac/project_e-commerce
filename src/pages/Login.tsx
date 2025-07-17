import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from 'react-icons/fa';

const Login = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
		firstName: '',
		lastName: '',
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Simulate authentication
		alert(isLogin ? 'Login successful!' : 'Registration successful!');
	};

	return (
		<div className="c-center min-h-screen py-8">
			<div className="c-space max-w-md">
				<div className="w-full rounded-lg border border-gray-200 bg-white p-8 shadow-lg">
					<div className="text-center">
						<h1 className="mb-2 text-2xl font-bold text-gray-800">
							{isLogin ? 'Welcome Back' : 'Create Account'}
						</h1>
						<p className="text-gray-600">
							{isLogin
								? 'Sign in to your account'
								: 'Join BENSTORE today'}
						</p>
					</div>

					<form onSubmit={handleSubmit} className="mt-6 space-y-4">
						{!isLogin && (
							<>
								<div className="grid grid-cols-2 gap-4">
									<div>
										<label className="mb-2 block text-sm font-medium text-gray-700">
											First Name *
										</label>
										<input
											type="text"
											name="firstName"
											value={formData.firstName}
											onChange={handleInputChange}
											required={!isLogin}
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
											required={!isLogin}
											className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
										/>
									</div>
								</div>
							</>
						)}

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
								Password *
							</label>
							<div className="relative">
								<input
									type={showPassword ? 'text' : 'password'}
									name="password"
									value={formData.password}
									onChange={handleInputChange}
									required
									className="w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 focus:border-blue-500 focus:outline-none"
								/>
								<button
									type="button"
									onClick={() =>
										setShowPassword(!showPassword)
									}
									className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-600"
								>
									{showPassword ? <FaEyeSlash /> : <FaEye />}
								</button>
							</div>
						</div>

						{!isLogin && (
							<div>
								<label className="mb-2 block text-sm font-medium text-gray-700">
									Confirm Password *
								</label>
								<input
									type="password"
									name="confirmPassword"
									value={formData.confirmPassword}
									onChange={handleInputChange}
									required={!isLogin}
									className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
								/>
							</div>
						)}

						{isLogin && (
							<div className="flex items-center justify-between">
								<label className="flex items-center">
									<input type="checkbox" className="mr-2" />
									<span className="text-sm text-gray-600">
										Remember me
									</span>
								</label>
								<Link
									to="/forgot-password"
									className="text-sm text-blue-600 hover:text-blue-800"
								>
									Forgot password?
								</Link>
							</div>
						)}

						<button
							type="submit"
							className="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
						>
							{isLogin ? 'Sign In' : 'Create Account'}
						</button>
					</form>

					{/* Social Login */}
					<div className="mt-6">
						<div className="relative">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-gray-300" />
							</div>
							<div className="relative flex justify-center text-sm">
								<span className="bg-white px-2 text-gray-500">
									Or continue with
								</span>
							</div>
						</div>

						<div className="mt-6 grid grid-cols-2 gap-3">
							<button className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
								<FaGoogle className="text-red-500" />
								Google
							</button>
							<button className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
								<FaFacebook className="text-blue-600" />
								Facebook
							</button>
						</div>
					</div>

					{/* Toggle Login/Register */}
					<div className="mt-6 text-center">
						<p className="text-sm text-gray-600">
							{isLogin
								? "Don't have an account? "
								: 'Already have an account? '}
							<button
								onClick={() => setIsLogin(!isLogin)}
								className="text-blue-600 hover:text-blue-800"
							>
								{isLogin ? 'Sign up' : 'Sign in'}
							</button>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
