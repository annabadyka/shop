import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { productsApiUrl, singleProductApiUrl } from '../assets/data/data';

const initialState = {
    products_loading: true,
    products_error: false,
    single_product_loading: true,
    single_product_error: false,
    all_products: [],
    filtered_products: [],
    featured_products: [],
    single_product: [],
    grid_view: true,
    sortBy: 'price-asc', 
    filters: {
        search: '',
        category: 'all',
        company: 'all',
        min_price: 0,
        max_price: 0,
        price: 0
    } 
}

const productsSlice = createSlice({
    name: 'products', 
    initialState, 
    reducers: {
        setGridView(state, action){
            state.grid_view = action.payload;
        }, 
        changeSortBy(state, action){
            state.sortBy= action.payload;                    
        }, 
        orderProducts(state){
            let temp_products = [];
            if (state.sortBy === 'price-asc') {
                temp_products = state.filtered_products.sort((a, b) => {
                  return a.price - b.price
                })
              }else{
                temp_products = state.filtered_products.sort((a, b) => {          
                  return b.price - a.price
                })
              }              
            state.filtered_products =temp_products;
        }, 
        resetFilters(state){
            state.filtered_products=state.all_products;
            let maxPrice = state.all_products.map((prod) => parseInt(prod.price));
            let maxPrice1 = maxPrice.reduce((n,m) => Math.max(n,m));

            state.filters.max_price = maxPrice1;
            state.filters.price = maxPrice1;
            state.filters.search ='';
            state.filters.category ='all';
            state.filters.company ='all';
            state.grid_view = true;
            state.sortBy = 'price-asc';
         
            state.products_loading = false;
            state.products_error = false;  
        },
        changeFilters(state, action){        
            let nameFilter = action.payload.name;
            let valueFilter= action.payload.valor;
            if(nameFilter=='price'){
                valueFilter = parseInt(valueFilter);
            }
            state.filters[nameFilter] = valueFilter;         
        }, 
        filterProducts(state){           
            let tempFiltered = state.all_products;
            if(state.filters.search!=''){
                tempFiltered = tempFiltered.filter((product)=>{
                    return product.name.toLowerCase().includes(state.filters.search);
                });
            }

            if(state.filters.company!='all'){
                tempFiltered = tempFiltered.filter((product)=>{
                    return product.company.toLowerCase()==state.filters.company;
                });
            } 

            if(state.filters.category!='all'){
                tempFiltered = tempFiltered.filter((product)=>{
                    return product.category.toLowerCase()== state.filters.category;
                });
            }

            tempFiltered = tempFiltered.filter((product)=>{
                return product.price<=state.filters.price;
            });

            state.filtered_products = tempFiltered;
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(getAllProducts.pending, (state, action) =>{
            state.products_loading = true;
            state.products_error = false; 
        })
        .addCase(getAllProducts.rejected, (state, action) =>{               
            state.products_error = true; 
            state.products_loading = false;
        })
        .addCase(getAllProducts.fulfilled, (state, action) =>{
            state.all_products=action.payload;
            let maxPrice = state.all_products.map((prod) => parseInt(prod.price));
            let maxPrice1 = maxPrice.reduce((n,m) => Math.max(n,m));

            const featured_products = state.all_products.filter((product)=>product.featured===true);
            state.featured_products=featured_products;

            state.filters.max_price = maxPrice1;
            if(state.filters.price == 0){state.filters.price = maxPrice1;}
            state.products_loading = false;
            state.products_error = false; 
        })
        .addCase(getSingleProduct.pending, (state, action) =>{
             state.single_product_loading = true; 
             state.single_product_error = false;
        })
        .addCase(getSingleProduct.rejected, (state, action) =>{               
            state.single_product_error = true;
            state.single_product_loading = false; 
        })
        .addCase(getSingleProduct.fulfilled, (state, action) =>{
            state.single_product=action.payload;

            state.single_product_error = false,
            state.single_product_loading = false; 
        })
    }
});



export const { filterProducts, changeFilters, resetFilters, orderProducts, setGridView, changeSortBy} = productsSlice.actions; 
export default productsSlice.reducer;


export const getAllProducts = createAsyncThunk('products', async () => {
    const response =  await axios.get(productsApiUrl);
    const products = response.data;
    return products; 
});

export const getSingleProduct = createAsyncThunk('singleProduct', async (nid_product) => {
    const response =  await axios.get(`${singleProductApiUrl}${nid_product}`);
    const product = response.data;
    return product; 
});