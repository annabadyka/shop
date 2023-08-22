import {
  Home, 
  Cart,
  Favorites,
  Single,
  Shop, 
  Root,
  Error} 
  from './pages';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>, 
    errorElement: <Error/>,
    children:[
      {
        index:true,
        element: <Home/>
      },
      {
        path: '/shop', 
        element: <Shop/>,
        errorElement: <Error/>,   
        children:[               
          {
            path: 'single/:id', 
            errorElement: <Error/>,
            element: <Single/>
          },
        ]
      }, 
      {
        path: '/cart',
        element: <Cart/>,
        errorElement: <Error/>,
        children:[    
          {
            path: 'single/:id', 
            errorElement: <Error/>,
            element: <Single/>
          },
        ]
      },
      {
        path: '/favorites',
        element: <Favorites/>,
        errorElement: <Error/>,
        children:[    
          {
            path: 'single/:id', 
            errorElement: <Error/>,
            element: <Single/>
          }
        ]
      },
      {
        path: 'single/:id', 
        errorElement: <Error/>,
        element: <Single/>
      },
    ]
  }  
  
]);

function App() {
   return (
     <RouterProvider router = {router}/>
  )
}

export default App
