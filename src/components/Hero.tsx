
export default function Hero() {
    return (
        <>
            <div className="fixed top-0 -z-999 w-full h-screen bg-[url(/hero-bg.jpg)] bg-center bg-no-repeat bg-cover bg-fixed ">
                <div className="w-full h-screen bg-gradient-to-tr from-blue-950/60 via-black/60 to-yellow-900/60"></div>
            </div>
            <div className="mr-auto place-self-center items-center flex flex-col justify-center pt-36">

                <img src="Hero-logo.png" alt="Modern Dev Logo" className="w-[75%] md:w-[55%] lg:w-[45%] xl:w-[35%]"/>

                <div className="flex flex-row pt-8 space-x-2 sm:space-x-5 md:space-x-10">
                    <a href="/about">
                        <button className="bg-white/80 text-black px-3 sm:px-5 py-2 rounded-full text-md sm:text-lg font-bold hover:bg-white transform hover:scale-[1.15] transition duration-200 ease-in-out">Learn More</button>
                    </a>

                    <a href="#">
                        <button className="bg-sky-950/80 text-white px-3 sm:px-5 py-2 rounded-full text-md sm:text-lg font-bold hover:bg-white hover:text-black transform hover:scale-[1.15] transition duration-200 ease-in-out">View Recent Projects</button>
                    </a>
                </div>
            </div>
        </>
    );
}