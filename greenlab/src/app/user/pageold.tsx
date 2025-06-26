"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <header className="h-[1317px] relative bg-white py-12 flex flex-col items-center">
        {/* Décorations SVG */}
        <Image src="/shapes/orange-dot.svg" alt="" width={56} height={92} className="absolute left-[10]" />
        <Image src="/shapes/yellow-square.svg" alt="" width={60} height={99} className="absolute left-[260]" />
        <Image src="/shapes/blue-square.svg" alt="" width={50} height={50} className="absolute left-0 top-316" />
        <Image src="/shapes/green-triangle.svg" alt="" width={120} height={120} className="absolute right-0 bottom-0" />
        <Image src="/shapes/red-circle.svg" alt="" width={30} height={30} className="absolute left-1/2 top-1/2 -translate-x-1/2" />

        {/* Logo & Titre */}
        <Image src="/logo-drole2lab.svg" alt="Logo Drôle2Lab" width={49} height={67.6} className="absolute top-[50px] left-[172px]" />
        <div className="font-black leading-[70px] absolute top-[155px] left-[29px] text-[74.59px] font-truculenta">
          Bricolo Recyclo Rigolo
        </div>

        <div className="absolute w-[350px] text-[16] h-[71px] top-[440px] left-[20px]">
          <a href="#">
            Des tutos <span className="underline">pour la famille</span>, à la maison et <span className="underline">pour la nature</span>.
          </a>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <div className="w-[177px] h-[50px] bg-[#e2e200] absolute top-[705px] left-[560px]" />
          <div className="w-[177px] h-[50px] bg-[#e2e2e2] absolute top-[705px] left-[774px]" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#ffeed8] py-16 flex flex-col items-center">
        <div className="w-[80px] h-[80px] bg-[#dadada] rounded mb-6" />
        <div className="w-[350px] h-[50px] bg-[#dadada] rounded mb-3" />
        <div className="w-[200px] h-2 bg-[#dadada] rounded mb-1" />
        <div className="w-[200px] h-2 bg-[#dadada] rounded mb-6" />
        <div className="flex justify-center items-end gap-8 mt-12">
          <div className="w-[460px] h-[300px] bg-white border-4 border-black rounded-lg shadow-lg" />
          <div className="w-[180px] h-[200px] bg-white border-2 border-black rounded-lg shadow" />
        </div>
      </section>

      {/* Section Cartes 1 */}
      <section className="bg-[#dbf7aa] py-16 flex flex-col items-center">
        <div className="w-[350px] h-[50px] bg-[#dadada] rounded mb-3" />
        <div className="w-[200px] h-2 bg-[#dadada] rounded mb-6" />
        <div className="grid grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-[170px] h-[250px] bg-white border-2 border-black rounded-lg" />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-6 mt-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-[170px] h-[250px] bg-white border-2 border-black rounded-lg" />
          ))}
        </div>
      </section>

      {/* Bloc couleur */}
      <section className="bg-[#a0b4fa] h-[300px]" />

      {/* Section Cartes 2 */}
      <section className="py-16 flex flex-col items-center">
        <div className="w-[350px] h-[50px] bg-[#dadada] rounded mb-3" />
        <div className="w-[200px] h-[30px] bg-[#dadada] rounded mb-6" />
        <div className="grid grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-[170px] h-[250px] bg-white border-2 border-black rounded-lg" />
          ))}
        </div>
      </section>
    </div>
  );
}