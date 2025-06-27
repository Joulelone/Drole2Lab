'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function CalendrierPage() {
  return (
    <div className="min-h-screen bg-[#FFF2E9] font-montserrat flex flex-col justify-between">
      {/* Header */}
      <header className="w-full bg-[#E4F7B8] py-6 px-4 lg:px-24 flex justify-between items-center">
        <Image src="/shapes/Frame 100.png" alt="Logo" width={52} height={38} />

        <nav className="hidden lg:flex gap-6 font-semibold text-black">
          <Link href="/">Accueil</Link>
          <Link href="/activites">Activités</Link>
          <Link href="/calendrier">Calendrier</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/profil">Profil</Link>
        </nav>

        <div className="lg:hidden">
          <div className="w-6 h-5 flex flex-col justify-between cursor-pointer group">
            <span className="block h-0.5 bg-black"></span>
            <span className="block h-0.5 bg-black"></span>
            <span className="block h-0.5 bg-black"></span>
          </div>
        </div>

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

      {/* Contenu */}
      <main className="px-4 lg:px-24 py-12 flex flex-col gap-16">

        {/* Titre principal */}
        <section>
          <h1 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] leading-snug">
            Le calendrier écoresponsable pour toute la <span className="bg-[#FFBDBD] px-2 py-1 rounded-md">famille</span>
          </h1>
        </section>

        {/* Intro + illustration */}
<section className="grid md:grid-cols-2 gap-10 items-center">
  <div>
    <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4">Grandir avec l’écologie, dès les premiers gestes</h2>
    <p className="text-base leading-relaxed text-[#2D2D2D]">
      Entre 4 et 12 ans, les enfants sont dans l’âge de l’initiation et de la découverte. C’est le moment idéal pour leur transmettre des habitudes simples, concrètes et positives : trier, réutiliser, jardiner, observer la nature… Chaque geste compte, surtout s’il est vécu dans la joie et en famille.
    </p>
  </div>
  <div className="text-center">
    <Image
      src="/calendrier.svg"
      alt="Illustration calendrier"
      width={300}
      height={300}
      className="mx-auto w-full max-w-[280px] h-auto"
      priority
    />
    <p className="text-sm text-[#2D2D2D] mt-4">
      Le tout pensé pour être accessible, éducatif et réalisable avec peu de matériel, dans un esprit de partage, de découverte et de lien avec son quartier.
    </p>
    <button className="bg-[#DCE5FF] text-black px-4 py-2 mt-4 rounded-full border border-black font-semibold hover:bg-blue-100">
      Essayez gratuitement le 1er mois !
    </button>
  </div>
</section>

        {/* Étiquettes colorées */}
        <section className="flex flex-wrap gap-3 justify-start text-sm">
          <span className="bg-[#BFD8FF] text-[#1D4ED8] px-3 py-1 rounded-lg font-semibold">Un défi écologique en famille</span>
          <span className="bg-[#FFBDBD] text-[#C53030] px-3 py-1 rounded-lg font-semibold">Une activité zéro déchet</span>
          <span className="bg-[#FFE78C] text-[#9A3412] px-3 py-1 rounded-lg font-semibold">Une sortie engagée</span>
        </section>

        {/* Pourquoi ce calendrier ? */}
        <section>
          <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4">Pourquoi un calendrier d’activités mensuelles ?</h2>
          <p className="text-base text-[#2D2D2D]">
            Parce que le quotidien en ville est souvent rythmé par les écrans, la consommation et les trajets… Ce calendrier propose une bulle de respiration créative, un temps fort à vivre ensemble chaque mois.
          </p>
          <ul className="mt-4 text-sm text-[#2D2D2D] list-disc pl-5 space-y-2">
            <li><span className="text-yellow-600 font-bold">🟡</span> Retrouver des idées alignées avec leurs valeurs.</li>
            <li><span className="text-green-600 font-bold">🟢</span> Sensibiliser leurs enfants à l’environnement sans discours anxiogène.</li>
            <li><span className="text-blue-600 font-bold">🔵</span> Construire des souvenirs utiles et joyeux autour de l’écologie.</li>
          </ul>
        </section>

        {/* Activités dans la ville */}
        <section className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Des activités ancrées dans la ville</h3>
            <ul className="flex flex-wrap gap-3 text-sm">
              <li className="bg-[#BFD8FF] text-[#1D4ED8] px-3 py-1 rounded-full font-medium">Marchés de proximité</li>
              <li className="bg-[#FFBDBD] text-[#C53030] px-3 py-1 rounded-full font-medium">Fêtes de quartier</li>
              <li className="bg-[#D4F5B2] text-[#3F6212] px-3 py-1 rounded-full font-medium">Initiatives de jardinage collectif</li>
              <li className="bg-[#FFD58C] text-[#78350F] px-3 py-1 rounded-full font-medium">Ateliers DIY récup’ à la maison ou en extérieur</li>
            </ul>
            <button className="mt-4 bg-[#C3D9FF] text-black px-4 py-2 rounded-full font-semibold border border-black hover:bg-blue-200">
              Découvrir
            </button>
          </div>

          {/* Pensé pour toutes les familles */}
          <div>
            <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Pensé pour toutes les familles</h3>
            <p className="text-sm text-[#2D2D2D]">
              Que vous soyez une famille nombreuse, monoparentale ou simplement en quête de sens, ce calendrier s’adapte à votre rythme et à vos envies.
            </p>
            <p className="text-sm mt-3 text-black">
              <strong>Chaque mois</strong>, un défi familial concret et <span className="text-blue-600 font-semibold">stimulant</span>.
            </p>
            <p className="text-sm mt-3 text-black">
              Des idées pensées pour la ville, avec une approche <span className="text-yellow-600 font-semibold">zéro déchet</span> et joyeuse.
            </p>
            <p className="text-sm mt-3 text-black">
              Pas de pression : chacun participe à <span className="text-green-600 font-semibold">son rythme</span>, selon ses moyens.
            </p>
          </div>
        </section>

        {/* Témoignages */}
        <section className="mt-10">
          <h3 className="text-xl font-bold mb-6">Ce qu’en disent les parents</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#D4F5B2] text-[#2D2D2D] p-6 rounded-lg">
              <p>🌿 Grâce au calendrier, j’ai enfin trouvé un moyen simple d’éveiller ma fille à l’écologie. Elle réclame maintenant les balades du dimanche !</p>
              <p className="mt-4 text-sm font-semibold">Camille, maman solo à Lyon</p>
            </div>
            <div className="bg-[#FFBDBD] text-[#2D2D2D] p-6 rounded-lg">
              <p>🌟 Grâce au calendrier, j’ai enfin trouvé un moyen simple d’éveiller ma fille à l’écologie. Elle réclame maintenant les balades du dimanche !</p>
              <p className="mt-4 text-sm font-semibold">Damien, papa à Paris</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#9BAEF6] px-4 lg:px-24 py-10 text-white mt-16">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
            <div className="flex flex-col gap-2">
              <Image src="/logo-drole2lab.svg" alt="Logo" width={100} height={40} />
            </div>
            <div className="text-sm">
              <span>contact@drole2lab.com</span>
              <span className="ml-4">tel : 07 82 23 77 57</span>
            </div>
          </div>
          <hr className="border-t border-white opacity-30 mb-4" />
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
