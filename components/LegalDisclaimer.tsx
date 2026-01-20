import React from 'react';
import { AlertCircle } from 'lucide-react';

const LegalDisclaimer: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-6 items-start">
           
           <div className="shrink-0 p-3 bg-gray-200 rounded-full text-gray-500 hidden md:block">
              <AlertCircle size={24} />
           </div>

           <div className="space-y-4 text-xs md:text-sm text-gray-500 leading-relaxed text-justify md:text-left">
              <h4 className="font-black text-gray-700 uppercase tracking-widest text-xs mb-2">
                 Termos e Condições da Campanha Safra 2025
              </h4>
              <p>
                 <strong>1. Alteração de Benefícios:</strong> A Zencial reserva-se o direito de alterar, substituir, suspender ou cancelar quaisquer prêmios físicos, bônus monetários, percentuais de comissão e critérios de qualificação apresentados nesta página a qualquer momento, sem aviso prévio. Os prêmios exibidos são ilustrativos e dependem da disponibilidade de estoque no momento da conquista. Em caso de indisponibilidade, o prêmio será substituído por outro de valor equivalente ou superior.
              </p>
              <p>
                 <strong>2. Regras de GMV (Gross Merchandise Value):</strong> O cálculo do GMV para mudança de nível considera apenas vendas confirmadas e não devolvidas (net sales). Vendas canceladas ou fraudulentas serão descontadas. A Zencial utiliza os dados oficiais fornecidos pela API do TikTok Shop para apuração.
              </p>
              <p>
                 <strong>3. Vínculo:</strong> A participação no programa de creators não estabelece vínculo empregatício (CLT) entre a creator e a Zencial. A relação é estritamente comercial/parceria de afiliação.
              </p>
           </div>

        </div>
      </div>
    </section>
  );
};

export default LegalDisclaimer;