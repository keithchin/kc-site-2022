import type { NextPage } from 'next'
import { motion } from 'framer-motion'

const Bio: NextPage = () => {
    return (

        <section id="bio" className="bio max-height-100">
            <div className="bio__wrapper">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ delay: 0.5, type: 'spring' }}
                >
                    <h2 className="font-bold text-3xl">Hello there, good to see you around here..</h2>
                    <p className="text-xl mt-5">I'm Keith Chin, but you can call me KC.</p>
                    <p className="text-xl mt-5">Who am I? I'm a problem solving creature that is always scratching that logical or creative itch at the back of my mind.</p>
                    <p className="text-xl mt-5">That aside, my current profession is a Front End Developer, where I bring to life design wireframes with a soul flowing in from the Back End.   </p>
                    <p className="text-xl mt-5">If you're looking for my <span className="font-semibold">resume</span> or <span className="font-semibold">portfolio</span>, feel free to jump to the <a href="#work" className="font-bold hover:text-slate-300">Work</a> section.</p>
                    <p className="text-xl mt-5">If you're here, however, for my music, do check out the <a href="#music" className="font-bold hover:text-slate-300">Music</a> section</p>
                    <p className="text-xl mt-5">Feel free to wonder around and you can also contact me here. Just make sure you're not a scammer. </p>
                    <p className="font-bold text-3xl mt-10">Enjoy your stay!</p>
                </motion.div>

            </div>
        </section>
    )
}

export default Bio;