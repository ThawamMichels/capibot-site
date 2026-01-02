import { useState } from 'react'
import { QUIZ_PERGUNTAS, SERVICOS, SITE_CONFIG } from '../config/content'
import { Section, SectionTitle, WhatsAppIcon } from './UI'

// ==========================================
// COMPONENTE QUIZ (versão compacta)
// ==========================================
function QuizCompacto() {
  const [etapa, setEtapa] = useState(0) // 0 = fechado, 1-4 = perguntas, 5 = resultado
  const [respostas, setRespostas] = useState({})
  const [solucaoRecomendada, setSolucaoRecomendada] = useState(null)
  const [selectedOption, setSelectedOption] = useState(null)

  const totalPerguntas = QUIZ_PERGUNTAS.length

  const iniciarQuiz = () => setEtapa(1)

  const selecionarOpcao = (opcao) => setSelectedOption(opcao)

  const confirmarResposta = () => {
    if (!selectedOption) return
    const perguntaIndex = etapa - 1
    const novasRespostas = { ...respostas, [perguntaIndex]: selectedOption }
    setRespostas(novasRespostas)
    setSelectedOption(null)

    if (etapa < totalPerguntas) {
      setEtapa(etapa + 1)
    } else {
      const segmento = novasRespostas[0]
      const solucaoId = segmento?.solucao || 'consultoria'
      const solucao = SERVICOS.find(s => s.id === solucaoId) || SERVICOS[0]
      setSolucaoRecomendada(solucao)
      setEtapa(totalPerguntas + 1)
    }
  }

  const voltarPergunta = () => {
    if (etapa > 1) {
      setEtapa(etapa - 1)
      setSelectedOption(respostas[etapa - 2] || null)
    }
  }

  const reiniciar = () => {
    setEtapa(0)
    setRespostas({})
    setSolucaoRecomendada(null)
    setSelectedOption(null)
  }

  // ESTADO FECHADO (intro)
  if (etapa === 0) {
    return (
      <div className="bg-gradient-to-br from-capi-surface to-capi-surface-light border border-capi-border rounded-2xl p-6 h-full flex flex-col">
        <div className="text-center flex-1 flex flex-col justify-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-capi-orange/20 to-capi-cyan/20 rounded-full flex items-center justify-center">
            <span className="text-3xl">🎯</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Quiz Rápido</h3>
          <p className="text-gray-400 text-sm mb-6">
            Descubra qual solução é ideal para seu negócio em menos de 1 minuto.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {['⚡ 4 perguntas', '🎁 Resultado na hora'].map((item, i) => (
              <span key={i} className="text-xs text-gray-500 bg-capi-dark/50 px-3 py-1 rounded-full">
                {item}
              </span>
            ))}
          </div>

          <button
            onClick={iniciarQuiz}
            className="w-full bg-gradient-to-r from-capi-orange to-capi-cyan text-white py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,107,53,0.3)]"
          >
            Começar Quiz
          </button>
        </div>
      </div>
    )
  }

  // PERGUNTAS
  if (etapa >= 1 && etapa <= totalPerguntas) {
    const perguntaAtual = QUIZ_PERGUNTAS[etapa - 1]
    const progresso = (etapa / totalPerguntas) * 100

    return (
      <div className="bg-gradient-to-br from-capi-surface to-capi-surface-light border border-capi-border rounded-2xl p-6 h-full flex flex-col">
        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-400 mb-2">
            <span>{etapa}/{totalPerguntas}</span>
            <span>{Math.round(progresso)}%</span>
          </div>
          <div className="h-1.5 bg-capi-dark rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-capi-orange to-capi-cyan transition-all duration-500"
              style={{ width: `${progresso}%` }}
            />
          </div>
        </div>

        {/* Pergunta */}
        <h4 className="text-lg font-bold text-white mb-4">{perguntaAtual.pergunta}</h4>

        {/* Opções */}
        <div className="space-y-2 flex-1">
          {perguntaAtual.opcoes.map((opcao, index) => {
            const isSelected = selectedOption?.valor === opcao.valor
            return (
              <button
                key={index}
                onClick={() => selecionarOpcao(opcao)}
                className={`w-full text-left rounded-lg p-3 transition-all duration-200 border ${
                  isSelected
                    ? 'bg-capi-cyan/10 border-capi-cyan text-white'
                    : 'bg-capi-dark/30 border-capi-border hover:border-capi-cyan/50 text-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    isSelected ? 'border-capi-cyan bg-capi-cyan' : 'border-gray-500'
                  }`}>
                    {isSelected && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                      </svg>
                    )}
                  </span>
                  <span className="text-sm">{opcao.texto}</span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Navegação */}
        <div className="flex justify-between mt-4 pt-4 border-t border-capi-border">
          <button
            onClick={voltarPergunta}
            disabled={etapa === 1}
            className={`text-sm ${etapa === 1 ? 'text-gray-600' : 'text-gray-400 hover:text-white'}`}
          >
            ← Voltar
          </button>
          <button
            onClick={confirmarResposta}
            disabled={!selectedOption}
            className={`text-sm font-medium ${
              selectedOption ? 'text-capi-cyan hover:text-white' : 'text-gray-600'
            }`}
          >
            {etapa === totalPerguntas ? 'Ver resultado' : 'Próxima'} →
          </button>
        </div>
      </div>
    )
  }

  // RESULTADO
  return (
    <div className="bg-gradient-to-br from-capi-surface to-capi-surface-light border border-capi-cyan/30 rounded-2xl p-6 h-full flex flex-col">
      <div className="text-center flex-1">
        <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-capi-orange/20 to-capi-cyan/20 rounded-full flex items-center justify-center">
          <span className="text-2xl">🎉</span>
        </div>
        
        <h4 className="text-lg font-bold text-white mb-1">Sua solução ideal:</h4>
        <h3 className="text-xl font-bold gradient-text mb-3">{solucaoRecomendada?.titulo}</h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {solucaoRecomendada?.descricao.texto}
        </p>

        <div className="space-y-2 mb-4">
          {solucaoRecomendada?.descricao.beneficios.slice(0, 3).map((beneficio, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
              <span className="text-capi-cyan">✓</span>
              {beneficio}
            </div>
          ))}
        </div>

        <a 
          href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(`Olá! Fiz o quiz e a solução recomendada foi ${solucaoRecomendada?.titulo}. Quero saber mais!`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-capi-orange to-capi-cyan text-white py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Falar com especialista
        </a>

        <button onClick={reiniciar} className="mt-3 text-gray-500 hover:text-gray-300 text-xs">
          Refazer quiz
        </button>
      </div>
    </div>
  )
}

// ==========================================
// COMPONENTE FORMULÁRIO (versão compacta)
// ==========================================
function FormularioCompacto() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    segmento: '',
    dor: '',
    orcamento: '',
    faturamento: '',
    mensagem: '',
  })
  const [status, setStatus] = useState('idle')
  const [enviado, setEnviado] = useState(false)

  const formatarTelefone = (valor) => {
    const numeros = valor.replace(/\D/g, '')
    if (numeros.length <= 2) return numeros
    if (numeros.length <= 7) return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`
    if (numeros.length <= 11) return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`
    return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7, 11)}`
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'whatsapp') {
      setFormData({ ...formData, [name]: formatarTelefone(value) })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const podeEnviar = () => {
    return (
      formData.nome.trim().length >= 2 &&
      formData.whatsapp.replace(/\D/g, '').length >= 10 &&
      formData.segmento !== '' &&
      status !== 'loading'
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!podeEnviar()) return
    setStatus('loading')

    const payload = {
      origem: 'formulario-diagnostico',
      timestamp: new Date().toISOString(),
      lead: {
        nome: formData.nome,
        whatsapp: formData.whatsapp.replace(/\D/g, ''),
        whatsapp_formatado: formData.whatsapp,
        email: formData.email || null,
      },
      qualificacao: {
        segmento: formData.segmento,
        dor: formData.dor || null,
        orcamento: formData.orcamento || null,
        faturamento: formData.faturamento || null,
        mensagem: formData.mensagem || null,
      },
    }

    try {
      await fetch(SITE_CONFIG.webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      setStatus('success')
      setEnviado(true)
    } catch (error) {
      console.error('Erro:', error)
      setStatus('success')
      setEnviado(true)
    }
  }

  const segmentos = [
    { value: '', label: 'Selecione...' },
    { value: 'juridico', label: '⚖️ Jurídico' },
    { value: 'saude', label: '🏥 Saúde' },
    { value: 'varejo', label: '🛒 Varejo/E-commerce' },
    { value: 'restaurante', label: '🍕 Restaurantes' },
    { value: 'servicos', label: '💼 Serviços' },
    { value: 'outro', label: '📦 Outro' },
  ]

  const dores = [
    { value: '', label: 'Selecione...' },
    { value: 'leads_perdidos', label: 'Perco leads fora do horário' },
    { value: 'demora', label: 'Demora para responder' },
    { value: 'custo', label: 'Custo alto com atendimento' },
    { value: 'organizacao', label: 'Falta de organização' },
    { value: 'escala', label: 'Preciso escalar' },
  ]

  const orcamentos = [
    { value: '', label: 'Prefiro não informar' },
    { value: 'ate_500', label: 'Até R$ 500/mês' },
    { value: '500_1500', label: 'R$ 500 a R$ 1.500/mês' },
    { value: '1500_5000', label: 'R$ 1.500 a R$ 5.000/mês' },
    { value: 'acima_5000', label: 'Acima de R$ 5.000/mês' },
  ]

  const faturamentos = [
    { value: '', label: 'Prefiro não informar' },
    { value: 'ate_5k', label: 'Até R$ 5 mil/mês' },
    { value: '5k_20k', label: 'R$ 5 mil a R$ 20 mil' },
    { value: '20k_100k', label: 'R$ 20 mil a R$ 100 mil' },
    { value: 'acima_100k', label: 'Acima de R$ 100 mil' },
  ]

  // SUCESSO
  if (enviado) {
    return (
      <div className="bg-gradient-to-br from-capi-surface to-capi-surface-light border border-green-500/30 rounded-2xl p-6 h-full flex flex-col justify-center text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Recebemos! 🎉</h3>
        <p className="text-gray-400 text-sm mb-4">
          Nossa equipe vai entrar em contato pelo WhatsApp <span className="text-capi-cyan">{formData.whatsapp}</span> em até 24h.
        </p>
        <a 
          href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(`Olá! Sou ${formData.nome}, acabei de enviar o formulário no site. Quero agilizar o contato!`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-capi-orange to-capi-cyan text-white py-3 rounded-xl font-bold"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Falar agora
        </a>
      </div>
    )
  }

  // FORMULÁRIO
  return (
    <div className="bg-gradient-to-br from-capi-surface to-capi-surface-light border border-capi-border rounded-2xl p-6 h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-capi-cyan/20 to-capi-orange/20 rounded-full flex items-center justify-center">
          <span className="text-xl">📝</span>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Diagnóstico Gratuito</h3>
          <p className="text-xs text-gray-500">Resposta em até 24h</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Nome e WhatsApp */}
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Seu nome *"
            className="w-full bg-capi-dark/50 border border-capi-border rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:border-capi-cyan focus:outline-none text-sm"
          />
          <input
            type="tel"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="WhatsApp *"
            maxLength={16}
            className="w-full bg-capi-dark/50 border border-capi-border rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:border-capi-cyan focus:outline-none text-sm"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mail (opcional)"
          className="w-full bg-capi-dark/50 border border-capi-border rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:border-capi-cyan focus:outline-none text-sm"
        />

        {/* Segmento e Dor */}
        <div className="grid grid-cols-2 gap-3">
          <select
            name="segmento"
            value={formData.segmento}
            onChange={handleChange}
            className="w-full bg-capi-dark/50 border border-capi-border rounded-lg px-3 py-2.5 text-white focus:border-capi-cyan focus:outline-none text-sm appearance-none"
          >
            <option value="" className="bg-capi-dark">Segmento *</option>
            {segmentos.slice(1).map((seg) => (
              <option key={seg.value} value={seg.value} className="bg-capi-dark">{seg.label}</option>
            ))}
          </select>
          <select
            name="dor"
            value={formData.dor}
            onChange={handleChange}
            className="w-full bg-capi-dark/50 border border-capi-border rounded-lg px-3 py-2.5 text-white focus:border-capi-cyan focus:outline-none text-sm appearance-none"
          >
            <option value="" className="bg-capi-dark">Maior dor</option>
            {dores.slice(1).map((d) => (
              <option key={d.value} value={d.value} className="bg-capi-dark">{d.label}</option>
            ))}
          </select>
        </div>

        {/* Orçamento e Faturamento */}
        <div className="grid grid-cols-2 gap-3">
          <select
            name="orcamento"
            value={formData.orcamento}
            onChange={handleChange}
            className="w-full bg-capi-dark/50 border border-capi-border rounded-lg px-3 py-2.5 text-white focus:border-capi-cyan focus:outline-none text-sm appearance-none"
          >
            <option value="" className="bg-capi-dark">Orçamento</option>
            {orcamentos.slice(1).map((o) => (
              <option key={o.value} value={o.value} className="bg-capi-dark">{o.label}</option>
            ))}
          </select>
          <select
            name="faturamento"
            value={formData.faturamento}
            onChange={handleChange}
            className="w-full bg-capi-dark/50 border border-capi-border rounded-lg px-3 py-2.5 text-white focus:border-capi-cyan focus:outline-none text-sm appearance-none"
          >
            <option value="" className="bg-capi-dark">Faturamento</option>
            {faturamentos.slice(1).map((f) => (
              <option key={f.value} value={f.value} className="bg-capi-dark">{f.label}</option>
            ))}
          </select>
        </div>

        {/* Mensagem */}
        <textarea
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          rows="2"
          placeholder="Conte mais sobre seu desafio (opcional)"
          className="w-full bg-capi-dark/50 border border-capi-border rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:border-capi-cyan focus:outline-none text-sm resize-none"
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={!podeEnviar()}
          className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
            podeEnviar()
              ? 'bg-gradient-to-r from-capi-cyan to-capi-cyan-dark text-capi-dark hover:shadow-[0_0_20px_rgba(0,212,170,0.3)] hover:scale-[1.02]'
              : 'bg-capi-border text-gray-500 cursor-not-allowed'
          }`}
        >
          {status === 'loading' ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              Enviando...
            </>
          ) : 'Solicitar diagnóstico gratuito'}
        </button>

        <p className="text-gray-600 text-xs text-center">
          🔒 Seus dados estão seguros
        </p>
      </form>
    </div>
  )
}

