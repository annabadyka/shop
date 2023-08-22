
import { TfiClose} from 'react-icons/tfi';
import { Link} from 'react-router-dom';
import { formatPrice } from '../utils'; 
import { useDispatch} from 'react-redux'; 
import { removeItemFavorites} from '../store/favoritesSlice';


const FavoritesItem =({item})=>{
    const {id, name, image, price} = item;

    const dispatch = useDispatch(); 
    
    return(
        <article>
            <div className='article_prod_title'>
                <Link to={`/single/${id}`} className='product-title'><img src={image} alt={name} /></Link>
                <span><Link to={`/single/${id}`}>{name}</Link></span>
            </div>
            <div>{formatPrice(price)}</div>            
            <div><span><i className='ti-close' onClick={()=>{dispatch(removeItemFavorites(id))}}><TfiClose/></i></span></div>
        </article> 
    );
}

export default FavoritesItem;