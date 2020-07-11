import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Contact from '../pages/Contact'
import Products from '../pages/Products'
import '../styles/components/App.sass'
import Layout from '../components/Layout'
import Home from '../pages/Home'
//TODO: create browser route
function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default App
