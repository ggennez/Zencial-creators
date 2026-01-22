import React from 'react';
import { BENEFITS_ICONS } from '../constants';

const EarningsInfo: React.FC = () => {
  const scrollToVerify = () => {
    const element = document.getElementById('verify');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-zencial-lilac">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-7xl font-black text-zencial-dark tracking-tighter">
            REGRAS DO JOGO
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {BENEFITS_ICONS.map((item, index) => (
            <div key={index} className="flex flex-col justify-between p-6 md:p-8 bg-white rounded-[1.5rem] md:rounded-[2rem] border-2 border-transparent hover:border-zencial-acid hover:shadow-[8px_8px_0px_0px_rgba(190,242,100,1)] transition-all duration-300">
              <div className="mb-4 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4 md:mb-6 text-zencial-purple">
                   {item.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold text-zencial-dark mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-20 flex justify-center w-full">
             <button 
                onClick={scrollToVerify}
                className="group relative w-full md:w-auto px-6 md:px-12 py-5 md:py-6 bg-zencial-dark text-white rounded-2xl md:rounded-full text-lg md:text-xl font-bold overflow-hidden shadow-2xl hover:shadow-zencial-pink/40 hover:scale-105 transition-all"
             >
                <span className="relative z-10 group-hover:tracking-wider transition-all">QUERO ME INSCREVER AGORA</span>
                <div className="absolute inset-0 bg-zencial-pink translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
             </button>
        </div>
        <p className="text-center mt-6 text-[10px] md:text-sm font-bold text-zencial-dark/30 uppercase tracking-[0.2em]">
           Vagas Limitadas • Zencial Creators 2026
        </p>
      </div>
    </section>
  );
};

export default EarningsInfo;
