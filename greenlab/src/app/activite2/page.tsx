import Link from "next/link";
import Image from "next/image";

export default function Activite2() {
  return (
    <div className="min-h-screen bg-[#FFF2E9] relative">
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

        <div className="absolute h-px w-[453px] bg-[#00000033] top-[125px]"></div>
      </header>

      <main className="pt-[160px] px-5">
        <Image src="/shapes/ph_arrow-arc-left-bold.png" alt="Retour" width={32} height={32} />

        <Link href="/accueil">
          <div className="absolute left-[49px] top-[150px] font-black text-[20px] font-Vibur">
            Retour
          </div>
        </Link>

        <div className="absolute top-[193px] w-[318px] h-[194px] font-black leading-[100%] text-[22px] font-Montserrat">
          Boules à neige magiques de Noël
        </div>

        <Image
          src="/shapes/image1.png"
          alt="Jardin"
          width={320}
          height={192}
          className="w-full h-48 absolute top-[250px] max-w-sm rounded-lg overflow-hidden"
        />

        {/* DESCRIPTION */}
        <h2 className="absolute left-[20px] top-[450px] font-bold text-[22px] font-Montserrat">DESCRIPTION :</h2>
        <p className="absolute text-gray-700 left-[20px] top-[490px] w-[350px] h-[165px] text-justify text-[12px] font-Montserrat">
          Fabriquez avec vos enfants de 6 à 8 ans leurs propres boules à neige de Noël ! Cette activité enchantée permet de donner une seconde vie aux bocaux en verre qui traînent dans vos placards. Avec quelques matériaux de récupération et un peu d&#39;imagination, créez des univers miniatures où la neige tombe sur commande.
        </p>

        {/* MATÉRIEL */}
        <h2 className="absolute left-[20px] top-[603px] font-bold text-[22px] font-Montserrat">MATÉRIEL :</h2>
        <div className="absolute grid grid-cols-4 left-[20px] top-[644px]">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="flex flex-col items-center mb-1">
              <div className="w-[79px] h-[79px] rounded-full bg-[#D7F2AE] flex items-center justify-center">
                <Image src={`/shapes/Vector${i + 1}.png`} alt={`Élément ${i + 1}`} width={43} height={37} />
              </div>
              <span className="text-center">Élément {i + 1}</span>
            </div>
          ))}
        </div>

        {/* ÉTAPES */}
        <div className="h-[2000px]">
          <h2 className="absolute left-[20px] top-[906.97px] font-bold text-[22px] font-Montserrat">ÉTAPES :</h2>

          {[1, 2, 3, 4, 5, 6].map((n, i) => (
            <div key={n}>
              <Image
                src={`/shapes/etape${n}.png`}
                alt={`Étape ${n}`}
                width={64}
                height={64}
                className={`absolute p-5 left-[0px] top-[${925 + i * 130}px] rounded-full`}
              />
              <p
                className={`absolute w-[354px] text-justify h-[60px] left-[20px] top-[${996 + i * 130}px] text-[12px] font-Montserrat`}
              >
                {/* Texte descriptif ici à adapter pour chaque étape si besoin */}
                Description de l&#39;étape {n}
              </p>
            </div>
          ))}

          {/* CONSEILS BONUS */}
          <h2 className="absolute left-[20px] top-[1740.97px] font-bold text-[22px] font-Montserrat">
            Les conseils bonus:
          </h2>
          <p className="absolute left-[20px] top-[1780.97px] text-[12px] font-Montserrat">
            Les boules à neige maison se conservent plusieurs mois ! Si l&#39;eau devient trouble, on peut la changer. Montrez aux enfants qu&#39;ils ont créé un vrai jouet durable.
          </p>
        </div>

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