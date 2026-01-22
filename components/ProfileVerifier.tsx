
import React, { useState, useRef, useEffect } from 'react';
import { 
  Instagram, 
  DollarSign, 
  Users, 
  Clock, 
  Phone, 
  Mail, 
  User, 
  CreditCard, 
  MapPin, 
  CheckCircle, 
  Loader2,
  Send,
  ArrowRight,
  AlertTriangle,
  Search,
  Lock,
  Sparkles,
  Trophy
} from 'lucide-react';
import { AlignmentScore, VerificationStatus } from '../types';

const ProfileVerifier: React.FC = () => {
  const [username, setUsername] = useState('');
  const [status, setStatus] = useState<VerificationStatus>(VerificationStatus.IDLE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtherInput, setShowOtherInput] = useState(false);
  
  // Refs for form handling
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const submittedRef = useRef(false);

  const loadingTexts = [
    "Iniciando varredura de metadados...",
    "Analisando engajamento médio...",
    "Validando compatibilidade com TikTok Shop...",
    "Processando score de autoridade...",
    "Finalizando diagnóstico Zencial..."
  ];
  const [loadingStep, setLoadingStep] = useState(0);

  useEffect(() => {
    let interval: any;
    if (status === VerificationStatus.LOADING) {
      interval = setInterval(() => {
        setLoadingStep((prev) => {
          if (prev >= loadingTexts.length - 1) {
            clearInterval(interval);
            setTimeout(() => setStatus(VerificationStatus.SUCCESS), 800);
            return prev;
          }
          return prev + 1;
        });
      }, 1200);
    }
    return () => clearInterval(interval);
  }, [status]);

  const handleStartDiagnostic = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;
    setStatus(VerificationStatus.LOADING);
    setLoadingStep(0);
  };

  const handleFormSubmit = () => {
  submittedRef.current = true;
  setIsSubmitting(true);
};

  const handleIframeLoad = () => {
  if (!submittedRef.current) return;

  submittedRef.current = false;
  setIsSubmitting(false);
  setStatus(VerificationStatus.FINISHED);

  window.scrollTo({
    top: document.getElementById('verify')?.offsetTop || 0,
    behavior: 'smooth'
  });
};

  const handleOtherCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowOtherInput(e.target.checked);
  };

  return (
    <section id="verify" className="py-16 md:py-32 bg-zencial-dark relative overflow-hidden flex flex-col items-center min-h-[800px]">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-zencial-purple/20 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-zencial-pink/10 rounded-full blur-[120px] opacity-40"></div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        
        {/* Step 0: IDLE (Username Input) */}
        {status === VerificationStatus.IDLE && (
          <div className="text-center animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-md text-red-400 font-bold text-[10px] md:text-xs tracking-widest uppercase mb-8 shadow-lg">
              <AlertTriangle size={12} className="md:w-3.5 md:h-3.5" />
              <span>Alta Concorrência • Zencial Creators 2026</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-none uppercase">
              ANÁLISE DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-zencial-pink to-purple-500">POTENCIAL</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12">
              Verifique se seu perfil é compatível com o ecossistema Zencial antes de prosseguir com sua candidatura.
            </p>

            <div className="max-w-xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative border-4 border-white overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-zencial-pink to-zencial-purple"></div>
               <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Lock className="text-zencial-dark w-8 h-8" />
               </div>
               <h3 className="text-2xl font-black text-zencial-dark mb-8">Validar @Username</h3>
               
               <form onSubmit={handleStartDiagnostic} className="space-y-4">
                  <div className="relative">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 font-black text-2xl">@</span>
                    <input 
                      required
                      type="text" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="seu.perfil"
                      className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl pl-12 pr-6 py-5 text-xl font-black text-zencial-dark focus:border-zencial-purple focus:outline-none transition-all placeholder:text-gray-200"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-zencial-dark text-white py-5 rounded-2xl font-black text-lg hover:bg-zencial-pink hover:scale-[1.02] transition-all flex items-center justify-center gap-3 shadow-xl group"
                  >
                    RODAR DIAGNÓSTICO
                    <Search size={20} className="group-hover:rotate-12 transition-transform" />
                  </button>
               </form>
            </div>
          </div>
        )}

        {/* Step 1: LOADING (Diagnostic) */}
        {status === VerificationStatus.LOADING && (
          <div className="flex flex-col items-center justify-center py-20 text-center animate-scale-up">
             <div className="relative mb-12">
                <div className="w-32 h-32 md:w-40 md:h-40 border-4 border-white/10 rounded-full flex items-center justify-center">
                   <Loader2 size={64} className="text-zencial-acid animate-spin" strokeWidth={1} />
                </div>
                <div className="absolute inset-0 bg-zencial-acid/10 rounded-full blur-2xl animate-pulse"></div>
             </div>
             <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tighter">
                {loadingTexts[loadingStep]}
             </h3>
             <p className="text-zencial-acid font-bold tracking-[0.2em] text-xs uppercase animate-pulse">
                Processando dados em tempo real...
             </p>
          </div>
        )}

        {/* Step 2: SUCCESS (Approval + Form) */}
        {status === VerificationStatus.SUCCESS && (
          <div className="animate-slide-up">
            <div className="text-center mb-12">
               <div className="w-20 h-20 bg-zencial-acid rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(190,242,100,0.4)]">
                  <Sparkles size={40} className="text-zencial-dark animate-float" />
               </div>
               <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase leading-none">
                  PERFIL <span className="text-zencial-acid">APROVADO!</span>
               </h2>
               <p className="text-gray-300 text-lg font-medium max-w-2xl mx-auto">
                  Parabéns! Seu perfil <strong>@{username}</strong> foi aprovado pelo protocolo Zencial 2026. Agora precisamos dos seus dados para oficializar sua entrada no time.
               </p>
            </div>

            <div className="w-full bg-white/95 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-12 shadow-2xl border border-white/60 relative overflow-hidden text-zencial-dark">
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-zencial-acid via-zencial-purple to-zencial-pink"></div>

              <iframe 
                name="hidden_iframe" 
                id="hidden_iframe" 
                style={{ display: 'none' }} 
                ref={iframeRef}
                onLoad={handleIframeLoad}
              />

              <form
                ref={formRef}
                action="https://docs.google.com/forms/d/e/1FAIpQLScKFTq-9Y0m8jlJHw5aVDR9_xE2-vG0et2HEQt4prz3N3Lx9w/formResponse"
                method="POST"
                target="hidden_iframe"
                className="space-y-10"
                onSubmit={handleFormSubmit}
                style={{ display: status === VerificationStatus.SUCCESS ? 'block' : 'none' }}
              >
                
                {/* Pre-filled TikTok User from Diagnostic */}
                <input type="hidden" name="entry.420225288" value={`@${username}`} />

                {/* Profile Focus */}
                <div className="space-y-4">
                  <label className="text-lg font-bold text-zencial-dark block">
                    Seu perfil é primariamente focado em: <span className="text-sm font-normal text-zencial-dark/50 block mt-1">(escolha o que melhor se aplica)</span>
                  </label>
                  <div className="space-y-3">
                    {['Vendas/Afiliado (TikTok Shop)', 'Criação de Conteúdo (Influencer)'].map((val) => (
                      <label key={val} className="group relative flex items-center p-5 gap-5 bg-white border-2 border-zencial-lilac rounded-2xl cursor-pointer hover:border-zencial-purple/50 transition-all shadow-sm has-[:checked]:bg-zencial-purple has-[:checked]:border-zencial-purple has-[:checked]:text-white has-[:checked]:shadow-lg has-[:checked]:scale-[1.01]">
                        <input type="checkbox" name="entry.289063220" value={val} className="w-5 h-5 appearance-none border-2 border-zencial-purple rounded bg-transparent checked:bg-zencial-acid checked:border-white shrink-0 relative" />
                        <span className="font-semibold">{val}</span>
                      </label>
                    ))}
                    <div className="w-full">
                      <label className="group relative flex items-center p-5 gap-5 bg-white border-2 border-zencial-lilac rounded-2xl cursor-pointer hover:border-zencial-purple/50 transition-all shadow-sm has-[:checked]:bg-zencial-purple has-[:checked]:border-zencial-purple has-[:checked]:text-white has-[:checked]:shadow-lg has-[:checked]:scale-[1.01]">
                        <input 
                          type="checkbox" 
                          name="entry.289063220" 
                          value="__other_option__" 
                          className="w-5 h-5 appearance-none border-2 border-zencial-purple rounded bg-transparent checked:bg-zencial-acid checked:border-white shrink-0 relative"
                          onChange={handleOtherCheckboxChange}
                        />
                        <span className="font-semibold">Outro</span>
                      </label>
                      {showOtherInput && (
                        <div className="mt-3 ml-4 animate-slide-up">
                            <input type="text" name="entry.289063220.other_option_response" placeholder="Por favor, especifique..." className="w-full bg-white border-2 border-zencial-lilac focus:border-zencial-purple focus:ring-0 rounded-xl px-4 py-3 text-zencial-dark font-medium outline-none transition-all placeholder:text-zencial-dark/30 shadow-inner" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Followers */}
                <div className="space-y-4">
                  <label className="text-lg font-bold text-zencial-dark block flex items-center gap-2">
                    <Users className="w-5 h-5 text-zencial-purple" />
                    Número de seguidores no perfil principal:
                  </label>
                  <div className="space-y-3">
                    {['Menos de 1.000', '1.000 a 10.000', '10.001 a 50.000', '50.001 a 100.000', 'Mais de 100.000'].map((val) => (
                      <label key={val} className="group relative flex items-center p-5 gap-5 bg-white border-2 border-zencial-lilac rounded-2xl cursor-pointer hover:border-zencial-purple/50 transition-all shadow-sm has-[:checked]:bg-zencial-purple has-[:checked]:border-zencial-purple has-[:checked]:text-white has-[:checked]:shadow-lg has-[:checked]:scale-[1.01]">
                        <input type="radio" name="entry.1795318546" value={val} className="w-5 h-5 appearance-none border-2 border-zencial-purple rounded-full bg-transparent checked:bg-zencial-acid checked:border-white shrink-0" />
                        <span className="font-semibold">{val}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* GMV */}
                <div className="space-y-4">
                  <label className="text-lg font-bold text-zencial-dark flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-zencial-purple" />
                    GMV: Quanto você já faturou no TikTok Shop? <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    {['Ainda não faturei', 'Até R$500', 'R$ 500 - R$ 5K', 'R$ 5k - R$ 20K', 'R$ 20k - R$ 100K', 'Mais de R$ 100K'].map((val) => (
                      <label key={val} className="group relative flex items-center p-5 gap-5 bg-white border-2 border-zencial-lilac rounded-2xl cursor-pointer hover:border-zencial-purple/50 transition-all shadow-sm has-[:checked]:bg-zencial-purple has-[:checked]:border-zencial-purple has-[:checked]:text-white has-[:checked]:shadow-lg has-[:checked]:scale-[1.01]">
                        <input required type="radio" name="entry.1605373864" value={val} className="w-5 h-5 appearance-none border-2 border-zencial-purple rounded-full bg-transparent checked:bg-zencial-acid checked:border-white shrink-0" />
                        <span className="font-semibold">{val}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Alignment Score */}
                <div className="space-y-4">
                  <label className="text-lg font-bold text-zencial-dark block">
                    Escala de alinhamento com a marca (1-5):
                  </label>
                  <div className="flex flex-col sm:flex-row items-center justify-between bg-white border-2 border-zencial-lilac p-6 rounded-2xl gap-4 shadow-sm">
                    <span className="text-sm font-bold text-zencial-dark/60">Não alinhado</span>
                    <div className="flex gap-4 sm:gap-6">
                      {[AlignmentScore.ONE, AlignmentScore.TWO, AlignmentScore.THREE, AlignmentScore.FOUR, AlignmentScore.FIVE].map((score) => (
                        <label key={score} className="group relative w-12 h-12 rounded-full border-2 border-zencial-purple bg-white flex items-center justify-center cursor-pointer transition-all hover:border-zencial-purple hover:bg-zencial-lilac has-[:checked]:bg-zencial-purple has-[:checked]:border-zencial-purple has-[:checked]:scale-110 has-[:checked]:shadow-lg">
                          <span className="text-lg font-bold text-zencial-purple group-hover:text-zencial-purple group-has-[:checked]:text-white z-10 transition-colors">{score}</span>
                          <input type="radio" name="entry.1903120755" value={score} className="sr-only" />
                        </label>
                      ))}
                    </div>
                    <span className="text-sm font-bold text-zencial-dark/60">Muito alinhado</span>
                  </div>
                </div>

                {/* Contact & Personal Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zencial-dark/50 ml-1 flex items-center gap-2"><Phone className="w-3 h-3" />WhatsApp (com DDD)</label>
                    <input required name="entry.1398262622" type="text" className="w-full bg-white border-2 border-zencial-lilac focus:border-zencial-purple focus:ring-0 rounded-2xl px-5 py-4 text-zencial-dark font-semibold outline-none transition-all placeholder:text-zencial-dark/20" placeholder="(11) 99999-9999" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zencial-dark/50 ml-1 flex items-center gap-2"><Mail className="w-3 h-3" />E-mail</label>
                    <input required name="entry.1114466917" type="email" className="w-full bg-white border-2 border-zencial-lilac focus:border-zencial-purple focus:ring-0 rounded-2xl px-5 py-4 text-zencial-dark font-semibold outline-none transition-all placeholder:text-zencial-dark/20" placeholder="seu@email.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zencial-dark/50 ml-1 flex items-center gap-2"><User className="w-3 h-3" />Nome completo <span className="text-red-500">*</span></label>
                    <input required name="entry.740893737" type="text" className="w-full bg-white border-2 border-zencial-lilac focus:border-zencial-purple focus:ring-0 rounded-2xl px-5 py-4 text-zencial-dark font-semibold outline-none transition-all placeholder:text-zencial-dark/20" placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zencial-dark/50 ml-1 flex items-center gap-2"><CreditCard className="w-3 h-3" />CPF <span className="text-red-500">*</span></label>
                    <input required name="entry.2068450154" type="text" className="w-full bg-white border-2 border-zencial-lilac focus:border-zencial-purple focus:ring-0 rounded-2xl px-5 py-4 text-zencial-dark font-semibold outline-none transition-all placeholder:text-zencial-dark/20" placeholder="000.000.000-00" />
                  </div>
                </div>

                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-zencial-dark/50 ml-1 flex items-center gap-2"><MapPin className="w-3 h-3" />Endereço Completo <span className="text-red-500">*</span></label>
                   <textarea required name="entry.477343998" rows={3} className="w-full bg-white border-2 border-zencial-lilac focus:border-zencial-purple focus:ring-0 rounded-2xl px-5 py-4 text-zencial-dark font-semibold outline-none transition-all placeholder:text-zencial-dark/20 resize-none" placeholder="Rua, Número, CEP, Cidade/Estado" />
                </div>

                <div className="pt-2">
                  <label className="group flex items-start p-5 bg-white border-2 border-zencial-lilac rounded-xl cursor-pointer hover:border-zencial-purple/50 transition-all shadow-sm has-[:checked]:bg-zencial-purple has-[:checked]:border-zencial-purple has-[:checked]:text-white gap-5">
                    <input required type="checkbox" name="entry.1640016365" className="mt-1 w-5 h-5 appearance-none border-2 border-zencial-purple rounded bg-transparent checked:bg-zencial-acid checked:border-white shrink-0 transition-colors" />
                    <span className="text-sm font-medium leading-relaxed opacity-80 group-has-[:checked]:opacity-100">
                      Li e aceito os Termos de Uso e Política de Privacidade, incluindo a liberação do uso da minha imagem e voz para fins de marketing. <span className="text-red-500 group-has-[:checked]:text-zencial-acid">*</span>
                    </span>
                  </label>
                </div>

                <div className="pt-6">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-zencial-purple hover:bg-zencial-dark text-white font-black text-lg py-5 rounded-2xl shadow-xl shadow-zencial-purple/20 transition-all flex items-center justify-center gap-3 disabled:opacity-70 group"
                  >
                    {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : <>ENVIAR INSCRIÇÃO AGORA <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Step 3: FINISHED (Success & Redirection) */}
        {status === VerificationStatus.FINISHED && (
          <div className="w-full max-w-2xl mx-auto animate-scale-up text-center">
             <div className="bg-white rounded-[2.5rem] p-12 shadow-2xl border-4 border-zencial-acid relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-zencial-acid"></div>
                
                <div className="w-24 h-24 bg-zencial-acid rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-zencial-acid/20 animate-float">
                  <Trophy className="w-12 h-12 text-zencial-dark" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black text-zencial-dark mb-4 tracking-tight uppercase">Inscrição Concluída!</h3>
                <p className="text-gray-500 text-lg mb-10 font-medium leading-relaxed">
                  Você concluiu o seu formulário com sucesso. Agora você faz parte do ecossistema Zencial. Acesse nossa plataforma para acompanhar seus dados e comissões.
                </p>
                
                <a 
                  href="https://growi.io/o/zencial-cc6eabd7/c/25675?language=en&method=username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-zencial-dark text-white rounded-2xl font-black text-xl hover:bg-zencial-purple hover:scale-105 transition-all shadow-2xl group"
                >
                  ACESSAR PLATAFORMA
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </a>
             </div>
             <p className="mt-8 text-gray-500 font-bold uppercase tracking-widest text-xs">
                © 2026 ZENCIAL CREATORS • BEM-VINDO AO TOPO
             </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProfileVerifier;
