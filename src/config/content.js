/**
 * ============================================
 * CONFIGURAÇÃO CENTRAL DO SITE CAPIBOT
 * ============================================
 * 
 * Edite este arquivo para atualizar o conteúdo do site.
 * 
 * ASSETS: Coloque seus arquivos em public/assets/
 *   - Imagens: public/assets/images/
 *   - Vídeos: public/assets/videos/
 * 
 * Após editar, faça commit e push para o GitHub.
 * O EasyPanel vai reimplantar automaticamente.
 */

// ============================================
// CAMINHOS DOS ASSETS (facilita manutenção)
// ============================================
const ASSETS = {
  // Logos
  logo: '/assets/images/logo-capibot.png',
  heroLogo: '/assets/images/logo-hero-capibot.png',
  
  // Ícones dos serviços
  capichatIcon: '/assets/images/capichat-icon.png',
  
  // Logos dos parceiros
  resolvooLogo: '/assets/images/parceiro-resolvoo.png',
  garanteDireitoLogo: '/assets/images/parceiro-garantedireito.png',
  
  // Vídeos Hero
  videoBackground: '/assets/videos/background.mp4',
  videoIA: '/assets/videos/video-ia.mp4',
  
  // OG Image
  ogImage: '/assets/images/og-image.png',
}

// ============================================
// INFORMAÇÕES GERAIS
// ============================================
export const SITE_CONFIG = {
  nome: 'CAPIBOT',
  slogan: 'Consultoria • Automação • Processos • Integração',
  descricao: 'Automação de processos empresariais que funciona de verdade. Chatbots com IA, integração de sistemas e consultoria especializada.',
  
  // Contato
  whatsapp: '5541984788066',
  email: 'comercial@capibot.cloud',
  
  // Agendamento Cal.com
  calendarUrl: 'https://cal.com/comercial.capibot',
  
  // Webhook para leads
  webhookUrl: 'https://dev-webhook.app-capibot.cloud/webhook/inputLead',
  
  // Redes sociais
  social: {
    instagram: '#',
    linkedin: '#',
    youtube: '#',
  },
  
  // Assets
  logo: ASSETS.logo,
  heroLogo: ASSETS.heroLogo,
  videoBackground: ASSETS.videoBackground,
  videoIA: ASSETS.videoIA,
}

