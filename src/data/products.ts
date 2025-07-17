export interface Product {
	id: string;
	name: string;
	price: number;
	originalPrice?: number;
	description: string;
	category: string;
	images: string[];
	rating: number;
	reviews: number;
	inStock: boolean;
	features: string[];
	sizes?: string[];
	colors?: string[];
}

export const products: Product[] = [
	{
		id: '1',
		name: 'Premium Leather Backpack',
		price: 89.99,
		originalPrice: 129.99,
		description:
			'High-quality leather backpack with multiple compartments and laptop sleeve. Perfect for work and travel.',
		category: 'backpack',
		images: [
			'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
			'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500&h=500&fit=crop',
			'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=500&h=500&fit=crop',
		],
		rating: 4.8,
		reviews: 127,
		inStock: true,
		features: [
			'Genuine leather',
			'Laptop compartment',
			'Water resistant',
			'Adjustable straps',
		],
		sizes: ['One Size'],
		colors: ['Brown', 'Black', 'Tan'],
	},
	{
		id: '2',
		name: 'Messenger Bag Classic',
		price: 65.99,
		description:
			'Timeless messenger bag with vintage appeal. Made from durable canvas with leather accents.',
		category: 'messenger',
		images: [
			'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&h=500&fit=crop',
			'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=500&fit=crop',
		],
		rating: 4.6,
		reviews: 89,
		inStock: true,
		features: [
			'Canvas material',
			'Leather trim',
			'Crossbody design',
			'Multiple pockets',
		],
		sizes: ['One Size'],
		colors: ['Khaki', 'Navy', 'Olive'],
	},
	{
		id: '3',
		name: 'Professional Briefcase',
		price: 149.99,
		originalPrice: 199.99,
		description:
			'Executive briefcase with premium Italian leather. Features a sophisticated design for the modern professional.',
		category: 'briefcase',
		images: [
			'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
			'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500&h=500&fit=crop',
		],
		rating: 4.9,
		reviews: 203,
		inStock: true,
		features: [
			'Italian leather',
			'Laptop protection',
			'Organized interior',
			'Professional look',
		],
		sizes: ['15"', '17"'],
		colors: ['Black', 'Brown', 'Burgundy'],
	},
	{
		id: '4',
		name: 'Canvas Tote Bag',
		price: 34.99,
		description:
			'Versatile canvas tote bag perfect for everyday use. Eco-friendly and stylish.',
		category: 'tote',
		images: [
			'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&h=500&fit=crop',
			'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=500&fit=crop',
		],
		rating: 4.4,
		reviews: 156,
		inStock: true,
		features: [
			'Eco-friendly canvas',
			'Reinforced handles',
			'Spacious interior',
			'Machine washable',
		],
		sizes: ['Medium', 'Large'],
		colors: ['Natural', 'Gray', 'Blue'],
	},
	{
		id: '5',
		name: 'Evening Clutch',
		price: 45.99,
		description:
			'Elegant evening clutch with metallic finish. Perfect for formal occasions and parties.',
		category: 'clutch',
		images: [
			'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
			'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500&h=500&fit=crop',
		],
		rating: 4.7,
		reviews: 78,
		inStock: true,
		features: [
			'Metallic finish',
			'Chain strap',
			'Compact design',
			'Evening wear',
		],
		sizes: ['One Size'],
		colors: ['Gold', 'Silver', 'Rose Gold'],
	},
	{
		id: '6',
		name: 'Travel Duffel Bag',
		price: 79.99,
		description:
			'Spacious duffel bag designed for travel and gym use. Water-resistant and durable.',
		category: 'backpack',
		images: [
			'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&h=500&fit=crop',
			'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=500&fit=crop',
		],
		rating: 4.5,
		reviews: 92,
		inStock: true,
		features: [
			'Water-resistant',
			'Large capacity',
			'Shoulder strap',
			'Multiple pockets',
		],
		sizes: ['Medium', 'Large'],
		colors: ['Black', 'Navy', 'Gray'],
	},
	{
		id: '7',
		name: 'Laptop Sleeve Premium',
		price: 29.99,
		description:
			'Protective laptop sleeve with neoprene padding. Fits most 13-15 inch laptops.',
		category: 'backpack',
		images: [
			'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
			'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500&h=500&fit=crop',
		],
		rating: 4.3,
		reviews: 234,
		inStock: true,
		features: [
			'Neoprene padding',
			'Water-resistant',
			'Lightweight',
			'Multiple sizes',
		],
		sizes: ['13"', '15"', '17"'],
		colors: ['Black', 'Gray', 'Blue'],
	},
	{
		id: '8',
		name: 'Crossbody Bag',
		price: 55.99,
		description:
			'Comfortable crossbody bag with adjustable strap. Perfect for hands-free convenience.',
		category: 'messenger',
		images: [
			'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&h=500&fit=crop',
			'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=500&fit=crop',
		],
		rating: 4.6,
		reviews: 167,
		inStock: true,
		features: [
			'Adjustable strap',
			'Crossbody design',
			'Secure closure',
			'Compact size',
		],
		sizes: ['One Size'],
		colors: ['Black', 'Brown', 'Tan'],
	},
];

export const categories = [
	{ id: 'backpack', name: 'Backpack', count: 3 },
	{ id: 'messenger', name: 'Messenger Bags', count: 2 },
	{ id: 'briefcase', name: 'Briefcase', count: 1 },
	{ id: 'tote', name: 'Totes', count: 1 },
	{ id: 'clutch', name: 'Clutches', count: 1 },
];
