
import Link from "next/link";

/* Instalar npm install @fortawesome/fontawesome-free
 */
import '@fortawesome/fontawesome-free/css/all.min.css';


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
                    
                    <div className="flex flex-col space-y-2 text-xl font-sen gap-5">
                        
                        <a className="flex justify-start md:justify-center font-sen text-sm" rel="noopener noreferrer" href="tel:+4259849284"><i className="fa-solid fa-phone">(425) 984.9284</i></a>

                        <a className="flex justify-start md:justify-center font-sen text-sm" rel="noopener noreferrer" href="sms:+4259849284"><i className="fa-solid fa-sms">(425) 984.9284</i></a>

                        <a className="flex justify-start md:justify-center font-sen text-[10px]" rel="noopener noreferrer" href="mailto:huttercleaning@gmail.com"><i className="fa-solid fa-envelope">huttercleaning@gmail.com</i></a>

                        <a className="flex justify-start md:justify-center font-sen text-sm" rel="noopener noreferrer" href="https://wa.me/4259849284"><i className="fa-brands fa-whatsapp">(425) 984.9284</i></a>

                    </div>

                </div>

                <div className="flex flex-col space-y-4">
                    
                    <h2 className="font-orelega text-3xl md:text-xl lg:text-2xl">Social Media</h2>
                    
                    <div className="flex flex-col space-y-2 text-xl font-sen">
                        
                        <a rel="noopener noreferrer" href="https://www.instagram.com/huttercleaning?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==" target="_blank">Instagram</a>
                        <a rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100095415333262&mibextid=LQQJ4d" target="_blank">Facebook</a>

                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center px-6 pt-12 text-sm font-sen">
                
                <span className="text-center">© Copyright 2024. Hutter Cleaning All Rights Reserved.</span>

            </div>

        </footer>
    );
}