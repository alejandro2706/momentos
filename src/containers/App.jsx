import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import About from '../pages/About'
import Products from '../pages/Products'
import '../styles/components/App.sass'
import Layout from '../components/Layout'
import Home from '../pages/Home'
// import About from '../pages/About'
//TODO: create browser route
// function App() {
//   return (
//     <BrowserRouter>
//       <Layout>
//         <Switch>
//           <Route path='/'><Home /></Route>
//           <Route exact path='/products'><Products /></Route>
//           <Route exact path='/contact'><About /></Route>
//         </Switch>
//       </Layout>
//     </BrowserRouter>
//   )
// }

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/contact'>
          <About />
        </Route>
        <Route exact path='/products'>
          <Products />
        </Route>
      </Layout>
    </BrowserRouter>
  )
}

export default App
