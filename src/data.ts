import { ServiceItem, BenefitItem, StepItem, FAQItem, TestimonialItem } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'e1',
    title: 'Instalações Elétricas',
    description: 'Execução completa de projetos elétricos, do planejamento até o acabamento final, garantindo conformidade com as normas técnicas e total segurança.',
    icon: 'Zap',
    category: 'elétrica'
  },
  {
    id: 'e2',
    title: 'Manutenção Predial e Residencial',
    description: 'Reparos elétricos, troca de tomadas, disjuntores e melhorias de infraestrutura para condomínios, residências e escritórios.',
    icon: 'Building',
    category: 'elétrica'
  },
  {
    id: 'e3',
    title: 'Manutenção Preventiva e Corretiva',
    description: 'Análise termográfica, identificação de sobrecargas e substituição preventiva de fiação antiga para evitar curtos-circuitos e reduzir o consumo.',
    icon: 'ShieldCheck',
    category: 'elétrica'
  },
  {
    id: 'a1',
    title: 'Automação Residencial',
    description: 'Transforme seu lar em uma verdadeira Smart Home. Controle de iluminação personalizada, cortinas motorizadas e cenários de áudio e vídeo.',
    icon: 'Home',
    category: 'automação'
  },
  {
    id: 'a2',
    title: 'Acionamento de Sistemas Remotos',
    description: 'Sistemas inteligentes para controle de portões, bombas de piscina, motores de água e sistemas de irrigação pelo smartphone de qualquer lugar.',
    icon: 'Smartphone',
    category: 'automação'
  },
  {
    id: 'a3',
    title: 'Controle por Celular ou Alexa',
    description: 'Integre seus aparelhos favoritos à Alexa ou Google Home. Acenda luzes, ajuste o ar-condicionado ou feche portas usando apenas sua voz.',
    icon: 'Mic',
    category: 'automação'
  },
  {
    id: 'e4',
    title: 'Montagem de Quadros de Comando',
    description: 'Montagem técnica de quadros de distribuição modernos e painéis de comandos industriais seguindo rígidos critérios de proteção.',
    icon: 'Cpu',
    category: 'elétrica'
  },
  {
    id: 's1',
    title: 'Interfonia Residencial e Predial',
    description: 'Instalação e manutenção de sistemas de interfones analógicos ou digitais e vídeo porteiros para um controle de acesso rápido e seguro.',
    icon: 'PhoneCall',
    category: 'segurança'
  },
  {
    id: 's2',
    title: 'Sistema CFTV (Monitoramento 24h)',
    description: 'Câmeras de alta definição instaladas estrategicamente com visualização ao vivo no celular e armazenamento local ou em nuvem das gravações.',
    icon: 'Camera',
    category: 'segurança'
  },
  {
    id: 's3',
    title: 'Instalação de Alarmes',
    description: 'Sensores de presença, barreiras virtuais e centrais de alarme conectadas que notificam disparos instantaneamente no seu celular.',
    icon: 'BellRing',
    category: 'segurança'
  },
  {
    id: 'r1',
    title: 'Redes e Cabeamento Estruturado',
    description: 'Projeto de rede interna de alta performance, cabeamento Cat6 blindado e configuração de redes Wi-Fi Mesh eliminando pontos cegos na sua conexão.',
    icon: 'Network',
    category: 'redes'
  },
  {
    id: 's4',
    title: 'Soluções para Empresas e Indústrias',
    description: 'Instalações de alta potência, iluminação de emergência, quadros industriais e rede estruturada corporativa com alto padrão profissional.',
    icon: 'Factory',
    category: 'segurança'
  }
];

export const BENEFITS_DATA: BenefitItem[] = [
  {
    id: 'b1',
    title: 'Atendimento Profissional',
    description: 'Serviço prestado por técnicos qualificados com foco na excelência, pontualidade e segurança.',
    icon: 'UserCheck'
  },
  {
    id: 'b2',
    title: 'Soluções Completas',
    description: 'Atendemos demandas residenciais, comerciais, corporativas e industriais com a mesma dedicação.',
    icon: 'Briefcase'
  },
  {
    id: 'b3',
    title: 'Segurança Patrimonial',
    description: 'Sistemas inteligentes projetados para blindar sua propriedade de invasões ou riscos operacionais.',
    icon: 'Lock'
  },
  {
    id: 'b4',
    title: 'Controle Total',
    description: 'Monitore e comande sua casa, portões ou câmeras direto no celular, mesmo que você esteja viajando.',
    icon: 'Sliders'
  },
  {
    id: 'b5',
    title: 'Instalações Organizadas',
    description: 'Padrão estético de alto nível com cabeamento identificado e painéis limpos, facilitando futuras manutenções.',
    icon: 'Layers'
  },
  {
    id: 'b6',
    title: 'Eficiência e Durabilidade',
    description: 'Utilizamos marcas renomadas no mercado para que suas instalações durem muito mais tempo sem falhas.',
    icon: 'Award'
  },
  {
    id: 'b7',
    title: 'Suporte Especializado',
    description: 'Após a execução, nossa equipe oferece orientação e suporte técnico sempre que necessário.',
    icon: 'Compass'
  }
];

