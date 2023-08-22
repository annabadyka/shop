import Loading from './Loading';
import Error from './Error'; 
import GridView from './GridView';
import ListView from './ListView';

import { useSelector } from 'react-redux'; 

const AllProducts = ()=> { 

    const {filtered_products, grid_view, products_loading, products_error} = useSelector((state) => state.products);
    if(products_loading===true){
        return <Loading/>
    }

    if(products_error===true){
        return <Error/>
    }

    if(filtered_products.length<1){
        return(
            <div className='products_cont'> <h2>No products found.</h2></div>
        )
    }

    if(grid_view){
        return(
            <div className='products_cont'> 
            {
                filtered_products.map((product)=>{ 
                    return(     
                        <GridView key={product.id} {...product}/>                   
                    ) 
                })
            }                 
            </div>
          );
    }else{
        return(
            <div className='products_cont1'> 
            {
                filtered_products.map((product)=>{ 
                    return(     
                        <ListView key={product.id} {...product}/>                   
                    ) 
                })
            }                 
            </div>
          );
    }
   
  };
  
  export default AllProducts;