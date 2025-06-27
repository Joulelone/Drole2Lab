'use client';

import Image from 'next/image';
import Header from '@/components/Header'

export default function Activite4() {
  const materiel = [
    { img: 'Vector1.png', label: 'Arrosage' },
    { img: 'Vector2.png', label: 'Terreau' },
    { img: 'Vector3.png', label: 'Graine' },
    { img: 'Vector4.png', label: 'Perceuse' },
    { img: 'Vector5.png', label: 'Tube' },
    { img: 'Vector6.png', label: 'Équerre' },
    { img: 'Vector7.png', label: 'Planche de bois' },
    { img: 'Vector8.png', label: 'Gravier' },
  ];

  const etapes = [
    {
      title: 'Préparation des tubes',
      desc: "Nettoyez soigneusement vos tubes de récupération. Percez des trous de drainage tous les 20 cm sur la face inférieure (diamètre 5-8 mm). Si vous utilisez des gouttières, vérifiez qu'elles sont bien étanches aux extrémités.",
    },
    {
      title: 'Installation du support',
      desc: "Fixez solidement vos supports muraux ou créez une structure autoportante avec les planches de récupération. Prévoyez une légère inclinaison (2-3°) pour faciliter l'évacuation de l'eau excédentaire",
    },
    {
      title: 'Mise en place des tubes',
      desc: "Installez vos tubes sur les supports en vérifiant leur stabilité. L'espacement entre chaque niveau doit permettre le développement des plantes (minimum 25 cm).",
    },
    {
      title: 'Préparation du substrat',
      desc: "Disposez une couche de drainage (billes d'argile ou graviers) sur 3-4 cm au fond de chaque tube. Remplissez ensuite avec le terreau en laissant 2 cm de rebord.",
    },
    {
      title: 'Plantation',
      desc: "Semez directement vos graines ou repiquez vos plants en respectant les distances de plantation. Privilégiez les variétés à développement compact et à croissance rapide.",
    },
    {
      title: 'Arrosage et entretien',
      desc: "Arrosez régulièrement mais sans excès. L'avantage du système : l'eau s'évacue naturellement vers le tube inférieur, optimisant l'utilisation de chaque goutte. Récoltez au fur et à mesure et renouvelez vos plantations.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FFF2E9] text-black font-sans">
      {/* Header */}
      <Header />
      {/* MAIN */}
      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold mb-4">Un jardin tout rond</h1>

          <Image
            src="/shapes/image1.png"
            alt="Jardin"
            width={640}
            height={360}
            className="rounded-lg mb-6 w-full max-w-lg"
          />

          <p className="mb-8">
            Créez un potager vertical original et écologique en détournant tubes,
            gouttières ou tuyaux de leur usage initial. Cultivez même dans les
            petits espaces urbains en donnant une seconde vie à des matériaux
            destinés au rebut.
          </p>

          <h2 className="text-xl font-semibold mb-4">MATÉRIEL :</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {materiel.map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#D7F2AE] flex items-center justify-center">
                  <Image
                    src={`/shapes/${item.img}`}
                    alt={item.label}
                    width={32}
                    height={32}
                  />
                </div>
                <p className="mt-2 text-sm text-center">{item.label}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold mb-4">ÉTAPES :</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {etapes.map((etape, i) => (
              <div
                key={i}
                className="bg-[#D7F2AE] rounded-lg p-4 text-sm shadow-md relative"
              >
                <h3 className="font-bold mb-2">{etape.title}</h3>
                <p>{etape.desc}</p>
                <span className="absolute top-2 right-2 text-xs border border-black rounded-full px-2 py-0.5 bg-[#F2F2F2] text-black">
                  ÉTAPE {i + 1}
                </span>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold mb-2">Les conseils bonus :</h2>
          <p className="mb-16 text-sm">
            Installez votre jardin rond côté est ou sud-est pour bénéficier du
            soleil matinal tout en évitant les fortes chaleurs de l’après-midi
            qui dessèchent rapidement les substrats en hauteur.
          </p>
        </div>
      </main>

      {/* FOOTER — PLACÉ HORS DU MAIN */}
      <footer className="w-full bg-[#9BAEF6] px-4 lg:px-24 py-10 text-white mt-auto">
              <div className="flex flex-col">
                {/* Logo et contact */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div className="flex flex-col gap-2">
                      <Image src="/logo-drole2lab.svg" alt="Logo" width={100} height={40} />
                  </div>
                  <div className="text-sm">
                    <span>contact@drole2lab.com</span>
                    <span className="ml-4">tel : 07 82 23 77 57</span>
                  </div>
                </div>
      
                {/* Ligne de séparation */}
                <hr className="border-t border-white opacity-30 mb-4" />
      
                {/* Liens légaux */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm">
                  <span className="cursor-pointer hover:underline">Mentions légales</span>
                  <span className="cursor-pointer hover:underline">Conditions générales</span>
                  <span className="cursor-pointer hover:underline">Cookies</span>
                </div>
              </div>
            </footer>
    </div>
  );
}
