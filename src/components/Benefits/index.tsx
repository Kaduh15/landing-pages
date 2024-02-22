import {
  Clock,
  CreditCard,
  Gift,
  Percent,
  Shield,
  ShoppingCart,
} from 'lucide-react'

import { BenefitsCard } from '../BenefitsCard'

const benefitsData = [
  {
    title: 'Cartão TeslaBank',
    description: 'Peça o seu cartão de crédito sem anuidade e sem taxas.',
    icon: CreditCard,
    cto: 'veja mais opções',
    link: '/#',
  },
  {
    title: 'Investimentos',
    description:
      'Invista sem taxas e com rendimentos acima da média do mercado.',
    icon: ShoppingCart,
    cto: 'Conheça agora',
    link: '/#',
  },
  {
    title: 'Atendimento 24h',
    description: 'Atendimento rápido e eficiente para te ajudar.',
    icon: Clock,
    cto: 'Veja as Opções',
    link: '/#',
  },
  {
    title: 'segurança',
    description: 'Sua conta segura e protegida em tempo real.',
    icon: Shield,
    cto: 'Conheça as seguranças',
    link: '/#',
  },
  {
    title: 'Sem Taxas',
    description: 'Sem tarifas de manutenção e sem taxas escondidas.',
    icon: Percent,
    cto: 'Como funciona',
    link: '/#',
  },
  {
    title: 'Receba prêmios',
    description: 'Ganhe prêmios e descontos exclusivos.',
    icon: Gift,
    cto: 'Veja como',
    link: '/#',
  },
]

export default function Benefits() {
  return (
    <section className="px-6 py-16 flex flex-col gap-4 bg-wave bg-cover bg-no-repeat">
      <div>
        <span className="text-rose-600 uppercase text-sm">#inovação</span>
        <h2 className="text-start text-3xl font-semibold ">
          Quais as vantagens de usar{' '}
          <span className="text-rose-600">TeslaBank</span>?
        </h2>
      </div>
      {benefitsData.map(({ description, icon, title, cto }, index) => (
        <BenefitsCard.Card key={index}>
          <BenefitsCard.Icon icon={icon} />
          <BenefitsCard.Title>{title}</BenefitsCard.Title>
          <BenefitsCard.Description>{description}</BenefitsCard.Description>
          <BenefitsCard.Cto href="/#">{cto}</BenefitsCard.Cto>
        </BenefitsCard.Card>
      ))}
    </section>
  )
}
