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
          <section id="hero" className="max-height-100 hero-image">
            <div className='bio'>
              <div className='bio__wrapper text-white'>
                  <Box
                  >
                      <h2 className="font-bold text-3xl">Hello there, good to see you around here..</h2>
                      <p className="text-xl mt-5">I'm Keith Chin, but you can call me KC.</p>
                      <p className="text-xl mt-5">Who am I? I'm a problem solving creature that is always scratching that logical or creative itch at the back of my mind.</p>
                      <p className="text-xl mt-5">That aside, my current profession is a Front End Developer, where I bring to life design wireframes with a soul flowing in from the Back End.   </p>
                      <p className="text-xl mt-5">If you're looking for my <span className="font-semibold">resume</span> or <span className="font-semibold">portfolio</span>, feel free to jump to the <a href="#work" className="font-bold hover:text-slate-300">Work</a> section.</p>
                      <p className="text-xl mt-5">If you're here, however, for my music, do check out the <a href="#music" className="font-bold hover:text-slate-300">Music</a> section</p>
                      <p className="text-xl mt-5">Feel free to wonder around and you can also contact me here. Just make sure you're not a scammer. </p>
                      <p className="font-bold text-3xl mt-10">Enjoy your stay!</p>
                  </Box>
              </div>
            </div>
          </section>
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
        <div id="work" className="max-height-100  bg-black"></div>
        <div id="contact" className="max-height-100  bg-white"></div>
        <div id="music" className="max-height-100  bg-black"></div>
      </div>
    </Layout>
  )
}

export default Home;