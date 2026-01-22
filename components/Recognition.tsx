
import React from 'react';
import { Award, Star, Crown, Zap } from 'lucide-react';

const PLAQUES = [
  {
    value: "50k",
    title: "AFILIADA GROWTH",
    desc: "O primeiro grande marco.",
    gradient: "bg-gradient-to-br from-gray-100 to-gray-300",
    text: "text-gray-800",
    shadow: "shadow-gray-200/50",
    icon: <Star className="w-8 h-8 md:w-10 md:h-10 opacity-50" />
  },
  {
    value: "100k",
    title: "HIGH PERFORMER",
    desc: "Consistência comprovada.",
    gradient: "bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600",
    text: "text-yellow-900",
    shadow: "shadow-yellow-400/50",
    icon: <Award className="w-8 h-8 md:w-10 md:h-10 opacity-50" />
  },
  {
    value: "1M",
    title: "CREATOR PRO",
    desc: "Elite do TikTok Shop.",
    gradient: "bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-500",
    text: "text-white",
    shadow: "shadow-blue-400/50",
    icon: <Zap className="w-8 h-8 md:w-10 md:h-10 text-white opacity-80" />
  },
  {
    value: "50M",
    title: "PLACA ÍCONE",
    desc: "O topo absoluto.",
    gradient: "bg-gradient-to-br from-neutral-800 to-black",
    text: "text-white",
    shadow: "shadow-black/50",
    icon: <Crown className="w-8 h-8 md:w-10 md:h-10 text-zencial-acid" />
  }
];

const Recognition: React.FC = () => {
  return (
    <section className="relative bg-zencial-dark overflow-visible pb-20">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.1)_0%,transparent_70%)] pointer-events-none"></div>

      {/* Header Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 md:pt-40 text-center pb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur text-zencial-acid text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-6">
          <Award size={14} className="animate-pulse" />
          Hall da Fama
        </div>
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-none mb-6">
          MATERIALIZE SUA <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-400">CONQUISTA</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
          Vender no digital é incrível, mas ter o reconhecimento na sua estante é lendário.
        </p>
      </div>

      {/* The Deck of Cards - Sticky Stacking Runway */}
      <div className="relative w-full max-w-[280px] xs:max-w-xs md:max-w-md lg:max-w-xl mx-auto flex flex-col items-center">
        {PLAQUES.map((plaque, index) => (
          <div 
            key={index} 
            className="sticky top-[15vh] w-full"
            style={{
              zIndex: 10 + index,
              // Margin bottom provides the spacing between card "arrivals"
              // The last card also has margin so the scroll "stays" on it before proceeding.
              marginBottom: '80vh' 
            }}
          >
            {/* Plaque UI */}
            <div className={`relative w-full aspect-[4/5] rounded-[32px] md:rounded-[48px] p-[2px] bg-gradient-to-br from-white/20 to-transparent shadow-[0_40px_120px_rgba(0,0,0,1)] ${plaque.shadow} group transition-all duration-500`}>
                
                {/* Outer Glow */}
                <div className={`absolute -inset-4 rounded-[48px] opacity-10 blur-3xl ${plaque.gradient} pointer-events-none group-hover:opacity-20 transition-opacity`}></div>

                {/* Inner Material */}
                <div className={`w-full h-full ${plaque.gradient} rounded-[30px] md:rounded-[46px] p-8 md:p-14 flex flex-col items-center justify-between relative overflow-hidden`}>
                    
                    {/* Metal Texture */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-20 mix-blend-overlay"></div>
                    
                    {/* Reflection */}
                    <div className="absolute -top-[100%] -left-[100%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/30 to-transparent rotate-45 transition-all duration-1000 pointer-events-none group-hover:translate-y-[50%] group-hover:translate-x-[50%]"></div>

                    {/* Branding Top */}
                    <div className="flex flex-col items-center gap-4 opacity-70 z-10">
                        <div className={`text-[10px] font-black tracking-[0.6em] uppercase ${plaque.text} opacity-50`}>ZENCIAL</div>
                        {plaque.icon}
                    </div>

                    {/* Value */}
                    <div className="flex flex-col items-center z-10 my-auto">
                        <span className={`text-[6.5rem] xs:text-[7.5rem] md:text-[9.5rem] lg:text-[11.5rem] font-black tracking-tighter leading-none drop-shadow-2xl ${plaque.text}`}>
                            {plaque.value}
                        </span>
                        <div className={`h-2.5 w-24 rounded-full mt-8 md:mt-12 opacity-20 ${plaque.text.includes('white') ? 'bg-white' : 'bg-black'}`}></div>
                    </div>

                    {/* Footer Labels */}
                    <div className={`w-full text-center pt-8 md:pt-10 border-t border-white/10 mt-auto z-10 ${plaque.text}`}>
                        <h3 className="font-black text-2xl md:text-3xl tracking-[0.1em] uppercase mb-1.5 leading-none">{plaque.title}</h3>
                        <p className="text-[10px] md:text-xs font-bold opacity-60 uppercase tracking-[0.3em]">{plaque.desc}</p>
                    </div>

                    {/* Elite Glow for 50M */}
                    {plaque.value === '50M' && (
                        <div className="absolute inset-0 border-[12px] border-zencial-acid/20 rounded-[30px] md:rounded-[46px] animate-pulse pointer-events-none z-20"></div>
                    )}
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Validation Note */}
      <div className="text-center relative z-[100] pt-24 pb-12 bg-zencial-dark">
         <p className="text-gray-500 text-[10px] md:text-xs px-6 max-w-lg mx-auto uppercase font-black">
           *As placas são enviadas fisicamente para o endereço da creator após a validação dos dados de faturamento no painel financeiro oficial.
         </p>
      </div>
    </section>
  );
};

export default Recognition;
