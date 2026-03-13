import { CareerLevel } from './types';
import { Gift, GraduationCap, Users, Trophy } from 'lucide-react';
import React from 'react';

export const CAREER_LEVELS: CareerLevel[] = [
  {
    level: 1,
    title: "Starter",
    description: "GMV: até 50K",
    benefits: [
      "15% de Comissão",
      "Prêmio: Kit Zencial",
      "Acesso ao programa"
    ],
    image: "https://cdn.shopify.com/s/files/1/0673/0950/2681/files/freepik__aplique-a-zencialbox-trocando-as-caixas-aplique-a-__64733.png?v=1769096009?q=80&w=1200&auto=format&fit=crop",
    progress: 10
  },
  {
    level: 2,
    title: "Growth Creator",
    description: "GMV: acima de 50K",
    benefits: [
      "15% + 1% de Comissão",
      "Prêmio: Placa de Reconhecimento"
    ],
    image: "https://cdn.shopify.com/s/files/1/0673/0950/2681/files/freepik__faa-a-moa-segurando-uma-pequena-zencialbox-a-cena-__64736.png?v=1769096009?q=80&w=1200&auto=format&fit=crop",
    progress: 20
  },
  {
    level: 3,
    title: "Creator Pro",
    description: "GMV: acima de 100K",
    benefits: [
      "19% + 1% de Comissão (20% total)",
      "Prêmio: Placa Creator Pro + Destaque",
      "Prêmio: Garrafa Térmica Creator"
    ],
    image: "https://cdn.shopify.com/s/files/1/0673/0950/2681/files/freepik__troque-o-controle-por-uma-zencialbox-pequena-troqu__64734.png?v=1769096009?q=80&w=1200&auto=format&fit=crop",
    progress: 35
  },
  {
    level: 4,
    title: "Elite Creator",
    description: "GMV: acima de 500K",
    benefits: [
      "17% + 1% de Comissão",
      "Prêmio: Placa Elite Creator",
      "Prêmio: Microfone"
    ],
    image: "https://cdn.shopify.com/s/files/1/0673/0950/2681/files/freepik__remova-os-papeis-marrons-de-dentro-da-caixa-brtroq__83786.png?v=1769096237?q=80&w=1200&auto=format&fit=crop",
    progress: 50
  },
  {
    level: 5,
    title: "Zencial Elite",
    description: "GMV: acima de 1M",
    benefits: [
      "18% + 1% de Comissão",
      "Prêmio: Placa Zencial Elite",
      "Acesso Prioritário"
    ],
    image: "https://cdn.shopify.com/s/files/1/0673/0950/2681/files/freepik__quero-uma-cena-semelhante-mas-com-outra-modelo-e-o__47573.png?v=1769096009?q=80&w=1200&auto=format&fit=crop",
    progress: 65
  },
  {
    level: 6,
    title: "Embaixadora Zencial",
    description: "GMV: acima de 5M",
    benefits: [
      "19% + 1% de Comissão",
      "Prêmio: Placa Embaixadora Zencial",
      "Prêmio: Resort no Nordeste"
    ],
    image: "https://cdn.shopify.com/s/files/1/0673/0950/2681/files/freepik__text-to-image__64737.png?v=1769096009?q=80&w=1200&auto=format&fit=crop",
    progress: 80
  },
  {
    level: 7,
    title: "Icon Creator",
    description: "GMV: acima de 10M",
    benefits: [
      "Prêmio: Placa Icon Creator",
      "Prêmio: Viagem para Maldivas"
    ],
    image: "https://cdn.shopify.com/s/files/1/0673/0950/2681/files/freepik__troque-a-bota-por-uma-zencialbox-pequena-troque-a-__64735.png?v=1769096009?q=80&w=1200&auto=format&fit=crop",
    progress: 90
  },
  {
    level: 8,
    title: "Legend Creator",
    description: "GMV: acima de 50M",
    benefits: [
      "Prêmio: Placa Legend Creator",
      "Prêmio: Carro de Luxo"
    ],
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
