import { createSlice} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
    favorites: [],
    total_favorites: 0}

const favoritesSlice = createSlice({
    name: 'favorites', 
    initialState, 
    reducers: {
        addToFavorites(state, action){            
            const product = action.payload;
            let tempProduct = state.favorites.find((item) => {
                return item.id === product.id;
            });
            if(tempProduct){//change existing
                toast.success('Already in favorites list!');
            }else{//add new
            let newProduct={
                id: product.id, 
                name: product.name,
                image: product.images[0].url,
                price: product.price
            }
               state.favorites.push(newProduct);
               state.total_favorites =  state.favorites.length;
               toast.success('Added to favorites list!');
            }                     
        }, 
        clearFavorites(state){
            state.favorites = [];
            state.total_favorites = state.favorites.length;
        }, 
        removeItemFavorites(state, action){
           const idDelete = action.payload;
            let tempFavorites = state.favorites.filter((product)=>{
                return product.id !== idDelete;
            });
            state.favorites = tempFavorites; 
            state.total_favorites =  state.favorites.length;
        } 
    }      
});


export const {addToFavorites, clearFavorites, removeItemFavorites} = favoritesSlice.actions; 
export default favoritesSlice.reducer;