import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
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
                <div className="w-[318px] h-[194px] font-black leading-[100%] text-[36px] font-Montserrat">
                    Bonjour <br /> quelle activité veux-tu préparer aujourd’hui ?
                </div>

                <div
                    className="absolute w-[103px] h-[61.48px] top-[140.47px] left-[180.82px] bg-cover bg-center"
                    style={{ backgroundImage: 'url("/shapes/Rectangle 6529.png")' }}
                >
                    <span
                        className="absolute font-bold font-Montserrat left-[100.82px] top-[20.47px] text-[36px] leading-[100%] tracking-[-0.015em]"
                    >
                        ,
                    </span>
                </div>

                {/* Cartes catégories */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                    {["Cuisine", "Déco", "Jardinage", "Arts plastiques"].map((item, index) => (
                        <div
                            key={index}
                            tabIndex={0}
                            className={`w-[172.76px] h-[107.39px] rounded-xl text-center text-black font-bold text-lg py-10 outline-none transition duration-200 focus:border-black focus:shadow-lg border-2 border-transparent ${index === 0 ? "bg-[#9BAEF6]" : index === 1 ? "bg-[#FFC441]" : index === 2 ? "bg-[#D7F2AE]" : "bg-[#FBA7A7]"}`}
                        >
                            {item}
                        </div>
                    ))}
                </div>

                {/* Choix âge + barre de recherche */}
                <div className="bg-[#FDF0E6] p-3 rounded-lg w-[353px] font-[Montserrat] mt-6">
                    <p className="font-bold mb-3">Mes enfants ont :</p>
                    <div className="flex justify-between p-1 rounded-full border border-gray-200 mb-4">
                        {["4–6 ans", "6–10 ans", "10–14 ans"].map((age, idx) => (
                            <label key={idx} className="w-full text-center cursor-pointer">
                                <input type="radio" name="age" className="hidden peer" defaultChecked={idx === 0} />
                                <div className="peer-checked:bg-[#D7F2AE] px-4 py-2 rounded-full text-sm font-medium text-black transition">
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
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg mt-8">
                        <Image
                            className="w-full h-48 object-cover"
                            src="/shapes/image1.png"
                            alt="Jardin"
                            width={400}
                            height={200}
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Un Jardin tout rond...</h2>
                            <div className="flex justify-between text-sm text-gray-600 mb-4">
                                <div className="flex items-center space-x-2">
                                    <div className="flex items-center bg-[#D7F2AE] py-2 font-medium text-black rounded-full px-4">
                                        <Image src="/shapes/Group 46.png" alt="Montre" width={16} height={16} className="mr-1" />
                                        30 min
                                    </div>
                                    <span className="bg-[#D7F2AE] py-2 font-medium text-black rounded-full px-4">8 ans</span>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-4">
                                Vous allez devoir réaliser un potager miniature avec des tubes en carton.
                                Amusez-vous et découvrez les joies du jardinage en famille.
                            </p>
                            <Link href={`/activite${i}`}>
                                <Image
                                    className="w-[300px] h-[45px] transition-transform duration-300 transform hover:translate-y-1 cursor-pointer"
                                    src="/shapes/jemelance.png"
                                    alt="Je me lance"
                                    width={300}
                                    height={45}
                                />
                            </Link>
                        </div>
                    </div>
                ))}

                {/* Footer */}
                <section className="bg-[#99ABF4] w-full h-[300px] mt-16 text-white text-center py-8">
                    <h2 className="text-2xl font-bold">Contact</h2>
                    <p>contact@drole2lab.com</p>
                    <p>07 82 23 77 57</p>

                    <h2 className="text-xl font-semibold mt-5">À propos</h2>
                    <ul className="mt-2 space-y-1">
                        <li>Conditions générales</li>
                        <li>Mentions légales</li>
                        <li>Gérer mes préférences</li>
                        <li>Cookies</li>
                    </ul>
                </section>
            </main>
        </div>
    );
}
