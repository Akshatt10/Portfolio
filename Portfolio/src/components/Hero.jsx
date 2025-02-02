import { HERO_CONTENT } from "../constants/index"
import Profile from '../assets/95146187.jpeg'
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"

                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
                        >
                            Akshat Tyagi
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                            Aspiring Software Developer!
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tight">
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.a
                            href="https://drive.google.com/file/d/1TqEwcujvSkWK5J9t-nefOyAqtgEk9fdG/view?usp=drive_link"  
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5 }}
                            className="mt-4 inline-block rounded bg-gradient-to-r from-pink-100 via-slate-600 to-purple-600 px-4 py-2 text-white transition-transform transform hover:scale-105"
                        >
                            Resume
                        </motion.a>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            src={Profile} alt="Profile" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
