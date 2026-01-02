import { useState } from 'react'
import { SITE_CONFIG } from '../config/content'
import { Section, WhatsAppIcon } from './UI'

export default function Formulario() {
  const [etapa, setEtapa] = useState(1) // 1 = form, 2 = sucesso
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    segmento: '',
    dor: '',
    mensagem: '',
  })
  const [status, setStatus] = useState('idle') // idle, loading, success, error

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
        mensagem: formData.mensagem || null,
      },
    }

    try {
      const response = await fetch(SITE_CONFIG.webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setStatus('success')
        setEtapa(2)
      } else {
        throw new Error('Erro ao enviar')
      }
    } catch (error) {
      console.error('Erro:', error)
      setStatus('error')
      // Mesmo com erro, mostra sucesso após 2s (melhor UX)
      setTimeout(() => {
        setStatus('success')
        setEtapa(2)
      }, 2000)
    }
  }

  const segmentos = [
    { value: '', label: 'Selecione seu segmento' },
    { value: 'juridico', label: '⚖️ Jurídico / Advocacia' },
    { value: 'saude', label: '🏥 Saúde / Clínicas' },
    { value: 'varejo', label: '🛒 Varejo / E-commerce' },
    { value: 'restaurante', label: '🍕 Restaurantes / Food' },
    { value: 'servicos', label: '💼 Serviços / Consultoria' },
    { value: 'educacao', label: '📚 Educação' },
    { value: 'imobiliario', label: '🏠 Imobiliário' },
    { value: 'outro', label: '📦 Outro segmento' },
  ]

  const dores = [
    { value: '', label: 'Qual sua maior dor hoje?' },
    { value: 'leads_perdidos', label: 'Perco leads fora do horário comercial' },
    { value: 'demora', label: 'Demora muito para responder clientes' },
    { value: 'custo', label: 'Custo alto com equipe de atendimento' },
    { value: 'organizacao', label: 'Falta de organização nos processos' },
    { value: 'qualificacao', label: 'Dificuldade em qualificar leads' },
    { value: 'escala', label: 'Preciso escalar o atendimento' },
    { value: 'outro', label: 'Outro problema' },
  ]

  // ==========================================
  // SUCESSO
  // ==========================================
  if (etapa === 2) {
    return (
      <Section id="contato">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-capi-surface to-capi-surface-light border border-capi-cyan/30 rounded-3xl p-8 sm:p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500/20 to-capi-cyan/20 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Recebemos seu pedido, <span className="text-capi-cyan">{formData.nome.split(' ')[0]}</span>! 🎉
            </h2>

            <p className="text-gray-400 mb-6 text-lg">
              Nossa equipe vai analisar seu caso e entrar em contato pelo WhatsApp 
              <span className="text-capi-cyan font-medium"> {formData.whatsapp}</span> em até 24 horas úteis.
            </p>

            <div className="bg-capi-dark/50 rounded-xl p-4 mb-8">
              <p className="text-gray-300 text-sm">
                💡 <strong>Dica:</strong> Enquanto isso, dá uma olhada nos nossos cases e veja como ajudamos empresas como a sua.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(`Olá! Acabei de enviar o formulário no site. Sou ${formData.nome} do segmento ${formData.segmento}. Quero agilizar o contato!`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-capi-orange to-capi-cyan text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Quero falar agora
              </a>
              <a 
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 bg-capi-surface hover:bg-capi-surface-light border border-capi-border text-gray-300 px-6 py-3 rounded-xl font-semibold transition-all"
              >
                Ver soluções
              </a>
            </div>
          </div>
        </div>
      </Section>
    )
  }

  // ==========================================
  // FORMULÁRIO
  // ==========================================
  return (
    <Section id="contato">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          
          {/* Lado esquerdo - Benefícios */}
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-capi-cyan/10 text-capi-cyan px-4 py-2 rounded-full text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-capi-cyan rounded-full animate-pulse"></span>
                100% Gratuito
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Solicite seu <span className="gradient-text">Diagnóstico Gratuito</span>
              </h2>
              <p className="text-gray-400">
                Preencha o formulário e nossa equipe vai analisar seu caso para propor a melhor solução de automação.
              </p>
            </div>

            {/* Benefícios */}
            <div className="space-y-4 mb-8">
              {[
                { icon: '⚡', title: 'Resposta em 24h', desc: 'Nossa equipe entra em contato rápido' },
                { icon: '🎯', title: 'Análise personalizada', desc: 'Diagnóstico específico pro seu negócio' },
                { icon: '💰', title: 'Sem compromisso', desc: 'Você decide se faz sentido continuar' },
                { icon: '🔒', title: 'Dados seguros', desc: 'Não compartilhamos suas informações' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-capi-surface rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contato direto */}
            <div className="bg-capi-surface/50 border border-capi-border rounded-xl p-4">
              <p className="text-gray-400 text-sm mb-3">Prefere falar direto?</p>
              <div className="space-y-2">
                <a 
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-capi-cyan hover:text-white transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>+55 41 98478-8066</span>
                </a>
                <a 
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Lado direito - Formulário */}
          <div className="lg:col-span-3">
            <div className="bg-capi-surface border border-capi-border rounded-3xl p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nome e WhatsApp */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Seu nome <span className="text-capi-orange">*</span>
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Como podemos te chamar?"
                      className="w-full bg-capi-surface-light border border-capi-border rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:border-capi-cyan focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      WhatsApp <span className="text-capi-orange">*</span>
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="(41) 99999-9999"
                      maxLength={16}
                      className="w-full bg-capi-surface-light border border-capi-border rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:border-capi-cyan focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    E-mail <span className="text-gray-500">(opcional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full bg-capi-surface-light border border-capi-border rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:border-capi-cyan focus:outline-none transition-colors"
                  />
                </div>

                {/* Segmento */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Segmento do seu negócio <span className="text-capi-orange">*</span>
                  </label>
                  <select
                    name="segmento"
                    value={formData.segmento}
                    onChange={handleChange}
                    className="w-full bg-capi-surface-light border border-capi-border rounded-xl px-4 py-3.5 text-white focus:border-capi-cyan focus:outline-none transition-colors appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
                  >
                    {segmentos.map((seg) => (
                      <option key={seg.value} value={seg.value} className="bg-capi-dark">
                        {seg.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Maior dor */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Qual sua maior dor hoje? <span className="text-gray-500">(opcional)</span>
                  </label>
                  <select
                    name="dor"
                    value={formData.dor}
                    onChange={handleChange}
                    className="w-full bg-capi-surface-light border border-capi-border rounded-xl px-4 py-3.5 text-white focus:border-capi-cyan focus:outline-none transition-colors appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
                  >
                    {dores.map((dor) => (
                      <option key={dor.value} value={dor.value} className="bg-capi-dark">
                        {dor.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mensagem */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Conte mais sobre seu desafio <span className="text-gray-500">(opcional)</span>
                  </label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Ex: Preciso automatizar o atendimento da minha clínica, hoje perco muitos pacientes..."
                    className="w-full bg-capi-surface-light border border-capi-border rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:border-capi-cyan focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Erro */}
                {status === 'error' && (
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                    <p className="text-yellow-500 text-sm">
                      ⚠️ Ops! Algo deu errado, mas não se preocupe. Tente novamente ou nos chame no WhatsApp.
                    </p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!podeEnviar()}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    podeEnviar()
                      ? 'bg-gradient-to-r from-capi-orange to-capi-cyan text-white hover:shadow-[0_0_30px_rgba(255,107,53,0.4)] hover:scale-[1.02]'
                      : 'bg-capi-border text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Solicitar diagnóstico gratuito
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                      </svg>
                    </>
                  )}
                </button>

                {/* Campos obrigatórios */}
                <p className="text-gray-500 text-xs text-center">
                  <span className="text-capi-orange">*</span> Campos obrigatórios
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
