import '../assets/css/Error.css';
import {TfiAngleLeft} from "react-icons/tfi";
import HeroSecondary from '../components/HeroSecondary';

import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; 
import { useRouteError } from "react-router-dom";

const Error = ()=> {
    const error = useRouteError();
    return(
        <>
        <Navbar/>     
        <HeroSecondary title="Error"/>
        <section className="container">
            <section className="error">
                <div className="heading-section">
                      <h2>Sorry, an unexpected error has occurred.</h2>
                      <h3>{error.statusText || error.message}</h3></div>  
                <div className="error_section">
                    <Link to={'/shop'} className="btn_link"> <i className="ti-angle-left"><TfiAngleLeft/></i> Continue shopping</Link>
                    <Link to={'/'} className="btn">Back home</Link>
                </div>               
            </section>
        </section> 
        <Footer/>     
    </>
      );
  };
  
  export default Error;