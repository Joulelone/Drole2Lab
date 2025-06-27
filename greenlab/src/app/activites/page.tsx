import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF2E9] font-montserrat">
      {/* Header */}
      <header className="w-full bg-[#E4F7B8] py-6 px-4 lg:px-24 flex justify-between items-center">
        <Image src="/shapes/Frame 100.png" alt="Logo" width={52} height={38} />

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-6 font-semibold text-black">
          <Link href="/">Accueil</Link>
          <Link href="/activites">Activités</Link>
          <Link href="/calendrier">Calendrier</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/profil">Profil</Link>
        </nav>

        {/* Mobile burger */}
        <div className="lg:hidden">
          <div className="w-6 h-5 flex flex-col justify-between cursor-pointer group">
            <span className="block h-0.5 bg-black"></span>
            <span className="block h-0.5 bg-black"></span>
            <span className="block h-0.5 bg-black"></span>
          </div>
        </div>

        {/* Desktop actions */}
        <div className="hidden lg:flex gap-2">
            <Link href="/login">
                <button className="border border-black px-4 py-1 rounded-full text-black cursor-pointer hover:translate-y-1">Se connecter</button>
            </Link>
            <Link href="/signup">
                <button className="bg-[#9BAEF6] text-white px-4 py-1 rounded-full cursor-pointer hover:translate-y-1">S&apos;inscrire</button>
            </Link>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-[1440px] mx-auto px-4 lg:px-24 py-10">
        {/* Titre d'intro */}
        <h1 className="text-2xl md:text-4xl font-bold text-center leading-snug text-black">
          Bonjour <span className="bg-[#FFC441] px-2 italic font-semibold text-black"></span>,
          <br /> quelle activité veux-tu préparer aujourd’hui ?
        </h1>

        {/* Catégories */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 justify-center text-black">
          {[
            { text: "Cuisine", color: "bg-[#9BAEF6]" },
            { text: "Déco", color: "bg-[#FFC441]" },
            { text: "Jardinage", color: "bg-[#D7F2AE]" },
            { text: "Arts plastiques", color: "bg-[#FBA7A7]" },
          ].map((cat, i) => (
            <button
              key={i}
              className={`py-6 rounded-xl font-bold text-lg ${cat.color} transition duration-200 cursor-pointer hover:translate-y-1`}
            >
              {cat.text}
            </button>
          ))}
        </div>

        {/* Filtres âge + recherche */}
        <div className="bg-[#FDF0E6] p-6 rounded-lg mt-10 max-w-md mx-auto shadow-sm">
          <p className="font-bold mb-3 text-black">Mes enfants ont :</p>
          <div className="flex justify-between gap-2 mb-4 text-black">
            {["4–6 ans", "6–10 ans", "10–14 ans"].map((age, idx) => (
              <label key={idx} className="w-full text-center cursor-pointer hover:translate-y-1">
                <input type="radio" name="age" className="hidden peer" defaultChecked={idx === 0} />
                <div className="peer-checked:bg-[#D7F2AE] bg-white px-4 py-2 rounded-full text-sm font-medium border border-[#EADCD1]">
                  {age}
                </div>
              </label>
            ))}
          </div>

          <input
            type="text"
            placeholder="Rechercher"
            className="w-full px-4 py-2 rounded-xl border border-[#EADCD1] bg-[#FDF0E6] text-sm placeholder-[#D5C7BC] outline-none"
          />
        </div>

        {/* Vignettes d'activités */}
        <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/shapes/image1.png"
                alt="Jardin"
                width={400}
                height={200}
                className="w-full object-cover h-48"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-black">Un Jardin tout rond…</h2>
                <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-4">
                  <span className="bg-[#D7F2AE] px-3 py-1 rounded-full text-black">30 min</span>
                  <span className="bg-[#D7F2AE] px-3 py-1 rounded-full text-black">8 ans</span>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Vous allez devoir réaliser un potager miniature avec des tubes en carton.
                  Amusez-vous et découvrez les joies du jardinage en famille.
                </p>
                <Link href={`/activite${i}`}>
                  <Image
                    src="/shapes/jemelance.png"
                    alt="Je me lance"
                    width={300}
                    height={45}
                    className="cursor-pointer hover:translate-y-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          ))}
        </section>
        </main>

        {/* Footer */}
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