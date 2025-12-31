import { useState } from 'react'
import { SITE_CONFIG } from '../config/content'
import { Section, SectionTitle, EmailIcon } from './UI'

export default function Formulario() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    mensagem: '',
  })
  const [status, setStatus] = useState('idle') // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch(SITE_CONFIG.webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          origem: 'site-capibot',
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ nome: '', email: '', telefone: '', empresa: '', mensagem: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        throw new Error('Erro ao enviar')
      }
    } catch (error) {
      console.error('Erro:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <Section id="contato">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Info */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Prefere <span className="gradient-text">e-mail</span>?
          </h2>
          <p className="text-gray-400 mb-6">
            Preencha o formulário e nossa equipe entrará em contato em até 24 horas úteis.
          </p>

          <div className="space-y-4">
            <a 
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-3 text-gray-300 hover:text-capi-cyan transition-colors"
            >
              <EmailIcon className="w-6 h-6" />
              {SITE_CONFIG.email}
            </a>
            <a 
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-capi-cyan transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              +55 41 98478-8066
            </a>
          </div>
        </div>

        {/* Formulário */}
        <div className="bg-capi-surface border border-capi-border rounded-2xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Nome *</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full bg-capi-surface-light border border-capi-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-capi-cyan focus:outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">E-mail *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-capi-surface-light border border-capi-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-capi-cyan focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Telefone</label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full bg-capi-surface-light border border-capi-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-capi-cyan focus:outline-none transition-colors"
                  placeholder="(41) 99999-9999"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Empresa</label>
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full bg-capi-surface-light border border-capi-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-capi-cyan focus:outline-none transition-colors"
                  placeholder="Nome da empresa"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Mensagem *</label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-capi-surface-light border border-capi-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-capi-cyan focus:outline-none transition-colors resize-none"
                placeholder="Como podemos ajudar?"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                status === 'loading'
                  ? 'bg-gray-600 cursor-not-allowed'
                  : status === 'success'
                  ? 'bg-green-600'
                  : status === 'error'
                  ? 'bg-red-600'
                  : 'bg-gradient-to-r from-capi-orange to-capi-cyan hover:opacity-90 hover:scale-105'
              } text-white`}
            >
              {status === 'loading' && 'Enviando...'}
              {status === 'success' && '✓ Enviado com sucesso!'}
              {status === 'error' && '✗ Erro ao enviar. Tente novamente.'}
              {status === 'idle' && 'Enviar mensagem'}
            </button>
          </form>
        </div>
      </div>
    </Section>
  )
}
