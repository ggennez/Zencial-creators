import { CareerLevel } from './types';
import { Gift, GraduationCap, Users, Trophy } from 'lucide-react';
import React from 'react';

export const CAREER_LEVELS: CareerLevel[] = [
  {
    level: 1,
    title: "Afiliada Starter",
    description: "GMV: até R$ 50.000",
    benefits: ["20% de Comissão", "Prêmio: Kit Zencial", "Acesso ao programa"],
    // Image: Woman applying cream in mirror, focus on daily routine
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
    progress: 10
  },
  {
    level: 2,
    title: "Afiliada Growth",
    description: "GMV: R$ 50k – 100k",
    benefits: ["20% + 1% de Comissão", "Prêmio: Placa de Reconhecimento"],
    // Image: Close up of woman using a serum dropper, dermocosmetic focus
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
    progress: 20
  },
  {
    level: 3,
    title: "High Performer",
    description: "GMV: R$ 100k – 500k",
    benefits: ["21% + 1% de Comissão", "Prêmio: Placa High Performer", "Prêmio: Microfone + Destaque"],
    // Image: Applying moisturizer, focus on texture and skin health
    image: "https://images.unsplash.com/photo-1571781565023-40f8d4752a39?q=80&w=800&auto=format&fit=crop",
    progress: 35
  },
  {
    level: 4,
    title: "Elite Performer",
    description: "GMV: R$ 500k – 1M",
    benefits: ["22% + 1% de Comissão", "Prêmio: Placa Elite Performer", "Acesso Prioritário"],
    // Image: Using a Gua Sha or facial roller tool, advanced self-care
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop",
    progress: 50
  },
  {
    level: 5,
    title: "Creator Pro",
    description: "GMV: R$ 1M+",
    benefits: ["23% + 2% de Comissão", "Prêmio: Placa Creator Pro", "Prêmio: iPhone + Selo Oficial"],
    // Image: Influencer recording content with ring light, professional setup
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800&auto=format&fit=crop",
    progress: 65
  },
  {
    level: 6,
    title: "Embaixadora",
    description: "GMV: R$ 5M+",
    benefits: ["25% + 2% de Comissão", "Prêmio: Placa Embaixadora", "Prêmio: Resort no Nordeste"],
    // Image: Spa day, facial treatment, relaxation and luxury
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop",
    progress: 80
  },
  {
    level: 7,
    title: "Elite Zencial",
    description: "GMV: R$ 10M+",
    benefits: ["Comissão Pro Vigente", "Prêmio: Placa Elite", "Prêmio: Viagem para Maldivas"],
    // Image: High-end aesthetic, holding luxury product bottle
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&auto=format&fit=crop",
    progress: 90
  },
  {
    level: 8,
    title: "Extraordinária",
    description: "GMV: R$ 50M+",
    benefits: ["Comissão Máxima", "Prêmio: Placa Ícone", "Prêmio: Carro de Luxo"],
    // Image: Radiant glowing skin close-up, peak beauty
    image: "https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=800&auto=format&fit=crop",
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