
import imagem from '../../../../public/assets/Services/imagem1.png'

export default function Services(){

    return (

        <section className="max-w-[1440px]">
            
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 mt-20">
                
                <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                    
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
                    
                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                        
                        <img 
                        role="presentation" 
                        className="w-full rounded h-44 " 
                        src="/assets/Services/imagem2.png" alt='Imagem sobre os serviços realizados' />
                        
                        <div className="p-6 space-y-2">
                            
                            <h3 className="text-2xl font-orelega">Regular cleaning</h3>
                
                            <p className='font-sen text-xl'>Tailored to your familys needs, our regular cleaning service keeps your home consistently fresh and welcoming.</p>
                        </div>

                    </a>

                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                        
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

                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                        
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?3" />
                        
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                            <span className="text-xs dark:text-gray-600">January 23, 2021</span>
                            <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                        </div>

                    </a>

                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
                        
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?4" />
                        
                        <div className="p-6 space-y-2">
                            
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                            <span className="text-xs dark:text-gray-600">January 24, 2021</span>
                            <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>

                        </div>
                    </a>

                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
                       
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?5" />
                       
                        <div className="p-6 space-y-2">
                            
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                            <span className="text-xs dark:text-gray-600">January 25, 2021</span>
                            <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>

                        </div>
                    </a>

                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
                        
                        <img role="presentation" className="object-cover w-full rounded h-44 
                        dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?6" />
                        
                        <div className="p-6 space-y-2">
                           
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                            <span className="text-xs dark:text-gray-600">January 26, 2021</span>
                            <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>

                        </div>
                    </a>
                </div>

                <div className="flex justify-center">
                    <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Load more posts...</button>
                </div>
            </div>

        </section>

    );

}