import { useState } from 'react';
import { TfiPlus, TfiMinus, TfiHeart} from 'react-icons/tfi'; 
import { useDispatch } from 'react-redux';
import { addToCart} from '../store/cartSlice';
import { addToFavorites} from '../store/favoritesSlice';

const SingleAddToCart =({product, colors=['#fff']})=>{

    const dispatch = useDispatch(); 

   const [quantity, setQuantity] = useState(1);

   const {id, stock} = product;

   const increaseQuantity = ()=>{
      if(quantity < stock){
        setQuantity(quantity+1);
      }
   }

   const decreaseQuantity = ()=>{
    if(quantity > 1){
        setQuantity(quantity-1);
      }
   }
  

   const [mainColor, setMainColor] = useState(colors[0]);
   const handleMainColor= (id) =>{
       setMainColor(colors[id]);
    }

    return(
        <>
            <div className='single_cont_colors'>
                <span>Colors:</span>
                {
                    colors.map((color, index)=>{
                        return <button key={index} style={{'background': color}} className={color==mainColor ? 'color-circle active' : 'color-circle'} onClick={()=>{handleMainColor(index)}} ></button>
                    })
                }
            </div> 
            {
            (stock > 0) && <div className='single_cont_quantity'>
                <div className='single_price'>
                    <span onClick={decreaseQuantity}><i className='ti-minus'><TfiMinus/></i></span>
                    <input type='text' value={quantity} readOnly={true} />
                    <span onClick={increaseQuantity}><i className='ti-plus'><TfiPlus/></i></span>
                </div>
                <div className='single_btns'>
                    <form onSubmit={(e)=>{e.preventDefault()}}>
                         <button className='btn' type='button' onClick={()=>{dispatch(addToCart({id, mainColor, quantity, product}))}}>Add to cart</button>
                         <button className='btn_addFavorites' type='button' onClick={()=>{dispatch(addToFavorites(product))}}><i className='ti-favorites'><TfiHeart/></i></button>
                    </form>
                </div>                
            </div>
            }   
        </>        
    );
}

export default SingleAddToCart;