import Image from "next/image";
import Link from 'next/link';

export default function Activite1() {
    return (
        <div className="min-h-screen bg-[#FFF2E9] relative">
            {/* Header */}
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
                <Image src="/shapes/ph_arrow-arc-left-bold.png" alt="Retour" width={24} height={24} />

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
                    width={400}
                    height={200}
                    className="w-full h-48 absolute top-[250px] max-w-sm rounded-lg overflow-hidden"
                />

                <h2 className="absolute left-[20px] top-[450px] font-bold text-[22px] font-Montserrat">DESCRIPTION :</h2>

                <p className="absolute text-gray-700 left-[20px] top-[490px] w-[350px] text-justify text-[12px]" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
                    Initiez vos enfants de 10 à 12 ans à l&apos;art du mixed-média en utilisant exclusivement des matériaux de récupération ! Cette technique artistique moderne mélange papiers, tissus, textures et couleurs pour créer des œuvres uniques et expressives.
                </p>

                {/* MATÉRIEL (exemple simplifié pour un élément) */}
                <div className="absolute grid grid-cols-4 left-[20px] top-[644px]">
                    <div className="flex flex-col items-center mb-1">
                        <div className="p-[15px] w-[79px] h-[79px] rounded-full bg-[#D7F2AE] flex items-center justify-center">
                            <Image src="/shapes/Vector1.png" alt="Arrosage" width={44} height={37} />
                        </div>
                        <span className="text-center">Arrosage</span>
                    </div>
                    {/* Répète les autres blocs en adaptant width/height */}
                </div>

                {/* ÉTAPES (extrait d'une étape) */}
                <h2 className="absolute left-[20px] top-[906.97px] font-bold text-[22px] font-Montserrat">ÉTAPES :</h2>

                <Image src="/shapes/etape1.png" alt="Étape 1" width={80} height={80} className="absolute p-5 left-[0px] top-[925.97px] rounded-full" />
                <p className="absolute w-[354px] text-justify left-[20px] top-[996.97px] text-[12px]" style={{ fontFamily: 'Inter' }}>
                    Partez en &quot;chasse artistique&quot; dans la maison ! Rassemblez tous les matériaux colorés, texturés, imprimés que vous trouvez.
                </p>

                {/* Reste à adapter les autres étapes de la même façon */}

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