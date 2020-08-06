import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../styles/App.sass'
import UserProvider from '../Providers/UserProvider'
import Layout from '../components/Layout'
import Loading from '../components/Loading'

const Home = lazy(() => import('../pages/Home'))
const Session = lazy(() => import('../pages/Session'))
const About = lazy(() => import('../pages/About'))
const Contact = lazy(() => import('../pages/Contact'))
const Products = lazy(() => import('../pages/Products'))
const NotFound = lazy(() => import('../pages/NotFound'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          <UserProvider>
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
            <Route><NotFound /></Route>
          </UserProvider>
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
