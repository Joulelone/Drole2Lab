import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#FFF2E9] relative">
      {/* Header */}
      <header className="absolute w-[380px] h-[150px] bg-[#FFF2E9] z-50">
        <Image
          src="/shapes/Frame 100.png"
          alt="Logo"
          width={52}
          height={38}
          className="absolute left-[22px] top-[66px]"
        />

        <nav className="absolute left-[340px] top-[71px]">
          <div className="w-6 h-5 flex flex-col justify-between cursor-pointer group">
            <span className="block h-0.5 bg-black transition-all duration-300 group-hover:scale-x-110"></span>
            <span className="block h-0.5 bg-black transition-all duration-300 group-hover:scale-x-110"></span>
            <span className="block h-0.5 bg-black transition-all duration-300 group-hover:scale-x-110"></span>
          </div>
        </nav>

        <div className="absolute h-px w-[453px] bg-[#00000033] top-[125px]" />
      </header>

      {/* Contenu principal */}
      <main className="pt-[160px] px-5">
        <div className="w-[318px] h-[132px] absolute top-[154px] left-[20px] leading-[100%]">
          <h1 className="font-Montserrat font-bold text-[36px] leading-[120%] tracking-[-0.015em]">
            Initiez vos <br /> enfants en vous <br />
          </h1>
        </div>

        <div
          className="absolute w-[204px] h-[42px] top-[244px] left-[15px] bg-cover bg-center rounded-[14px]"
          style={{
            backgroundImage: 'url("/shapes/bg-amusant.png")',
          }}
        >
          <span className="px-2 py-1 font-bold font-Montserrat text-[36px] leading-[100%] tracking-[-0.015em]">
            amusant !
          </span>
        </div>

        <p className="absolute w-[353px] h-[51px] top-[311px] left-[20px] text-[#575757] font-Inter text-[14px] leading-[100%]">
          À partir de 4 ans, les enfants imitent les gestes qu’ils observent.
        </p>

        <p className="absolute w-[353px] h-[51px] top-[378px] left-[20px] text-[#575757] font-Inter font-normal text-[14px] leading-[100%]">
          Grâce à notre plateforme gratuite, découvrez des idées DIY écoresponsables à faire ensemble, en famille.
        </p>

        <div className="bg-[#FFF2E9] w-[393px] h-[355px]">
          <Image
            src="/shapes/Group 319.png"
            alt="Illustration famille"
            width={393}
            height={355}
            className="absolute top-[445px] left-[20px]"
          />
          <div className="flex justify-center">
            <Image src="/shapes/Line 1.png" alt="Ligne 1" width={200} height={4} className="absolute top-[740px]" />
            <Image src="/shapes/Line 2.png" alt="Ligne 2" width={200} height={4} className="absolute top-[754px]" />
          </div>
        </div>

        <div className="bg-[#FFF2E9] w-[393px] h-[355px]">
          <h2 className="w-[353px] h-[48px] absolute top-[816px] left-[20px] font-Montserrat font-bold text-[#575757] text-[20px] leading-[100%]">
            La ville en terrain d’aventure durable en un guide !
          </h2>

          <p className="absolute w-[353px] h-[85px] top-[880px] left-[21px] text-[14px] leading-[100%]">
            Chaque mois, relevez un nouveau défi en famille :
          </p>
          <ul className="absolute top-[925px] left-[40px] list-disc pl-5 space-y-2 text-[14px]">
            <li>sorties locales engagées</li>
            <li>fêtes de quartier durables</li>
            <li>ateliers DIY nature & zéro déchet</li>
          </ul>
        </div>

        <div className="bg-[#FFF2E9] w-[393px] h-[355px] top-[816px]">
          <Image src="/shapes/rect01.png" alt="Forme 1" width={100} height={100} className="absolute top-[1035px] left-[285px]" />
          <Image src="/shapes/rect02.png" alt="Forme 2" width={100} height={100} className="absolute top-[1008px] left-[20px]" />
          <Image src="/shapes/rect03.png" alt="Forme 3" width={100} height={100} className="absolute top-[1199px] left-[27px]" />

          <div className="flex justify-center">
            <Image
              src="/shapes/Group 320.png"
              alt="Enfant qui plante"
              width={254}
              height={226}
              className="absolute top-[1027px] left-[70px]"
            />
          </div>

          <Image
            src="/shapes/jedecouvrelecalendrier.png"
            alt="Je découvre le calendrier"
            width={300}
            height={45}
            className="absolute top-[1293.5px] left-[47px]"
          />
        </div>

        <div className="bg-[#FFF2E9] w-[393px] h-[855px] top-[1418.5px]">
          <h2 className="w-[353px] h-[48px] absolute top-[1418px] left-[20px] font-Montserrat font-bold text-[20px] leading-[100%]">
            Nos dernières actualités :
          </h2>

          <div className="absolute top-[1438.5px] left-[20px] grid grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="rounded-lg shadow-md p-4">
                <Image src="/shapes/pic1.png" alt={`Article ${i + 1}`} width={160} height={90} className="rounded-t-lg mb-4" />
                <h3 className="font-semibold">Titre article</h3>
                <p className="text-gray-600">Description courte de l&apos;article</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <section className="absolute bg-[#99ABF4] w-full h-[300px] top-[2056px] left-[0]">
          <br />
          <br />
          <div className="text-center text-black">
            <h2 className="text-white text-2xl font-bold">Contact</h2>
            <p className="text-white">contact@drole2lab.com</p>
            <p className="text-white">07 82 23 77 57</p>
          </div>

          <div className="text-center text-white">
            <h2 className="text-xl font-semibold mt-5">À propos</h2>
            <ul className="list-none mt-2">
              <li>Conditions générales</li>
              <li>Mentions légales</li>
              <li>Gérer mes préférences</li>
              <li>Cookies</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}