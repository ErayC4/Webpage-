import { useState } from 'react'
import Navbar from './components/navbar'
import Landingpage from './components/landingpage'
import Studies from './components/Benefits'
import GetStarted from './components/getstarted'
import Carousel from './components/carousel'


function App() {

  return (
    <>
    <div>
    <Navbar />
    <Landingpage />
    <Studies />
    <Carousel />
    <GetStarted />
    </div>
    </>
  )
}

export default App
