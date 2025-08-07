import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../data/products';
import { RootState } from '../index';

interface CartItem {
	product: Product;
	quantity: number;
}

interface CartState {
	items: CartItem[];
	total: number;
}

const initialState: CartState = {
	items: [],
	total: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<Product>) => {
			const existingItem = state.items.find(
				(item) => item.product.id === action.payload.id,
			);

			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				state.items.push({ product: action.payload, quantity: 1 });
			}
			state.total += action.payload.price;
		},

		removeItem: (state, action: PayloadAction<string>) => {
			const itemToRemove = state.items.find(
				(item) => item.product.id === action.payload,
			);
			if (itemToRemove) {
				state.total -=
					itemToRemove.product.price * itemToRemove.quantity;
				state.items = state.items.filter(
					(item) => item.product.id !== action.payload,
				);
			}
		},

		updateQuantity: (
			state,
			action: PayloadAction<{ productId: string; quantity: number }>,
		) => {
			const { productId, quantity } = action.payload;
			const item = state.items.find(
				(item) => item.product.id === productId,
			);

			if (item) {
				if (quantity <= 0) {
					state.total -= item.product.price * item.quantity;
					state.items = state.items.filter(
						(item) => item.product.id !== productId,
					);
				} else {
					const quantityDiff = quantity - item.quantity;
					item.quantity = quantity;
					state.total += item.product.price * quantityDiff;
				}
			}
		},

		clearCart: (state) => {
			state.items = [];
			state.total = 0;
		},
	},
});

export const { addItem, removeItem, updateQuantity, clearCart } =
	cartSlice.actions;

// Selectors
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartTotal = (state: RootState) => state.cart.total;
export const selectCartItemCount = (state: RootState) =>
	state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const selectItemQuantity = (state: RootState, productId: string) => {
	const item = state.cart.items.find((item) => item.product.id === productId);
	return item ? item.quantity : 0;
};

export default cartSlice.reducer;
