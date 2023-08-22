import '../assets/css/Single.css';
import {TfiAngleLeft} from "react-icons/tfi";
import HeroSecondary from '../components/HeroSecondary'; 

import Loading from '../components/Loading';
import Error from '../components/Error';
import { formatPrice } from '../utils';
 
import SingleImages from '../components/SingleImages';
import SingleReviews from '../components/SingleReviews';
import SingleAddToCart from '../components/SingleAddToCart';

import { useSelector } from 'react-redux'; 
import { useDispatch } from 'react-redux';
import { getSingleProduct } from '../store/productsSlice';

import { useEffect } from 'react';
import { useParams, ScrollRestoration } from 'react-router-dom';


const Single= ()=> {
    const {id} = useParams();
    const dispatch = useDispatch(); 
    const {single_product, single_product_error, single_product_loading} =useSelector((state) => state.products);


    useEffect(()=>{
      dispatch(getSingleProduct(id)); 
  },[]);

    const handleBackHome =()=>{
        window.history.back();
    }

    if(single_product_loading===true){
        return <Loading/>;
    }

    if(single_product_error===true){
        return(
            <>
                <Error/>
                <div className="container">
                    <div className="btn_cont">
                    <form onSubmit={(e)=>{e.preventDefault()}}>
                            <button className="btn_link" onClick={handleBackHome}>
                            <i className="ti-angle-left"><TfiAngleLeft/></i> Back
                            </button>
                        </form>                        
                    </div>
                </div>
            </>            
        );
    }

    return(      
        <>
        <ScrollRestoration />
        <HeroSecondary title={single_product.name}/>
        <section className="single_section">
            <div className="container">
            <div className="btn_cont">
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <button className="btn_link" onClick={handleBackHome}>
                <i className="ti-angle-left"><TfiAngleLeft/></i> Back
                </button>
            </form>  
            </div>
            <div className="single-product_detail">
                <SingleImages images={single_product.images}/>              
                <div className="single-info">
                    <SingleReviews stars={single_product.stars} reviews={single_product.reviews}/>                
                <div className="single_cont_data1">                   
                    {(single_product.stock > 0) && 
                    <div className="single-availab">
                        Availability: <span className="availab_stock">in stock</span>
                    </div>
                    }
                    {(single_product.stock == 0) && 
                        <div className="single-availab">
                            Availability: <span className="availab_nostock">not available</span>
                        </div>
                    }
                    <div className="single-price_num">{formatPrice(single_product.price)}</div>
                    <div className="single-descrip">
                        {single_product.description}
                    </div>
                </div>
                <div className="single_cont_data2">
                    <div className="single-cats">
                    <span>Category</span>: {single_product.category}
                    </div>
                    <div className="single-brand">
                    <span>Brand</span>: {single_product.company}
                    </div>
                </div>                  
                <SingleAddToCart product={single_product} colors={single_product.colors} />                
                </div>
            </div>
            </div>
        </section>
        </>
      );
  };
  
  export default Single;