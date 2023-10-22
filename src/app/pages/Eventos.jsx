"use client";
import HeaderSection from "@/components/HeaderSection";
import axios from "axios";
import { useEffect, useState } from "react";
import EventBox from "./Eventbox";

const Eventos = () => {  
  const [evento, setEvento] = useState([]);

  const getEventos = async() =>{
    try{
      const response = await axios.get(`https://server.inneo.org/v1/eventos`);
      const data = response.data;
      setEvento(data);
    }catch(e){
      console.log(e);
    }
  } 

  useEffect(() => {
    getEventos();
  },[]);
  
  return (
    <section className="section" id="eventos">
      <div className="container mx-auto"> 
        <HeaderSection pretitle='Agenda' title='Eventos'/> 
        <EventBox eventos={evento}/>
      </div>
    </section>
  )
}
export default Eventos

 

  