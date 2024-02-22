import Image from 'next/image'

import AppStoreDownload from '@/assets/app-store-download.svg'
import PlayStoreDownload from '@/assets/play-store-download.svg'

export default function DownloadSession() {
  return (
    <section className="px-6 py-28 flex flex-col gap-14 items-center">
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-2xl text-start">
          Uma nova experiência em{' '}
          <span className="text-rose-600">serviços financeiros</span>. Somos
          digital, somos TeslaBank.{' '}
        </h3>
        <p className="text-lg">
          Donec venenatis at turpis at ornare. Pellentesque a quam vel dui
          lacinia dapibus in sit amet dolor.
        </p>
      </div>

      <div className="flex gap-6">
        <a href="/#">
          <Image
            src={AppStoreDownload}
            alt="Botão para ir para App Store baixar o app"
          />
        </a>
        <a href="/#">
          <Image
            src={PlayStoreDownload}
            alt="Botão para ir para a Play Store baixar o app"
          />
        </a>
      </div>
    </section>
  )
}