export const STEPS_DATA: StepItem[] = [
  {
    number: 1,
    title: 'Contato via WhatsApp',
    description: 'Você entra em contato pelo nosso canal exclusivo no WhatsApp de forma rápida e prática.'
  },
  {
    number: 2,
    title: 'Entendimento da Demanda',
    description: 'Nossa equipe avalia o seu pedido e esclarece as primeiras dúvidas sobre o projeto ou manutenção.'
  },
  {
    number: 3,
    title: 'Análise ou Visita Técnica',
    description: 'Agendamos uma visita técnica presencial ou realizamos uma análise detalhada dos requisitos do serviço.'
  },
  {
    number: 4,
    title: 'Proposta Sob Medida',
    description: 'Apresentamos um orçamento transparente, focado no melhor custo-benefício e na tecnologia ideal.'
  },
  {
    number: 5,
    title: 'Execução de Alto Padrão',
    description: 'Nossos técnicos realizam o trabalho de forma limpa, organizada e segura, garantindo o resultado perfeito.'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'f1',
    question: 'A InteliHome atende residências e empresas?',
    answer: 'Sim, atendemos residências de todos os portes, condomínios fechados, estabelecimentos comerciais, escritórios corporativos e indústrias na nossa região.'
  },
  {
    id: 'f2',
    question: 'Vocês realizam projetos de automação residencial completa?',
    answer: 'Com certeza! Projetamos e executamos a automação de iluminação, cortinas, aparelhos de som, home theater, ar-condicionado e muito mais, integrando tudo em uma única solução.'
  },
  {
    id: 'f3',
    question: 'É possível controlar os equipamentos pelo celular ou pela Alexa?',
    answer: 'Sim, todo o sistema de automação e segurança eletrônica pode ser integrado com assistentes de voz como Alexa e Google Assistant, bem como controlado remotamente via aplicativo de celular.'
  },
  {
    id: 'f4',
    question: 'A InteliHome trabalha com instalação de CFTV e alarmes de segurança?',
    answer: 'Sim. Nós instalamos câmeras de alta definição com inteligência de detecção e alertas inteligentes no celular, além de centrais de alarmes, sensores de presença e cercas virtuais.'
  },
  {
    id: 'f5',
    question: 'Vocês realizam manutenção elétrica preventiva?',
    answer: 'Sim. A manutenção preventiva é essencial para identificar aquecimentos anormais na fiação, disjuntores inadequados e sobrecargas, o que evita desperdício de energia e elimina riscos de incêndio.'
  },
  {
    id: 'f6',
    question: 'Como faço para solicitar um orçamento?',
    answer: 'É extremamente simples. Basta clicar em qualquer botão de orçamento em nosso site para ser direcionado ao nosso WhatsApp. Lá, um consultor técnico estará pronto para entender sua demanda e agendar sua visita.'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Roberto Guimarães',
    role: 'Empresário - Rio Verde / GO',
    text: 'A InteliHome refez toda a rede lógica e instalou o sistema de câmeras da minha distribuidora. Trabalho impecável, cabeamento estruturado super organizado e limpo. Recomendo muito!',
    rating: 5
  },
  {
    id: 't2',
    name: 'Ana Carolina Albuquerque',
    role: 'Proprietária de Residência Inteligente',
    text: 'Automatizei a iluminação, ar-condicionado e as cortinas da minha casa com eles. Agora controlo tudo por voz com a Alexa. O suporte que eles dão é espetacular!',
    rating: 5
  },
  {
    id: 't3',
    name: 'Dr. Lucas Vasconcelos',
    role: 'Clínica Odontológica',
    text: 'Profissionalismo raro de encontrar hoje em dia. Atendimento pontual, orçamento detalhado e fiação elétrica refeita com máxima organização. Nota 10.',
    rating: 5
  }
];
