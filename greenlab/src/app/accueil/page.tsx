'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function ActivitesPage() {
  return (
    <div className="min-h-screen bg-[#FFF2E9] font-montserrat flex flex-col">
      {/* Header */}
      <header className="w-full bg-[#E4F7B8] py-6 px-4 lg:px-24 flex justify-between items-center">
        <Image src="/shapes/Frame 100.png" alt="Logo" width={52} height={38} />

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-6 font-semibold text-black">
          <Link href="/">Accueil</Link>
          <Link href="/activites">Activités</Link>
          <Link href="/calendrier">Calendrier</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/profil">Profil</Link>
        </nav>

        {/* Mobile burger */}
        <div className="lg:hidden">
          <div className="w-6 h-5 flex flex-col justify-between cursor-pointer group">
            <span className="block h-0.5 bg-black"></span>
            <span className="block h-0.5 bg-black"></span>
            <span className="block h-0.5 bg-black"></span>
          </div>
        </div>

        {/* Desktop actions */}
        <div className="hidden lg:flex gap-2">
          <Link href="/login">
            <button className="border border-black px-4 py-1 rounded-full text-black cursor-pointer hover:translate-y-1">
              Se connecter
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-[#9BAEF6] text-white px-4 py-1 rounded-full cursor-pointer hover:translate-y-1">
              S&apos;inscrire
            </button>
          </Link>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="flex-1">
        {/* Section Intro */}
        <section className="text-[#2D2D2D] flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-6 md:px-24 mt-10">
          <div className="max-w-lg w-full">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Initiez vos enfants <br />
              en vous <span className="bg-[#C4F2B4] px-3 py-1 rounded-md">amusant !</span>
            </h1>

            <p className="mt-6 text-base md:text-lg leading-relaxed">
              À partir de 4 ans, les enfants imitent les gestes qu’ils observent. Un bon tri, un compost, une activité zéro
              déchet… c’est déjà intégré !
              <br /><br />
              Grâce à notre plateforme gratuite, découvrez des idées DIY écoresponsables à faire ensemble, en famille, avec
              des objets du quotidien.
            </p>
          </div>

          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <Image
              src="/activites.svg"
              alt="Activités"
              width={520}
              height={560}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Section Défis */}
        <section className="mt-16 px-4 md:px-24">
          <h1 className="text-xl md:text-2xl font-bold text-center text-[#2D2D2D] mb-10">
            La ville en terrain d’aventure <br /> durable en un guide !
          </h1>
          <div className="flex justify-center items-center w-full">
            <Image
              src="/ville.svg"
              alt="Défis en ville"
              width={900}
              height={200}
              className="h-auto"
            />
          </div>
          <div className="mt-8 flex justify-center">
            <Link href="/calendrier">
              <button className="bg-[#C3D9FF] text-[#0E0E0E] border border-[#0E0E0E] px-6 py-2 rounded-full font-semibold hover:bg-blue-200">
                Je découvre le calendrier
              </button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#9BAEF6] px-4 lg:px-24 py-10 text-white mt-16">
        <div className="flex flex-col">
          {/* Logo et contact */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
            <div className="flex flex-col gap-2">
              <Image src="/logo-drole2lab.svg" alt="Logo" width={100} height={40} />
            </div>
            <div className="text-sm">
              <span>contact@drole2lab.com</span>
              <span className="ml-4">tel : 07 82 23 77 57</span>
            </div>
          </div>

          {/* Ligne de séparation */}
          <hr className="border-t border-white opacity-30 mb-4" />

          {/* Liens légaux */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm">
            <span className="cursor-pointer hover:underline">Mentions légales</span>
            <span className="cursor-pointer hover:underline">Conditions générales</span>
            <span className="cursor-pointer hover:underline">Cookies</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
