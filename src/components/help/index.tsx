import Accordion from '../accordion'

export default function HelpSession() {
  return (
    <section className="px-6 py-16 flex flex-col gap-10 text-center">
      <div className="flex flex-col gap-4">
        <span className="text-rose-600 uppercase text-sm">#inovação</span>
        <h2 className=" text-2xl font-semibold ">Ficou com alguma dúvida?</h2>
        <p className="text-base">
          Nullam ornare eu nisi fringilla consectetur. Suspendisse potenti.{' '}
        </p>
      </div>
      <div>
        <Accordion title="Loren ipsum dolor sit amet">
          Vestibulum faucibus risus eu mi volutpat, vel tristique dui rutrum...
        </Accordion>
        <Accordion title="Loren ipsum dolor sit amet">
          Vestibulum faucibus risus eu mi volutpat, vel tristique dui rutrum...
        </Accordion>
        <Accordion title="Loren ipsum dolor sit amet">
          Vestibulum faucibus risus eu mi volutpat, vel tristique dui rutrum...
        </Accordion>
      </div>
    </section>
  )
}
