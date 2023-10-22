'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const HeaderSection = ({pretitle, title}) => {
    return (
        <header className='flex items-center justify-center gap-x-4 mb-8'>
            <motion.h3 
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}}
                className="pretitle text-center">{pretitle}
            </motion.h3>
            
            <motion.h3 
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}}
                 className="pretitle-right">
                {title}
            </motion.h3>
        </header>
    )
}
export default HeaderSection