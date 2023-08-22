import { Link } from 'react-router-dom';
import {TfiZoomIn} from 'react-icons/tfi';
import '../assets/css/GridView.css';
import { formatPrice } from '../utils';

const GridView = ({id, name, image, price, category})=> { 
     
    return(
        <>
            <div className='product'>
                <div className='product_holder'>
                    <img src={image} alt={name} />
                    <div className='product-data'>
                        <div className='product-data-cat'>{category}</div>
                    </div>
                    <div className='product-actions'>
                        <Link to={`/single/${id}`}>
                            <div className='product-actions-btn'>
                                <i className='ti-zoom-in'><TfiZoomIn/></i>
                            </div>
                        </Link>                       
                    </div>
                </div>
                <div className='product-content'>
                    <div>
                        <Link to={`/single/${id}`} className='product-title'>{name}</Link>
                    </div>
                    <div className='product-price'>{formatPrice(price)}</div>
                </div>
            </div>
        </>     
      );
  };
  
  export default GridView;