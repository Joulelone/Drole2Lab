// pages/index.js
import Head from "next/head";
import Link from 'next/link';

export default function Home() {
    return (
        <div className="min-h-screen bg-[#FFF2E9] relative">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat"
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
                <div className="w-[318px] h-[194px] font-black leading-[100%] text-[36px] font-Montserrat">
                    Bonjour <br></br> quelle activité veux-tu préparer aujourd’hui ?
                </div>


                <div
                    className="absolute w-[103px] h-[61.48px] top-[140.47px] left-[180.82px] bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("/shapes/Rectangle 6529.png")'
                    }}
                >
                    <span
                        className="absolute font-bold  font-Montserrat left-[100.82px]  top-[20.47px] text-[36px] leading-[100%] tracking-[-0.015em]"

                    > ,
                    </span> 
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                    <div
                        tabIndex={0}
                        className="bg-[#9BAEF6] w-[172.76px] h-[107.39px] rounded-xl text-center text-black font-bold text-lg py-10 outline-none transition duration-200 focus:border-black focus:shadow-lg border-2 border-transparent"
                    >
                        Cuisine
                    </div>

                    <div
                        tabIndex={0}
                        className="bg-[#FFC441] w-[172.76px] h-[107.39px] rounded-[11.21px] border-[1.4px] border-black text-center text-black font-bold text-lg flex items-center justify-center outline-none transition duration-200 focus:border-black focus:shadow-lg border-2 border-transparent"
                    >
                        Déco
                    </div>

                    <div
                        tabIndex={0}
                        className="bg-[#D7F2AE] h-[107.39px] w-[172.76px] rounded-xl border-[1.4px] border-black shadow text-center text-black font-bold text-lg py-10 outline-none transition duration-200 focus:border-black focus:shadow-lg border-2 border-transparent"
                    >
                        Jardinage
                    </div>

                    <div
                        tabIndex={0}
                        className="bg-[#FBA7A7] h-[107.39px] w-[172.76px] rounded-xl border-[1.4px] border-black shadow text-center text-black font-bold text-lg py-10 outline-none transition duration-200 focus:border-black focus:shadow-lg border-2 border-transparent"
                    >
                        Arts plastiques
                    </div>
                </div>

                <div className="bg-[#FDF0E6] p-3 rounded-lg w-[353px] font-[Montserrat]">
                    <p className="font-bold mb-3">Mes enfants ont :</p>

                    <div className="flex justify-between  p-1 rounded-full border border-gray-200 mb-4">
                        {/* Tab 4-6 ans */}
                        <label className="w-full text-center cursor-pointer">
                            <input type="radio" name="age" className="hidden peer" defaultChecked />
                            <div className="peer-checked:bg-[#D7F2AE] px-4 py-2 rounded-full text-sm font-medium text-black transition">
                                4–6 ans
                            </div>
                        </label>

                        {/* Tab 6-10 ans */}
                        <label className="w-full text-center cursor-pointer">
                            <input type="radio" name="age" className="hidden peer" />
                            <div className="peer-checked:bg-[#D7F2AE] px-4 py-2 rounded-full text-sm font-medium text-black transition">
                                6–10 ans
                            </div>
                        </label>

                        {/* Tab 10-14 ans */}
                        <label className="w-full text-center cursor-pointer">
                            <input type="radio" name="age" className="hidden peer" />
                            <div className="peer-checked:bg-[#D7F2AE] px-4 py-2 rounded-full text-sm font-medium text-black transition">
                                10–14 ans
                            </div>
                        </label>
                    </div>

                    <input
                        type="text"
                        placeholder="Rechercher"
                        className="w-full px-4 py-2 rounded-xl border border-[#EADCD1] bg-[#FDF0E6] text-sm placeholder-[#D5C7BC] outline-none"
                    />
                </div>

                <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
                    <img className="w-full h-48 object-cover" src="/shapes/image1.png" alt="Jardin" />
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">Un Jardin tout rond...</h2>
                        <div className="flex justify-between text-sm text-gray-600 mb-4">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input type="radio" className="hidden peer" defaultChecked />
                                <div className="flex items-center bg-[#D7F2AE] py-2 font-medium text-black rounded-full px-4">
                                    <img src="/shapes/Group 46.png" alt="Montre" className="mr-1" />
                                    30 min
                                </div>
                                <span className="bg-[#D7F2AE] py-2 font-medium text-black rounded-full px-4">
                                    8 ans
                                </span>
                            </label>
                        </div>
                        <p className="text-gray-700 mb-4">
                            Vous allez devoir réaliser un potager miniature avec des tubes en carton.
                            Amusez-vous et découvrez les joies du jardinage en famille.
                        </p>

                        <Link href="/activite1">
                            <img className="w-[300px] h-[45px] transition-transform duration-300 transform hover:translate-y-1 cursor-pointer" src="/shapes/jemelance.png" alt="Je me lance" />
                        </Link>
                    </div>
                </div>

                <br></br>


                <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
                    <img className="w-full h-48 object-cover" src="/shapes/image1.png" alt="Jardin" />
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">Un Jardin tout rond...</h2>
                        <div className="flex justify-between text-sm text-gray-600 mb-4">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input type="radio" className="hidden peer" defaultChecked />
                                <div className="flex items-center bg-[#D7F2AE] py-2 font-medium text-black rounded-full px-4">
                                    <img src="/shapes/Group 46.png" alt="Montre" className="mr-1" />
                                    30 min
                                </div>
                                <span className="bg-[#D7F2AE] py-2 font-medium text-black rounded-full px-4">
                                    8 ans
                                </span>
                            </label>
                        </div>
                        <p className="text-gray-700 mb-4">
                            Vous allez devoir réaliser un potager miniature avec des tubes en carton.
                            Amusez-vous et découvrez les joies du jardinage en famille.
                        </p>


                        <Link href="/activite2">
                            <img className="w-[300px] h-[45px] transition-transform duration-300 transform hover:translate-y-1 cursor-pointer" src="/shapes/jemelance.png" alt="Je me lance" />
                        </Link>
                    </div>
                </div>

                <br></br><br />

