'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AudioPlayer } from 'react-audio-play';
import { fadeIn } from '../../variants';

const Player = () => {
    return (
        <>
        <motion.div 
            variants={fadeIn('up', 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.1}}
            className='bg-gradient-to-r from-tertiary/70 to-primary/10 backdrop-blur-[15px] 
            h-[112px] flex items-center relative z-40'>
            <div className="container mx-auto flex flex-col justify-between items-center xl:flex-row">
                <div className='hidden w-[300px] xl:flex items-center gap-x-4'>
                    <div className='relative w-12 h-12'>
                        <Image src={'/assets/player/musical.png'} fill priority alt=''/>                       
                    </div>
                    <div className='leading-none'>
                        <div className='text-lg font-medium'>Cacau Ramos</div>
                        <div className='text-sm font-light'>Designer</div>
                    </div>
                </div>

                <div className='w-full max-w-4xl '>
                    <AudioPlayer src='https://r13.ciclano.io:15199/stream'
                        style={{
                            background: 'transparent',
                            boxShadow: 'none',
                            width: '100%'
                        }}
                        volumePlacement="top"
                        preload="none"
                        color="#fff" 
                        volume={40}
                        loop/>
                </div>
            </div>
        </motion.div>
    </>    
    )
}
export default Player