import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import type { NextPage } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'


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
            <Image src="/logo_keith.png" alt="Keith Chin Logo" width={500} height={100} />
            <a className='tw__programmer' href="#work">Front End Developer. Music Maker. Audiophile.</a>
          </div>
        </div>
      </section>
      <section id="bio" className="bio max-height-100">
        <div className="bio__wrapper">
          <h2>Hello there, good to see you around here..</h2>
          <p className="text-xl">I'm Keith Chin, but you can call me KC.</p>
          <p className="text-xl">Who am I? I'm a problem solving creature that is always scratching that logical or creative itch at the back of my mind.</p>
          <p className="text-xl">That aside, my current profession is a Front End Developer, where I bring to life design wireframes with a soul flowing in from the Back End.   </p>
          <p className="text-xl">If you're looking for my <span className="font-semibold">resume</span> or <span className="font-semibold">portfolio</span>, feel free to jump to the <a href="#work" className="font-bold hover:text-slate-300">Work</a> section.</p>
          <p className="text-xl">If you're here, however, for my music, do check out the <a href="#music" className="font-bold hover:text-slate-300">Music</a> section</p>
          <p className="text-xl">Feel free to wonder around and you can also contact me here. Just make sure you're not a scammer. </p>
          <p className="font-bold text-3xl">Enjoy your stay!</p>
        </div>
      </section>
      <div id="work" className="max-height-100  bg-black"></div>
      <div id="contact" className="max-height-100  bg-white"></div>
      <div id="music" className="max-height-100  bg-black"></div>
      <Footer />
    </div>
  )
}

export default Home;