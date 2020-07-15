import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Home/Hero'
import Section from '../components/Home/Section'
import How from '../components/Home/How'

class Home extends React.Component {
  render() {
    return (
      <>
        <Hero />
        <Section />
        <How />
      </>
    )
  }
}

export default Home
