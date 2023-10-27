"use client";
import HeaderSection from "@/components/header/HeaderSection";
import useSWR from "swr";
import EventBox from "./Eventbox";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Eventos = () => { 
  const { data, error } = useSWR('https://api.inneo.org/v1/eventos', fetcher);
  if (error) return;
  if (!data) return 'Loading...'; 
  
  
  return (
    <section className="section" id="eventos">
      <div className="container mx-auto"> 
        <HeaderSection pretitle='Agenda' title='Eventos'/> 
        <EventBox eventos={data}/>
      </div>
    </section>
  )
}
export default Eventos

/*
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
  */

 

  