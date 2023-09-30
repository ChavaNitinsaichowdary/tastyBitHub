import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './components/Error';
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';
//import Grocery from './components/Grocery';

const Grocery = lazy(()=> import('./components/Grocery'));


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children : [
      {
        path: '/',
        element:<Body/>,
      },
      {
        path: '/About',
        element:<About/>,
      },
      {
        path: '/Contact',
        element:<Contact/>,
      },
      {
        path: '/Restaurant/:resId',
        element:<RestaurantMenu/>,
      },
      {
        path: '/grocery',
        element : (<Suspense fallback={<Shimmer/>}>
          <Grocery/>
        </Suspense>),
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);


