import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import type { NextPage } from 'next'
import Layout from '../components/Layout'
import { motion, AnimatePresence  } from 'framer-motion'


// const handleScroll = () => {}

// useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
// });

const Home: NextPage = () => {
  return (
    <Layout title="Home" description="Keith Chin | Front End Developer. Music Maker. Audiophile">
      <div>
        <section>
          <div className='tw'>
            <div className='tw__wrapper'>
              {/* Desktop Logo */}
              <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{delay: 1}}
                className="tw__desktop-logo"
              >
                    <Image src="/logo_keith.png" alt="Keith Chin Logo" layout="responsive" width={150} height={20} />
              </motion.div>
              </AnimatePresence>

              {/* Mobile Logo */}
              <div className="tw__mobile-logo" >
                <Image src="/logo_keith.png" alt="Keith Chin Logo" layout="responsive" width={500} height={80} />
              </div>
              <a className='tw__programmer' href="#work">Front End Developer. Music Maker. Audiophile.</a>
            </div>
          </div>
        </section>
        <div id="work" className="max-height-100  bg-black"></div>
        <div id="contact" className="max-height-100  bg-white"></div>
        <div id="music" className="max-height-100  bg-black"></div>
      </div>
    </Layout>
  )
}

export default Home;