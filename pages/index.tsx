import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import type { NextPage } from 'next'
import Header from '../components/Header'


// const handleScroll = () => {}

// useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
// });

const Home: NextPage = () => {
  return (
    <div>
      <section id="hero" className="max-height-100 hero-image" >
        <Header />
        <div className='tw'>
          <div className='tw__wrapper'>
            <h1 className="tw__kc">Keith Chin</h1>
            <a className='tw__programmer' href="#work">Front End Developer. Music Maker. Audiophile.</a>
          </div>
        </div>
      </section>
      <section id="bio" className="bio max-height-100">
        <div className="bio__wrapper">
          <h2>Bio</h2>
          <p>Welcome to my website.</p>
          <p>I'm Keith Chin, or KC for short.</p>
        </div>
      </section>
      <div id="work" className="max-height-100  bg-black"></div>
      <div id="contact" className="max-height-100  bg-white"></div>
      <div id="disco" className="max-height-100  bg-black"></div>
    </div>
  )
}

export default Home;