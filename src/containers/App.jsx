import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../styles/App.sass'
import UserProvider from '../Providers/UserProvider'
import Loading from '../components/Loading'
import Layout from '../components/Layout'
import useGetProducts from '../hooks/useGetProducts'

const Home = lazy(() => import('../pages/Home'))
const Session = lazy(() => import('../pages/Session'))
const About = lazy(() => import('../pages/About'))
const Contact = lazy(() => import('../pages/Contact'))
const Products = lazy(() => import('../pages/Products'))
const NotFound = lazy(() => import('../pages/NotFound'))

function App() {
  const brownies = useGetProducts({ id: 'B09hgGr8leFQR6TYUbVF', collection: 'brownies' })
  const cookies = useGetProducts({ id: 'DCukWAbGfZtPzxP65HAW', collection: 'galletas' })
  const pizzalleta = useGetProducts({ id: 'GUrDjclnG2thHhrKt4tM', collection: 'pizzalleta' })
  const cupcakes = useGetProducts({ id: 'I68Zz3Xc0u7UggdxtNJP', collection: 'cupcakes' })
  const specials = useGetProducts({ id: 'iZwYhkhZWiQJxY2DFHYv', collection: 'especiales' })

  const cakes = useGetProducts({ id: 'rkrPWYw2u5enTDjeW6zT', collection: 'cakes' })

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
                  productsData={specials}
                />
              </Route>
              <Route exact path='/cookies'>
                <Products
                  title='Galletas'
                  productsData={cookies}
                />
              </Route>
              <Route exact path='/cupcakes'>
                <Products
                  title='Cupcakes'
                  productsData={cupcakes}
                />
              </Route>
              <Route exact path='/brownies'>
                <Products
                  title='Brownies'
                  productsData={brownies}
                />
              </Route>
              <Route exact path='/cakes'>
                <Products
                  title='Mantecadas'
                  productsData={cakes}
                />
              </Route>
              <Route exact path='/pizzalleta'>
                <Products
                  title='Pizzalleta'
                  productsData={pizzalleta}
                />
              </Route>
              <Route exact path='/special'>
                <Products
                  title='Especiales'
                  productsData={specials}
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
