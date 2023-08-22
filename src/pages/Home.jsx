import '../assets/css/Home.css';
import { TfiWand, TfiTruck, TfiMoney } from "react-icons/tfi";
import FeaturedProducts from '../components/FeaturedProducts';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getAllProducts} from '../store/productsSlice';
import { useEffect } from 'react';

const Home = ()=> {

  const dispatch = useDispatch(); 

  useEffect(()=>{
        dispatch(getAllProducts()); 
  },[]);
  
    return(
        <>
        <section className="hero_main_home">
        <div className="heading-section">
            <h1>Make your home comfortable</h1>
            <Link to={'/shop'} className="btn">Buy now</Link>
        </div>
        </section>
        <section className="about_section">
        <div className="container">
            <div className="about_cont_services">
            <div className="box_services">
                <i className="ti-wand"><TfiWand /></i>
                <span className="service-title">Good quality</span>
            </div>
            <div className="box_services">
                <i className="ti-truck"><TfiTruck /></i>
                <span className="service-title">Fast delivery</span>
            </div>
            <div className="box_services">
                <i className="ti-money"><TfiMoney/></i>
                <span className="service-title">Refund policy</span>
            </div>
            </div>
            <div className="about_cont">
              We are a leading manifacturer of artisan furniture. Independetly of what you are looking for, we have it! Our goal is to provide you with the best furniture we can make. We are happy when our clients are happy! 
              Feel comfortable at home with our products!
            </div>
        </div>
        </section>
        <FeaturedProducts/>
        </>
      );
  };
  
  export default Home;