// ============================================
// SERVIÇOS COM DEMOS
// ============================================
export const SERVICOS = [
  // ==========================================
  // 🎯 CONSULTORIA
  // ==========================================
  {
    id: 'consultoria',
    emoji: '🎯',
    nome: 'Consultoria',
    titulo: 'Consultoria Capibot',
    subtitulo: 'Diagnóstico + Estratégia + Execução',
    icone: ASSETS.logo,
    demos: [
      {
        id: 'visao-geral',
        nome: 'Visão Geral',
        video: '/assets/videos/consultoria-overview.mp4',
        thumbnail: '/assets/images/thumb-consultoria-overview.png',
        titulo: 'Como funciona a Consultoria Capibot',
        descricao: 'Não vendemos chatbot como solução mágica. Primeiro, mapeamos seus processos, identificamos gargalos e só então propomos automações que fazem sentido pro seu negócio.',
        beneficios: [
          'Diagnóstico completo do seu processo',
          'Proposta personalizada sem compromisso',
          'Acompanhamento na implementação',
          'Suporte contínuo pós-implantação',
        ],
        cta: {
          texto: 'Quero uma consultoria',
          mensagem: 'Olá! Vi o site da CAPIBOT e gostaria de agendar uma consultoria para entender como automatizar meu negócio.',
        },
      },
    ],
  },

  // ==========================================
  // ⚖️ CAPIJUDI
  // ==========================================
  {
    id: 'capijudi',
    emoji: '⚖️',
    nome: 'CapiJudi',
    titulo: 'CapiJudi',
    subtitulo: 'Automação para Escritórios de Advocacia',
    icone: '⚖️',
    demos: [
      {
        id: 'visao-geral',
        nome: 'Visão Geral',
        video: '/assets/videos/capijudi-overview.mp4',
        thumbnail: '/assets/images/thumb-capijudi-overview.png',
        titulo: 'Automação Jurídica Completa',
        descricao: 'Transforme seu escritório com atendimento inteligente 24/7. Qualifique leads automaticamente, agende consultas e responda dúvidas frequentes sem intervenção humana.',
        beneficios: [
          'Atendimento automático 24/7 no WhatsApp',
          'Qualificação inteligente de leads',
          'Integração com sistemas jurídicos',
          'Redução de 70% no tempo de triagem',
        ],
        cta: {
          texto: 'Automatizar meu escritório',
          mensagem: 'Olá! Vi o demo do CapiJudi e quero saber mais sobre automação para meu escritório de advocacia.',
        },
      },
      {
        id: 'peticoes',
        nome: 'Petições',
        video: '/assets/videos/capijudi-peticoes.mp4',
        thumbnail: '/assets/images/thumb-capijudi-peticoes.png',
        titulo: 'Gerador de Petições com IA',
        descricao: 'Crie petições em minutos, não horas. Nossa IA analisa o caso, seleciona o modelo adequado e preenche automaticamente com os dados do cliente.',
        beneficios: [
          'Mais de 50 modelos de petições',
          'Preenchimento automático de dados',
          'Revisão ortográfica e jurídica',
          'Exportação em PDF e Word',
        ],
        cta: {
          texto: 'Quero gerar petições',
          mensagem: 'Olá! Vi o demo do Gerador de Petições com IA e quero saber como funciona para meu escritório.',
        },
      },
      {
        id: 'contratos',
        nome: 'Contratos',
        video: '/assets/videos/capijudi-contratos.mp4',
        thumbnail: '/assets/images/thumb-capijudi-contratos.png',
        titulo: 'Gerador de Contratos Automático',
        descricao: 'Contratos prontos em minutos. O sistema coleta os dados via formulário ou WhatsApp e gera o documento completo, pronto para assinatura digital.',
        beneficios: [
          'Templates personalizáveis',
          'Coleta de dados automatizada',
          'Integração com assinatura digital',
          'Armazenamento seguro na nuvem',
        ],
        cta: {
          texto: 'Quero gerar contratos',
          mensagem: 'Olá! Vi o demo do Gerador de Contratos e quero saber como automatizar a criação de contratos no meu escritório.',
        },
      },
      {
        id: 'sdr',
        nome: 'SDR',
        video: '/assets/videos/capijudi-sdr.mp4',
        thumbnail: '/assets/images/thumb-capijudi-sdr.png',
        titulo: 'Agente SDR - Funil de Clientes',
        descricao: 'Um vendedor incansável que trabalha 24/7. O agente SDR qualifica leads, identifica o tipo de caso, verifica documentação e agenda consultas automaticamente.',
        beneficios: [
          'Qualificação automática de leads',
          'Identificação do tipo de caso',
          'Verificação de documentos',
          'Agendamento automático de consultas',
        ],
        cta: {
          texto: 'Quero captar mais clientes',
          mensagem: 'Olá! Vi o demo do Agente SDR e quero saber como automatizar a captação de clientes no meu escritório.',
        },
      },
      {
        id: 'monitoramento',
        nome: 'Monitoramento',
        video: '/assets/videos/capijudi-monitoramento.mp4',
        thumbnail: '/assets/images/thumb-capijudi-monitoramento.png',
        titulo: 'Monitoramento de Processos',
        descricao: 'Nunca mais perca um prazo. O sistema monitora automaticamente AASP, Escavador e tribunais, notificando sua equipe sobre qualquer movimentação.',
        beneficios: [
          'Integração com AASP e Escavador',
          'Alertas em tempo real no WhatsApp',
          'Relatório diário de movimentações',
          'Controle de prazos automático',
        ],
        cta: {
          texto: 'Quero monitorar processos',
          mensagem: 'Olá! Vi o demo do Monitoramento de Processos e quero saber como automatizar o acompanhamento dos meus casos.',
        },
      },
    ],
  },

  // ==========================================
  // 🛒 CAPISHOP
  // ==========================================
  {
    id: 'capishop',
    emoji: '🛒',
    nome: 'CapiShop',
    titulo: 'CapiShop',
    subtitulo: 'Automação para E-commerce e Restaurantes',
    icone: '/assets/images/capishop-logo.png',
    demos: [
      {
        id: 'visao-geral',
        nome: 'Visão Geral',
        video: '/assets/videos/capishop-overview.mp4',
        thumbnail: '/assets/images/thumb-capishop-overview.png',
        titulo: 'Automação Completa para Vendas',
        descricao: 'Transforme seu WhatsApp em uma máquina de vendas. Atendimento automático, criação de pedidos, rastreio de entregas e muito mais.',
        beneficios: [
          'Cardápio digital interativo',
          'Criação automática de pedidos',
          'Integração com sistemas de delivery',
          'Pagamento via Pix integrado',
        ],
        cta: {
          texto: 'Automatizar minhas vendas',
          mensagem: 'Olá! Vi o demo do CapiShop e quero saber como automatizar as vendas do meu negócio.',
        },
      },
      {
        id: 'pedidos',
        nome: 'Pedidos',
        video: '/assets/videos/capishop-pedidos.mp4',
        thumbnail: '/assets/images/thumb-capishop-pedidos.png',
        titulo: 'Atendimento e Gestão de Pedidos',
        descricao: 'Do primeiro contato à entrega. O bot atende o cliente, monta o pedido, envia para a cozinha/estoque e acompanha até a entrega.',
        beneficios: [
          'Atendimento 24/7 no WhatsApp',
          'Montagem automática de pedidos',
          'Rastreio em tempo real',
          'Notificações automáticas ao cliente',
        ],
        cta: {
          texto: 'Quero automatizar pedidos',
          mensagem: 'Olá! Vi o demo de Gestão de Pedidos e quero saber como automatizar os pedidos do meu negócio.',
        },
      },
      {
        id: 'estoque',
        nome: 'Estoque',
        video: '/assets/videos/capishop-estoque.mp4',
        thumbnail: '/assets/images/thumb-capishop-estoque.png',
        titulo: 'Gestão Inteligente de Estoque',
        descricao: 'Nunca mais fique sem produto. O sistema analisa seu histórico de vendas, monitora o estoque atual e alerta automaticamente quando é hora de repor.',
        beneficios: [
          'Análise preditiva de demanda',
          'Alertas de estoque baixo',
          'Relatório de produtos mais vendidos',
          'Sugestão automática de reposição',
        ],
        cta: {
          texto: 'Quero controlar meu estoque',
          mensagem: 'Olá! Vi o demo de Gestão de Estoque e quero saber como automatizar o controle de estoque do meu negócio.',
        },
      },
    ],
  },

  // ==========================================
  // 🏥 CAPICARE
  // ==========================================
  {
    id: 'capicare',
    emoji: '🏥',
    nome: 'CapiCare',
    titulo: 'CapiCare',
    subtitulo: 'Automação para Clínicas e Profissionais de Saúde',
    icone: '🏥',
    demos: [
      {
        id: 'visao-geral',
        nome: 'Visão Geral',
        video: '/assets/videos/capicare-overview.mp4',
        thumbnail: '/assets/images/thumb-capicare-overview.png',
        titulo: 'Automação Completa para Clínicas',
        descricao: 'Otimize sua clínica com agendamento automático, confirmação de consultas e lembretes. Reduza faltas em até 40% e libere sua equipe para o que importa.',
        beneficios: [
          'Agendamento 24/7 pelo WhatsApp',
          'Confirmação automática de consultas',
          'Lembretes personalizados',
          'Redução de até 40% nas faltas',
        ],
        cta: {
          texto: 'Automatizar minha clínica',
          mensagem: 'Olá! Vi o demo do CapiCare e quero saber como automatizar o atendimento da minha clínica.',
        },
      },
      {
        id: 'agendamento',
        nome: 'Agendamento',
        video: '/assets/videos/capicare-agendamento.mp4',
        thumbnail: '/assets/images/thumb-capicare-agendamento.png',
        titulo: 'Agendamento Inteligente por WhatsApp',
        descricao: 'Seus pacientes agendam consultas pelo WhatsApp a qualquer hora. O sistema verifica disponibilidade, confirma o horário e envia lembretes automáticos.',
        beneficios: [
          'Disponibilidade em tempo real',
          'Confirmação automática 24h antes',
          'Lembrete 1h antes da consulta',
          'Reagendamento simplificado',
        ],
        cta: {
          texto: 'Quero agendamento automático',
          mensagem: 'Olá! Vi o demo de Agendamento por WhatsApp e quero saber como implementar na minha clínica.',
        },
      },
    ],
  },

  // ==========================================
  // 💬 CAPICHAT
  // ==========================================
  {
    id: 'capichat',
    emoji: '💬',
    nome: 'CapiChat',
    titulo: 'CapiChat',
    subtitulo: 'Atendimento Multiagente no WhatsApp',
    icone: ASSETS.capichatIcon,
    demos: [
      {
        id: 'visao-geral',
        nome: 'Visão Geral',
        video: '/assets/videos/capichat-overview.mp4',
        thumbnail: '/assets/images/thumb-capichat-overview.png',
        titulo: 'Central de Atendimento Unificada',
        descricao: 'Vários atendentes usando o mesmo número de WhatsApp. Distribua conversas, transfira entre setores e mantenha todo o histórico organizado com Chatwoot.',
        beneficios: [
          'Múltiplos atendentes, um número',
          'Distribuição automática de conversas',
          'Histórico completo do cliente',
          'Métricas de atendimento em tempo real',
        ],
        cta: {
          texto: 'Quero o CapiChat',
          mensagem: 'Olá! Vi o demo do CapiChat e quero saber como centralizar meu atendimento no WhatsApp.',
        },
      },
      {
        id: 'multiagente',
        nome: 'Multiagente',
        video: '/assets/videos/capichat-multiagente.mp4',
        thumbnail: '/assets/images/thumb-capichat-multiagente.png',
        titulo: 'Gestão de Equipe e Setores',
        descricao: 'Organize sua equipe por setores: comercial, suporte, financeiro. Transfira conversas com contexto e nunca perca o histórico do cliente.',
        beneficios: [
          'Setores personalizados',
          'Transferência com contexto',
          'Fila de atendimento inteligente',
          'Relatórios por atendente',
        ],
        cta: {
          texto: 'Quero centralizar atendimento',
          mensagem: 'Olá! Vi o demo de Multiagente e quero saber como organizar minha equipe de atendimento.',
        },
      },
    ],
  },
]

