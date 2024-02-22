import Image from 'next/image'

import SmartphoneSVG from '@/assets/smartphone.svg'
import { DollarSign, Smartphone, Smile } from 'lucide-react'

import { DetailsCard } from '../DetailsCard'

const detailsData = [
  {
    title: 'Rendimento acima da média',
    description: 'Rendem mais que a poupança e você resgata quando quiser',
    icon: DollarSign,
  },
  {
    title: 'Conta digital 100% grátis',
    description:
      'Transferências, boletos de depósito e outros serviços gratuitos',
    icon: Smartphone,
  },
  {
    title: 'Cartão sem anuidade',
    description:
      'Conta digital com cartão de crédito sem anuidade e sem complicação',
    icon: Smile,
  },
]

export default function Details() {
  return (
    <section className="px-6 py-16 flex flex-col gap-8 md:flex-row md:bg-white md:justify-center md:items-center md:px-56 md:py-28">
      <Image src={SmartphoneSVG} alt="smartphone" className="w-2/5" />
      <div>
        <h2 className="text-start text-3xl font-semibold ">
          Abra sua conta <span className="text-rose-600">gratuita</span>!
        </h2>
        <p className="text-lg">
          Envie e receba dinheiro de forma mais prática e rápida. Faça Pix, TEDs
          e transferências com agendamento para todos os bancos sem pagar nada.
        </p>
        {detailsData.map(({ description, icon, title }, index) => (
          <DetailsCard.Card key={index}>
            <DetailsCard.Icon icon={icon} />
            <div className="flex flex-col gap-2">
              <DetailsCard.Title>{title}</DetailsCard.Title>
              <DetailsCard.Description>{description}</DetailsCard.Description>
            </div>
          </DetailsCard.Card>
        ))}
      </div>
    </section>
  )
}
