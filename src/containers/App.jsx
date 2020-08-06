import React, { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../styles/App.sass'
import Layout from '../components/Layout'
import Loading from '../components/Loading'
import { app } from '../db/config'

const Home = lazy(() => import('../pages/Home'))
const Session = lazy(() => import('../pages/Session'))
const About = lazy(() => import('../pages/About'))
const Contact = lazy(() => import('../pages/Contact'))
const Products = lazy(() => import('../pages/Products'))
const NotFound = lazy(() => import('../pages/NotFound'))

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      if (user) return setCurrentUser(user)
      return console.log('No user')
    })
  })
  console.log(currentUser)

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
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
