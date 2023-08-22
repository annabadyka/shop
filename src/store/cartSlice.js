import { createSlice} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
    cart: [],
    total_items: 0,
    total_amount: 0, 
    shipping_fee: 500
}

function calculateTotals (state){
    let totalPrice= 0;
    let totalItems= 0;
    let tmpCart = state.cart.map((product)=>{      
        totalItems += parseInt(product.amount);
        totalPrice += parseInt(product.amount) * parseInt(product.price);
    });
    state.total_items=totalItems;
    state.total_amount = totalPrice; 
}


const cartSlice = createSlice({
    name: 'cart', 
    initialState, 
    reducers: {
        addToCart(state, action){
            const {id, mainColor, quantity, product} = action.payload;
            let tempProduct = state.cart.find((item) => {
                return item.id === id+mainColor;
            });
            if(tempProduct){//change existing
                let tempCart = state.cart.map((cartItem)=>{
                    if(cartItem.id === id+mainColor){//
                        let newAmount = parseInt(cartItem.amount) + parseInt(quantity);
                        if(newAmount > parseInt(cartItem.max_stock)){
                            newAmount = cartItem.max_stock;
                        }
                        cartItem.amount = newAmount;
                        return cartItem;                       
                    }else{
                        return cartItem;
                    }
                });
                state.cart = tempCart;
            }else{//add new
            let newProduct={
                id: id+mainColor, 
                name: product.name,
                color: mainColor, 
                image: product.images[0].url,
                amount: quantity,
                price: product.price,
                max_stock: product.stock
            }
               state.cart.push(newProduct);
            }
            calculateTotals(state);
            toast.success('Added to cart!');
        }, 
        clearCart(state){
            state.cart = [];
            state.total_items= 0;
            state.total_amount = 0; 
        }, 
        removeItemCart(state, action){
            const idDelete = action.payload;
            let tempCart1 = state.cart.filter((product)=>{
                return product.id !== idDelete;
            });
            state.cart = tempCart1; 
            calculateTotals(state);
        }, 
        increaseAmountItemCart(state, action){
            const nid = action.payload;
            let tempoCart = state.cart.map((product)=>{
                 if(product.id === nid){
                    let tempAmount = parseInt(product.amount)+1;
                    if(tempAmount > parseInt(product.max_stock)){
                        tempAmount=product.max_stock;
                    }
                    product.amount = tempAmount;
                    return product;
                 }else{
                     return product;
                 }
             });
             state.cart = tempoCart; 
             calculateTotals(state);
        }, 
        decreaseAmountItemCart(state, action){
            const nid = action.payload;
            let tempoCart = state.cart.map((product)=>{
                 if(product.id === nid){
                    let tempAmount = parseInt(product.amount)-1;
                    if(tempAmount < 1){tempAmount=1;}
                    product.amount = tempAmount;
                    return product;                
                 }else{
                     return product;
                 }
             });
             state.cart = tempoCart; 
             calculateTotals(state);
        }
    }      
});


export const {addToCart, clearCart, removeItemCart, increaseAmountItemCart, decreaseAmountItemCart} = cartSlice.actions; 
export default cartSlice.reducer;