import '../assets/css/FeaturedProducts.css';
import { Link} from 'react-router-dom';
import { useSelector } from 'react-redux'; 

import Loading from './Loading';
import Error from './Error';
import FeaturedItem from './FeaturedItem';

const FeaturedProducts = ()=> { 
    const {featured_products, products_loading, products_error} =useSelector((state) => state.products);
    
    if(products_loading===true){
        return <Loading/>
    }

    if(products_error===true){
        return <Error/>
    }

    if(featured_products.length<1){
        return(
            <div className='products_cont'> <h2>No products found.</h2></div>
        )
    }


     return(
        <section className='hero_section'>
        <div className='container'>
            <div className='heading-section'>
            <h2>Featured products</h2>
            </div>
            <div className='hero-list'>
                {
                    featured_products.map((product)=>{ 
                        return(                           
                            <FeaturedItem key={product.id} {...product}/>                            
                        ) 
                    })
                }                
            </div>
            <div className='btn_cont'>
            <Link to={'/shop'} className='btn'>Buy now</Link>
            </div>
        </div>
        </section> 
      );
  };
  
  export default FeaturedProducts;