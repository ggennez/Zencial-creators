
import React from 'react';
import { CAREER_LEVELS } from '../constants';
import { Gift, ArrowUpRight, Trophy, Lock, Unlock } from 'lucide-react';

const CareerPath: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative z-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        {/* Header - Centralized */}
        <div className="mb-12 md:mb-20 text-center flex flex-col items-center">
            <p className="text-zencial-pink font-black tracking-[0.3em] uppercase text-xs md:text-sm mb-4">ROADMAP</p>
            <h2 className="text-[2.5rem] md:text-[6rem] font-black text-zencial-dark tracking-tighter uppercase leading-[0.9] mb-8">
              Plano de <br/>
              <span className="text-zencial-purple">Ascensão</span>
            </h2>
            
            {/* GMV Card */}
            <div className="p-6 md:p-10 bg-zencial-dark text-white rounded-[2rem] border-4 border-zencial-acid w-full text-center relative overflow-hidden group shadow-2xl">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-30"></div>
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

        {/* List of levels - Strictly 2:1 Horizontal Images */}
        <div className="flex flex-col gap-10 md:gap-16 pb-10">
           {CAREER_LEVELS.map((level, index) => (
              <div 
                 key={level.level} 
                 className="group relative bg-white rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-10 border-2 border-gray-100 hover:border-zencial-purple transition-all duration-300 hover:shadow-2xl flex flex-col gap-8"
              >
                 
                 {/* Image Container - Aspect 2:1 Horizontal */}
                 <div className="relative w-full aspect-[2/1] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-md shrink-0">
                    <img src={level.image} alt={level.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    
                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    
                    {/* Level Badge */}
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-xl border border-white/20">
                       <span className="text-white font-black text-xs md:text-sm">LVL {level.level}</span>
                    </div>

                    {/* Progress Bar Visual */}
                    <div className="absolute bottom-6 left-6 right-6">
                       <div className="flex justify-between text-white text-[10px] font-black mb-2 uppercase tracking-widest">
                          <span>Progressão</span>
                          <span>{level.progress}%</span>
                       </div>
                       <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden backdrop-blur-sm">
                          <div className="bg-zencial-acid h-full transition-all duration-1000" style={{width: `${level.progress}%`}}></div>
                       </div>
                    </div>
                 </div>

                 {/* Content Section */}
                 <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                       <div>
                          <h3 className="text-3xl md:text-5xl font-black text-zencial-dark uppercase tracking-tighter group-hover:text-zencial-purple transition-colors leading-none mb-2">
                             {level.title}
                          </h3>
                          <p className="text-base md:text-xl font-black text-zencial-pink uppercase tracking-[0.2em]">
                             {level.description}
                          </p>
                       </div>
                       {level.level === 1 ? (
                          <Unlock size={32} className="text-green-500 shrink-0" />
                       ) : (
                          <Lock size={32} className="text-gray-200 group-hover:text-zencial-pink transition-colors shrink-0" />
                       )}
                    </div>
                    
                    {/* Benefits Tags */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                       {level.benefits.map((b, i) => (
                          <div key={i} className={`flex items-center gap-3 p-4 rounded-2xl border-2 ${b.includes('Prêmio') ? 'bg-purple-50 border-purple-100' : 'bg-gray-50 border-gray-100'}`}>
                             <div className={`p-2 rounded-full ${b.includes('Prêmio') ? 'bg-zencial-purple text-white' : 'bg-white text-gray-400 border border-gray-200'} shrink-0`}>
                                {b.includes('Prêmio') ? <Gift size={14} /> : <ArrowUpRight size={14} />}
                             </div>
                             <span className={`text-[11px] font-black uppercase ${b.includes('Prêmio') ? 'text-zencial-purple' : 'text-gray-600'} leading-tight tracking-wider`}>
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
