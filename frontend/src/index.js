import React from 'react';
import ReactDOM from 'react-dom/client';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, createRoutesFromElements,
Route, RouterProvider
} from 'react-router-dom'
import '../src/assests/styles/bootstrap.custom.css'
import '../src/assests/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreens from './screens/HomeScreens';
import ProductScreens from './screens/ProductScreens';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element = {<HomeScreens/>} />
      <Route  path='/product/:id' element = {<ProductScreens/>} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
