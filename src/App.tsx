import React from 'react';
import { type RouteConfig, route } from 'react-router/dev/routes';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
	return (
		<>
			<Navbar />
			<Home />
		</>
	);
};

export default App;
