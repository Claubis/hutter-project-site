
import Link from "next/link";

export default function Footer(){

    return(

        <footer className="p-10 bg-quarta">
            
            <div className="flex flex-col gap-10 md:grid md:grid-cols-4 justify-center md:text-center">
                
                <div className="flex flex-col space-y-4">
                    
                    <h2 className="font-orelega text-3xl md:text-xl lg:text-2xl">About our company</h2>
                    
                    <div className="flex flex-col space-y-2 text-xl font-sen">
                        
                        <Link rel="noopener noreferrer" href="/About">About</Link>
                        <Link rel="noopener noreferrer" href="/FormQuote">Request a quote</Link>
                        <Link rel="noopener noreferrer" href="#">Service area</Link>
                        <Link rel="noopener noreferrer" href="/Service">Services</Link>
                        <Link rel="noopener noreferrer" href="#">Business hours</Link>

                    </div>
                </div>

                <div className="flex flex-col space-y-4">
                    
                    <h2 className="font-orelega text-3xl md:text-xl lg:text-2xl">Services</h2>
                    
                    <div className="flex flex-col space-y-2 text-xl font-sen">
                        
                        <p>Regular cleaning</p>
                        <p>Deep Cleaning</p>
                        <p>Move-in & Move-out</p>
                        <p>Commerial</p>
                        <p>Vacation Home</p>
                        <p>Event</p>
                   
                    </div>
                </div>

                <div className="flex flex-col space-y-4">
                    
                    <h2 className="font-orelega text-3xl md:text-xl lg:text-2xl">Contact</h2>
                    
                    <div className="flex flex-col space-y-2 text-xl font-sen">
                        
                        <a rel="noopener noreferrer" href="#">Call</a>
                        <a rel="noopener noreferrer" href="#">Message</a>
                        <a rel="noopener noreferrer" href="#">E-mail</a>

                    </div>
                </div>

                <div className="flex flex-col space-y-4">
                    
                    <h2 className="font-orelega text-3xl md:text-xl lg:text-2xl">Social Media</h2>
                    
                    <div className="flex flex-col space-y-2 text-xl font-sen">
                        
                        <a rel="noopener noreferrer" href="#">Instagram</a>
                        <a rel="noopener noreferrer" href="#">Facebook</a>

                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center px-6 pt-12 text-sm font-sen">
                
                <span className="text-center">© Copyright 2024. Hutter Cleaning All Rights Reserved.</span>

            </div>

        </footer>
    );
}