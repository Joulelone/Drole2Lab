// pages/index.js
import Head from "next/head";
import Link from 'next/link';

export default function activite1() {
    return (
        <div className="min-h-screen bg-[#FFF2E9] relative">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter"
                    rel="stylesheet"
                />

            </Head>

            {/* Header */}
            <header className="absolute w-[380px] h-[150px] bg-[#FFF2E9] z-50">
                <img
                    src="/shapes/Frame 100.png"
                    alt=""
                    className="absolute left-[22px] top-[66px] w-[52.27px] h-[38.32px]"
                />

                <nav className="absolute  left-[340px] top-[71px] ">
                    <div className="w-6 h-5 flex flex-col justify-between cursor-pointer group">
                        <span className="block h-0.5 bg-black transition-all duration-300 group-hover:scale-x-110"></span>
                        <span className="block h-0.5 bg-black transition-all duration-300 group-hover:scale-x-110"></span>
                        <span className="block h-0.5 bg-black transition-all duration-300 group-hover:scale-x-110"></span>
                    </div>
                </nav>

                <div className="absolute h-px w-[453px] bg-[#00000033] top-[125px] "></div>
            </header>

            {/* Ajouter une marge en haut pour compenser le header fixé */}
            <main className="pt-[160px] px-5">
                <img className="" src="/shapes/ph_arrow-arc-left-bold.png" alt="Jardin" />

                <Link href="/accueil">
                    <div className="absolute left-[49px] top-[150px] font-black  text-[20px] font-Vibur">
                        Retour
                    </div>
                </Link>

                <div className="absolute top-[193px] w-[318px] h-[194px] font-black leading-[100%] text-[22px] font-Montserrat">
                    Un Jardin tout rond
                </div>


                <img className="w-full h-48 absolute top-[250px] max-w-sm  rounded-lg overflow-hidden" src="/shapes/image1.png" alt="Jardin" />
                <h2 className="absolute left-[20px] top-[450px]  font-bold  text-[22px] font-Montserrat" >DESCRIPTION :</h2>

                <p
                    className="absolute text-gray-700 left-[20px] top-[490px] w-[350px] h-[165] text-justify"
                    style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        fontSize: '12px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                    }}
                >
                    Créez un potager vertical original et écologique en détournant tubes, gouttières ou tuyaux de leur usage initial. Cette solution ingénieuse permet de cultiver aromates, radis, salades et petits légumes même dans les plus petits espaces urbains. En donnant une seconde vie à des matériaux destinés au rebut, vous conjuguez jardinage urbain et geste pour la planète, tout en créant un système d'arrosage optimisé qui économise l'eau.
                </p>


                <h2 className="absolute left-[20px] top-[603px]  font-bold  text-[22px] font-Montserrat" >MATÉRIEL :</h2>


                <div className="absolute grid grid-cols-4 left-[20px] top-[644px]">

                    <div className="flex flex-col items-center mb-1">
                        <div className="p-[15px]  w-[79px] h-[79px] rounded-full bg-[#D7F2AE] flex items-center justify-center">
                            <img src="/shapes/Vector1.png" alt="Arrosage" className="w-[43.53px] h-[37px]" />
                        </div>
                        <span className="text-center">Arrosage</span>
                    </div>


                    <div className="flex flex-col items-center mb-1">

                        <div className=" w-[79px] h-[79px] rounded-full bg-[#D7F2AE] flex items-center justify-center">
                            <img src="/shapes/Vector2.png" alt="Arrosage" className="w-[43.53px] h-[37px]" />
                        </div>

                        <span className="text-center">Terreau</span>
                    </div>

                    <div className="flex flex-col items-center mb-1">
                        <div className="w-[79px] h-[79px] rounded-full bg-[#D7F2AE] flex items-center justify-center">
                            <img src="/shapes/Vector3.png" alt="Arrosage" className="w-[43.53px] h-[37px]" />
                        </div>
                        <span className="text-center">Graine</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-[79px] h-[79px] rounded-full bg-[#D7F2AE] flex items-center justify-center">
                            <img src="/shapes/Vector4.png" alt="Arrosage" className="w-[43.53px] h-[37px]" />
                        </div>
                        <span className="text-center">Perceuse</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-[79px] h-[79px] rounded-full bg-[#D7F2AE] flex items-center justify-center">
                            <img src="/shapes/Vector5.png" alt="Arrosage" className="w-[43.53px] h-[37px]" />
                        </div>
                        <span className="text-center">Tube</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-[79px] h-[79px] rounded-full bg-[#D7F2AE] flex items-center justify-center">
                            <img src="/shapes/Vector6.png" alt="Arrosage" className="w-[43.53px] h-[37px]" />                            
                        </div>
                        <span className="text-center">Équerre</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-[79px] h-[79px] rounded-full bg-[#D7F2AE] flex items-center justify-center">
                            <img src="/shapes/Vector7.png" alt="Arrosage" className="w-[43.53px] h-[37px]" />                            
                        </div>
                        <span className="text-center">Planche de bois</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-[79px] h-[79px] rounded-full bg-[#D7F2AE] flex items-center justify-center">
                            <img src="/shapes/Vector8.png" alt="Arrosage" className="w-[43.53px] h-[37px]" />                            
                        </div>
                        <span className="text-center">Gravier</span>
                    </div>
                </div>

                <div className="  h-[2000px]">
                    <h2 className="absolute left-[20px] top-[906.97px]  font-bold  text-[22px] font-Montserrat" >ÉTAPES :</h2>

                    <img src="/shapes/etape1.png" alt="Arrosage" className=" absolute p-5 left-[0px]  top-[925.97px]  rounded-full  " />
                    <p className="absolute w-[354px] text-justify h-[60px] left-[20px] top-[996.97px]  text-[12px] font-Montserrat"
                        style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            fontSize: '12px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                        }}
                    >Nettoyez soigneusement vos tubes de récupération. Percez des trous de drainage tous les 20 cm sur la face inférieure (diamètre 5-8 mm). Si vous utilisez des gouttières, vérifiez qu'elles sont bien étanches aux extrémités.</p>


                    <img src="/shapes/etape2.png" alt="Arrosage" className=" absolute p-5 left-[0px]  top-[1055.97px]  rounded-full  " />
                    <p className="absolute w-[354px]  text-justify h-[60px] left-[20px] top-[1120.97px]  text-[12px] font-Montserrat"
                        style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            fontSize: '12px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                        }}
                    >Fixez solidement vos supports muraux ou créez une structure autoportante avec les planches de récupération. Prévoyez une légère inclinaison (2-3°) pour faciliter l'évacuation de l'eau excédentaire</p>


                    <img src="/shapes/etape3.png" alt="Arrosage" className=" absolute p-5 left-[0px]  top-[1180.97px]  rounded-full  " />
                    <p className="absolute w-[354px]  text-justify h-[60px] left-[20px] top-[1250.97px]  text-[12px] font-Montserrat"
                        style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            fontSize: '12px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                        }}
                    >Installez vos tubes sur les supports en vérifiant leur stabilité. L'espacement entre chaque niveau doit permettre le développement des plantes (minimum 25 cm).</p>


                    <img src="/shapes/etape4.png" alt="Arrosage" className=" absolute p-5 left-[0px]  top-[1320.97px]  rounded-full  " />
                    <p className="absolute w-[354px]  text-justify h-[60px] left-[20px] top-[1390.97px]  text-[12px] font-Montserrat"
                        style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            fontSize: '12px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                        }}
                    >Disposez une couche de drainage (billes d'argile ou graviers) sur 3-4 cm au fond de chaque tube. Remplissez ensuite avec le terreau en laissant 2 cm de rebord.</p>

                    <img src="/shapes/etape5.png" alt="Arrosage" className=" absolute p-5 left-[0px]  top-[1450.97px]  rounded-full  " />
                    <p className="absolute w-[354px]  text-justify h-[60px] left-[20px] top-[1520.97px]  text-[12px] font-Montserrat"
                        style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            fontSize: '12px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                        }}
                    >Semez directement vos graines ou repiquez vos plants en respectant les distances de plantation. Privilégiez les variétés à développement compact et à croissance rapide.</p>


                    <img src="/shapes/etape6.png" alt="Arrosage" className=" absolute p-5 left-[0px]  top-[1590.97px]  rounded-full  " />
                    <p className="absolute w-[354px]  text-justify h-[60px] left-[20px] top-[1660.97px]  text-[12px] font-Montserrat"
                        style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            fontSize: '12px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                        }}
                    >Arrosez régulièrement mais sans excès. L'avantage du système : l'eau s'évacue naturellement vers le tube inférieur, optimisant l'utilisation de chaque goutte. Récoltez au fur et à mesure et renouvelez vos plantations.</p>

                    <h2 className="absolute left-[20px] top-[1740.97px]  font-bold  text-[22px] font-Montserrat" >Les conseils bonus:</h2>

                    <p className="absolute left-[20px] top-[1780.97px]   text-[12px] font-Montserrat"
                        style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            fontSize: '12px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                        }}
                    >Installez votre jardin rond côté est ou sud-est pour bénéficier du soleil matinal tout en évitant les fortes chaleurs de l’après-midi qui dessèchent rapidement les substrats en hauteur.</p>
                </div>

                {/* Bloc couleur */}
                <section className="absolute bg-[#99ABF4] w-full h-[300px]  top-[1900px] left-[0]" >
<br /><br />
                    <div className="text-center text-black">
                        <h2 className="text-white text-2xl font-bold">Contact</h2>
                        <p className="text-white">contact@drole2lab.com</p>
                        <p className="text-white">07 82 23 77 57</p>
                    </div>

                    <div className="text-center text-white">
                        <h2 className="text-xl font-semibold mt-5">A propos</h2>
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
