type DetailsCardProps = {
  children?: React.ReactNode
}

export function DetailsCardComponents(props: DetailsCardProps) {
  return (
    <>
      <div className="mt-8 md:flex md:gap-8">{props.children}</div>
    </>
  )
}
