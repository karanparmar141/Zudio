import React from 'react'
import Campaigns from '../compnets/Campaigns'
import Zudiosyl from '../compnets/Zudiosyl'
import Zwork from '../compnets/Zwork'
import Footer from '../compnets/Footer'
import Header from '../compnets/Navbar'
import Login from '../compnets/Login'
import Banner from '../compnets/Banner'

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Zudiosyl/>
      <Campaigns/>
      <Zwork/>
      <Footer/>
    </div>
  )
}

export default Home