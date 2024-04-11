
import Image from "next/image";
import Link from "next/link";
import './style.css'

export  default function Testimonial(){

    return (

        <section className="bg-quinta px-3 md:px-10">
            
            <div className="container py-12 mx-auto">
                
                <div className="grid items-center gap-4 md:flex xl:grid-cols-5 ">
                    
                    <div className="max-w-2xl mx-auto my-8 space-y-4 xl:col-span-2 xl:text-left px-5 md:px-0">
                        
                        <h2 className="text-5xl md:text-6xl font-orelega mb-10 text-sexta text-[#47667B]">What our customers are saying about us</h2>
                        
                        <p className="text-sen text-xl">We encourage you to explore our customers' opinions in the feedback posts, where you can see how their valuable insights help us to continuously evolve and improve.</p>

                        <p className="text-sen text-xl pb-10">
                        If you're pleased with our services or even if you have suggestions for improvement, we encourage you to share your feedback with us. We're committed to continuously striving for excellence in serving you and ensuring the utmost care for your home.
                        </p>

                        <div className="flex justify-center">
                            
                            <Link 
                            href={"/FormFeedback"}
                            className="px-8 py-3 text-xl font-sen border rounded bg-white">Share your feedback
                            </Link>
                            
                        </div>

                    </div>

                    <div className="p-6 xl:col-span-3 ">
                        
                        <div className="grid gap-4 md:grid-cols-2">
                            
                            <div className="grid content-center gap-4">

                                
                                
                                <div className="p-6 rounded shadow-md bg-white">

                                    <div className="flex">
                                        <div className="rating">
                                            
                                            <input value="5" name="rate" id="star5" type="radio"/>
                                            <label htmlFor="star5" title="text"></label>

                                            <input value="4" name="rate" id="star4" type="radio"/>
                                            <label htmlFor="star4" title="text"></label>

                                            <input value="3" name="rate" id="star3" type="radio" />
                                            <label htmlFor="star3" title="text"></label>

                                            <input value="2" name="rate" id="star2" type="radio"/>
                                            <label htmlFor="star2" title="text"></label>

                                            <input value="1" name="rate" id="star1" type="radio"/>
                                            <label htmlFor="star1" title="text"></label>
    
                                        </div>
                                    </div>
                                    
                                    <p className="text-sen">I would like to congratulate everyone on the wonderful job done in my home. The cleaning was thorough, leaving the environment more pleasant and welcoming. I greatly appreciate the dedication and effort from all of you.</p>
                                    
                                    <div className="flex items-center mt-4 space-x-4">
                                        
                                        <Image 
                                        src="/assets/Testimonial/Imagem1.png" 
                                        alt="Imagem do persongem do feedback" 
                                        className="w-12 h-12 bg-center bg-cover rounded-full"
                                        width={200}
                                        height={200} />
                                        
                                        <div>
                                            
                                            <p className="text-lg font-orelega">Ana</p>
                         
                                        </div>  
                                    </div>
                                </div>

                                <div className="p-6 rounded shadow-md bg-white">

                                <div className="flex">
                                        <div className="rating">
                                            
                                            <input value="10" name="rate" id="star10" type="radio"/>
                                            <label htmlFor="star10" title="text"></label>

                                            <input value="9" name="rate" id="star9" type="radio"/>
                                            <label htmlFor="star9" title="text"></label>

                                            <input value="8" name="rate" id="star8" type="radio" />
                                            <label htmlFor="star8" title="text"></label>

                                            <input value="7" name="rate" id="star7" type="radio"/>
                                            <label htmlFor="star7" title="text"></label>

                                            <input value="6" name="rate" id="star6" type="radio"/>
                                            <label htmlFor="star6" title="text"></label>
    
                                        </div>
                                    </div>
                                    
                                    <p className="text-sen">The quality of the service was exceptional, and the professionalism of the team was something that really caught my attention. Everything was clean and organized beyond my expectations.</p>
                                    
                                    <div className="flex items-center mt-4 space-x-4">
                                        
                                        <Image 
                                        src="/assets/Testimonial/Imagem2.png" 
                                        alt="Imagem do personagem do feedback" 
                                        className="w-12 h-12 bg-center bg-cover rounded-full"
                                        width={100}
                                        height={100} />
                                        
                                        <div>
                                            
                                            <p className="text-lg font-orelega">Lucas</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid content-center gap-4">
                                
                                <div className="p-6 rounded shadow-md bg-white">

                                <div className="flex">
                                        <div className="rating">
                                            
                                            <input value="14" name="rate" id="star14" type="radio"/>
                                            <label htmlFor="star14" title="text"></label>

                                            <input value="13" name="rate" id="star13" type="radio"/>
                                            <label htmlFor="star13" title="text"></label>

                                            <input value="12" name="rate" id="star12" type="radio" />
                                            <label htmlFor="star12" title="text"></label>

                                            <input value="11" name="rate" id="star11" type="radio"/>
                                            <label htmlFor="star11" title="text"></label>
    
                                        </div>
                                    </div>
                                    
                                    <p className="text-sen">I would like to thank you for the service provided in my home. I was very satisfied with the overall result. The cleaning was done in a very efficient and swift manner. The team was extremely professional and courteous. Thank you very much for your attention, and until next time.</p>
                                    
                                    <div className="flex items-center mt-4 space-x-4">
                                        
                                        <Image 
                                        src="/assets/Testimonial/Imagem3.png" 
                                        alt="Imagem do personagem do feedback" 
                                        className="w-12 h-12 bg-center bg-cover rounded-full"
                                        width={100}
                                        height={100} />
                                        
                                        <div>
                                            
                                            <p className="text-lg font-orelega">Maria</p>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 rounded shadow-md bg-white">

                                <div className="flex">
                                        <div className="rating">
                                            
                                            <input value="19" name="rate" id="star19" type="radio"/>
                                            <label htmlFor="star19" title="text"></label>

                                            <input value="18" name="rate" id="star18" type="radio"/>
                                            <label htmlFor="star18" title="text"></label>

                                            <input value="17" name="rate" id="star17" type="radio" />
                                            <label htmlFor="star17" title="text"></label>

                                            <input value="16" name="rate" id="star16" type="radio"/>
                                            <label htmlFor="star16" title="text"></label>

                                            <input value="15" name="rate" id="star15" type="radio"/>
                                            <label htmlFor="star15" title="text"></label>
    
                                        </div>
                                    </div>
                                    
                                    <p className="text-sen">I want to express my gratitude for the excellent cleaning service provided at my residence. The team's dedication and attention to detail were remarkable. Every corner of the house was impeccable, which truly exceeded my expectations.</p>

                                    <div className="flex items-center mt-4 space-x-4">
                                        
                                        <Image 
                                        src="/assets/Testimonial/Imagem4.png" 
                                        alt="Imagem do personagem do feedback" 
                                        className="w-12 h-12 bg-center bg-cover rounded-full"
                                        width={100}
                                        height={100} />
                                        
                                        <div>
                                            
                                            <p className="text-lg font-orelega">João</p>
                   
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>

    );
}