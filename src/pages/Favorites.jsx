import '../assets/css/Favorites.css';
import {TfiAngleLeft} from 'react-icons/tfi';
import HeroSecondary from '../components/HeroSecondary';
import FavoritesItem from '../components/FavoritesItem';
import { useDispatch, useSelector } from 'react-redux'; 
import { Link } from 'react-router-dom';
import { clearFavorites } from '../store/favoritesSlice';
import { ScrollRestoration } from 'react-router-dom';

const Favorites = ()=> {
    const dispatch = useDispatch(); 
   
    const {favorites} = useSelector((state) => state.favorites);

    if(favorites.length<1){
        return(
            <>  
                <ScrollRestoration />
                <HeroSecondary title='Favorites'/>
                <section className='favorites_section'>
                    <div className='container'><h2>The list is empty. </h2></div>
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
        <HeroSecondary title='Favorites'/>
        <section className='favorites_section'>
            <div className='container'>
            <div className='favorites-table'>
                <div className='favorites-table-title'>
                    <div>Product</div>
                    <div>Price</div>
                    <div>Delete</div>
                </div>
                <div className='favorites-table-data'>
                    {
                        favorites.map((item, index)=>{
                            return <FavoritesItem key={index} item={item}/>  
                        })
                    }                            
                </div>
            </div>
            <div className='favorites-action'>
                <div className='btn_cont'>
                    <Link className='btn_link' to={'/shop'}>
                    <i className='ti-angle-left'><TfiAngleLeft/></i> Go Shopping  
                    </Link> 
                </div>
                <div className='btn_cont'><button className='btn' onClick={()=>{dispatch(clearFavorites())}}>Delete All</button></div>
            </div>
            </div>
        </section>
      </>
    );
}

export default Favorites;