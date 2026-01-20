import React from 'react';
import { CAREER_LEVELS } from '../constants';
import { Gift, ArrowUpRight, Trophy, Lock, Unlock } from 'lucide-react';

const CareerPath: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Header - Centralized */}
        <div className="mb-12 md:mb-20 text-center flex flex-col items-center">
            <p className="text-zencial-pink font-black tracking-[0.3em] uppercase text-xs md:text-sm mb-4">ROADMAP 2025</p>
            <h2 className="text-[2.5rem] md:text-[6rem] font-black text-zencial-dark tracking-tighter uppercase leading-[0.9] mb-8">
              Plano de <br/>
              <span className="text-zencial-purple">Ascensão</span>
            </h2>
            
            {/* GMV Card - Improved (Dark & Bold) */}
            <div className="p-6 md:p-10 bg-zencial-dark text-white rounded-[2rem] border-4 border-zencial-acid max-w-2xl w-full text-center relative overflow-hidden group shadow-2xl">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-30"></div>
               {/* Icon moved/resized for mobile to avoid text overlap */}
               <div className="absolute -right-8 -top-8 md:-right-12 md:-top-12 text-zencial-acid opacity-10 group-hover:opacity-20 transition-opacity rotate-12 duration-500">
                   <Trophy size={140} className="md:w-[180px] md:h-[180px]" />
               </div>
               
               <div className="relative z-10">
                   <div className="inline-block bg-zencial-acid text-black px-3 py-1 rounded-md font-black text-[10px] md:text-xs uppercase tracking-widest mb-4">
                     A REGRA É CLARA
                   </div>
                   <p className="font-black text-3xl md:text-5xl mb-4 text-white tracking-tight">GMV é Rei.</p>
                   <p className="text-gray-400 font-bold text-sm md:text-lg leading-tight max-w-md mx-auto">
                     Volume Bruto de Mercadoria. <br/>
                     <span className="text-white">Quanto mais você vende, mais alto você sobe.</span>
                   </p>
               </div>
            </div>
        </div>

        {/* Desktop: Grid | Mobile: Stacked (No Sticky) */}
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-10">
           {CAREER_LEVELS.map((level, index) => (
              <div 
                 key={level.level} 
                 className="group relative bg-white rounded-[2rem] md:rounded-[2.5rem] p-4 border-2 border-gray-100 hover:border-zencial-purple transition-all duration-300 hover:shadow-2xl md:hover:-translate-y-2 flex flex-col"
              >
                 
                 {/* Image Container */}
                 <div className="relative w-full h-40 md:h-48 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden mb-6 shadow-md">
                    <img src={level.image} alt={level.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    
                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    
                    {/* Level Number */}
                    <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-white/20 backdrop-blur-md px-2 py-0.5 md:px-3 md:py-1 rounded-lg border border-white/20">
                       <span className="text-white font-black text-xs md:text-sm">LVL {level.level}</span>
                    </div>

                    {/* Progress Bar Visual */}
                    <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4">
                       <div className="flex justify-between text-white/80 text-[10px] font-bold mb-1 uppercase tracking-wider">
                          <span>Progresso</span>
                          <span>{level.progress}%</span>
                       </div>
                       <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden backdrop-blur-sm">
                          <div className="bg-zencial-acid h-full transition-all duration-1000" style={{width: `${level.progress}%`}}></div>
                       </div>
                    </div>
                 </div>

                 {/* Content */}
                 <div className="px-2 pb-2 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                       <h3 className="text-xl md:text-2xl font-black text-zencial-dark uppercase tracking-tight group-hover:text-zencial-purple transition-colors">
                          {level.title}
                       </h3>
                       {/* Lock Icon Logic */}
                       {level.level === 1 ? (
                          <Unlock size={18} className="text-green-500 md:w-5 md:h-5" />
                       ) : (
                          <Lock size={18} className="text-gray-300 group-hover:text-zencial-pink transition-colors md:w-5 md:h-5" />
                       )}
                    </div>
                    
                    <p className="text-xs md:text-sm font-bold text-gray-500 mb-6 leading-relaxed flex-1">
                       {level.description}
                    </p>
                    
                    {/* Benefits Tags */}
                    <div className="space-y-2">
                       {level.benefits.map((b, i) => (
                          <div key={i} className={`flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-xl border-2 ${b.includes('Prêmio') ? 'bg-purple-50 border-purple-100' : 'bg-gray-50 border-gray-100'}`}>
                             <div className={`p-1 md:p-1.5 rounded-full ${b.includes('Prêmio') ? 'bg-zencial-purple text-white' : 'bg-white text-gray-500 border border-gray-200'} shrink-0`}>
                                {b.includes('Prêmio') ? <Gift size={10} className="md:w-3 md:h-3" /> : <ArrowUpRight size={10} className="md:w-3 md:h-3" />}
                             </div>
                             <span className={`text-[10px] md:text-xs font-black uppercase ${b.includes('Prêmio') ? 'text-zencial-purple' : 'text-gray-600'} leading-tight`}>
                                {b.replace('Prêmio:', '')}
                             </span>
                          </div>
                       ))}
                    </div>
                 </div>

              </div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default CareerPath;