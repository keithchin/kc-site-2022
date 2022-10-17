import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from 'next'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <div id="hero" className="max-height-100 hero-image" >
      <Header />

      </div>
      <div id="bio" className="max-height-100  bg-white"></div>
      <div id="work" className="max-height-100  bg-black"></div>
      <div id="contact" className="max-height-100  bg-white"></div>
      <div id="disco" className="max-height-100  bg-black"></div>
    </div>
  )
}

export default Home;