import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product } from '../data/products';

interface CartItem {
	product: Product;
	quantity: number;
}

interface CartState {
	items: CartItem[];
	total: number;
}

type CartAction =
	| { type: 'ADD_ITEM'; payload: Product }
	| { type: 'REMOVE_ITEM'; payload: string }
	| {
			type: 'UPDATE_QUANTITY';
			payload: { productId: string; quantity: number };
	  }
	| { type: 'CLEAR_CART' };

const initialState: CartState = {
	items: [],
	total: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
	switch (action.type) {
		case 'ADD_ITEM': {
			const existingItem = state.items.find(
				(item) => item.product.id === action.payload.id,
			);

			if (existingItem) {
				return {
					...state,
					items: state.items.map((item) =>
						item.product.id === action.payload.id
							? { ...item, quantity: item.quantity + 1 }
							: item,
					),
					total: state.total + action.payload.price,
				};
			} else {
				return {
					...state,
					items: [
						...state.items,
						{ product: action.payload, quantity: 1 },
					],
					total: state.total + action.payload.price,
				};
			}
		}

		case 'REMOVE_ITEM': {
			const itemToRemove = state.items.find(
				(item) => item.product.id === action.payload,
			);
			if (!itemToRemove) return state;

			return {
				...state,
				items: state.items.filter(
					(item) => item.product.id !== action.payload,
				),
				total:
					state.total -
					itemToRemove.product.price * itemToRemove.quantity,
			};
		}

		case 'UPDATE_QUANTITY': {
			const item = state.items.find(
				(item) => item.product.id === action.payload.productId,
			);
			if (!item) return state;

			const quantityDiff = action.payload.quantity - item.quantity;

			return {
				...state,
				items: state.items.map((item) =>
					item.product.id === action.payload.productId
						? { ...item, quantity: action.payload.quantity }
						: item,
				),
				total: state.total + item.product.price * quantityDiff,
			};
		}

		case 'CLEAR_CART':
			return initialState;

		default:
			return state;
	}
};

interface CartContextType {
	state: CartState;
	addItem: (product: Product) => void;
	removeItem: (productId: string) => void;
	updateQuantity: (productId: string, quantity: number) => void;
	clearCart: () => void;
	getItemQuantity: (productId: string) => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	const addItem = (product: Product) => {
		dispatch({ type: 'ADD_ITEM', payload: product });
	};

	const removeItem = (productId: string) => {
		dispatch({ type: 'REMOVE_ITEM', payload: productId });
	};

	const updateQuantity = (productId: string, quantity: number) => {
		if (quantity <= 0) {
			removeItem(productId);
		} else {
			dispatch({
				type: 'UPDATE_QUANTITY',
				payload: { productId, quantity },
			});
		}
	};

	const clearCart = () => {
		dispatch({ type: 'CLEAR_CART' });
	};

	const getItemQuantity = (productId: string): number => {
		const item = state.items.find((item) => item.product.id === productId);
		return item ? item.quantity : 0;
	};

	return (
		<CartContext.Provider
			value={{
				state,
				addItem,
				removeItem,
				updateQuantity,
				clearCart,
				getItemQuantity,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = (): CartContextType => {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error('useCart must be used within a CartProvider');
	}
	return context;
};
