
import { TfiPlus, TfiMinus, TfiClose} from 'react-icons/tfi';
import { Link} from 'react-router-dom';
import { formatPrice } from '../utils';
import { useDispatch} from 'react-redux'; 
import { removeItemCart, decreaseAmountItemCart, increaseAmountItemCart} from '../store/cartSlice';


const CartItem =({item})=>{
    const {id, name, color, image, amount, price, max_stock} =item;

    const dispatch = useDispatch(); 
    
    return(
        <article>
            <div className='article_prod_title'>
                <Link to={`/single/${id}`} className='product-title'><img src={image} alt={name} /></Link>
                <span><Link to={`/single/${id}`}>{name}</Link></span>
                <span className='color-circle' style={{'background': color}}></span>
            </div>
            <div>{formatPrice(price)}</div>
            <div className='article_prod_quant'>
                <span><i className='ti-minus' onClick={()=>{dispatch(decreaseAmountItemCart(id) )}}><TfiMinus/></i></span>
                <input type='text' value={amount} readOnly/>
                <span><i className='ti-plus' onClick={()=>{dispatch(increaseAmountItemCart(id) )}}><TfiPlus/></i></span>
            </div>
            <div className='article_prod_total'>{formatPrice(price * amount)}</div>
            <div><span><i className='ti-close' onClick={()=>{dispatch(removeItemCart(id))}}><TfiClose/></i></span></div>
        </article> 
    );
}

export default CartItem;