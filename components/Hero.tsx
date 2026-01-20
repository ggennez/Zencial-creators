import React from 'react';
import { ArrowDown, PlayCircle, Star, Video, Zap, TrendingUp, Sparkles, Heart, ShoppingBag, MessageCircle } from 'lucide-react';

interface HeroProps {
  onScrollToVerify: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToVerify }) => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pb-12 md:pb-20">
      
      {/* Background Blobs - Symmetrical */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-gradient-to-b from-zencial-pink/10 via-purple-200/20 to-transparent rounded-full blur-[60px] md:blur-[100px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-8 md:pt-20 flex flex-col items-center">
        
        {/* Top Sticker Badge - Centered */}
        <div className="mb-6 md:mb-8 animate-slide-up">
           <div className="relative group cursor-pointer">
             <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
             <div className="relative inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-2.5 rounded-full bg-white border border-gray-100 shadow-xl hover:scale-105 transition-transform">
                <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zencial-pink opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-zencial-pink"></span>
                </span>
                <span className="text-zencial-dark font-black tracking-widest uppercase text-[10px] md:text-sm">
                  VAGAS ABERTAS • 2025
                </span>
             </div>
           </div>
        </div>

        {/* Centralized Typography */}
        <div className="text-center max-w-5xl mx-auto relative mb-8 md:mb-12 px-2">
             <h1 className="text-[3.5rem] leading-[0.9] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-zencial-dark tracking-tighter mb-6 md:mb-8 animate-slide-up relative z-20" style={{animationDelay: '0.1s'}}>
               LIVE <br className="md:hidden" />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-zencial-pink via-purple-600 to-indigo-600"> SHOP</span>
               
               {/* Decorative Star - Right (Desktop Only) */}
               <Star className="absolute -top-4 -right-4 md:top-4 md:-right-12 text-zencial-acid fill-zencial-acid w-12 h-12 md:w-20 md:h-20 animate-spin-slow drop-shadow-lg hidden md:block" />
               
               {/* Decorative Sparkle - Left (Desktop Only) */}
               <Sparkles className="absolute top-20 -left-12 text-zencial-purple w-12 h-12 animate-pulse hidden md:block" />
             </h1>

             <p className="text-base md:text-3xl font-bold text-gray-600 max-w-2xl mx-auto leading-snug md:leading-tight animate-slide-up px-4" style={{animationDelay: '0.2s'}}>
               Sua carreira profissional no <span className="bg-zencial-acid text-black px-1.5 md:px-2 inline-block transform -skew-x-3 shadow-sm mx-1">TikTok Shop</span> começa aqui. <br className="hidden md:block"/> Venda produtos reais, ganhe comissões reais.
             </p>
        </div>

        {/* Buttons - Centered but aligned to top on Desktop (sm:items-start) */}
        <div className="w-full max-w-md md:max-w-none flex flex-col sm:flex-row items-center sm:justify-center gap-4 animate-slide-up mb-12 md:mb-20 px-4" style={{animationDelay: '0.3s'}}>
            <button 
              onClick={onScrollToVerify}
              className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-zencial-dark text-white rounded-2xl font-black text-lg md:text-xl hover:bg-zencial-pink hover:scale-105 transition-all duration-300 shadow-[0px_10px_20px_rgba(0,0,0,0.2)] flex items-center justify-center gap-3 group"
            >
              Verificar Perfil
              <div className="w-7 h-7 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/40">
                <ArrowDown size={16} />
              </div>
            </button>
            
            <div className="w-full sm:w-auto flex flex-col items-center">
              <button 
                disabled 
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 md:py-5 rounded-2xl transition-all border-2 border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed grayscale"
              >
                 <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                    <PlayCircle size={18} fill="currentColor" />
                 </div>
                 <span className="font-bold text-sm md:text-base uppercase tracking-wider text-gray-400">Ver Backstage</span>
              </button>
              <span className="text-[10px] font-black tracking-widest text-gray-400 mt-2 uppercase bg-gray-100 px-2 py-0.5 rounded-md">Em Breve</span>
            </div>
        </div>

        {/* Centralized Visual Composition (Desktop) */}
        <div className="relative w-full max-w-6xl h-[400px] md:h-[600px] mt-4 hidden md:block animate-slide-up" style={{animationDelay: '0.4s'}}>
             
             {/* Center Main Image - Influencer Live Stream */}
             <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[300px] md:w-[400px] h-[500px] bg-black rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl z-20 hover:scale-[1.02] transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1585670210693-e7fdd16b142e?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Live Shop Setup" />
                
                {/* Improved Gradient Overlay for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
                
                {/* Live UI Overlay - High Contrast */}
                <div className="absolute bottom-8 left-6 right-6 flex flex-col items-center text-center">
                   
                   {/* User Badge */}
                   <div className="inline-flex items-center gap-3 mb-4 bg-neutral-900/90 backdrop-blur-xl px-5 py-2 rounded-full border border-white/20 shadow-xl transform hover:scale-105 transition-transform">
                      <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-zencial-pink shadow-md">
                         <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" alt="Avatar" />
                      </div>
                      <p className="text-white text-sm font-black tracking-wide">@zencial.derm</p>
                   </div>
                   
                   {/* Caption Box */}
                   <div className="bg-black/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 shadow-2xl w-full">
                      <p className="text-white text-base font-bold leading-tight drop-shadow-sm">
                        "Clica no carrinho pra garantir o seu!" 👇
                      </p>
                   </div>

                </div>

                {/* Sticker: REC */}
                <div className="absolute top-6 left-6 bg-red-600 text-white px-3 py-1 rounded-md font-black text-xs tracking-widest animate-pulse border border-white/50 shadow-lg">
                   ● LIVE
                </div>
                
                {/* Sticker: VIEWERS */}
                <div className="absolute top-6 right-6 bg-black/60 backdrop-blur text-white px-3 py-1 rounded-md font-bold text-xs tracking-wide border border-white/20 flex items-center gap-1">
                   <UsersIcon /> 12.5k
                </div>
             </div>

             {/* Left Flanking Image - Ring Light */}
             <div className="absolute left-[10%] top-20 w-64 h-80 bg-zencial-purple rounded-[2.5rem] overflow-hidden -rotate-6 border-4 border-white shadow-xl z-10 opacity-90 hover:z-30 hover:scale-110 transition-all duration-300 group">
                <img src="https://images.unsplash.com/photo-1622396636133-7c8702e68153?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover mix-blend-overlay" alt="Ring light" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <Video size={48} className="text-white opacity-60" />
                </div>
                {/* Sticker: SOLD OUT */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white px-4 py-2 rotate-[-15deg] font-black text-xl border-2 border-white shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                   ESGOTADO!
                </div>
             </div>

             {/* Right Flanking Image - Aesthetic Product */}
             <div className="absolute right-[10%] top-20 w-64 h-80 bg-pink-100 rounded-[2.5rem] overflow-hidden rotate-6 border-4 border-white shadow-xl z-10 opacity-90 hover:z-30 hover:scale-110 transition-all duration-300">
                <img src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Product" />
                <div className="absolute bottom-4 right-4 bg-white p-2 rounded-xl shadow-lg">
                   <Heart className="text-zencial-pink fill-zencial-pink" size={24} />
                </div>
                
                {/* Sticker: Chat Bubble */}
                <div className="absolute top-10 -left-10 bg-white text-black px-4 py-2 rounded-xl rounded-br-none shadow-lg animate-float flex items-center gap-2 border-2 border-gray-100">
                   <MessageCircle size={16} className="text-zencial-purple" />
                   <span className="font-bold text-sm">Eu quero! 😍</span>
                </div>
             </div>

             {/* Floating Sticker: GMV */}
             <div className="absolute bottom-32 right-[20%] z-40 bg-zencial-acid text-black px-6 py-3 rounded-full font-black text-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-[8deg] animate-float">
                GMV 🚀
             </div>

             {/* Floating Sticker: Shopping Bag */}
             <div className="absolute bottom-40 left-[15%] z-40 bg-white p-4 rounded-full border-4 border-zencial-pink shadow-xl animate-bounce">
                <div className="relative">
                   <ShoppingBag size={32} className="text-zencial-pink" />
                   <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-black w-6 h-6 flex items-center justify-center rounded-full border-2 border-white">3</div>
                </div>
             </div>

             {/* Floating Stats Card */}
             <div className="absolute top-32 left-[18%] bg-white p-4 rounded-2xl shadow-xl z-40 -rotate-3 border-2 border-gray-100 animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center gap-2">
                   <TrendingUp className="text-green-500" size={20} />
                   <span className="font-black text-zencial-dark text-lg">1.5k Views</span>
                </div>
             </div>
        </div>

        {/* Mobile Visual Placeholder */}
        <div className="md:hidden w-full max-w-[280px] xs:max-w-xs relative mt-4 mb-8 animate-slide-up">
             <div className="aspect-[3/4] bg-black rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-90" alt="Mobile Hero" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <PlayCircle size={48} className="text-white/80" />
                </div>
                <div className="absolute bottom-6 left-4 right-4">
                    <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl border border-white/20 text-center">
                       <p className="text-white font-bold text-xs">Assista ao vídeo de introdução</p>
                    </div>
                </div>
                {/* Mobile Floating Stickers */}
                <div className="absolute bottom-20 right-4 bg-white p-2 rounded-full shadow-lg animate-bounce">
                   <Heart className="text-red-500 fill-red-500" size={16} />
                </div>
             </div>
             {/* Mobile Stickers */}
             <div className="absolute -top-2 -right-2 bg-zencial-acid text-black px-3 py-1.5 rounded-full font-black text-xs border-2 border-white rotate-6 shadow-lg">
                NOVO!
             </div>
        </div>

      </div>
    </section>
  );
};

// Helper Icon for Viewers
const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

export default Hero;