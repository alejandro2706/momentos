import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import About from '../pages/About'
import Products from '../pages/Products'
import '../styles/components/App.sass'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Session from '../pages/Session'

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
        <Route exact path='/products/brownies'>
          <Products title='Brownies' />
        </Route>
        <Route exact path='/products/galletas'>
          <Products title='Galletas' />
        </Route>
        <Route exact path='/products/cupcakes'>
          <Products title='Cupcakes' />
        </Route>
        <Route exact path='/products/antojos'>
          <Products title='Antojos' />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/auth'>
          <Session />
        </Route>
      </Layout>
    </BrowserRouter>
  )
}

export default App
