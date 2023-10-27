
'use client';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

//import { useState } from "react";
//import { AudioPlayer } from 'react-audio-play';
//import { EffectCoverflow, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const AlbumSlider = ({ cursos }) => {  
  return (      
    <>
      <Swiper>
        {cursos.map(curso => {
          return (
            <SwiperSlide key={curso.uuid} className="mb-12">
              <div className="w-full bg-secondary/80 rounded-[10px] flex flex-col xl:flex-row items-center p-6 xl:p-12 gap-x-12">
                <div className="hidden xl:flex w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] relative cursor-pointer rounded-[10px] overflow-hidden">
                  <Image src="/assets/albums/croche.png"
                    className="object-container "  //filter grayscale contrast-100
                    priority
                    fill                    
                    alt=''/>
                </div>
                <div className="flex flex-1 w-full h-[500px]">
                  <div className="flex flex-1 flex-col xl:px-12">
                  {curso.aulas.length == 0  && (
                    <div className="bg-accent/50 rounded-[10px] p-4">
                      O curso <span className="text-white/60 font-semibold">{curso.title}</span> ainda não possui aulas cadastradas.
                    </div>
                  )}
                  <div className="flex-1 h-[500px] flex flex-col overflow-y-scroll scrollbar-thin scrollbar-thumb-accent
                    scrollbar-track-white/10 xl:pr-6">
                      {curso.aulas?.map((aula, index) => {                     
                        return (
                          <div key={index} className="flex flex-col xl:flex-row items-center justify-between
                          gap-y-4 xl:gap-y-0 text-center xl:text-left my-4 xl:my-0 border-b 
                          border-white/10 pb-10 xl:py-3 last-of-type:border-none first-of-type:pt-0"> 
                            <div className="flex flex-col xl:flex-row items-center gap-x-4">  
                              <div className="w-full bg-accent/50 rounded-[10px] p-4">
                                <div>{aula.titulo}</div>
                                <div>{aula.descricao}</div>
                              </div> 
                            </div>  
                          </div>
                        )
                      })}

                  </div>
                  
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
        
      </Swiper>
      <Swiper>thumb slider</Swiper>
    </>
  )
}
export default AlbumSlider

//{`data:image/png;base64, ${curso.thumbnail}`}
//  <YouTube videoId='ABeUnUDIPfI'/>