// ==========================================
// SEÇÃO COMBINADA
// ==========================================
export default function QuizFormSection() {
  return (
    <Section id="contato" className="bg-gradient-to-b from-capi-surface/10 to-transparent">
      <SectionTitle subtitle="Descubra a solução ideal ou fale diretamente com nosso time">
        Vamos <span className="gradient-text">conversar</span>?
      </SectionTitle>

      <div className="max-w-5xl mx-auto">
        {/* Divisor "OU" no mobile */}
        <div className="lg:hidden text-center mb-6">
          <p className="text-gray-400 text-sm">Escolha como prefere começar:</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 relative">
          {/* Quiz */}
          <div className="order-1">
            <QuizCompacto />
          </div>

          {/* Divisor "OU" no desktop */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-12 h-12 bg-capi-dark border border-capi-border rounded-full flex items-center justify-center">
              <span className="text-gray-500 text-sm font-medium">OU</span>
            </div>
          </div>

          {/* Formulário */}
          <div className="order-2">
            <FormularioCompacto />
          </div>
        </div>

        {/* Mensagem extra */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Prefere falar direto? 
            <a 
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-capi-cyan hover:text-white ml-1 inline-flex items-center gap-1"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Chame no WhatsApp
            </a>
          </p>
        </div>
      </div>
    </Section>
  )
}
