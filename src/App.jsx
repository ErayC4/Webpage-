import { useState } from 'react'
import Navbar from './components/navbar'
import Landingpage from './components/landingpage'
import Studies from './components/Benefits'
import GetStarted from './components/getstarted'
import Carousel from './components/carousel'
import AddTimeBlock from './components/demo/AddTimeBlock'


function App() {

  return (
    <>
    <div>
    <Navbar />
    <Landingpage />
    <Studies />
    <Carousel/>
    <GetStarted />
    <div className=' absolute z-20 w-full '>
    <AddTimeBlock />

    </div>
    </div>
    </>
  )
}

export default App
