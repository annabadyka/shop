import '../assets/css/Cart.css';
import {TfiAngleLeft} from 'react-icons/tfi';
import HeroSecondary from '../components/HeroSecondary';
import CartItem from '../components/CartItem';
import { formatPrice } from '../utils';
import { useDispatch, useSelector } from 'react-redux'; 
import { Link } from 'react-router-dom';
import { clearCart} from '../store/cartSlice';
import { ScrollRestoration } from 'react-router-dom';

const Cart = ()=> {
    const dispatch = useDispatch(); 
   
    const {cart, shipping_fee, total_amount} = useSelector((state) => state.cart);

    if(cart.length<1){
        return(
            <>  
                <ScrollRestoration />
                <HeroSecondary title='Cart'/>
                <section className='cart_section'>
                    <div className='container'><h2>Your cart is empty. </h2></div>
                    <div className='container'>
                        <div className='btn_cont'>
                            <Link className='btn_link' to={'/shop'}>
                            <i className='ti-angle-left'><TfiAngleLeft/></i> Go Shopping  
                            </Link> 
                        </div>
                    </div>
                </section>
            </>
        )
    }
    return(
        <> 
        <ScrollRestoration />       
        <HeroSecondary title='Cart'/>
        <section className='cart_section'>
            <div className='container'>
            <div className='cart-table'>
                <div className='cart-table-title'>
                    <div>Product</div>
                    <div>Price</div>
                    <div>Quant.</div>
                    <div>Total</div>
                    <div>Delete</div>
                </div>
                <div className='cart-table-data'>
                    {
                        cart.map((item, index)=>{
                            return <CartItem key={index} item={item}/>  
                        })
                    }                            
                </div>
            </div>
            <div className='cart-action'>
                <div className='btn_cont'>
                    <Link className='btn_link' to={'/shop'}>
                    <i className='ti-angle-left'><TfiAngleLeft/></i> Go Shopping  
                    </Link> 
                </div>
                <div className='btn_cont'><button className='btn' onClick={()=>{dispatch(clearCart())}}>Clear cart</button></div>
            </div>
           <div className='cart-totals'>
                <div className='cart-totals-table'>
                    <div className='cart-totals_subtotal'>
                        <div>Subtotal: </div>
                        <div>{formatPrice(total_amount)}</div>
                    </div>
                    <div className='cart-totals_shipping'>
                        <div>Shipping cost: </div>
                        <div>{formatPrice(shipping_fee)}</div>
                    </div>

                    <div className='cart-totals_order'>
                        <div>Order Total: </div>
                        <div>{formatPrice(total_amount + shipping_fee)}</div>
                    </div>
                </div>
                <div className='btn_cont'>
                   <button className='btn'>Buy</button>
                </div>
            </div>
            </div>
        </section>
      </>
    );
}

export default Cart;