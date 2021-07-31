import {useState} from "react";

const NinjaFood = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="text-gray-600 font-body grid md:grid-cols-3">
            <div className="md:col-span-1 md:flex md:justify-end">
                <nav className="text-right">
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                            <a href="/" className="hover:text-gray-700">
                                Food Ninja
                            </a>
                        </h1>
                        <div className="px-4 cursor-pointer md:hidden" onClick={toggleMenu}>
                            <svg className="w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                    </div>
                    <ul className={`text-sm mt-6 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                        <li className="text-gray-700 font-bold py-1">
                            <a href="#" className="px-4 flex justify-end border-r-4 border-primary">
                                <span>Home</span>
                                <svg className="w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                                </svg>
                            </a>
                        </li>
                        <li className="py-1">
                            <a href="#" className="px-4 flex justify-end border-r-4 border-white">
                                <span>About</span>
                                <svg className="w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </a>
                        </li>
                        <li className="py-1">
                            <a href="#" className="px-4 flex justify-end border-r-4 border-white">
                                <span>Contact</span>
                                <svg className="w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <main className="px-16 py-6 bg-gray-100 md:col-span-2">
                <div className="flex justify-center md:justify-end">
                    <a href="#"
                       className="text-primary btn border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">
                        Log in
                    </a>
                    <a href="#"
                       className="text-primary ml-2 btn border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">
                        Sign up
                    </a>
                </div>

                <header>
                    <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
                    <h3 className="text-2xl font-semibold">For Ninjas</h3>
                </header>

                <div>
                    <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>

                    <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/*cards go here*/}
                        <div className="card">
                            <img
                                src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/08/20/0/FNM_100120-Ultimate-Beef-Stew_s4x3.jpg.rend.hgtvcom.616.462.suffix/1597931275143.jpeg"
                                alt="stew"
                                className="w-full h-32 sm:h-48 object-cover"
                            />
                            <div className="m-4">
                                <span className="font-bold">5 Bean Chili Stew</span>
                                <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                            </div>
                            <div className="badge">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span className="ml-1">25 mins</span>
                            </div>
                        </div>

                        <div className="card">
                            <img
                                src="https://images.ctfassets.net/u41cm62nxtp7/1X7I7hBosk4mmWYMkCm8kQ/ff4eebb87ac9ece25e2b234279040e14/veggienoodles.jpg"
                                alt="noodles"
                                className="w-full h-32 sm:h-48 object-cover"
                            />
                            <div className="m-4">
                                <span className="font-bold">Veggie Noodles</span>
                                <span className="block text-gray-500 text-sm">Recipe by Luigi</span>
                            </div>
                            <div className="badge">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span className="ml-1">25 mins</span>
                            </div>
                        </div>

                        <div className="card">
                            <img
                                src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/113777-0b21d44.jpg?quality=90&resize=400%2C363"
                                alt="curry"
                                className="w-full h-32 sm:h-48 object-cover"
                            />
                            <div className="m-4">
                                <span className="font-bold">Tofu Curry</span>
                                <span className="block text-gray-500 text-sm">Recipe by Peach</span>
                            </div>
                            <div className="badge">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span className="ml-1">25 mins</span>
                            </div>
                        </div>
                    </div>

                    <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>

                    <div className="mt-8">
                        {/*cards go here*/}
                    </div>
                </div>

                <div className="flex justify-center">
                    <div
                        className="bg-secondary-100 text-secondary-200 btn hover:shadow-inner
                        transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
                        Load more
                    </div>
                </div>
            </main>
        </div>
    );
};

export default NinjaFood;