import { LucideIcon } from 'lucide-react'

export function IconDetailsCard({
  icon: Icon,
}: Readonly<{ icon: LucideIcon }>) {
  return (
    <div className="bg-white inline-block p-4 rounded-lg mb-4 shadow-rose">
      <Icon className=" text-rose-600 size-9" />
    </div>
  )
}
