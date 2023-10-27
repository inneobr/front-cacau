'use client';
import { motion } from 'framer-motion';
import Image from "next/image";
import { FaMapMarkedAlt } from 'react-icons/fa';
import { fadeIn } from '../../../variants';

const EventBox = ({ eventos } ) => {     
    return (
        <motion.div 
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className="bg-secondary/60 rounded-[10px] p-4 xl:p-12 relative">
            <div className="flex flex-col xl:flex-row justify-between h-[620px] xl:h-full gap-x-4">
                
                <div className="hidden xl:flex w-[400px] ">
                    <Image src={'/assets/eventos/singer.webp'}
                        className='rounded-[10px] border-[5px] shadow-2xl'
                        width={358} 
                        height={489} 
                        priority
                        quality={100}
                        alt=''/>
                </div>

                <div className='flex-1 h-[500px] flex flex-col overflow-y-scroll scrollbar-thin scrollbar-thumb-accent
                    scrollbar-track-white/10 xl:pr-6 '>
                    {eventos.length === 0 && (
                        <div className="flex w-[100%] h-[100%] items-center justify-center text-lg leading-none font-bold gap-x-4">
                            Novos eventos em breve, aguarde!
                        </div>
                    )} 
                    {eventos.map((evento) => {
                        return (
                            <div key={evento.uuid} className="flex flex-col xl:flex-row items-center justify-between
                                gap-y-4 xl:gap-y-0 text-center xl:text-left my-4 xl:my-0 border-b 
                                border-white/10 pb-10 xl:py-3 last-of-type:border-none first-of-type:pt-0">
                                
                                <div className="flex flex-col xl:flex-row items-center gap-x-4">
                                    {/*event date */}
                                    <div className="flex flex-col justify-center items-center 
                                        leading-tight w-[80px] mb-4 xl:mb-0 p-2 rounded-[10px] border-[2px] shadow-2xl">
                                        <div className="text-[25px] font-black text-accent">{evento.dia}</div>
                                        <div className="text-[15px] font-extrabold">{evento.mes}</div>
                                    </div>

                                    {/* location */}
                                    <div className="w-full flex flex-col gap-y-2">
                                        <div className="text-1xl leading-none font-bold ">{evento.localizacao}</div>
                                        <div className="flex items-center gap-x-1 justify-center xl:justify-start">
                                            <div className="text-accent/50 text-[40px] mr-4">
                                                <FaMapMarkedAlt />
                                            </div> 

                                            <div className="font-light">
                                                <div className="text-white/60">{evento.endereco}</div>
                                                <div className="text-white/60">{evento.cidade}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                        );
                    })}
                </div>
            </div>            
        </motion.div>
    );
}
export default EventBox