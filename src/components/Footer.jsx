import '../assets/css/Footer.css';
import { socialLinks } from '../assets/data/data';

const Footer = ()=> {
    return(
        <footer className='container'>
        <div className='container'>
            <p>&copy; 2023 All rights reserved</p>
            <p>
            {
                socialLinks.map((item)=>{
                    return(
                        <a key={item.id} href={item.url} target='_blank'> <i className={item.classIcon}>{item.icon}</i></a>
                    );
                })
            } 
            </p>
        </div>
        </footer>
      );
  };
  
  export default Footer;