// ============================================
// PARCEIROS
// ============================================
export const PARCEIROS = [
  {
    nome: 'Resolvoo',
    descricao: 'Soluções jurídicas inteligentes',
    logo: ASSETS.resolvooLogo,
    url: 'https://resolvoo.com.br/',
  },
  {
    nome: 'GaranteDireito',
    descricao: 'Consultoria em benefícios previdenciários',
    logo: ASSETS.garanteDireitoLogo,
    url: 'https://garantedireito.com.br/',
  },
]

// ============================================
// MÉTRICAS / RESULTADOS
// ============================================
export const METRICAS = {
  titulo: 'Resultados reais, não promessas',
  subtitulo: 'Case real: qualificação de leads para BPC-LOAS em escritório de advocacia',
  periodo: '📊 Dados de 10 dias de execução',
  items: [
    { valor: '1.159', label: 'leads processados', sub: 'em 10 dias' },
    { valor: '318', label: 'qualificados', sub: 'prontos para contrato' },
    { valor: '27,4%', label: 'taxa de conversão', sub: 'leads → qualificados' },
    { valor: '789', label: 'leads salvos', sub: 'fora do horário comercial', destaque: true },
  ],
}

// ============================================
// COMO FUNCIONA (4 PASSOS)
// ============================================
export const COMO_FUNCIONA = [
  {
    numero: '01',
    icone: '📞',
    titulo: 'Discovery',
    descricao: 'Reunião gratuita para entender seu negócio, processos e desafios atuais.',
  },
  {
    numero: '02',
    icone: '🔍',
    titulo: 'Diagnóstico',
    descricao: 'Mapeamos seus processos e identificamos oportunidades de automação.',
  },
  {
    numero: '03',
    icone: '⚙️',
    titulo: 'Implementação',
    descricao: 'Desenvolvemos e implantamos a solução personalizada para você.',
  },
  {
    numero: '04',
    icone: '📈',
    titulo: 'Resultados',
    descricao: 'Acompanhamento contínuo para garantir que tudo funcione perfeitamente.',
  },
]

