// pages/index.js
import Head from "next/head";

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
            <header className="fixed top-0 left-0 w-full h-[150px] bg-[#FFF2E9] z-50">
                <img
                    src="/shapes/Frame 100.png"
                    alt=""
                    className="absolute left-[22px] top-[71px] w-[52.27px] h-[38.32px]"
                />

                <nav className="absolute right-24 left-[325px] top-[71px] w-[16px] h-[12.5px]">
                    <div className="w-6 h-5 flex flex-col justify-between cursor-pointer group">
                        <span className="block h-0.5 bg-black transition-all duration-300 group-hover:scale-x-110"></span>
                        <span className="block h-0.5 bg-black transition-all duration-300 group-hover:scale-x-110"></span>
                        <span className="block h-0.5 bg-black transition-all duration-300 group-hover:scale-x-110"></span>
                    </div>
                </nav>

                <div className="absolute h-px w-full bg-[#00000033] top-[125px]"></div>
            </header>

            {/* Ajouter une marge en haut pour compenser le header fixé */}
            <main className="pt-[160px] px-5">
                <div className="w-[318px] h-[194px] font-black leading-[100%] text-[36px] font-Montserrat">
                    Bonjour  ,quelle activité veux-tu préparer aujourd’hui ?
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

                    <div className="flex justify-between bg-white p-1 rounded-full border border-gray-200 mb-4">
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

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum alias placeat aut, veniam unde inventore fugiat ea repellat impedit nulla sed corrupti, molestias iste deleniti dolores architecto ullam. Eum, voluptates.
                Molestiae velit iure cupiditate excepturi asperiores doloremque numquam eos obcaecati repudiandae? Minus quo dolorum laboriosam mollitia ex nostrum accusantium saepe iusto repellendus beatae, eius, accusamus suscipit ea nisi debitis quia?
                Cumque saepe quos eaque excepturi voluptatum quo similique perspiciatis ab voluptas libero nemo obcaecati sapiente culpa sequi alias eius ullam ipsum distinctio, repellendus quae placeat quod, nobis quam. Doloremque, id?
                Ducimus voluptas, officia adipisci deserunt unde animi cumque corporis atque magnam facere minima ratione molestias aliquid dignissimos quisquam harum assumenda eaque consequatur quaerat maxime reprehenderit quam! Animi odio maiores nihil!
                Culpa tenetur sapiente quam, distinctio, corrupti dicta perspiciatis sit quidem, ex inventore iste unde id totam. Fugiat ex dolore cumque corporis harum. Molestiae, aut enim necessitatibus ipsam neque architecto ducimus?
                Corporis quos aliquid cum tenetur dolores ullam ipsam, sapiente placeat tempore, dolore in magnam animi libero dolorum suscipit. Obcaecati eveniet repellendus rem, sequi repellat expedita explicabo cum nam esse sint?
                Aliquid rem adipisci corporis consequuntur amet suscipit, dignissimos officiis quia, nam sit commodi quos voluptas velit. Recusandae molestias voluptate corporis vero dolores ea, esse eveniet eaque repudiandae praesentium explicabo tempora!
                Nulla dolore sequi excepturi ullam sunt aliquid iure pariatur non. Eligendi, tempora est natus rem ullam nulla iusto ea a facere corrupti magni temporibus esse voluptatibus eveniet magnam eius placeat.
                Vel neque et aliquam dolorem voluptatum id dignissimos veniam laudantium commodi deserunt? Inventore cumque sit iure laborum, exercitationem harum amet magni quia architecto temporibus illo aperiam alias, quas laudantium voluptatem.
                Quidem quae quaerat iusto, rem distinctio veritatis enim tempora nobis temporibus consectetur corrupti odit exercitationem ab dolorem, doloribus perspiciatis maxime eaque voluptatem officia dolor doloremque unde. Id doloribus quas necessitatibus.
                Odio quae illo recusandae, explicabo eum consectetur? Deleniti facilis neque perspiciatis velit nisi saepe fugit. Dolore soluta voluptatem magnam, sapiente ex ut illo, eveniet iusto sit, perspiciatis facilis neque temporibus!
                Possimus eveniet hic nulla laudantium esse corporis recusandae iusto quisquam magni earum porro soluta distinctio facilis ad est, maxime laborum, beatae dignissimos! Amet dolore architecto minima adipisci quia temporibus explicabo!
                Molestias aperiam voluptatem est quaerat obcaecati, neque nostrum adipisci quidem quasi qui sed eos architecto cum mollitia cupiditate, eius quas odit nemo quibusdam at aliquam unde? Assumenda sunt voluptate qui.
                Iusto vel modi voluptates vero ullam inventore tempore cupiditate aspernatur saepe nam nulla consequuntur, suscipit explicabo fuga quia id possimus dicta perferendis aut quidem. Fugit dolorum debitis perspiciatis cupiditate ex!
                Aut nisi eligendi temporibus, quam perspiciatis sequi veniam provident. Tempora ea necessitatibus dicta iure, delectus omnis placeat voluptatum recusandae unde rerum maiores expedita eius deleniti consequatur voluptatibus, quasi ullam et.
                Amet tenetur quas mollitia, eligendi magni, illo nam eum numquam autem nostrum consequuntur! Perspiciatis possimus quidem mollitia omnis animi accusantium fugit dolore earum! Exercitationem facilis dolore, unde similique et eum!
                Reiciendis a inventore explicabo odit quia alias voluptate enim libero expedita, aspernatur omnis, animi aliquam quos architecto, eveniet unde. Soluta minus possimus eos quibusdam, fugit voluptatem eum itaque expedita ab.
                Eius, mollitia illum facere quod doloremque eos sunt veritatis expedita, deleniti molestias nisi, ea adipisci optio repudiandae libero laboriosam commodi consequatur. Amet sunt aspernatur officiis ad iusto ut dicta facere!
                Architecto accusantium, reprehenderit molestias ipsum facilis odio aspernatur voluptatibus! Vel beatae nam hic aliquam odio voluptatem a? Voluptatum explicabo ex, numquam harum quae earum, quos totam culpa porro ab odio.
                Nobis voluptas praesentium quia adipisci, voluptatibus autem impedit ullam illum aliquam pariatur optio assumenda veritatis facilis at nihil sit aliquid, harum quos architecto! Hic molestiae sapiente in exercitationem voluptate dolorum?

            </main>
        </div>
    );
}
