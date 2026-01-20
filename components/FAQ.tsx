import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const QUESTIONS = [
  {
    q: "Preciso pagar ou comprar um kit para entrar?",
    a: "Não. A Zencial é uma marca nativa digital e não cobramos taxa de adesão. Nosso modelo é baseado em performance: você vende e ganha comissão. Para creators iniciantes (Nível 1), disponibilizamos um banco de ativos digitais (vídeos e fotos) para você começar a postar sem precisar ter o produto físico em mãos imediatamente."
  },
  {
    q: "Como recebo os produtos em casa?",
    a: "O envio de produtos físicos gratuitos (PR Kits) começa a partir do Nível 2 (Rising Star). Ao atingir as primeiras metas de GMV (vendas), você desbloqueia o envio do kit para produção de conteúdo original. Creators de alta performance recebem lançamentos em primeira mão."
  },
  {
    q: "O que acontece se eu não bater a meta do mês?",
    a: "Fique tranquila, você não perde seu cadastro. O programa foi desenhado para você crescer no seu ritmo. Se não bater a meta de GMV para subir de nível, você apenas permanece no nível atual. Não há 'rebaixamento' nem multas."
  },
  {
    q: "Como funcionam os pagamentos?",
    a: "Existem duas fontes de renda: 1) A Comissão por Venda é processada automaticamente pelo TikTok Shop e cai na sua conta vinculada à plataforma. 2) Os Prêmios Físicos e Bônus Extra de Campanha são geridos pela Zencial e enviados/pagos após o fechamento do mês contábil."
  },
  {
    q: "Preciso ter CNPJ?",
    a: "Para o nível Starter e Rising Star, você pode atuar como Pessoa Física (CPF) recebendo pelo TikTok. A partir do nível Embaixadora, onde os valores costumam ser mais altos, recomendamos e orientamos a abertura de MEI para melhor gestão fiscal, mas não é obrigatório para o cadastro inicial."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-zencial-lilac rounded-full mb-6">
             <HelpCircle className="text-zencial-purple" size={32} />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-zencial-dark tracking-tighter mb-4">
            DÚVIDAS <span className="text-zencial-purple">FREQUENTES</span>
          </h2>
          <p className="text-gray-500 font-bold text-lg">
            Tudo o que você precisa saber antes de dar o play.
          </p>
        </div>

        <div className="space-y-4">
          {QUESTIONS.map((item, index) => (
            <div 
              key={index} 
              className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 bg-white ${
                openIndex === index 
                  ? 'border-zencial-purple shadow-lg scale-[1.01]' 
                  : 'border-gray-100 hover:border-zencial-purple/40 hover:shadow-md hover:scale-[1.005]'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left bg-white hover:bg-gray-50/50 transition-colors"
              >
                <span className={`font-black text-lg md:text-xl pr-8 transition-colors ${openIndex === index ? 'text-zencial-purple' : 'text-zencial-dark'}`}>
                  {item.q}
                </span>
                <div className={`p-2 rounded-full transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-zencial-purple text-white rotate-180' 
                    : 'bg-gray-100 text-gray-400 hover:bg-zencial-lilac hover:text-zencial-purple'
                }`}>
                   {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 md:p-8 pt-0 text-gray-600 font-medium leading-relaxed border-t border-transparent">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;