import Player from "@/components/Player"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Albums from "../components/albums/Curso"
import Eventos from "../components/eventos/Eventos"

export default function Home() {  

  return (
    <main className="">
      <Header />
      <Hero />
      <Player />
      <Eventos />
      <Albums />
    </main>
  )
}
