type BenefitsCardProps = {
  children?: React.ReactNode
}

export function BenefitsCardComponents(props: BenefitsCardProps) {
  return (
    <>
      <div className="mt-8 bg-white rounded p-10 flex flex-col gap-6 ">
        {props.children}
      </div>
    </>
  )
}
