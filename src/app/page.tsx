import Benefits from '@/components/Benefits'
import Depositions from '@/components/Depositions'
import Details from '@/components/Details'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Details />
      <Benefits />
      <Depositions />
    </main>
  )
}
