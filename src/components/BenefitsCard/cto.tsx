import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'

type CtoBenefitsCardProps = {
  href: Url
  children?: React.ReactNode
}
export function CtoBenefitsCard(props: CtoBenefitsCardProps) {
  return (
    <Link
      href={props.href}
      className="text-rose-600 underline text-base font-semibold uppercase"
    >
      {props.children}
    </Link>
  )
}
