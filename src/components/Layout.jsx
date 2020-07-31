import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
//no renderizar footer cuando este en auth con react-router
//validar si estoy en la ruta auth con react router
function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
