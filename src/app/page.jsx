import Player from "@/components/Player"
import Hero from "@/components/hero"
import Eventos from "../components/eventos/Eventos"
import Header from "@/components/header"

export default function Home() {  

  return (
    <main className="">
      <Header />
      <Hero />
      <Player />
      <Eventos />
    </main>
  )
}
