import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb, SiMysql, SiPowerbi, SiPython, SiAzuredevops, SiDocker, SiTypescript, SiCplusplus, SiCsharp, SiNextdotjs, SiLinux, SiExpress, SiDjango } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { DiJavascript } from 'react-icons/di';
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    },
});

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pd-24'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>Technologies</motion.h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                {[  
                    { icon: <RiReactjsLine className='text-7xl text-cyan-400' />, duration: 2.5 },
                    { icon: <SiMysql className='text-7xl' />, duration: 3 },
                    { icon: <SiPowerbi className='text-7xl text-yellow-500' />, duration: 5 },
                    { icon: <FaNodeJs className='text-7xl text-green-500' />, duration: 2 },
                    { icon: <DiJavascript className='text-7xl' />, duration: 6 },
                    { icon: <SiMongodb className='text-7xl text-green-500' />, duration: 4 },
                    { icon: <SiPython className='text-7xl text-yellow-500' />, duration: 3 },
                    { icon: <SiAzuredevops className='text-7xl text-blue-600' />, duration: 4 },
                    { icon: <SiDocker className='text-7xl text-blue-400' />, duration: 5 },
                    { icon: <SiTypescript className='text-7xl text-blue-500' />, duration: 2.5 },
                    { icon: <SiCsharp className='text-7xl text-purple-500' />, duration: 3 },
                    { icon: <SiCplusplus className='text-7xl text-blue-700' />, duration: 4 },
                    { icon: <SiNextdotjs className='text-7xl text-black' />, duration: 3 },
                    { icon: <SiLinux className='text-7xl text-yellow-600' />, duration: 4 },
                    { icon: <SiExpress className='text-7xl text-gray-500' />, duration: 2.5 },
                    { icon: <SiDjango className='text-7xl text-green-700' />, duration: 3 },
                ].map((tech, index) => (
                    <motion.div
                        key={index}
                        variants={iconVariants(tech.duration)}
                        initial='initial'
                        animate='animate'
                        className="rounded-2xl border-4 border-neutral-800 pb-4">
                        {tech.icon}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default Technologies;
