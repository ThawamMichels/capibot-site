/**
 * ============================================
 * CONFIGURAÇÃO CENTRAL DO SITE CAPIBOT
 * ============================================
 * 
 * Edite este arquivo para atualizar o conteúdo do site.
 * Não é necessário mexer em outros arquivos!
 * 
 * Após editar, faça commit e push para o GitHub.
 * O EasyPanel vai reimplantar automaticamente.
 */

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
  
  // Redes sociais (adicione os links reais)
  social: {
    instagram: '#',
    linkedin: '#',
    youtube: '#',
  },
  
  // Imagens
  logo: 'https://raw.githubusercontent.com/ThawamMichels/arq/refs/heads/main/MASCOTE-CAPIBOT.png',
  mascote: 'https://raw.githubusercontent.com/ThawamMichels/arq/refs/heads/main/ChatGPT%20Image%2030%20de%20dez2.png',
  dashboard: 'https://raw.githubusercontent.com/ThawamMichels/arq/refs/heads/main/image%20-%2027-12-2025%2021-35-28.png',
}

// ============================================
// SERVIÇOS / PRODUTOS
// ============================================
// Adicione ou edite os serviços aqui
export const SERVICOS = [
  {
    id: 'consultoria',
    emoji: '🎯',
    nome: 'Consultoria',
    titulo: 'Consultoria Capibot',
    subtitulo: 'Diagnóstico + Estratégia + Execução',
    icone: SITE_CONFIG.logo, // pode ser emoji ou URL de imagem
    videoId: 'dQw4w9WgXcQ', // ID do vídeo do YouTube
    descricao: {
      titulo: 'Como funciona a Consultoria Capibot',
      texto: 'Não vendemos chatbot como solução mágica. Primeiro, mapeamos seus processos, identificamos gargalos e só então propomos automações que fazem sentido pro seu negócio.',
      beneficios: [
        'Diagnóstico completo do seu processo',
        'Proposta personalizada',
        'Acompanhamento na implementação',
      ],
    },
    cta: {
      texto: 'Falar com consultor',
      mensagem: 'Olá! Vim pelo site e gostaria de saber mais sobre a Consultoria Capibot.',
    },
  },
  {
    id: 'capijudi',
    emoji: '⚖️',
    nome: 'Capijudi',
    titulo: 'Capijudi',
    subtitulo: 'Automação para Escritórios de Advocacia',
    icone: '⚖️',
    videoId: 'szpbk04J04c',
    descricao: {
      titulo: 'Chatbot Jurídico com IA',
      texto: 'Atendimento inteligente 24/7 para seus clientes. Qualifica leads, agenda consultas e responde dúvidas frequentes automaticamente.',
      beneficios: [
        'Atendimento 24/7',
        'Qualificação automática de leads',
        'Integração com WhatsApp',
      ],
    },
    cta: {
      texto: 'Automatizar meu escritório',
      mensagem: 'Olá! Vim pelo site e tenho interesse no Capijudi para meu escritório de advocacia.',
    },
  },
  {
    id: 'capishop',
    emoji: '🛒',
    nome: 'CapiShop',
    titulo: 'CapiShop',
    subtitulo: 'Automação para E-commerce e Restaurantes',
    icone: 'https://raw.githubusercontent.com/ThawamMichels/arq/refs/heads/main/capishop-logo.png',
    videoId: 'dQw4w9WgXcQ',
    descricao: {
      titulo: 'Chatbot de Vendas Integrado',
      texto: 'Bot conectado ao seu ERP para consultar estoque, criar pedidos e enviar links de pagamento automaticamente.',
      beneficios: [
        'Consulta de estoque em tempo real',
        'Criação automática de pedidos',
        'Pagamento via Pix integrado',
      ],
    },
    cta: {
      texto: 'Integrar meu e-commerce',
      mensagem: 'Olá! Vim pelo site e tenho interesse no CapiShop para meu negócio.',
    },
  },
  {
    id: 'capicare',
    emoji: '🏥',
    nome: 'CapiCare',
    titulo: 'CapiCare',
    subtitulo: 'Automação para Clínicas e Profissionais de Saúde',
    icone: '🏥',
    videoId: 'dQw4w9WgXcQ',
    descricao: {
      titulo: 'Agendamento Automático',
      texto: 'Chatbot que agenda consultas, confirma horários e envia lembretes automaticamente para seus pacientes.',
      beneficios: [
        'Agendamento 24/7',
        'Lembretes automáticos',
        'Redução de faltas',
      ],
    },
    cta: {
      texto: 'Otimizar minha clínica',
      mensagem: 'Olá! Vim pelo site e tenho interesse no CapiCare para minha clínica.',
    },
  },
]

// ============================================
// PARCEIROS
// ============================================
export const PARCEIROS = [
  {
    nome: 'Resolvoo',
    descricao: 'Soluções jurídicas inteligentes',
    logo: 'https://resolvoo.com.br/wp-content/uploads/2024/01/logo-resolvoo.png', // Substitua pelo logo real
    url: 'https://resolvoo.com.br/',
  },
  {
    nome: 'GaranteDireito',
    descricao: 'Consultoria em benefícios previdenciários',
    logo: 'https://garantedireito.com.br/logo.png', // Substitua pelo logo real
    url: 'https://garantedireito.com.br/',
  },
  // Adicione mais parceiros aqui:
  // {
  //   nome: 'Nome do Parceiro',
  //   descricao: 'Descrição curta',
  //   logo: 'URL do logo',
  //   url: 'https://site.com',
  // },
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
      { texto: 'Varejo / E-commerce', valor: 'varejo', solucao: 'capishop' },
      { texto: 'Outro segmento', valor: 'outro', solucao: 'consultoria' },
    ],
  },
  {
    pergunta: 'Quantos atendimentos sua equipe faz por dia?',
    opcoes: [
      { texto: 'Menos de 20', valor: 'baixo', peso: 1 },
      { texto: 'Entre 20 e 50', valor: 'medio', peso: 2 },
      { texto: 'Entre 50 e 100', valor: 'alto', peso: 3 },
      { texto: 'Mais de 100', valor: 'muito_alto', peso: 4 },
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
      { texto: 'Sim, mas quero expandir', valor: 'expandir' },
      { texto: 'Não sei o que é automação', valor: 'desconhece' },
    ],
  },
]

// ============================================
// CALCULADORA ROI - CONFIGURAÇÃO
// ============================================
export const CALCULADORA_CONFIG = {
  titulo: 'Calcule seu ROI com Automação',
  subtitulo: 'Descubra quanto você pode economizar automatizando seu atendimento',
  
  // Valores padrão para cálculo
  custoHoraAtendente: 25, // R$ por hora
  horasPorAtendimento: 0.25, // 15 minutos
  taxaConversaoAutomacao: 0.30, // 30% dos leads são convertidos pela automação
}

// ============================================
// FAQ - PERGUNTAS FREQUENTES
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
// DEPOIMENTOS (adicione quando tiver)
// ============================================
export const DEPOIMENTOS = [
  // Descomente e edite quando tiver depoimentos reais:
  // {
  //   nome: 'João Silva',
  //   cargo: 'Sócio',
  //   empresa: 'Silva Advocacia',
  //   foto: 'https://url-da-foto.jpg',
  //   texto: 'A CAPIBOT transformou nosso atendimento. Antes perdíamos muitos leads fora do horário, hoje convertemos 30% a mais.',
  //   estrelas: 5,
  // },
]
