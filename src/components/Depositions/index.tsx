const depositionsData = [
  {
    name: 'Nikola Tesla',
    text: 'O TelsBank é o melhor banco que já usei. É simples, rápido e seguro. Recomendo a todos.',
  },
  {
    name: 'Steve Jobs',
    text: 'O TelsBank é o melhor banco que já usei. É simples, rápido e seguro. Recomendo a todos.',
  },
  {
    name: 'Alan Turing',
    text: 'O TelsBank é o melhor banco que já usei. É simples, rápido e seguro. Recomendo a todos.',
  },
]

export default function Depositions() {
  return (
    <section className="bg-white px-6 py-16 flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <span className="text-rose-600 uppercase text-sm">#Depoimentos</span>
        <div className="inline">
          <h3 className="text-start text-3xl font-semibold">
            TelsBank fora das telinhas:
            <span className="text-start text-3xl font-normal">
              {' '}
              Veja o que falam sobre nosso serviço
            </span>
          </h3>
        </div>
      </div>

      <div className="flex flex-col gap-16">
        {depositionsData.map(({ name, text }, index) => {
          return (
            <div key={index} className="flex flex-col gap-3">
              <h4 className="font-medium uppercase text-xl h-fit w-full border-l-4 border-rose-600 pl-3">
                {name}
              </h4>
              <p>{text}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