<div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
    <img className="w-full h-48 object-cover" src="/shapes/image1.png" alt="Jardin" />
    <div className="p-4">
        <h2 className="text-xl font-bold mb-2">Un Jardin tout rond...</h2>
        <div className="flex justify-between text-sm text-gray-600 mb-4">
            <label className="flex items-center space-x-2 cursor-pointer">
                <input type="radio" className="hidden peer" defaultChecked />
                <div className="flex items-center bg-[#D7F2AE] py-2 font-medium text-black rounded-full px-4">
                    <img src="/shapes/Group 46.png" alt="Montre" className="mr-1" />
                    30 min
                </div>
                <span className="bg-[#D7F2AE] py-2 font-medium text-black rounded-full px-4">
                    8 ans
                </span>
            </label>
        </div>
        <p className="text-gray-700 mb-4">
            Vous allez devoir réaliser un potager miniature avec des tubes en carton.
            Amusez-vous et découvrez les joies du jardinage en famille.
        </p>

        <Link href="/activite3">
            <img className="w-[300px] h-[45px] transition-transform duration-300 transform hover:translate-y-1 cursor-pointer" src="/shapes/jemelance.png" alt="Je me lance" />
        </Link>
    </div>
</div>



<div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg   h-[550px] bg-[#FFF2E9]">
    <img className="w-full h-48 object-cover" src="/shapes/image1.png" alt="Jardin" />
    <div className="p-4">
        <h2 className="text-xl font-bold mb-2">Un Jardin tout rond...</h2>
        <div className="flex justify-between text-sm text-gray-600 mb-4">
            <label className="flex items-center space-x-2 cursor-pointer">
                <input type="radio" className="hidden peer" defaultChecked />
                <div className="flex items-center bg-[#D7F2AE] py-2 font-medium text-black rounded-full px-4">
                    <img src="/shapes/Group 46.png" alt="Montre" className="mr-1" />
                    30 min
                </div>
                <span className="bg-[#D7F2AE] py-2 font-medium text-black rounded-full px-4">
                    8 ans
                </span>
            </label>
        </div>
        <p className="text-gray-700 mb-4">
            Vous allez devoir réaliser un potager miniature avec des tubes en carton.
            Amusez-vous et découvrez les joies du jardinage en famille.
        </p>

        <Link href="/activite4">
            <img className="w-[300px] h-[45px] transition-transform duration-300 transform hover:translate-y-1 cursor-pointer" src="/shapes/jemelance.png" alt="Je me lance" />
        </Link>
    </div>
    
</div>{/* Bloc couleur */}<br /><br /><br /><br />
<section className="absolute bg-[#99ABF4] w-full h-[300px] top-[2800px] left-[0]">
    
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

<br />


            </main>
        </div>
    );
}