// ============================================
// QUIZ - PERGUNTAS
// ============================================
export const QUIZ_PERGUNTAS = [
  {
    pergunta: 'Qual é o segmento do seu negócio?',
    opcoes: [
      { texto: 'Jurídico / Advocacia', valor: 'juridico', solucao: 'capijudi' },
      { texto: 'Saúde / Clínicas', valor: 'saude', solucao: 'capicare' },
      { texto: 'Varejo / E-commerce / Restaurantes', valor: 'varejo', solucao: 'capishop' },
      { texto: 'Outro segmento', valor: 'outro', solucao: 'consultoria' },
    ],
  },
  {
    pergunta: 'Quantos atendimentos sua equipe faz por dia?',
    opcoes: [
      { texto: 'Menos de 20', valor: 'baixo' },
      { texto: 'Entre 20 e 50', valor: 'medio' },
      { texto: 'Entre 50 e 100', valor: 'alto' },
      { texto: 'Mais de 100', valor: 'muito_alto' },
    ],
  },
  {
    pergunta: 'Qual sua maior dor hoje?',
    opcoes: [
      { texto: 'Perco leads fora do horário comercial', valor: 'leads_perdidos' },
      { texto: 'Demora muito para responder clientes', valor: 'demora' },
      { texto: 'Custo alto com equipe de atendimento', valor: 'custo' },
      { texto: 'Falta de organização nos processos', valor: 'organizacao' },
    ],
  },
  {
    pergunta: 'Você já usa alguma automação hoje?',
    opcoes: [
      { texto: 'Não, tudo é manual', valor: 'nenhuma' },
      { texto: 'Sim, mas não funciona bem', valor: 'ruim' },
      { texto: 'Sim, quero melhorar/expandir', valor: 'expandir' },
      { texto: 'Não sei o que é automação', valor: 'desconhece' },
    ],
  },
]

