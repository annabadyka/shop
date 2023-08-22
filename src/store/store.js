import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './productsSlice';
import cartSlice from './cartSlice';
import favoritesSlice from './favoritesSlice';

const store = configureStore({
    reducer: {
        products: productsSlice, 
        cart: cartSlice, 
        favorites: favoritesSlice,
    }
});

export default store;