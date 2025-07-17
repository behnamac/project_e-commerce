export interface Product {
	id: string;
	name: string;
	price: number;
	originalPrice?: number;
	description: string;
	category: string;
	brand: string;
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
		brand: 'LeatherCraft',
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
		brand: 'VintageStyle',
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
		brand: 'ExecutivePro',
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
		brand: 'EcoStyle',
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
		brand: 'Elegance',
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
		brand: 'TravelPro',
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
		brand: 'TechGuard',
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
		brand: 'ComfortStyle',
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
	// T-Shirts
	{
		id: '9',
		name: 'Classic Cotton T-Shirt',
		price: 24.99,
		description:
			'Premium cotton t-shirt with a comfortable fit. Perfect for everyday wear.',
		category: 'tshirt',
		brand: 'CottonComfort',
		images: [
			'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
			'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop',
		],
		rating: 4.5,
		reviews: 189,
		inStock: true,
		features: [
			'100% cotton',
			'Breathable fabric',
			'Classic fit',
			'Machine washable',
		],
		sizes: ['S', 'M', 'L', 'XL'],
		colors: ['White', 'Black', 'Gray', 'Navy'],
	},
	{
		id: '10',
		name: 'Graphic Print T-Shirt',
		price: 29.99,
		description:
			'Stylish graphic t-shirt with unique artwork. Made from soft, durable cotton.',
		category: 'tshirt',
		brand: 'UrbanStyle',
		images: [
			'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=500&fit=crop',
			'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop',
		],
		rating: 4.7,
		reviews: 156,
		inStock: true,
		features: [
			'Graphic print',
			'Soft cotton',
			'Relaxed fit',
			'Vibrant colors',
		],
		sizes: ['S', 'M', 'L', 'XL'],
		colors: ['White', 'Black', 'Red', 'Blue'],
	},
	{
		id: '11',
		name: 'Premium V-Neck T-Shirt',
		price: 34.99,
		description:
			'Elegant v-neck t-shirt with a modern silhouette. Perfect for casual and semi-formal occasions.',
		category: 'tshirt',
		brand: 'ModernFit',
		images: [
			'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&h=500&fit=crop',
			'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop',
		],
		rating: 4.8,
		reviews: 203,
		inStock: true,
		features: [
			'V-neck design',
			'Premium cotton',
			'Modern fit',
			'Versatile style',
		],
		sizes: ['S', 'M', 'L', 'XL'],
		colors: ['White', 'Black', 'Gray', 'Burgundy'],
	},
	{
		id: '12',
		name: 'Striped Polo T-Shirt',
		price: 39.99,
		description:
			'Classic striped polo t-shirt with a sophisticated look. Ideal for business casual settings.',
		category: 'tshirt',
		brand: 'BusinessCasual',
		images: [
			'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&h=500&fit=crop',
			'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop',
		],
		rating: 4.6,
		reviews: 134,
		inStock: true,
		features: [
			'Striped pattern',
			'Polo collar',
			'Professional look',
			'Comfortable fit',
		],
		sizes: ['S', 'M', 'L', 'XL'],
		colors: ['Navy/White', 'Red/White', 'Green/White'],
	},
	// Shoes
	{
		id: '13',
		name: 'Classic Sneakers',
		price: 79.99,
		description:
			'Timeless sneakers with a comfortable design. Perfect for everyday wear and casual outings.',
		category: 'shoes',
		brand: 'ComfortStep',
		images: [
			'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop',
			'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop',
		],
		rating: 4.7,
		reviews: 245,
		inStock: true,
		features: [
			'Comfortable sole',
			'Breathable upper',
			'Classic design',
			'Durable construction',
		],
		sizes: ['7', '8', '9', '10', '11', '12'],
		colors: ['White', 'Black', 'Gray', 'Navy'],
	},
	{
		id: '14',
		name: 'Running Shoes',
		price: 129.99,
		description:
			'High-performance running shoes with advanced cushioning technology. Designed for serious runners.',
		category: 'shoes',
		brand: 'RunFast',
		images: [
			'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop',
			'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop',
		],
		rating: 4.9,
		reviews: 312,
		inStock: true,
		features: [
			'Advanced cushioning',
			'Breathable mesh',
			'Lightweight design',
			'Shock absorption',
		],
		sizes: ['7', '8', '9', '10', '11', '12'],
		colors: ['Blue', 'Red', 'Black', 'Gray'],
	},
	{
		id: '15',
		name: 'Formal Oxford Shoes',
		price: 149.99,
		description:
			'Elegant Oxford shoes crafted from premium leather. Perfect for formal occasions and business meetings.',
		category: 'shoes',
		brand: 'ElegantStep',
		images: [
			'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop',
			'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop',
		],
		rating: 4.8,
		reviews: 178,
		inStock: true,
		features: [
			'Premium leather',
			'Oxford design',
			'Comfortable insole',
			'Durable construction',
		],
		sizes: ['7', '8', '9', '10', '11', '12'],
		colors: ['Black', 'Brown', 'Burgundy'],
	},
	{
		id: '16',
		name: 'Casual Loafers',
		price: 89.99,
		description:
			'Comfortable loafers with a modern design. Perfect for casual and semi-formal occasions.',
		category: 'shoes',
		brand: 'CasualComfort',
		images: [
			'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop',
			'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop',
		],
		rating: 4.6,
		reviews: 156,
		inStock: true,
		features: [
			'Slip-on design',
			'Soft leather',
			'Comfortable fit',
			'Versatile style',
		],
		sizes: ['7', '8', '9', '10', '11', '12'],
		colors: ['Brown', 'Black', 'Tan', 'Gray'],
	},
];

export const categories = [
	{ id: 'backpack', name: 'Backpacks', count: 3 },
	{ id: 'messenger', name: 'Messenger Bags', count: 2 },
	{ id: 'briefcase', name: 'Briefcases', count: 1 },
	{ id: 'tote', name: 'Totes', count: 1 },
	{ id: 'clutch', name: 'Clutches', count: 1 },
	{ id: 'tshirt', name: 'T-Shirts', count: 4 },
	{ id: 'shoes', name: 'Shoes', count: 4 },
];

export const brands = [
	'LeatherCraft',
	'VintageStyle',
	'ExecutivePro',
	'EcoStyle',
	'Elegance',
	'TravelPro',
	'TechGuard',
	'ComfortStyle',
	'CottonComfort',
	'UrbanStyle',
	'ModernFit',
	'BusinessCasual',
	'ComfortStep',
	'RunFast',
	'ElegantStep',
	'CasualComfort',
];

export const colors = [
	'White',
	'Black',
	'Gray',
	'Navy',
	'Blue',
	'Red',
	'Brown',
	'Tan',
	'Khaki',
	'Olive',
	'Burgundy',
	'Gold',
	'Silver',
	'Rose Gold',
	'Natural',
	'Green',
];
