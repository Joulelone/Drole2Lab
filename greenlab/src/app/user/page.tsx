// pages/index.js
import Head from "next/head";

export default function Home() {
    return (
        <div className="max-h-[470px] bg-black">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Truculenta&display=swap"
                    rel="stylesheet"
                />
            </Head>

            {/* Header */}
            <header className="h-[3381px]  bg-white ">
                {/* Décorations SVG */}
                <img src="/shapes/Frame 2.png" alt="" className="absolute left-[12px] top-[14px] w-[70px]" />

                <img src="/shapes/yellow-square.svg" alt="" className="absolute right-24 left-[325px] top-[57px] w-[60px]" />

                <img src="/shapes/blue-square.svg" alt="" className="absolute left-[2.23px] top-[316px] w-[50px]" />

                <img src="/shapes/Polygon 1.png" alt="" className="absolute  left-[333px] top-[649.82px] transform rotate-0" />

                <img src="/shapes/Ellipse 8.png" alt="" className="absolute  w-[30px] left-[334px] top-[460.82px] -translate-x-1/2" />

                {/* Logo & Titre */}
                <img src="/logo-drole2lab.svg" alt="Logo Drôle2Lab" className="absolute  left-[172px] top-[50px] w-[49px] h-[67.6px]" />

                <div className="w-[259px] font-black leading-[60px] absolute top-[155px] left-[29px] text-[74.59px] font-truculenta">
                    Bricolo Recyclo Rigolo
                </div>

                <div className="absolute w-[350px] text-[16] h-[71px] top-[440px] left-[34px]">
          
             Des tutos <span className="underline">pour la famille</span>, à la maison
    <span className="block">et <span className="underline">pour la nature</span>.</span>
          
        </div>
                <img src="/shapes/Group 19.png" alt="" className="absolute w-[142px] text-[16] h-[104px] top-[566px] left-[124px]" />

                <img src="/shapes/Star 2.png" alt="" className="absolute w-[89px] text-[16] h-[89px] top-[706px] left-[33.4px]" />



                <img src="/shapes/Frame 71.png" alt="" className="absolute border-1  w-[197px] text-[16] h-[199px] top-[781px] left-[-1px]" />
                <img src="/shapes/Frame 73.png" alt="" className="absolute border-1   w-[197px] text-[16] h-[197px] top-[980px] left-[-1px]" />

                <img src="/shapes/Frame 1.png" alt="" className="absolute border-1  w-[197px] text-[16] h-[199px] top-[781px] left-[198px]" />
                <img src="/shapes/Frame 72.png" alt="" className="absolute border-1   w-[197px] text-[16] h-[197px] top-[980px] left-[198px]" />

                <p
                    className="font-montserrat font-extrabold text-[153.35px] leading-tight text-center absolute"
                    style={{ width: '334px', height: '187px', top: '1227px', left: '29px' }}
                >
                    56%
                </p>

                <div
                    className="absolute w-[365px] rounded-[25px] border-[1.5px] h-[502px] bg-[#FF9F02] text-black text-[24px] font-bold leading-[100%] tracking-[0%] "
                    style={{ top: '1429px', left: '14px', fontFamily: 'Arial' }}
                >
                    <div className="mt-5 text-center">
                        Aujourd’hui, 56% des familles urbaines veulent transmettre des valeurs éco-responsables fortes à leurs enfants.
                    </div>
                </div>

                <img src="/shapes/Group 24.png" alt="" className="absolute w-[306px] text-[16] h-[45px] top-[1841px] left-[44px]" />

                {/*  1 */}
                <img src="/shapes/Group 25.png" alt="" className="absolute w-[116.54px] text-[16] h-[116.54px] top-[1994px] left-[-9px]" />
                <p className="absolute w-[224px] text-[16] h-[84px] top-[2018px] left-[140px]" style={{ fontFamily: 'Arial' }} >Choisissez une activité manuelle avec votre enfant</p>


                {/*  2 */}
                <img src="/shapes/Group 26.png" alt="" className="absolute w-[116.54px] text-[16] h-[116.54px] top-[2204px] left-[286px]" />
                <p className="absolute w-[224px] text-[16] h-[84px] top-[2227px] left-[24px]" style={{ fontFamily: 'Arial' }} >Avec votre enfant, préparez  le matériel listé sur la carte d’activité</p>

                {/*  3 */}
                <img src="/shapes/Group 27.png" alt="" className="absolute w-[116.54px] text-[16] h-[116.54px] top-[2425px] left-[-21.01px]" />
                <p className="absolute w-[224px] text-[16] h-[84px] top-[2441px] left-[141px]" style={{ fontFamily: 'Arial' }} >Choisissez une activité manuelle avec votre enfant</p>


                <div
                    className="absolute w-[365px] h-[457px] border-[1.5px] rounded-[25px] bg-[#FCEAD1] text-black text-[24px] font-bold leading-[100%] tracking-[0%] "
                    style={{ top: '2739px', left: '14px', fontFamily: 'Arial' }}
                >
                    <div className="mt-5 text-center">
                        Obtenez dès maintenant notre nouveau Calendrier Vert.
                    </div>
                </div>


                <img src="/shapes/Group 28.png" alt="" className="absolute w-[306px] text-[16] h-[45px] top-[3115px] left-[44px]" />





            </header>





            {/* Bloc couleur */}
            <section className="absolute bg-[#99ABF4] w-[393px] h-[300px] border-[1.5px] top-[3220px] left-[0]" >

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


        </div>
    );
}