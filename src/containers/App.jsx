import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../sass/App.sass'
import Loading from '../components/Loading'
import Layout from '../components/Layout'

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Contact = lazy(() => import('../pages/Contact'))
const Products = lazy(() => import('../pages/Products/Products'))
const NotFound = lazy(() => import('../pages/NotFound'))

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/p/:id' component={Products} />
            <Route exact path='/contact' component={Contact} />
            <Route component={NotFound} />
          </Layout>
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