// ============================================
// CALCULADORA ROI
// ============================================
export const CALCULADORA_CONFIG = {
  titulo: 'Calcule seu ROI com Automação',
  subtitulo: 'Descubra quanto você pode economizar automatizando seu atendimento',
  custoHoraAtendente: 25,
  horasPorAtendimento: 0.25,
  taxaConversaoAutomacao: 0.30,
}

// ============================================
// FAQ
// ============================================
export const FAQ = [
  {
    pergunta: 'Quanto tempo leva para implementar?',
    resposta: 'Depende da complexidade do projeto. Soluções simples ficam prontas em 1-2 semanas. Projetos mais complexos podem levar de 4-8 semanas. Na reunião de discovery, definimos juntos o cronograma.',
  },
  {
    pergunta: 'Preciso ter conhecimento técnico?',
    resposta: 'Não! Cuidamos de toda a parte técnica. Você só precisa nos contar como funciona seu negócio e o que precisa melhorar. A gente cuida do resto.',
  },
  {
    pergunta: 'Funciona com WhatsApp?',
    resposta: 'Sim! Todas as nossas soluções se integram com WhatsApp Business API, permitindo atendimento automatizado 24/7 diretamente no WhatsApp dos seus clientes.',
  },
  {
    pergunta: 'Qual o investimento?',
    resposta: 'O valor varia de acordo com a solução e complexidade. Trabalhamos com mensalidades a partir de R$ 497/mês. Agende uma discovery gratuita para receber uma proposta personalizada.',
  },
  {
    pergunta: 'E se eu não gostar?',
    resposta: 'Oferecemos garantia de 30 dias. Se não ficar satisfeito com os resultados no primeiro mês, devolvemos seu investimento. Simples assim.',
  },
  {
    pergunta: 'Vocês dão suporte?',
    resposta: 'Sim! Todos os planos incluem suporte via WhatsApp em horário comercial. Planos avançados têm suporte prioritário e acompanhamento mensal de resultados.',
  },
]

// ============================================
// DEPOIMENTOS
// ============================================
export const DEPOIMENTOS = []
