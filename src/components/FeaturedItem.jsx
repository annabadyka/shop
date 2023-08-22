import { Link } from 'react-router-dom';
import { formatPrice } from '../utils';

const FeaturedItem =({id, name, image, price})=>{
    return(
        <div className='hero-card' >
            <Link to={`/single/${id}`} className='card-title'>
            <div className='image-holder'>
                <img src={image} alt={name} />
            </div>
            <div className='card-content'>
                <h3>{name}</h3>
                <p>{formatPrice(price)}</p>
            </div>
            </Link>
        </div>
    );
}

export default FeaturedItem;