'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Activite1() {
  return (
    <div className="min-h-screen bg-[#FFF2E9] relative">

      <header className="absolute w-[380px] h-[150px] bg-[#FFF2E9] z-50">
        <Image
          src="/shapes/Frame 100.png"
          alt=""
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

      <main className="pt-[160px] px-5">
        <Image src="/shapes/ph_arrow-arc-left-bold.png" alt="Jardin" width={24} height={24} />
        <Link href="/accueil">
          <div className="absolute left-[49px] top-[150px] font-black text-[20px] font-Vibur">
            Retour
          </div>
        </Link>

        <div className="absolute top-[193px] w-[318px] h-[194px] font-black leading-[100%] text-[22px] font-Montserrat">
          Un Jardin tout rond
        </div>

        <Image
          src="/shapes/image1.png"
          alt="Jardin"
          width={400}
          height={200}
          className="w-full h-48 absolute top-[250px] max-w-sm rounded-lg overflow-hidden"
        />

        <h2 className="absolute left-[20px] top-[450px] font-bold text-[22px] font-Montserrat">DESCRIPTION :</h2>
        <p className="absolute text-gray-700 left-[20px] top-[490px] w-[350px] text-justify text-[12px]" style={{ fontFamily: 'Inter' }}>
          Créez un potager vertical original et écologique en détournant tubes, gouttières ou tuyaux de leur usage initial...
        </p>

        {/* MATÉRIEL */}
        <h2 className="absolute left-[20px] top-[603px] font-bold text-[22px] font-Montserrat">MATÉRIEL :</h2>
        <div className="absolute grid grid-cols-4 left-[20px] top-[644px]">
          {[
            { img: 'Vector1.png', label: 'Arrosage' },
            { img: 'Vector2.png', label: 'Terreau' },
            { img: 'Vector3.png', label: 'Graine' },
            { img: 'Vector4.png', label: 'Perceuse' },
            { img: 'Vector5.png', label: 'Tube' },
            { img: 'Vector6.png', label: 'Équerre' },
            { img: 'Vector7.png', label: 'Planche de bois' },
            { img: 'Vector8.png', label: 'Gravier' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center mb-1">
              <div className="w-[79px] h-[79px] rounded-full bg-[#D7F2AE] flex items-center justify-center">
                <Image src={`/shapes/${item.img}`} alt={item.label} width={43} height={37} />
              </div>
              <span className="text-center">{item.label}</span>
            </div>
          ))}
        </div>

        {/* ÉTAPES */}
        <h2 className="absolute left-[20px] top-[906.97px] font-bold text-[22px] font-Montserrat">ÉTAPES :</h2>
        {[
          'etape1.png',
          'etape2.png',
          'etape3.png',
          'etape4.png',
          'etape5.png',
          'etape6.png',
        ].map((img, i) => (
          <Image
            key={i}
            src={`/shapes/${img}`}
            alt={`Étape ${i + 1}`}
            width={64}
            height={64}
            className={`absolute p-5 left-[0px] top-[${925 + i * 130}px] rounded-full`}
          />
        ))}

        {/* BONUS */}
        <h2 className="absolute left-[20px] top-[1740.97px] font-bold text-[22px] font-Montserrat">Les conseils bonus:</h2>
        <p className="absolute left-[20px] top-[1780.97px] text-[12px] font-Montserrat" style={{ fontFamily: 'Inter' }}>
          Installez votre jardin rond côté est ou sud-est pour bénéficier du soleil matinal tout en évitant les fortes chaleurs de l&rsquo;après-midi qui dessèchent rapidement les substrats en hauteur.
        </p>

        {/* Footer */}
        <section className="absolute bg-[#99ABF4] w-full h-[300px] top-[1900px] left-[0]">
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
