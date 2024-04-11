'use client'

import Image from "next/image";


export default function Contact(){

    
    return(

        <section className="bg-primeira">
	
            <div className="mx-auto grid justify-center items-center gap-10 md:flex">
                
                <div className="w-full px-6 py-16 md:w-[50%]">
                    
                    <div className="grid gap-10 mb-10">

                        <span className="block mb-2 text-white font-sen">Simple contact</span>
                        
                        <h1 className="text-5xl font-orelega text-white">Fill out the form and we will get in touch with you</h1>

                    </div>

                    <div>

                        <form 
                        name="form-contact"
                        method="post"
                        data-netlify="true"
                        className="self-stretch space-y-3"
                        >

                        <input type="hidden" name="form-contact" value="contact"/>
                            
                            <div className="bg-white rounded-md">
                                
                                <label htmlFor="name" className="text-sm sr-only">Your name</label>
                                
                                <input 
                                name="name"
                                id="name" 
                                type="text" 
                                placeholder="Your name" 
                                className="w-full rounded-md p-5"
                                autoComplete="name" />

                            </div>

                            <div className="bg-white rounded-md">
                                
                                <label htmlFor="phone" className="text-sm sr-only">Phone number</label>
                                
                                <input 
                                name="phone"
                                id="phone" 
                                type="number" 
                                placeholder="Phone 
                                number" 
                                className="w-full rounded-md focus:ring p-5"
                                autoComplete="phone" />

                            </div>

                            <div className="flex justify-center">
                                <button type="submit" className="w-[50%] py-2 font-sen rounded bg-white text-xl ">Submit</button>
                            </div>

                        </form>

                    </div>

                </div>
                
                <div className="flex justify-center mb-20 md:mb-0">

                    <Image 
                    src="/assets/Contact/Imagem3.png" 
                    alt="Imagem sobre contato" 
                    className="object-cover rounded-md w-auto h-auto"
                    width={300}
                    height={0}
                    priority  />

                </div>

            </div>

        </section>

    );
}