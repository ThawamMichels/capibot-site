# CAPIBOT Landing Page v2.0

Landing page completa com React + Vite + Tailwind CSS.

## 🚀 Funcionalidades

- ✅ Calculadora de ROI
- ✅ Quiz de Diagnóstico (4 perguntas)
- ✅ Seção "Como Funciona" (4 passos)
- ✅ Serviços com tabs e vídeos
- ✅ Parceiros (Resolvoo + GaranteDireito)
- ✅ FAQ interativo
- ✅ Agendamento (Cal.com embed)
- ✅ Formulário de contato (webhook n8n)
- ✅ Animações de scroll
- ✅ WhatsApp flutuante

---

## 📝 Como Editar o Conteúdo

**Todo o conteúdo está centralizado em um único arquivo:**

```
src/config/content.js
```

### Editar Informações Gerais:
```javascript
export const SITE_CONFIG = {
  whatsapp: '5541984788066',
  email: 'comercial@capibot.cloud',
  calendarUrl: 'https://cal.com/comercial.capibot',
  // ...
}
```

### Adicionar Novo Serviço:
```javascript
export const SERVICOS = [
  // ... serviços existentes
  {
    id: 'novo-servico',
    emoji: '🆕',
    nome: 'Novo Serviço',
    titulo: 'Nome Completo',
    subtitulo: 'Descrição curta',
    videoId: 'ID_DO_YOUTUBE',  // Ex: dQw4w9WgXcQ
    descricao: {
      titulo: 'Título da descrição',
      texto: 'Texto explicativo...',
      beneficios: ['Benefício 1', 'Benefício 2', 'Benefício 3'],
    },
    cta: {
      texto: 'Texto do botão',
      mensagem: 'Mensagem do WhatsApp',
    },
  },
]
```

### Adicionar Novo Parceiro:
```javascript
export const PARCEIROS = [
  // ... parceiros existentes
  {
    nome: 'Nome do Parceiro',
    descricao: 'Descrição curta',
    logo: 'https://url-do-logo.png',
    url: 'https://site-do-parceiro.com',
  },
]
```

### Editar FAQ:
```javascript
export const FAQ = [
  {
    pergunta: 'Sua pergunta aqui?',
    resposta: 'Resposta completa aqui.',
  },
]
```

---

## 🖥️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Rodar em modo dev
npm run dev

# Build de produção
npm run build
```

---

## 🚀 Deploy no EasyPanel

### 1. Push para GitHub

```bash
git add .
git commit -m "Atualização do site"
git push
```

### 2. No EasyPanel

O EasyPanel detecta automaticamente o push e faz o redeploy.

Se não fizer automaticamente:
- Vá no serviço
- Clique em "Reimplantar"

---

## 📁 Estrutura do Projeto

```
capibot-react-v2/
├── src/
│   ├── components/       # Componentes React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ComoFunciona.jsx
│   │   ├── Servicos.jsx
│   │   ├── Calculadora.jsx
│   │   ├── Quiz.jsx
│   │   ├── Metricas.jsx
│   │   ├── Parceiros.jsx
│   │   ├── Faq.jsx
│   │   ├── Agendamento.jsx
│   │   ├── Formulario.jsx
│   │   ├── Footer.jsx
│   │   └── UI.jsx        # Componentes reutilizáveis
│   ├── config/
│   │   └── content.js    # ⭐ TODO O CONTEÚDO AQUI
│   ├── App.jsx           # Componente principal
│   ├── main.jsx          # Entry point
│   └── index.css         # Estilos globais
├── Dockerfile
├── nginx.conf
├── package.json
└── README.md
```

---

## 🔗 Integrações

| Serviço | Configuração |
|---------|--------------|
| WhatsApp | `SITE_CONFIG.whatsapp` |
| Cal.com | `SITE_CONFIG.calendarUrl` |
| Webhook n8n | `SITE_CONFIG.webhookUrl` |

---

## 📞 Suporte

- WhatsApp: +55 41 98478-8066
- Email: comercial@capibot.cloud
