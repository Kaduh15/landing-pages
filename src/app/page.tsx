import Benefits from '@/components/Benefits'
import Depositions from '@/components/Depositions'
import Details from '@/components/Details'
import DownloadSession from '@/components/DownloadSession'
import Footer from '@/components/footer'
import Header from '@/components/Header'
import HelpSession from '@/components/help'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Details />
      <Benefits />
      <Depositions />
      <DownloadSession />
      <HelpSession />
      <Footer />
    </main>
  )
}
