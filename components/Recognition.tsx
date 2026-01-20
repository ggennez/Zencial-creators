import React from 'react';
import { Award, Star, Crown, Zap } from 'lucide-react';

const PLAQUES = [
  {
    value: "50k",
    title: "AFILIADA GROWTH",
    desc: "O primeiro grande marco.",
    gradient: "bg-gradient-to-br from-gray-100 to-gray-300",
    border: "border-gray-200",
    text: "text-gray-800",
    shadow: "shadow-gray-200/50",
    icon: <Star className="w-6 h-6 md:w-8 md:h-8 opacity-50" />
  },
  {
    value: "100k",
    title: "HIGH PERFORMER",
    desc: "Consistência comprovada.",
    gradient: "bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600",
    border: "border-yellow-300",
    text: "text-yellow-900",
    shadow: "shadow-yellow-400/50",
    icon: <Award className="w-6 h-6 md:w-8 md:h-8 opacity-50" />
  },
  {
    value: "1M",
    title: "CREATOR PRO",
    desc: "Elite do TikTok Shop.",
    gradient: "bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-500",
    border: "border-cyan-200",
    text: "text-white",
    shadow: "shadow-blue-400/50",
    icon: <Zap className="w-6 h-6 md:w-8 md:h-8 text-white opacity-80" />
  },
  {
    value: "50M",
    title: "PLACA ÍCONE",
    desc: "O topo absoluto.",
    gradient: "bg-gradient-to-br from-neutral-800 to-black",
    border: "border-gray-700",
    text: "text-white",
    shadow: "shadow-black/50",
    subBorder: "border-zencial-acid", 
    icon: <Crown className="w-6 h-6 md:w-8 md:h-8 text-zencial-acid" />
  }
];

const Recognition: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-zencial-dark relative">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[500px] bg-gradient-to-r from-zencial-purple/20 via-zencial-pink/20 to-zencial-acid/10 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
           <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur text-zencial-acid text-xs font-black uppercase tracking-widest mb-6">
              <Award size={14} />
              Hall da Fama
           </div>
           <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6">
             MATERIALIZE SUA <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-400">CONQUISTA</span>
           </h2>
           <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium px-4">
             Vender no digital é incrível, mas ter o reconhecimento na sua estante é lendário.
           </p>
        </div>

        {/* Plaques Deck - Stacked Card Effect */}
        <div className="flex flex-col items-center max-w-md md:max-w-xl mx-auto relative pb-[20vh]">
           {PLAQUES.map((plaque, index) => (
             <div 
                key={index} 
                className="w-full sticky"
                style={{
                    // Stack Offset:
                    // 15vh (Mobile Safe Area) + index * 10px (Creates the "Deck" look where headers peek out)
                    top: `calc(15vh + ${index * 10}px)`, 
                    zIndex: index + 10,
                    // Scroll Pacing:
                    // Large margin creates the "scroll distance" needed to reach the next card.
                    marginBottom: index === PLAQUES.length - 1 ? '0px' : '50vh' 
                }}
             >
                <div className="relative flex flex-col items-center group transition-transform duration-500 ease-out">
                    
                    {/* The Plaque Object */}
                    <div className={`relative w-full aspect-[4/5] rounded-[24px] ${plaque.gradient} p-[2px] shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)] ${plaque.shadow} transform transition-all duration-300`}>
                    
                        {/* Inner Frame (Glass effect) */}
                        <div className={`w-full h-full bg-white/10 backdrop-blur-xl rounded-[22px] border-t border-l border-white/50 border-b border-r border-black/20 flex flex-col items-center justify-between p-6 md:p-10 relative overflow-hidden ${plaque.value.includes('M') ? 'bg-black/90' : 'bg-white/20'}`}>
                            
                            {/* Reflection Shine */}
                            <div className="absolute -top-[100%] -left-[100%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/40 to-transparent rotate-45 transition-all duration-1000 pointer-events-none group-hover:translate-y-[50%] group-hover:translate-x-[50%]"></div>

                            {/* Top Branding */}
                            <div className="flex flex-col items-center gap-3 opacity-90">
                                <div className="text-[10px] font-black tracking-[0.3em] uppercase opacity-70 mix-blend-overlay">ZENCIAL</div>
                                {plaque.icon}
                            </div>

                            {/* Central Value */}
                            <div className="flex flex-col items-center z-10 my-auto">
                                <span className={`text-[5rem] leading-none md:text-[7rem] font-black tracking-tighter drop-shadow-2xl ${plaque.text}`}>
                                    {plaque.value}
                                </span>
                                <div className={`h-1 w-12 rounded-full mt-4 opacity-50 ${plaque.text.includes('white') ? 'bg-white' : 'bg-black'}`}></div>
                            </div>

                            {/* Bottom Title */}
                            <div className={`w-full text-center py-4 border-t border-white/10 mt-auto ${plaque.text}`}>
                                <p className="font-black text-sm md:text-lg tracking-widest uppercase mb-1">{plaque.title}</p>
                                <p className="text-[10px] md:text-xs font-bold opacity-60 uppercase">{plaque.desc}</p>
                            </div>

                            {/* Special Glow for Top Tiers */}
                            {plaque.value.includes('M') && (
                                <div className="absolute inset-0 border-[3px] border-zencial-acid/30 rounded-[22px] animate-pulse pointer-events-none"></div>
                            )}
                        </div>
                    </div>

                </div>
             </div>
           ))}
        </div>

        <div className="text-center relative z-20 pt-20 pb-10">
           <p className="text-gray-500 text-[10px] md:text-xs italic px-6 max-w-lg mx-auto leading-relaxed">
             *As placas são enviadas fisicamente para o endereço da creator após a validação dos dados de faturamento no painel financeiro oficial.
           </p>
        </div>

      </div>
    </section>
  );
};

export default Recognition;