import '../assets/css/Shop.css';
import { TfiLayoutGrid3, TfiLayoutWidthDefault} from "react-icons/tfi";
import HeroSecondary from '../components/HeroSecondary';
import AllProducts from '../components/AllProducts';
import ShopFilters from '../components/ShopFilters';
 
import { useSelector } from 'react-redux'; 
import { useDispatch } from 'react-redux';
import {setGridView, changeSortBy, getAllProducts, filterProducts, orderProducts} from '../store/productsSlice';

import { useEffect } from 'react';
import { ScrollRestoration } from 'react-router-dom';

const Shop = ()=> { 

    const dispatch = useDispatch(); 
    const { 
        filtered_products, grid_view, sortBy, 
        filters:{
            search,
            category,
            company,
            min_price,
            max_price,
            price
        }
    } = useSelector((state) => state.products);     
     
    useEffect(()=>{ 
        dispatch(getAllProducts());      
    },[]);

useEffect(()=>{
    dispatch(filterProducts()); 
    dispatch(orderProducts()); 
}, [search, category, company, price, sortBy]);

    return(
        <>
        <ScrollRestoration />
        <HeroSecondary title="Shop"/>        
        <section className="shop_section">
           <div className="container"> 
               <ShopFilters/>                              
                <div className="product-section">
                    <div className="filters_cont_inline">
                    {filtered_products.length} products
                    </div>
                    <div className="filters_cont_inline">
                        <div className="product-filter">
                            <select name="sortBy" id="sortBy" value={sortBy} onChange={(e)=>{ dispatch(changeSortBy(e.target.value))}}>
                                <option value="price-asc">Price Lowest First</option>
                                <option value="price-desc">Price Highest First</option>                            
                            </select>
                        </div> 
                        <div className="product-filter cont-grid_sign">
                            <i className={grid_view ? "grid-sign active": "grid-sign"} onClick={()=>{dispatch(setGridView(true))}}><TfiLayoutGrid3/></i> 
                            <i className={!grid_view ? "grid-sign active": "grid-sign"} onClick={()=>{dispatch(setGridView(false))}}><TfiLayoutWidthDefault/></i> 
                        </div> 
                    </div>
                    <AllProducts/>
                </div>
            </div>
        </section>
        </>
      );
  };
  
  export default Shop;