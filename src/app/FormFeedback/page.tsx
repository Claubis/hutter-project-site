'use client'

import { useState } from 'react';
import Image from 'next/image';

interface FormData {
    name: string;
    email: string;
    rating: number;
    message: string;
}


export default function FormFeedback(){

    const [rating, setRating] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };

    const handleFeedbackFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Mostrar no console minhas informações
        console.log('Dados do formulário:', { name,email, rating, message  });

        // Exibe um alerta personalizado após o envio do formulário
        alert(name + ' seu feedback foi recebido com sucesso!\n '+ '\nDados ' + email + '\nNota: ' + rating + '\nDescrição: ' + message );

        // Limpar o formulário após o envio
        setName('');
        setEmail('');
        setRating(0);
        setMessage('');
    };


    type StarIconProps = {
        filled: boolean;
        onClick: () => void;
    };

    // Função para renderizar o ícone de estrela SVG
    const StarIcon = ({ filled, onClick }: StarIconProps) => (
        <svg
          onClick={onClick} // Use o onClick aqui
          className={`h-[50px] w-[80px] cursor-pointer ${filled ? 'text-yellow-500' : 'text-[#D5E0B5]'}`}
          fill={filled ? 'currentColor' : 'none'}
          viewBox="0 0 24 24"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.073 6.36h6.704c.969 0 1.371 1.24.588 1.81l-5.396 3.928 2.073 6.36c.3.921-.755 1.683-1.54 1.193l-5.396-3.928-5.396 3.928c-.785.49-1.84-.272-1.54-1.193l2.073-6.36-5.396-3.928c-.783-.57-.38-1.81.588-1.81h6.704l2.073-6.36z"
          />
        </svg>
      );
    
    // Função para atualizar a classificação baseada no índice da estrela clicada
    const handleSetRating = (index:any) => {
    setRating(index + 1);
    };

      

    return(

        <div className="bg-quarta min-h-full md:flex md:justify-center">

            <div className="w-[100%] md:pl-10 flex flex-col justify-center gap-10 p-10">

                    <h1 className="text-6xl font-orelega tracking-tight text-[#FFFDE0] uppercase mt-20 md:mt-0">We wish to know your opinion!</h1>

                    <h2 className="mt-2 text-lg md:text-2xl leading-8 font-sen">Our questionnaire is designed to enhance our offerings, ensuring your home is more comfortable and secure.</h2>

                    <p className="mt-2 text-lg md:text-2xl leading-8 font-sen">To participate in our survey, we ask that you fill out the form. Your involvement will help us better understand how much you value the care of your home.</p>

                    <p className="mt-2 text-lg md:text-2xl leading-8 font-sen">We are looking forward to hearing from you.</p>

                    <div>
                        <Image 
                        src="/assets/FormFeedback/imagem1.png" 
                        alt='Imagem com estrelas' 
                        width={500} 
                        height={100}
                        className='w-auto h-auto'></Image>
                    </div>

            </div>

            <div className="w-[100%] bg-[#FFFFF] p-10">

                <form 
                action="#"
                className="w-[100%] md:w-[80%] mx-auto bg-[#FFFEE6] rounded-lg p-10 grid-cols-* md:mt-20" 
                name="form-feedback"
                method="POST"
                data-netlify="true"
                onSubmit={handleFeedbackFormSubmit}
                >

                <input type="hidden" name="form-name" value="form-feedback" />

                    <div>
                        
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                        
                        <input 
                        id='name'
                        name='name' 
                        type="text"
                        value={name} onChange={handleName}
                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    
                    <div className="mx-auto mt-10"> 

                        <label className="block mb-2 text-sm font-medium text-gray-900">Your email</label>

                        <input 
                        id="email"
                        name='email' 
                        type="email" 
                        value={email} onChange={handleEmail}
                        aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@gmail.com"
                        />

                    </div>

                    <div className="rating flex justify-center content-center mt-10 ">
                        
                        <input 
                        className='' 
                        type="number" 
                        name="rating" 
                        value={rating} 
                        hidden 
                        required
                        readOnly  />
                        {[...Array(5)].map((_, index) => (
                            <StarIcon key={index} filled={index < rating} onClick={() => handleSetRating(index)} />
                        ))}

                    </div>

                    
                    <div className="mx-auto mt-20">

                        <label className="block mb-2 text-sm font-medium text-gray-900">Your message</label>

                        <textarea 
                        name='message' 
                        id="message" 
                        rows={8} 
                        value={message} onChange={handleMessage}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                        placeholder="Leave a comment..."></textarea>

                    </div>

                    <div className='flex justify-center text-center mt-10'>
                    
                    <div>
                        <button
                        className='rounded-md bg-[#A5C3A7] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#D5E0B5] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-[100%] md:w-[100%]' 
                        type='submit' 
                        id="submitBtn" 
                        value="form-feedback">Submit</button>
                    </div>
                </div>


                </form>

            </div>

        </div>

    );
}