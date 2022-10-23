import Head from 'next/head'
import Image from 'next/image'
import ref, { useEffect } from 'react';
import type { NextPage } from 'next'
import Layout from '../components/Layout'
import { motion, AnimatePresence , useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const Box = ({ children }) => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
};
const Home: NextPage = () => {

  return (
    <Layout title="Home" description="Keith Chin | Front End Developer. Music Maker. Audiophile">
      <div>
          <section id="hero" className="max-height-100 hero-image">
            <div className='tw'>
              <div className='tw__wrapper'>
                {/* Desktop Logo */}
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.5, rotateY: 180 }}
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

          <section id="about" className="max-height-100 hero-image">
            <div className='bio'>
                <div className='bio__wrapper  text-white'>
                  <Box>
                      <div className="flex justify-center">
                        <img className="icon floating mt-10" src="/aws-icon.webp"/>
                        <img className="icon floating__5s" src="/js-icon.png"/>
                        <img className="icon floating mt-6" src="/laravel-icon.png" />
                        <img className="icon floating__7s mt-14" src="/react-icon.png"/>
                        <img className="icon floating mt-8" src="/vue-icon.png"/>
                      </div>
                    </Box>
                    <Box
                    >
                      <div className="text-center mt-12">
                        <h2 className="font-bold text-2xl">As a Front End Developer..</h2>
                        <p className="text-xl mt-5">I spend my day working on creating highly interactive pages for professional and personal use.</p>
                        <p className="text-xl mt-5">My primary tech stack includes Vue, React, Laravel and Node.js.</p>
                        <p className="text-xl mt-5">Besides Front End development, I've fiddled a bit with DevOps and have worked with AWS, Nginx and Linux.</p>
                        <p className="text-xl mt-5">I'm also keen on exploring Back End development using Go, which is a topic of personal study on my own.</p>
                        </div>
                    </Box>
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