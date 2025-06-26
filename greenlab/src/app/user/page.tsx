"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="max-h-[470px] bg-black">
      <header className="h-[3381px] bg-white">
        {/* Décorations SVG */}
        <Image src="/shapes/Frame 2.png" alt="" width={70} height={70} className="absolute left-[12px] top-[14px]" />
        <Image src="/shapes/yellow-square.svg" alt="" width={60} height={60} className="absolute left-[325px] top-[57px]" />
        <Image src="/shapes/blue-square.svg" alt="" width={50} height={50} className="absolute left-[2.23px] top-[316px]" />
        <Image src="/shapes/Polygon 1.png" alt="" width={50} height={50} className="absolute left-[333px] top-[649.82px]" />
        <Image src="/shapes/Ellipse 8.png" alt="" width={30} height={30} className="absolute left-[334px] top-[460.82px]" />

        {/* Logo & Titre */}
        <Image src="/logo-drole2lab.svg" alt="Logo Drôle2Lab" width={49} height={67.6} className="absolute left-[172px] top-[50px]" />
        <div className="w-[259px] font-black leading-[60px] absolute top-[155px] left-[29px] text-[74.59px] font-truculenta">
          Bricolo Recyclo Rigolo
        </div>

        <div className="absolute w-[350px] h-[71px] top-[440px] left-[34px] text-[16px]">
          Des tutos <span className="underline">pour la famille</span>, à la maison
          <span className="block">
            et <span className="underline">pour la nature</span>.
          </span>
        </div>

        <Image src="/shapes/Group 19.png" alt="" width={142} height={104} className="absolute top-[566px] left-[124px]" />
        <Image src="/shapes/Star 2.png" alt="" width={89} height={89} className="absolute top-[706px] left-[33.4px]" />

        <Image src="/shapes/Frame 71.png" alt="" width={197} height={199} className="absolute top-[781px] left-[-1px]" />
        <Image src="/shapes/Frame 73.png" alt="" width={197} height={197} className="absolute top-[980px] left-[-1px]" />
        <Image src="/shapes/Frame 1.png" alt="" width={197} height={199} className="absolute top-[781px] left-[198px]" />
        <Image src="/shapes/Frame 72.png" alt="" width={197} height={197} className="absolute top-[980px] left-[198px]" />

        <p className="font-montserrat font-extrabold text-[153.35px] leading-tight text-center absolute"
           style={{ width: "334px", height: "187px", top: "1227px", left: "29px" }}>
          56%
        </p>

        <div className="absolute w-[365px] h-[502px] bg-[#FF9F02] text-black text-[24px] font-bold rounded-[25px] border-[1.5px]"
             style={{ top: "1429px", left: "14px", fontFamily: "Arial" }}>
          <div className="mt-5 text-center">
            Aujourd&#39;hui, 56% des familles urbaines veulent transmettre des valeurs éco-responsables fortes à leurs enfants.
          </div>
        </div>

        <Image src="/shapes/Group 24.png" alt="" width={306} height={45} className="absolute top-[1841px] left-[44px]" />

        {/* Étapes */}
        <Image src="/shapes/Group 25.png" alt="" width={116} height={116} className="absolute top-[1994px] left-[-9px]" />
        <p className="absolute w-[224px] h-[84px] top-[2018px] left-[140px]" style={{ fontFamily: "Arial" }}>
          Choisissez une activité manuelle avec votre enfant
        </p>

        <Image src="/shapes/Group 26.png" alt="" width={116} height={116} className="absolute top-[2204px] left-[286px]" />
        <p className="absolute w-[224px] h-[84px] top-[2227px] left-[24px]" style={{ fontFamily: "Arial" }}>
          Avec votre enfant, préparez le matériel listé sur la carte d&#39;activité
        </p>

        <Image src="/shapes/Group 27.png" alt="" width={116} height={116} className="absolute top-[2425px] left-[-21.01px]" />
        <p className="absolute w-[224px] h-[84px] top-[2441px] left-[141px]" style={{ fontFamily: "Arial" }}>
          Choisissez une activité manuelle avec votre enfant
        </p>

        <div className="absolute w-[365px] h-[457px] bg-[#FCEAD1] text-black text-[24px] font-bold rounded-[25px] border-[1.5px]"
             style={{ top: "2739px", left: "14px", fontFamily: "Arial" }}>
          <div className="mt-5 text-center">
            Obtenez dès maintenant notre nouveau Calendrier Vert.
          </div>
        </div>

        <Image src="/shapes/Group 28.png" alt="" width={306} height={45} className="absolute top-[3115px] left-[44px]" />
      </header>

      <section className="absolute bg-[#99ABF4] w-[393px] h-[300px] border-[1.5px] top-[3220px] left-[0]">
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
    </div>
  );
}