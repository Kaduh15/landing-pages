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
    <section className="px-6 py-16 flex flex-col gap-4">
      <h2 className="text-start text-3xl font-semibold ">
        Abra sua conta <span className="text-rose-600">gratuita</span>!
      </h2>
      <p className="text-lg">
        Envie e receba dinheiro de forma mais prática e rápida. Faça Pix, TEDs e
        transferências com agendamento para todos os bancos sem pagar nada.
      </p>
      {detailsData.map(({ description, icon, title }, index) => (
        <DetailsCard.Card key={index}>
          <DetailsCard.Icon icon={icon} />
          <DetailsCard.Title>{title}</DetailsCard.Title>
          <DetailsCard.Description>{description}</DetailsCard.Description>
        </DetailsCard.Card>
      ))}
    </section>
  )
}
