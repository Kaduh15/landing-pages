import { MenuIcon } from 'lucide-react'

import TeslaBankIcon from '../svg/TeslaBankIcon'

export default function Header() {
  return (
    <header className="bg-rose-600 flex items-center justify-between p-5">
      <TeslaBankIcon className="size-10 fill-white" />
      <MenuIcon className="text-white size-10" />
    </header>
  )
}
