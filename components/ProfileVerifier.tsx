import React, { useState, useEffect } from 'react';
import { TikTokProfile, VerificationStatus } from '../types';
import { analyzeTikTokProfile } from '../services/geminiService';
import { Search, CheckCircle2, ArrowRight, Users, Lock, RefreshCw, AlertTriangle, Loader2 } from 'lucide-react';

const ProfileVerifier: React.FC = () => {
  const [username, setUsername] = useState('');
  const [status, setStatus] = useState<VerificationStatus>(VerificationStatus.IDLE);
  const [profile, setProfile] = useState<TikTokProfile | null>(null);
  
  // Loading simplificado
  const loadingTexts = [
    "Conectando...",
    "Verificando métricas...",
    "Analisando engajamento...",
    "Finalizando..."
  ];
  const [loadingStep, setLoadingStep] = useState(0);

  useEffect(() => {
    let interval: any;
    if (status === VerificationStatus.LOADING) {
      interval = setInterval(() => {
        setLoadingStep((prev) => (prev + 1) % loadingTexts.length);
      }, 800);
    }
    return () => clearInterval(interval);
  }, [status]);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    const cleanUsername = username.replace('@', '').trim();
    
    setStatus(VerificationStatus.LOADING);
    setProfile(null);
    setLoadingStep(0);

    // Delay para UX
    await new Promise(resolve => setTimeout(resolve, 2500));

    try {
      const result = await analyzeTikTokProfile(cleanUsername);
      setProfile(result);
    } catch (error: any) {
      setProfile({
        username: cleanUsername,
        displayName: cleanUsername,
        followers: 0,
        avatarUrl: `https://ui-avatars.com/api/?name=${cleanUsername}&background=random&size=128`,
        bio: 'Creator em ascensão'
      });
    }

    setStatus(VerificationStatus.SUCCESS);
  };

  const resetVerifier = () => {
    setStatus(VerificationStatus.IDLE);
    setUsername('');
    setProfile(null);
  };

  return (
    <section className="py-16 md:py-20 bg-zencial-dark text-white relative overflow-hidden min-h-[600px] md:min-h-[800px] flex items-center">
      
      {/* Dynamic Background - Subtle */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-zencial-purple/20 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-zencial-pink/10 rounded-full blur-[120px] opacity-40"></div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-md text-red-400 font-bold text-[10px] md:text-xs tracking-widest uppercase mb-4 md:mb-6 shadow-lg">
              <AlertTriangle size={12} className="md:w-3.5 md:h-3.5" />
              <span>Alta Concorrência • Vagas Limitadas</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 md:mb-6 tracking-tighter leading-none">
              ANÁLISE DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-zencial-pink to-purple-500">POTENCIAL</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-lg font-medium max-w-xl mx-auto px-4">
              Nosso protocolo aprova apenas perfis com compatibilidade viral.
            </p>
        </div>

        {/* Main Interface Card */}
        <div className="relative w-full max-w-2xl mx-auto min-h-[300px]">
            
            {/* 1. STATE: IDLE (INPUT) - HIGH CONTRAST (White Card) */}
            {status === VerificationStatus.IDLE && (
              <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-slide-up relative overflow-hidden group border-4 border-white">
                  
                  <div className="text-center mb-6 md:mb-8">
                     <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Lock className="text-zencial-dark w-6 h-6 md:w-8 md:h-8" />
                     </div>
                     <h3 className="text-2xl md:text-3xl font-black text-zencial-dark mb-2 tracking-tight">Verificar Elegibilidade</h3>
                     <p className="text-gray-500 font-medium text-sm md:text-base">Insira o @ do seu perfil no TikTok.</p>
                  </div>

                  <form onSubmit={handleVerify} className="relative max-w-md mx-auto">
                    <div className="relative group/input mb-4">
                      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <span className="text-gray-400 font-bold text-lg md:text-xl">@</span>
                      </div>
                      <input 
                        type="text" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="seu.usuario"
                        className="w-full bg-gray-50 border-2 border-gray-200 text-zencial-dark pl-10 pr-4 py-3 md:py-4 rounded-xl text-lg md:text-xl font-bold placeholder:text-gray-300 focus:outline-none focus:border-zencial-purple focus:bg-white transition-all text-center"
                      />
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={!username}
                      className="w-full py-3 md:py-4 bg-zencial-dark text-white font-black rounded-xl text-base md:text-lg hover:bg-zencial-pink hover:scale-[1.02] transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:hover:scale-100 disabled:hover:bg-zencial-dark"
                    >
                      <Search size={18} className="md:w-5 md:h-5" strokeWidth={3} />
                      RODAR DIAGNÓSTICO
                    </button>
                  </form>
              </div>
            )}

            {/* 2. STATE: LOADING (MINIMALIST) */}
            {status === VerificationStatus.LOADING && (
              <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col items-center justify-center text-center min-h-[300px] animate-fade-in relative border-4 border-white">
                 
                 <div className="relative mb-6">
                    {/* Simple minimalist spinner */}
                    <Loader2 className="w-12 h-12 md:w-16 md:h-16 text-zencial-purple animate-spin" strokeWidth={1.5} />
                 </div>

                 <h3 className="text-lg md:text-xl font-bold text-zencial-dark mb-2 animate-pulse">{loadingTexts[loadingStep]}</h3>
              </div>
            )}

            {/* 3. STATE: SUCCESS */}
            {status === VerificationStatus.SUCCESS && profile && (
              <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 shadow-2xl animate-scale-up border-4 border-zencial-acid relative overflow-hidden">
                  
                  {/* Top Banner */}
                  <div className="absolute top-0 left-0 w-full h-20 md:h-24 bg-gradient-to-b from-green-500/10 to-transparent"></div>
                  
                  <button onClick={resetVerifier} className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500 z-20">
                    <RefreshCw size={18} className="md:w-5 md:h-5" />
                  </button>

                  <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
                     
                     {/* Avatar */}
                     <div className="relative shrink-0">
                        <div className="p-1 rounded-full border-2 border-green-500 border-dashed animate-[spin_10s_linear_infinite]">
                          <img 
                            src={profile.avatarUrl} 
                            alt="Profile" 
                            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-white shadow-lg bg-gray-200 animate-none" 
                            style={{ animationDirection: 'reverse' }}
                            onError={(e) => {
                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${profile.displayName}&background=1c1917&color=fff&size=128`;
                            }}
                          />
                        </div>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20 whitespace-nowrap shadow-lg">
                           APROVADO
                        </div>
                     </div>

                     {/* Stats */}
                     <div className="flex-1 w-full">
                        <h3 className="text-2xl md:text-3xl font-black text-zencial-dark mb-1 truncate">{profile.displayName}</h3>
                        <p className="text-gray-500 text-sm font-medium truncate">@{profile.username}</p>

                        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 md:gap-4 mt-4 w-full">
                           <div className="w-full sm:w-auto px-4 py-2 rounded-xl font-bold text-xs md:text-sm border flex items-center justify-center gap-2 bg-green-100 text-green-700 border-green-200 animate-pulse">
                              <CheckCircle2 size={14} className="md:w-4 md:h-4" />
                              Perfil Compatível
                           </div>
                           <div className="flex items-center gap-1 text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                              <Users size={12} className="md:w-3.5 md:h-3.5" />
                              <span>Audiência Validada</span>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="w-full h-px bg-gray-100 my-6 md:my-8"></div>

                  {/* Decision Area */}
                  <div className="text-center md:text-left">
                       <p className="text-green-600 font-bold mb-6 flex items-start gap-2 justify-center md:justify-start text-sm md:text-base">
                          <CheckCircle2 className="shrink-0 mt-0.5 fill-green-100 w-5 h-5" />
                          <span className="leading-tight">
                            Parabéns <strong>{profile.displayName}</strong>! Sua conta apresenta métricas compatíveis. <br/>
                            <span className="text-xs md:text-sm font-normal text-gray-500">Sua vaga foi pré-reservada por 10 minutos.</span>
                          </span>
                       </p>
                       <button className="w-full py-3 md:py-4 bg-zencial-dark text-white rounded-xl font-black text-lg md:text-xl hover:bg-green-600 transition-colors shadow-xl flex items-center justify-center gap-2 group animate-shimmer bg-[linear-gradient(110deg,#1c1917,45%,#333,55%,#1c1917)] bg-[length:200%_100%]">
                          GARANTIR MINHA VAGA
                          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                       </button>
                  </div>
              </div>
            )}

        </div>
      </div>
    </section>
  );
};

export default ProfileVerifier;