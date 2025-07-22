import React from 'react'
import Herosection from '../components/Herosection'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Menu from '../components/Menu'
import Whoweare from '../components/Whoweare'
import Team from  '../components/Team'
import Reservation from '../components/Reservation'
const Home = () => {
  return (
    <>
     <Herosection/>
     <About/>
     <Qualities/>
     <Menu/>
     <Whoweare/>
     <Team/>
     <Reservation/>
    </>
  )
}

export default Home
