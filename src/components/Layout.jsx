import React from 'react';
import { withRouter } from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const Layout = ({ children, location }) => {
  const isSessionComponent = location.pathname === '/auth'
  return (
    <>
      <Navbar />
      {children}
      {!isSessionComponent && (
        <Footer />
      )}
    </>
  )
}

export default withRouter(Layout)
