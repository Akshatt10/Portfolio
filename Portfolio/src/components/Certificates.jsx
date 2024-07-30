import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { motion } from 'framer-motion';

const Certifications = () => {
    return (
        <div className='border-b border-neutral-900 pd-4'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'>Certifications</motion.h1>
            <div>
                {CERTIFICATIONS.map((certification, index) => (
                    <div
                        key={index}
                        className="mb-8 flex flex-wrap lg:justify-center"
                    >
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <img src={certification.image} alt={certification.Name} className='w-full h-auto mb-1' />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className='w-full max-w-xl lg:w-2/3 lg:ml-4'>
                            <h6 className='mb-3 text-2xl font-semibold '>{certification.Name}</h6>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Certifications;
