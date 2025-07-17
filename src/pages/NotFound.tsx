import { Link } from 'react-router-dom';
import { FaHome, FaSearch } from 'react-icons/fa';

const NotFound = () => {
	return (
		<div className="c-center min-h-screen py-8">
			<div className="c-space flex-col gap-8 text-center">
				<div className="flex flex-col items-center gap-6">
					<div className="text-8xl font-bold text-gray-300">404</div>
					<div className="max-w-md">
						<h1 className="mb-4 text-3xl font-bold text-gray-800">
							Page Not Found
						</h1>
						<p className="text-gray-600">
							Sorry, the page you are looking for doesn't exist or
							has been moved.
						</p>
					</div>
				</div>

				<div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
					<Link
						to="/"
						className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
					>
						<FaHome />
						Go Home
					</Link>
					<Link
						to="/"
						className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
					>
						<FaSearch />
						Browse Products
					</Link>
				</div>

				<div className="mt-8 rounded-lg border border-gray-200 bg-white p-6">
					<h2 className="mb-4 text-xl font-bold text-gray-800">
						Popular Categories
					</h2>
					<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
						<Link
							to="/?category=backpack"
							className="rounded-lg border border-gray-200 p-4 text-center transition-colors hover:border-blue-500 hover:bg-blue-50"
						>
							<div className="text-2xl font-bold text-blue-600">
								🎒
							</div>
							<div className="text-sm font-medium text-gray-800">
								Backpacks
							</div>
						</Link>
						<Link
							to="/?category=messenger"
							className="rounded-lg border border-gray-200 p-4 text-center transition-colors hover:border-blue-500 hover:bg-blue-50"
						>
							<div className="text-2xl font-bold text-blue-600">
								💼
							</div>
							<div className="text-sm font-medium text-gray-800">
								Messenger Bags
							</div>
						</Link>
						<Link
							to="/?category=briefcase"
							className="rounded-lg border border-gray-200 p-4 text-center transition-colors hover:border-blue-500 hover:bg-blue-50"
						>
							<div className="text-2xl font-bold text-blue-600">
								📁
							</div>
							<div className="text-sm font-medium text-gray-800">
								Briefcases
							</div>
						</Link>
						<Link
							to="/?category=tote"
							className="rounded-lg border border-gray-200 p-4 text-center transition-colors hover:border-blue-500 hover:bg-blue-50"
						>
							<div className="text-2xl font-bold text-blue-600">
								👜
							</div>
							<div className="text-sm font-medium text-gray-800">
								Tote Bags
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
