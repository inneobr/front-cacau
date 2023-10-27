'use client';

import useSWR from "swr";
import HeaderSection from "../header/HeaderSection";
import CursoSlider from "./CursoSlider";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Albums = () => {
  const { data, error } = useSWR('https://api.inneo.org/v1/cursos', fetcher);
  if (error) return;
  if (!data) return 'Loadin...';

  return (
    <section className="h-[100vh] xl:h-[820px]" id="curso">
      <div className="container mx-auto h-full">
        <HeaderSection pretitle='Cursos' title='Popular cursos'/>
        <div>
          <CursoSlider cursos={data}/>
        </div>  
      </div>
    </section>
  )
}
export default Albums