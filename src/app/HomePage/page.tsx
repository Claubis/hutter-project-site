

export default function HomePage() {

    return (

        <section>

            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    
                    <h1 className="text-6xl font-orelega leading-none"> Trust
                        <span className="dark:text-violet-600"> builds</span> bridges
                    </h1>

                    <p className="mt-6 mb-8 text-lg sm:mb-12 font-sen">Trust us for a home that is not only clean, 
                        <br  className="hidden md:inline lg:hidden"/> but also a pleasure to live in.
                    </p>

                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded">Contact us</a>

                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded">Request a Quote</a>
                    </div>

                </div>

                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">

                    <img src="/assets/HomePage/logo.png" alt="Logo da empresa" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />

                </div>

                

            </div>

        </section>

    );
}