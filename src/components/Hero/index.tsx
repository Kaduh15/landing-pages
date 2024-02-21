import Image from 'next/image'

import Card from '@/assets/card.svg'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-rose-600 w-full flex flex-col items-center py-10 px-3 gap-4">
      <Image src={Card} alt="Tesla Bank Card" />
      <h1 className="text-3xl text-center font-semibold text-white">
        TeslaBank <br /> Banco 100% Digital
      </h1>
      <h2 className="text-center text-white text-base font-medium w-2/3">
        Abrir uma conta digital nunca foi tão simples!
      </h2>

      <button className="bg-white px-10 py-4 flex gap-5 rounded">
        Abrir uma conta {<ArrowRight />}
      </button>
    </section>
  )
}
