import React from 'react';
import Hero from './components/Hero';
import AboutProject from './components/AboutProject';
import ProfileVerifier from './components/ProfileVerifier';
import CareerPath from './components/CareerPath';
import Recognition from './components/Recognition';
import EarningsInfo from './components/EarningsInfo';
import FAQ from './components/FAQ';
import LegalDisclaimer from './components/LegalDisclaimer';
import { Zap } from 'lucide-react';

function App() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-zencial-lilac via-purple-50 to-pink-50">
      
       {/* Infinite Marquee Ticker */}
       <div className="fixed top-0 left-0 w-full z-[60] bg-zencial-dark border-b border-white/10">
          <div className="relative flex overflow-x-hidden py-3">
              <div className="py-1 animate-marquee whitespace-nowrap flex gap-8 items-center">
                  {[...Array(5)].map((_, i) => (
                    <div key={`t1-${i}`} className="flex items-center gap-8 px-4">
                       <span className="font-bold uppercase tracking-widest text-sm text-zencial-acid">LIVE COMMERCE</span>
                       <Zap size={14} className="text-white/50" />
                       <span className="font-bold uppercase tracking-widest text-sm text-white">CREATOR ECONOMY</span>
                       <Zap size={14} className="text-white/50" />
                       <span className="font-bold uppercase tracking-widest text-sm text-zencial-pink">VAGAS ABERTAS</span>
                       <Zap size={14} className="text-white/50" />
                    </div>
                  ))}
              </div>
              <div className="absolute top-0 py-3 animate-marquee2 whitespace-nowrap flex gap-8 items-center">
                  {[...Array(5)].map((_, i) => (
                    <div key={`t2-${i}`} className="flex items-center gap-8 px-4">
                       <span className="font-bold uppercase tracking-widest text-sm text-zencial-acid">LIVE COMMERCE</span>
                       <Zap size={14} className="text-white/50" />
                       <span className="font-bold uppercase tracking-widest text-sm text-white">CREATOR ECONOMY</span>
                       <Zap size={14} className="text-white/50" />
                       <span className="font-bold uppercase tracking-widest text-sm text-zencial-pink">VAGAS ABERTAS</span>
                       <Zap size={14} className="text-white/50" />
                    </div>
                  ))}
              </div>
          </div>
       </div>

       {/* Content Wrapper - No Headers, No Navbars */}
       <main className="pb-0 pt-10 md:pt-16">
        <div id="hero">
          <Hero onScrollToVerify={() => scrollTo('verify')} />
        </div>
        <div id="about">
          <AboutProject />
        </div>
        <div id="verify">
          <ProfileVerifier />
        </div>
        <div id="career">
          <CareerPath />
        </div>
        
        {/* RECOGNITION SECTION */}
        <div id="recognition">
           <Recognition />
        </div>

        <div id="earnings">
          <EarningsInfo />
        </div>
        
        {/* FAQ & DISCLAIMER - End of Page */}
        <FAQ />
        <LegalDisclaimer />
       </main>

    </div>
  );
}

export default App;