
import Link from "next/link";

export default function Footer(){

    return(

        <footer className="p-10 bg-quarta">
            
            <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
                
                <div className="flex flex-col space-y-4">
                    
                    <h2 className="font-orelega text-lg">About our company</h2>
                    
                    <div className="flex flex-col space-y-2 text-sm">
                        
                        <Link rel="noopener noreferrer" href="/About">About</Link>
                        <Link rel="noopener noreferrer" href="/FormQuote">Request a quote</Link>
                        <Link rel="noopener noreferrer" href="#">Região de atendimento</Link>
                        <Link rel="noopener noreferrer" href="/Service">Serviços</Link>
                        <Link rel="noopener noreferrer" href="#">Horário de atendimento</Link>

                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    
                    <h2 className="font-orelega text-lg">Services</h2>
                    
                    <div className="flex flex-col space-y-2 text-sm">
                        
                        <p>Regular cleaning</p>
                        <p>Deep Cleaning</p>
                        <p>Move-in & Move-out</p>
                        <p>Commerial</p>
                        <p>Vacation Home</p>
                        <p>Event</p>
                   
                    </div>
                </div>

                <div className="flex flex-col space-y-4">
                    
                    <h2 className="font-orelega text-lg">Contact</h2>
                    
                    <div className="flex flex-col space-y-2 text-sm">
                        
                        <a rel="noopener noreferrer" href="#">Call</a>
                        <a rel="noopener noreferrer" href="#">Message</a>
                        <a rel="noopener noreferrer" href="#">E-mail</a>

                    </div>
                </div>

                <div className="flex flex-col space-y-4">
                    
                    <h2 className="font-medium text-lg">Social Media</h2>
                    
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
                        
                        <a rel="noopener noreferrer" href="#">Instagram</a>
                        <a rel="noopener noreferrer" href="#">Facebook</a>

                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center px-6 pt-12 text-sm">
                
                <span className="text-center">© Copyright 2024. Hutter Cleaning All Rights Reserved.</span>

            </div>

        </footer>
    );
}