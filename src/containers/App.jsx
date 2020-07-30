import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import About from '../pages/About'
import Products from '../pages/Products'
import '../styles/components/App.sass'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Session from '../pages/Session'
import Contact from '../pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/products'>
          <Products title='Products' />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/auth'>
          <Session />
        </Route>
      </Layout>
    </BrowserRouter>
  )
}

export default App
