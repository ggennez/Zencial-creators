import React from 'react';
import { GraduationCap, Users, TrendingUp, Star, Heart, ShoppingBag, PackageOpen } from 'lucide-react';

const AboutProject: React.FC = () => {
  return (
    <section className="pt-12 md:pt-24 pb-8 md:pb-12 bg-white rounded-t-[2.5rem] md:rounded-t-[3rem] -mt-6 md:-mt-10 relative z-20 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute -top-10 md:-top-20 left-1/2 -translate-x-1/2 text-zencial-lilac opacity-30 pointer-events-none">
        <Star size={250} className="md:w-[400px] md:h-[400px]" fill="currentColor" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        
        {/* Header - Centralized */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16 gap-3 md:gap-4">
          <div className="inline-block bg-zencial-acid text-black px-3 md:px-4 py-1.5 rounded-lg font-black text-[10px] md:text-xs uppercase tracking-widest mb-2 rotate-[-2deg] shadow-sm transform hover:rotate-0 transition-transform">
              Zencial Ecosystem
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-[5rem] font-black text-zencial-dark tracking-tighter leading-[0.95] md:leading-[0.9] break-words hyphens-auto max-w-4xl">
            A FÁBRICA DE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zencial-pink to-purple-600">INFLUENCIADORAS</span>
          </h2>
          <p className="text-base md:text-2xl text-gray-500 max-w-md md:max-w-2xl font-bold leading-tight mt-2 md:mt-4 px-2">
            Uma suíte completa de ferramentas desenhada para acelerar sua carreira.
          </p>
        </div>

        {/* Bento Grid - Tight Gaps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto md:auto-rows-[300px]">
          
          {/* Card 1: Large - Academy */}
          <div className="md:col-span-2 bg-zencial-purple rounded-[2rem] p-6 md:p-10 relative overflow-hidden group transition-all hover:scale-[1.01] hover:shadow-2xl hover:shadow-purple-900/30 min-h-[280px] md:min-h-[300px] flex flex-col justify-between">
             {/* New Image: Girl recording content/learning */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599696848652-f00236a282f9?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay transition-opacity group-hover:opacity-20"></div>
             
             {/* Sticker */}
             <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-white text-zencial-purple px-4 py-1.5 md:px-5 md:py-2 rounded-xl font-black rotate-3 shadow-lg group-hover:rotate-6 transition-transform text-xs md:text-base border-2 border-purple-100">
                100% GRÁTIS
             </div>

             <div className="relative z-10">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-4 border border-white/20">
                   <GraduationCap size={24} className="md:w-8 md:h-8" />
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-white mb-2 leading-none">Zencial Academy</h3>
                <p className="text-purple-100 text-sm md:text-xl max-w-md font-medium mt-2 leading-tight">
                   Aprenda a vender de verdade. Do zero ao primeiro milhão em comissões.
                </p>
             </div>
             <button className="relative z-10 self-start mt-6 px-6 py-2.5 md:px-8 md:py-3 bg-zencial-acid text-black font-black rounded-full text-xs md:text-sm hover:bg-white hover:scale-105 transition-all shadow-lg">
                VER CURRICULUM
             </button>
          </div>

          {/* Card 2: Tall - Community */}
          <div className="md:row-span-2 bg-gray-50 border-2 border-gray-100 rounded-[2rem] p-6 md:p-10 flex flex-col justify-between group hover:border-zencial-pink transition-colors relative overflow-hidden min-h-[280px] md:min-h-[300px]">
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#ec4899 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
             
             <div className="relative z-10">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-zencial-pink/10 rounded-2xl flex items-center justify-center text-zencial-pink mb-4 md:mb-6 border border-pink-100">
                   <Users size={24} className="md:w-8 md:h-8" />
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-zencial-dark mb-2 leading-none">Comunidade VIP</h3>
                <p className="text-gray-500 text-sm md:text-lg font-bold leading-tight">
                   Networking com quem fatura alto.
                </p>
             </div>

             {/* Chat Bubble Visual - Responsive Stack */}
             <div className="space-y-3 mt-6 md:mt-8 relative z-10">
                <div className="bg-white p-3 md:p-4 rounded-2xl rounded-tl-none shadow-lg border border-gray-100 rotate-[1deg] transform transition-transform group-hover:translate-x-2 max-w-[90%]">
                   <div className="flex items-center gap-2 md:gap-3">
                      <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white shadow-sm shrink-0" alt="User" />
                      <div>
                         <p className="font-bold text-[10px] text-gray-400 uppercase">Embaixadora</p>
                         <p className="font-bold text-xs md:text-sm text-zencial-dark leading-tight">"Bati minha meta de GMV hoje! 🚀"</p>
                      </div>
                   </div>
                </div>
                <div className="bg-zencial-pink p-3 md:p-4 rounded-2xl rounded-tr-none shadow-lg border border-pink-400 rotate-[-1deg] text-white transform transition-transform group-hover:-translate-x-2 ml-4 md:ml-auto max-w-[90%] self-end">
                    <div className="flex items-center gap-2 md:gap-3 justify-end">
                       <div>
                          <p className="font-bold text-xs md:text-sm text-right leading-tight">"Parabéns! O prêmio já foi liberado."</p>
                       </div>
                       <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                          <Heart size={12} className="md:w-4 md:h-4" fill="white" />
                       </div>
                    </div>
                </div>
             </div>
          </div>

          {/* Card 3: Small - Live Shop Tools */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-[2rem] p-6 md:p-8 flex flex-col justify-center items-center text-center group border border-white shadow-sm relative min-h-[220px] md:min-h-[250px] overflow-hidden">
             {/* Background Image Fade - Open Box / Makeup */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556228720-1957be979ea3?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
             
             <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center text-zencial-pink mb-4 shadow-xl group-hover:scale-110 transition-transform rotate-3 border-4 border-white">
                <PackageOpen size={28} className="md:w-9 md:h-9" />
             </div>
             <h3 className="relative z-10 text-xl md:text-2xl font-black text-zencial-dark leading-none">Kit Creator</h3>
             <p className="relative z-10 text-gray-600 mt-2 font-bold text-xs md:text-sm">Assets visuais para suas lives</p>
          </div>

          {/* Card 4: Small - Ranking (Improved Contrast) */}
          <div className="bg-neutral-900 text-white rounded-[2rem] p-6 md:p-8 relative overflow-hidden flex flex-col justify-between group min-h-[220px] md:min-h-[250px] border border-neutral-800">
             
             <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <ShoppingBag size={140} className="md:w-[180px] md:h-[180px]" />
             </div>

             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>

             <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                   <div className="p-2.5 md:p-3 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-md">
                     <Star className="text-zencial-acid fill-zencial-acid w-5 h-5 md:w-7 md:h-7" />
                   </div>
                   <div className="bg-zencial-acid text-black px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg text-[10px] md:text-xs font-black uppercase tracking-widest shadow-[0_0_15px_rgba(190,242,100,0.3)]">PREMIUM</div>
                </div>
                <h3 className="text-2xl md:text-3xl font-black leading-none text-white drop-shadow-md">Prêmios Físicos</h3>
                <p className="text-gray-300 mt-2 text-xs md:text-sm font-bold">iPhone, Viagens e Equipamentos.</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutProject;