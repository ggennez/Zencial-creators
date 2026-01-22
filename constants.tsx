
import { CareerLevel } from './types';
import { Gift, GraduationCap, Users, Trophy } from 'lucide-react';
import React from 'react';

export const CAREER_LEVELS: CareerLevel[] = [
  {
    level: 1,
    title: "Afiliada Starter",
    description: "GMV: até 50K",
    benefits: ["20% de Comissão", "Prêmio: Kit Zencial", "Acesso ao programa"],
    // Represents the unboxing of the first kit
    image: "https://cdn.shopify.com/s/files/1/0673/0950/2681/files/freepik__aplique-a-zencialbox-trocando-as-caixas-aplique-a-__64733.png?v=1769096009?q=80&w=1200&auto=format&fit=crop", 
    progress: 10
  },
  {
    level: 2,
    title: "Afiliada Growth",
    description: "GMV: 50k",
    benefits: ["20% + 1% de Comissão", "Prêmio: Placa de Reconhecimento"],
    // Represents a more professional home studio setup
    image: "https://cdn.shopify.com/s/files/1/0673/0950/2681/files/freepik__faa-a-moa-segurando-uma-pequena-zencialbox-a-cena-__64736.png?v=1769096009?q=80&w=1200&auto=format&fit=crop",
    progress: 20
  },
  {
    level: 3,
    title: "High Performer",
    description: "GMV: 100k",
    benefits: ["21% + 1% de Comissão", "Prêmio: Placa High Performer + Destaque", "Prêmio: Microfone"],
    // Represents live streaming and professional gear
    image: "https://cdn.shopify.com/s/files/1/0673/0950/2681/files/freepik__troque-o-controle-por-uma-zencialbox-pequena-troqu__64734.png?v=1769096009?q=80&w=1200&auto=format&fit=crop",
    progress: 35
  },
  {
    level: 4,
    title: "Elite Performer",
    description: "GMV 500k",
    benefits: ["22% + 1% de Comissão", "Prêmio: Placa Elite Performer", "Acesso Prioritário"],
    // Represents sophisticated fashion/influencer photography
    image: "https://cdn.shopify.com/s/files/1/0673/0950/2681/files/freepik__remova-os-papeis-marrons-de-dentro-da-caixa-brtroq__83786.png?v=1769096237?q=80&w=1200&auto=format&fit=crop",
    progress: 50
  },
  {
    level: 5,
    title: "Creator Pro",
    description: "GMV: 1M",
    benefits: ["23% + 2% de Comissão", "Prêmio: Placa Creator Pro", "Prêmio: iPhone + Selo Oficial"],
    // Represents tech luxury (iPhone/Vlogging gear)
    image: "https://cdn.shopify.com/s/files/1/0673/0950/2681/files/freepik__quero-uma-cena-semelhante-mas-com-outra-modelo-e-o__47573.png?v=1769096009?q=80&w=1200&auto=format&fit=crop",
    progress: 65
  },
  {
    level: 6,
    title: "Embaixadora",
    description: "GMV: 5M",
    benefits: ["25% + 2% de Comissão", "Prêmio: Placa Embaixadora", "Prêmio: Resort no Nordeste"],
    // Represents luxury resort and travel
    image: "https://cdn.shopify.com/s/files/1/0673/0950/2681/files/freepik__text-to-image__64737.png?v=1769096009?q=80&w=1200&auto=format&fit=crop",
    progress: 80
  },
  {
    level: 7,
    title: "Elite Zencial",
    description: "GMV: 10M",
    benefits: ["Comissão Pro Vigente", "Prêmio: Placa Elite", "Prêmio: Viagem para Maldivas"],
    // Represents international high-end travel (Maldives)
    image: "https://cdn.shopify.com/s/files/1/0673/0950/2681/files/freepik__troque-a-bota-por-uma-zencialbox-pequena-troque-a-__64735.png?v=1769096009?q=80&w=1200&auto=format&fit=crop",
    progress: 90
  },
  {
    level: 8,
    title: "Extraordinária",
    description: "GMV: 50M+",
    benefits: ["Comissão Máxima", "Prêmio: Placa Ícone", "Prêmio: Carro de Luxo"],
    // Represents the pinnacle of success (Luxury automotive/Icon status)
    image: "https://cdn.shopify.com/s/files/1/0673/0950/2681/files/freepik__quero-uma-cena-semelhante-mas-com-outra-modelo-em-__47574.png?v=1769096009?q=80&w=1200&auto=format&fit=crop",
    progress: 100
  }
];

export const BENEFITS_ICONS = [
  {
    icon: <Gift className="w-8 h-8 text-zencial-pink" />,
    title: "Prêmios a cada passo",
    desc: "A cada nível conquistado, você destrava um prêmio físico e aumenta sua % de comissão."
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-zencial-pink" />,
    title: "Zencial Academy",
    desc: "Cursos gratuitos de vendas, copywriting e produção de conteúdo para você vender mais."
  },
  {
    icon: <Users className="w-8 h-8 text-zencial-pink" />,
    title: "Comunidade VIP",
    desc: "Troca de experiências, eventos exclusivos e reconhecimento por resultados."
  },
  {
    icon: <Trophy className="w-8 h-8 text-zencial-pink" />,
    title: "Foco em GMV",
    desc: "Likes são vaidade. Venda é sanidade. Seu crescimento depende apenas do seu faturamento."
  }
];
