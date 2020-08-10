import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../styles/App.sass'
import UserProvider from '../Providers/UserProvider'
import Loading from '../components/Loading'
import Layout from '../components/Layout'

const Home = lazy(() => import('../pages/Home'))
const Session = lazy(() => import('../pages/Session'))
const About = lazy(() => import('../pages/About'))
const Contact = lazy(() => import('../pages/Contact'))
const Products = lazy(() => import('../pages/Products'))
const NotFound = lazy(() => import('../pages/NotFound'))

const productsData = [
  {
    id: 1,
    name: 'Brownie',
    image: 'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    decorated: false,
  },
  {
    id: 2,
    name: 'Galletas',
    image: 'https://images.pexels.com/photos/268364/pexels-photo-268364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    decorated: true,
  },
  {
    id: 3,
    name: 'Antojos',
    image: 'https://images.pexels.com/photos/268364/pexels-photo-268364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    decorated: true,
  },
  {
    id: 4,
    name: 'Merienda',
    image: 'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    decorated: false,
  },
]

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <UserProvider>
          <Switch>
            <Layout>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/products'>
                <Products
                  title='Products'
                  productsData={productsData}
                />
              </Route>
              <Route exact path='/cookies'>
                <Products
                  title='Galletas'
                  productsData={productsData}
                />
              </Route>
              <Route exact path='/cupcakes'>
                <Products
                  title='Cupcakes'
                  productsData={productsData}
                />
              </Route>
              <Route exact path='/brownies'>
                <Products
                  title='Brownies'
                  productsData={productsData}
                />
              </Route>
              <Route exact path='/cakes'>
                <Products
                  title='Mantecadas'
                  productsData={productsData}
                />
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
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </UserProvider>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
