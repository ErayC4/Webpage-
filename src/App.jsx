import { useState } from 'react'
import Navbar from './components/navbar'
import Landingpage from './components/landingpage'
import Studies from './components/Benefits'
import GetStarted from './components/getstarted'

import Footer from './components/footer'


function App() {

  return (
    <>
    <div>
    <Navbar />
    <Landingpage />
    <Studies />
    <GetStarted />
    <Footer />
    </div>
    </>
  )
}

export default App
