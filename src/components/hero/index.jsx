'use client';
import { motion } from 'framer-motion';
import Image from "next/image";
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse';
import { TypeAnimation } from 'react-type-animation';
import { fadeIn } from '../../../variants';

const locationSequence = [
  'Blusa Jurema', 3000,
  'Blusa Maria', 3000,
  'Blusa Claudia', 3000,
  'Top Down Lu', 3000,
  'Blusa Jujubinha', 3000,

]

const Hero = () => {  
  return(
    <section className="h-[80vh] xl:h-[820px]" id="home">
      <div className="container mx-auto h-full flex justify-center items-center xl:justify-start">
        <div className="h-full flex flex-col justify-center items-center xl:items-start z-20 pt-12">
          <MouseParallaxContainer 
            globalFactorX={0.1}
            globalFactorY={0.2}
            resetOnLeave
            className="relative flex items-center h-[100px] xl:h-max xl:w-[500px] justify-center">
            <MouseParallaxChild 
              factorX={0.2}
              factorY={0.4}
              className="relative">
              <motion.div 
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}}
                className="w-[350px] h-[200px] xl:w-[470px] xl:h-[130px]">

                <Image src={'/assets/hero/hero-logo.svg'} 
                  fill 
                  alt='' 
                  className="object-container"/>
              </motion.div>  
              
            </MouseParallaxChild>
                       
          </MouseParallaxContainer>

          <motion.div 
            variants={fadeIn('up', 1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='min-h-[60px] flex flex items-center mb-6 xl:mx-8 text-[26px]'>

            <div className='hidden xl:flex items-center xl:gap-0'>

              <div>Crochê</div>

              <div className='relative w-[45px] h-[45px] mx-2 flex items-center justify-center'> 
                <Image fill src={'/assets/hero/novelo.png'} alt=''/>
              </div>

              <div>Top 5</div>
                <div className='relative w-[45px] h-[45px] mx-2 flex items-center justify-center'>
                  <Image fill src={'/assets/hero/agulha.png'} className='rotate-45 hover:rotate-90'alt=''/> 
                </div>
              </div>

              <TypeAnimation 
                sequence={locationSequence} 
                wrapper='div' 
                speed={10}
                deletionSpeed={10}
                repeat={Infinity}
                cursor={false} className='w-[200px]'/>
          </motion.div>

          <motion.div 
            variants={fadeIn('up', 1.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='xl:mx-8'>
              
            <button className='bnt bnt-lg bnt-accent'>Crochês</button>
          </motion.div>
        </div>

        <div className="hidden xl:flex absolute right-0 top-0 before:w-[784px] before:h-[893px] before:absolute before:right-0 before::top-0 before:bg-singerOverlay before:z-10">
          <Image src={'/assets/hero/acacau.webp'} 
            width={617} 
            height={893} 
            quality={100}
            priority
            alt=""/>
        </div>
      </div>
    </section>
  );          
}
export default Hero  