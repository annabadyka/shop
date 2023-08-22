import { Link } from 'react-router-dom';
import { TfiAngleRight} from 'react-icons/tfi';
import { formatPrice } from '../utils';
import '../assets/css/ListView.css';

const ListView = ({id, name, image, price, description, category})=> { 

    return(
        <>
            <div className='product1'>
                <div className='product_holder1'>
                    <img src={image} alt={name} />
                    <div className='product-data1'>
                        <div className='product-data-cat1'>{category}</div>
                    </div>
                </div>
                <div className='product-content1'>
                    <div className='product-title1'>{name}</div>
                    <div className='product-price1'>{formatPrice(price)}</div>
                    <div className='product-descrip1'>{description.slice(0,60)}...</div>
                    <div className='btn_cont'>
                        <Link to={`/single/${id}`} className='btn_link'>
                        More info <i className='ti-angle-left'><TfiAngleRight/></i> 
                        </Link>
                    </div>                    
                </div>                
            </div>
        </>     
      );
  };
  
  export default ListView;