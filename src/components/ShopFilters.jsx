import { formatPrice, getValues } from '../utils';
import { useSelector } from 'react-redux'; 
import { useDispatch } from 'react-redux';
import { resetFilters, changeFilters } from '../store/productsSlice';

const ShopFilters =()=>{  
    const dispatch = useDispatch(); 

    const {
        filters:{
            search,
            category,
            company,
            min_price,
            max_price,
            price
        },
        all_products
    } = useSelector((state) => state.products);

    let cats = getValues(all_products, 'category');
    let comps= getValues(all_products, 'company');
  
     return(
        <div className='filters_cont'>
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <div className='product-filter'>
                <span>Search</span>
                <input type='text' placeholder='Search' name='search' id='search' value={search} onChange={(e)=>{let name = e.target.name; let valor =e.target.value; dispatch(changeFilters({name, valor})); }}/>
            </div>
            
            <div className='product-filter'>
                <span>Categories</span>
                <select name='category' id='category' value={category} onChange={(e)=>{let name = e.target.name; let valor =e.target.value; dispatch(changeFilters({name, valor})); }}>
                {
                    cats.map((cat, index)=>{
                        return <option key={index} value={cat}>{cat}</option>
                    })
                }
                </select>
            </div> 

            <div className='product-filter'>
                <span>Company</span>
                <select name='company' id='company' value={company} onChange={(e)=>{let name = e.target.name; let valor =e.target.value; dispatch(changeFilters({name, valor})); }}>
                {
                    comps.map((comp, index)=>{
                        return <option key={index} value={comp}>{comp}</option>
                    })
                }
                </select>
            </div> 
            
            <div className='product-filter'>
                <span>Price</span>
                <div>{formatPrice(price)}</div>
                <input type='range' name='price' min={min_price} max={max_price} value={price} onChange={(e)=>{let name = e.target.name; let valor =e.target.value; dispatch(changeFilters({name, valor})); }}/>
            </div> 

            <div className='product-filter'>
                <div className='btn_cont'>
                    <div className='btn_cont'>
                        <button className='btn_link' type='reset' onClick={()=>{dispatch(resetFilters())}}>Reset filters</button>
                    </div>                    
                </div>
            </div>  
        </form>               
    </div>
     );
 }
 
 export default ShopFilters;