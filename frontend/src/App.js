import {Container} from 'react-bootstrap';
import Header from './components/Header';
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';


const App = () => {
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
