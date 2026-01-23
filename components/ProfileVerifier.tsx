
import React from 'react';
import { 
  ArrowRight, 
  Zap, 
  Sparkles, 
  Star,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

const ProfileVerifier: React.FC = () => {
  return (
    <section id="verify" className="py-20 md:py-32 bg-zencial-dark relative overflow-hidden flex flex-col items-center">
      
      {/* Background Ambience & Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-zencial-purple/20 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-zencial-pink/20 rounded-full blur-[120px] opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-zencial-acid rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-zencial-pink rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className="mb-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zencial-acid/10 border border-zencial-acid/20 backdrop-blur-md text-zencial-acid font-black text-xs tracking-[0.2em] uppercase shadow-lg">
              <Zap size={14} className="fill-zencial-acid" />
              <span>Oportunidade Exclusiva</span>
            </div>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase max-w-4xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Faça seu cadastro e entre para a <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zencial-pink via-zencial-purple to-indigo-400">
              seleção de Creators
            </span> <br/>
            da Zencial
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg md:text-2xl font-medium max-w-2xl mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Estamos em busca dos próximos grandes nomes do TikTok Shop. 
            Seu talento merece a vitrine certa e as melhores comissões do mercado.
          </p>

          {/* Main CTA Button */}
          <div className="relative group animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="absolute -inset-1.5 bg-gradient-to-r from-zencial-pink to-zencial-purple rounded-[2rem] blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
            <a 
              href="https://zencial.com.br/pages/creators-form"
              className="relative flex items-center gap-4 bg-white text-zencial-dark px-10 md:px-14 py-6 md:py-8 rounded-[1.8rem] font-black text-xl md:text-3xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-2xl"
            >
              QUERO ME INSCREVER
              <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>

          {/* Trust Badges / Info */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Star size={20} className="text-white" />
              </div>
              <span className="text-[10px] font-black text-white tracking-widest uppercase">Elite Zencial</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Sparkles size={20} className="text-white" />
              </div>
              <span className="text-[10px] font-black text-white tracking-widest uppercase">Acesso VIP</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <ExternalLink size={20} className="text-white" />
              </div>
              <span className="text-[10px] font-black text-white tracking-widest uppercase">Cadastro Seguro</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <ChevronRight size={20} className="text-white" />
              </div>
              <span className="text-[10px] font-black text-white tracking-widest uppercase">Fila Prioritária</span>
            </div>
          </div>

        </div>
      </div>
      
      {/* Visual Bottom Decor */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};

export default ProfileVerifier;

