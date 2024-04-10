

export default function Services(){

    return (

        <section className="max-w-[1280px]">
            
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 mt-20">
                
                <a 
                rel="noopener noreferrer" 
                href="#"
                className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                    
                    <img 
                    src="/assets/Services/imagem1.png" 
                    alt="Imagem sobre serviço de limpeza" 
                    className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 " />
                    
                    <div className="p-6 space-y-2 lg:col-span-5">

                        <h3 className="text-6xl font-orelega mb-10">About our services</h3>
                        
                        <p className='font-sen text-xl'>Our services are fully customized to meet your needs, offering flexible scheduling and availability to suit your convenience. Request a no-obligation quote and discover how we can assist you in the best way possible.</p>
                        
                    </div>

                </a>

                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    
                    <a 
                    rel="noopener noreferrer" 
                    href="#" 
                    className="max-w-sm mx-auto">
                        
                        <img 
                        role="presentation" 
                        className="w-full rounded h-44 " 
                        src="/assets/Services/imagem2.png" alt='Imagem sobre os serviços realizados' />
                        
                        <div className="p-6 space-y-2">
                            
                            <h3 className="text-2xl font-orelega">Regular cleaning</h3>
                
                            <p className='font-sen text-xl'>Tailored to your familys needs, our regular cleaning service keeps your home consistently fresh and welcoming.</p>

                        </div>

                    </a>

                    <a 
                    rel="noopener noreferrer" 
                    href="#" 
                    className="max-w-sm mx-auto">
                        
                        <img 
                        role="presentation" 
                        className=" w-full rounded h-44" 
                        src="/assets/Services/imagem3.png" 
                        alt='Imagem sobre os serviços realizados' />
                        
                        <div className="p-6 space-y-2">
                            
                            <h3 className="text-2xl font-orelega ">Deep Cleaning</h3>
                            
                            <p className='font-sen text-xl'>Our comprehensive deep cleaning approach extends beyond commonly-touched surfaces to lesser-used areas and hard-to-reach spots.</p>

                        </div>
                    </a>

                    <a 
                    rel="noopener noreferrer" 
                    href="#" 
                    className="max-w-sm mx-auto">
                        
                        <img 
                        role="presentation" 
                        className="object-fit w-full rounded h-44" 
                        src="/assets/Services/imagem7.png" 
                        alt="Imagem do serviço realizado" />
                        
                        <div className="p-6 space-y-2">
                            
                            <h3 className="text-2xl font-orelega">Move-In & Move-Out</h3>
                            
                            <p className='font-sen text-xl'>Make your move smoother with Hutter Cleaning. We provide thorough cleaning for homes, apartments, and condos during move-ins and move-outs.</p>

                        </div>

                    </a>

                    <a 
                    rel="noopener noreferrer" 
                    href="#" 
                    className="max-w-sm mx-auto hidden sm:block">
                        
                        <img 
                        role="presentation" 
                        className="object-fit w-full rounded h-44 " 
                        src="/assets/Services/imagem5.png" 
                        alt="Imagem do serviço realizado" />
                        
                        <div className="p-6 space-y-2">
                            
                            <h3 className="text-2xl font-orelega">Commercial</h3>
                            
                            <p className='font-sen text-xl'>Ideal for property owners and hosts. Set your cleaning needs on autopilot with Hutter Cleaning.</p>

                        </div>
                    </a>

                    <a 
                    rel="noopener noreferrer" 
                    href="#" 
                    className="max-w-sm mx-auto">
                       
                        <img 
                        role="presentation" 
                        className="object-cover w-full rounded h-44 " 
                        src="/assets/Services/imagem4.png" 
                        alt="Imagem do serviço realizado"/>
                       
                        <div className="p-6 space-y-2">
                            
                            <h3 className="text-2xl font-orelega">Vacation Home</h3>
                            
                            <p className='font-sen text-xl'>Recognizing cleanliness as a top priority for travelers, we use a 4-step rental cleaning checklist to ensure a thorough clean, readying your vacation rental for new guests.</p>

                        </div>
                    </a>

                    <a 
                    rel="noopener noreferrer" 
                    href="#" 
                    className="max-w-sm mx-auto">
                        
                        <img 
                        role="presentation" 
                        className="object-cover w-full rounded h-44" 
                        src="/assets/Services/imagem6.png" 
                        alt="Imagem do serviço realizado" />
                        
                        <div className="p-6 space-y-2">
                           
                            <h3 className="text-2xl font-orelega">Event</h3>
                            
                            <p className='font-sen text-xl'>Hosting an event is tiring enough  let us handle the cleanup. We ll make sure your space is spotless for your next party or event.</p>

                        </div>
                    </a>
                </div>
            </div>

        </section>

    );

}