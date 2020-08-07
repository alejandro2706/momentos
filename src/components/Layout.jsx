import React from 'react';
import { withRouter } from 'react-router-dom'
import Navbar from './Navbar/Navbar.controller';
import Footer from './Footer/Footer';

const Layout = ({ children, location }) => {
  // console.log('Location Layout', location)
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
