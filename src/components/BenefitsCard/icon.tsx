import { LucideIcon } from 'lucide-react'

export function IconBenefitsCard({
  icon: Icon,
}: Readonly<{ icon: LucideIcon }>) {
  return (
    <div className="inline-block">
      <Icon className=" text-rose-600 size-9" />
    </div>
  )
}
