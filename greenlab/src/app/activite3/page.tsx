import Link from 'next/link';
import Image from 'next/image';

export default function Activite3() {
    const materiels = [
        "Betterave", "Épinards", "Curcuma", "Cassis",
        "Petit pot", "Pinceau", "Filtre à café", "Cuvette"
    ];

    const etapes = [
        "Écrasez les fruits ou légumes dans des petits bols. Par exemple : betterave pour le rose, curcuma pour le jaune, épinard pour le vert, cassis pour le violet.",
        "Ajoutez un peu d’eau chaude et laissez infuser. Filtrez ensuite avec un filtre à café ou une passoire fine.",
        "Proposez aux enfants d’utiliser un pinceau pour peindre avec ces encres naturelles. Encouragez-les à mélanger, tester, superposer les couleurs.",
        "Pour plus de tenue, ajoutez un peu de farine ou de fécule à vos teintures pour obtenir une texture plus épaisse.",
        "Laissez sécher les créations à l’air libre. Ces œuvres peuvent être utilisées comme cartes, affiches ou papiers cadeaux !"
    ];

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
                    <div className="absolute left-[49px] top-[150px] font-black text-[20px] font-Vibur">Retour</div>
                </Link>

                <div className="absolute top-[193px] w-[318px] h-[194px] font-black leading-[100%] text-[22px] font-Montserrat">
                    Peinture végétale
                </div>

                <Image
                    src="/shapes/image1.png"
                    alt="Peinture"
                    width={360}
                    height={192}
                    className="w-full h-48 absolute top-[250px] max-w-sm rounded-lg overflow-hidden"
                />

                <h2 className="absolute left-[20px] top-[450px] font-bold text-[22px] font-Montserrat">DESCRIPTION :</h2>
                <p className="absolute text-gray-700 left-[20px] top-[490px] w-[350px] text-justify text-[12px]" style={{ fontFamily: 'Inter' }}>
                    Transformez des restes de légumes ou de fruits en véritables tubes de peinture écolo. Cette activité permet aux enfants de découvrir les couleurs naturelles, la teinture et l’art du recyclage en s’amusant.
                </p>

                <h2 className="absolute left-[20px] top-[603px] font-bold text-[22px] font-Montserrat">MATÉRIEL :</h2>
                <div className="absolute grid grid-cols-4 left-[20px] top-[644px] gap-y-4">
                    {materiels.map((item, index) => (
                        <div key={item} className="flex flex-col items-center mb-1">
                            <div className="w-[79px] h-[79px] rounded-full bg-[#D7F2AE] flex items-center justify-center">
                                <Image src={`/shapes/Vector${index + 1}.png`} alt={item} width={44} height={37} />
                            </div>
                            <span className="text-center text-sm">{item}</span>
                        </div>
                    ))}
                </div>

                <div className="h-[2000px]">
                    <h2 className="absolute left-[20px] top-[906.97px] font-bold text-[22px] font-Montserrat">ÉTAPES :</h2>
                    {etapes.map((texte, i) => {
                        const yImage = 925.97 + i * 130;
                        const yText = 996.97 + i * 130;
                        return (
                            <div key={i}>
                                <Image
                                    src={`/shapes/etape${i + 1}.png`}
                                    alt={`Étape ${i + 1}`}
                                    width={64}
                                    height={64}
                                    className={`absolute p-5 left-[0px] top-[${yImage}px] rounded-full`}
                                />
                                <p
                                    className={`absolute w-[354px] text-justify h-[60px] left-[20px] top-[${yText}px] text-[12px]`}
                                    style={{ fontFamily: 'Inter' }}
                                >
                                    {texte}
                                </p>
                            </div>
                        );
                    })}

                    <h2 className="absolute left-[20px] top-[1600px] font-bold text-[22px] font-Montserrat">Les conseils bonus:</h2>
                    <p className="absolute left-[20px] top-[1640px] text-[12px] font-Montserrat" style={{ fontFamily: 'Inter' }}>
                        Expliquez aux enfants que les peintures du passé étaient aussi faites avec des pigments naturels. Ils deviennent ainsi les petits artistes d’un art ancestral !
                    </p>
                </div>

                <section className="absolute bg-[#99ABF4] w-full h-[300px] top-[1800px] left-[0]">
                    <div className="text-center text-white pt-8">
                        <h2 className="text-2xl font-bold">Contact</h2>
                        <p>contact@drole2lab.com</p>
                        <p>07 82 23 77 57</p>
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