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
                    Boules à neige magiques de Noël
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
                  Fabriquez avec vos enfants de 6 à 8 ans leurs propres boules à neige de Noël ! Cette activité enchantée permet de donner une seconde vie aux bocaux en verre qui traînent dans vos placards. Avec quelques matériaux de récupération et un peu d'imagination, créez des univers miniatures où la neige tombe sur commande.
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
                    >Nettoyez soigneusement votre vocal et son couvercle. Verifiez qu’il n’y a pas de résidus d’étiquette. Les enfants adorent cette étape de “nettoyage magique” - laissez - les frotter avec une éponge douce.</p>


                    <img src="/shapes/etape2.png" alt="Arrosage" className=" absolute p-5 left-[0px]  top-[1055.97px]  rounded-full  " />
                    <p className="absolute w-[354px]  text-justify h-[60px] left-[20px] top-[1120.97px]  text-[12px] font-Montserrat"
                        style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            fontSize: '12px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                        }}
                    >Avec la pâte à modeler, créez le “sol” de votre univers au fond du couvercle retourné. Collez-y fermement vos figurines Ajoutez quelques petits éléments décoratifs:  cailloux petites branches. Laissez sécher si nécessaire. </p>


                    <img src="/shapes/etape3.png" alt="Arrosage" className=" absolute p-5 left-[0px]  top-[1180.97px]  rounded-full  " />
                    <p className="absolute w-[354px]  text-justify h-[60px] left-[20px] top-[1250.97px]  text-[12px] font-Montserrat"
                        style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            fontSize: '12px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                        }}
                    >Avant de fixer définitivement, testez que votre décor rentre bien dans le bocal quand vous le retournez. C’est le moment de faire les derniers ajustements avec les enfants.</p>


                    <img src="/shapes/etape4.png" alt="Arrosage" className=" absolute p-5 left-[0px]  top-[1320.97px]  rounded-full  " />
                    <p className="absolute w-[354px]  text-justify h-[60px] left-[20px] top-[1390.97px]  text-[12px] font-Montserrat"
                        style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            fontSize: '12px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                        }}
                     terreau >Dans un petit bol, mélangez vos "flocons" : paillettes blanches, un peu de semoule ou riz... Attention à ne pas en mettre trop - une cuillère à café suffit ! Les enfants peuvent créer leur propre mélange "recette secrète".</p>

                    <img src="/shapes/etape5.png" alt="Arrosage" className=" absolute p-5 left-[0px]  top-[1450.97px]  rounded-full  " />
                    <p className="absolute w-[354px]  text-justify h-[60px] left-[20px] top-[1520.97px]  text-[12px] font-Montserrat"
                        style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            fontSize: '12px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                        }}
                    >Remplissez le bocal d'eau aux 3/4. Ajoutez quelques gouttes de glycérine ou de liquide vaisselle transparent - cela ralentit la chute des flocons. Les enfants peuvent observer comment le liquide devient plus "épais".</p>


                    <img src="/shapes/etape6.png" alt="Arrosage" className=" absolute p-5 left-[0px]  top-[1590.97px]  rounded-full  " />
                    <p className="absolute w-[354px]  text-justify h-[60px] left-[20px] top-[1660.97px]  text-[12px] font-Montserrat"
                        style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            fontSize: '12px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                        }}
                    >Ajoutez délicatement votre mélange "neige" dans l'eau. Vissez fermement le couvercle avec le décor (attention au sens !). L'adulte peut ajouter un point de colle sur le pourtour pour bien étancher.</p>

                    <h2 className="absolute left-[20px] top-[1740.97px]  font-bold  text-[22px] font-Montserrat" >Les conseils bonus:</h2>

                    <p className="absolute left-[20px] top-[1780.97px]   text-[12px] font-Montserrat"
                        style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            fontSize: '12px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                        }}
                    >Les boules à neiges maison se conservent plusieurs mois ! Si l’erau devient trouble, on peut la changer montre aux enfants qu’ils ont crée un “vrai” jouet durable, pas un objet jetable </p>
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
