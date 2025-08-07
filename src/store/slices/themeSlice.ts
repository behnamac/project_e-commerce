import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

type Theme = 'light' | 'dark';

interface ThemeState {
	theme: Theme;
}

const initialState: ThemeState = {
	theme: (localStorage.getItem('theme') as Theme) || 'light',
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<Theme>) => {
			state.theme = action.payload;
			localStorage.setItem('theme', action.payload);
			document.documentElement.setAttribute('data-theme', action.payload);
		},
		toggleTheme: (state) => {
			state.theme = state.theme === 'light' ? 'dark' : 'light';
			localStorage.setItem('theme', state.theme);
			document.documentElement.setAttribute('data-theme', state.theme);
		},
	},
});

export const { setTheme, toggleTheme } = themeSlice.actions;

// Selectors
export const selectTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
