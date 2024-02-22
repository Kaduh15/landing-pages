import { ChevronDown } from 'lucide-react'

type AccordionProps = {
  title: string
  children: React.ReactNode
}

export default function Accordion({ children, title }: AccordionProps) {
  return (
    <div className="container mx-auto">
      <details className="[&_svg]:open:-rotate-180 ">
        <summary className="flex justify-between cursor-pointer list-none items-center gap-4">
          <p className="font-semibold">{title} </p>
          <ChevronDown className="rotate-0 transform text-rose-600 transition-all duration-300 bg-rose-00 rounded-full" />
        </summary>

        <p className="text-start overflow-hidden">{children}</p>
      </details>
    </div>
  )
}
