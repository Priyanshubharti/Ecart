import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { logout } from './slices/authSlice';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const expirationTime = localStorage.getItem('expirationTime');
    if (expirationTime) {
      const currentTime = new Date().getTime();
      if (currentTime > expirationTime) {
        dispatch(logout());
      }
    }
  }, [dispatch]);
  return (
    <>
          <ToastContainer />
    <Header/>
    <main className='py-3'>
      <Container>
       <Outlet/>
      </Container>
    </main>
    <Footer/>
    </>
  )
}

export default App
