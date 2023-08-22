import '../assets/css/Navbar.css';
import { socialLinks } from '../assets/data/data';
import { TfiUser, TfiShoppingCart, TfiMenu, TfiClose, TfiHeart} from 'react-icons/tfi';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux'; 

const Navbar = ()=> {
    const {total_items} = useSelector((state) => state.cart);
    const {total_favorites} = useSelector((state) => state.favorites);
    
    const [isSidebarOpen, setSidebarOpen]= useState(false);
    return(
      <>
        <header className='header'>
            <div className='container'>
                <Link to={'/'} className='logo'>
                    Furnitux
                </Link>
                <div className='header-action'>
                    <button className='header-action-btn'>
                        <i className='ti-user'><TfiUser /></i>                        
                    </button>
                    <button className='header-action-btn'>                        
                        <NavLink to={'/cart'} className={
                        ({ isActive}) => isActive ?  'active' : ''}                        
                        ><i className='ti-shopping-cart'><TfiShoppingCart/></i>                        
                        <span className='btn-badge'>{total_items}</span>
                        </NavLink> 
                    </button>
                    <button className='header-action-btn'>                        
                        <NavLink to={'/favorites'} className={
                        ({ isActive}) => isActive ?  'active' : ''}                        
                        ><i className='ti-favorites'><TfiHeart/></i>                        
                        <span className='btn-badge'>{total_favorites}</span>
                        </NavLink> 
                    </button>
                    <button
                        className='header-action-btn'>
                        <i className='ti-menu' onClick={()=>setSidebarOpen(!isSidebarOpen)}><TfiMenu /></i>
                    </button>
                </div>
            </div>
        </header>
        <div className={isSidebarOpen ? 'sidebar active' : 'sidebar'}>
            <div className='container'>
            <button className='nav-close-btn'>
                <i className='ti-close' onClick={()=>setSidebarOpen(!isSidebarOpen)}><TfiClose /></i>
            </button>
            <nav className='navbar'>
                <ul>
                <li>
                    <NavLink to={'/'} className={
                    ({ isActive}) => isActive ? 'active' : ''}
                    onClick={()=>setSidebarOpen(!isSidebarOpen)}
                    >Home</NavLink>                     
                </li>
                <li>
                    <NavLink to={'/shop'} className={
                    ({ isActive}) => isActive ? 'active' : ''}
                    onClick={()=>setSidebarOpen(!isSidebarOpen)}
                    >Shop</NavLink> 
                </li>               
                <li>
                    <NavLink to={'/cart'} className={
                    ({ isActive}) => isActive ?  'active' : ''}
                    onClick={()=>setSidebarOpen(!isSidebarOpen)}
                    >Cart</NavLink> 
                </li>
                <li>
                    <NavLink to={'/favorites'} className={
                    ({ isActive}) => isActive ?  'active' : ''}
                    onClick={()=>setSidebarOpen(!isSidebarOpen)}
                    >Favorites</NavLink> 
                </li>
                </ul>
            </nav>
            <div className='social'>
                <ul>
                {
                    socialLinks.map((item)=>{
                        return(
                            <li key={item.id}>
                                <a href={item.url} target='_blank'> <i className={item.classIcon}>{item.icon}</i></a>
                            </li>
                        );
                    })
                }                 
                </ul>
            </div>
            </div>
        </div>
        <div className={isSidebarOpen ? 'overlay active' : 'overlay'} onClick={()=>setSidebarOpen(!isSidebarOpen)}/>
        </>  
      );
  };
  
  export default Navbar;

