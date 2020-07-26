import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from '../components/Layout'
import Loading from '../components/Loading'
import '../styles/components/App.sass'

const Home = lazy(() => import('../pages/Home'))
const Session = lazy(() => import('../pages/Session'))
const About = lazy(() => import('../pages/About'))
const Contact = lazy(() => import('../pages/Contact'))
const Products = lazy(() => import('../pages/Products'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
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
            <Route exact path='/contact'>
              <Contact />
            </Route>
            <Route exact path='/auth'>
              <Session />
            </Route>
          </Layout>
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
