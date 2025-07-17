import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

const App = () => {
	return (
		<CartProvider>
			<Router>
				<div data-theme="benstore" className="bg-base-100 min-h-screen">
					<Navbar />
					<main className="flex-1">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/product/:id" element={<Product />} />
							<Route path="/cart" element={<Cart />} />
							<Route path="/checkout" element={<Checkout />} />
							<Route path="/login" element={<Login />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</main>
					<Footer />
				</div>
			</Router>
		</CartProvider>
	);
};

export default App;
