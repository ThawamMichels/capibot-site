import { useState } from 'react'
import { CALCULADORA_CONFIG, SITE_CONFIG } from '../config/content'
import { Section, SectionTitle, CalculatorIcon, WhatsAppIcon } from './UI'

export default function Calculadora() {
  const [leadsPerdidos, setLeadsPerdidos] = useState(50)
  const [ticketMedio, setTicketMedio] = useState(500)
  const [custoAtendente, setCustoAtendente] = useState(2500)
  const [mostrarResultado, setMostrarResultado] = useState(false)

  // Cálculos
  const receitaPerdida = leadsPerdidos * ticketMedio * CALCULADORA_CONFIG.taxaConversaoAutomacao
  const economiaMensal = (leadsPerdidos * CALCULADORA_CONFIG.horasPorAtendimento * CALCULADORA_CONFIG.custoHoraAtendente) + receitaPerdida
  const economiaAnual = economiaMensal * 12
  const roiEstimado = ((economiaMensal - 500) / 500 * 100).toFixed(0) // Assumindo investimento de R$500/mês

  const calcular = () => {
    setMostrarResultado(true)
  }

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
  }

  return (
    <Section id="calculadora">
      <SectionTitle subtitle={CALCULADORA_CONFIG.subtitulo}>
        <span className="inline-flex items-center gap-3">
          <CalculatorIcon className="w-10 h-10 text-capi-cyan" />
          {CALCULADORA_CONFIG.titulo}
        </span>
      </SectionTitle>

      <div className="max-w-4xl mx-auto">
        <div className="bg-capi-surface border border-capi-border rounded-3xl p-6 sm:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">Informe seus dados:</h3>
              
              {/* Leads perdidos */}
              <div>
                <label className="block text-gray-400 mb-2">
                  Quantos leads você perde por mês (fora do horário)?
                </label>
                <input
                  type="range"
                  min="10"
                  max="500"
                  value={leadsPerdidos}
                  onChange={(e) => setLeadsPerdidos(Number(e.target.value))}
                  className="w-full h-2 bg-capi-surface-light rounded-lg appearance-none cursor-pointer accent-capi-orange"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-500">10</span>
                  <span className="text-lg font-bold text-capi-orange">{leadsPerdidos} leads</span>
                  <span className="text-sm text-gray-500">500</span>
                </div>
              </div>

              {/* Ticket médio */}
              <div>
                <label className="block text-gray-400 mb-2">
                  Qual o ticket médio do seu serviço? (R$)
                </label>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="100"
                  value={ticketMedio}
                  onChange={(e) => setTicketMedio(Number(e.target.value))}
                  className="w-full h-2 bg-capi-surface-light rounded-lg appearance-none cursor-pointer accent-capi-cyan"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-500">R$ 100</span>
                  <span className="text-lg font-bold text-capi-cyan">{formatCurrency(ticketMedio)}</span>
                  <span className="text-sm text-gray-500">R$ 5.000</span>
                </div>
              </div>

              {/* Custo atendente */}
              <div>
                <label className="block text-gray-400 mb-2">
                  Custo mensal com atendimento (R$)
                </label>
                <input
                  type="range"
                  min="1500"
                  max="10000"
                  step="500"
                  value={custoAtendente}
                  onChange={(e) => setCustoAtendente(Number(e.target.value))}
                  className="w-full h-2 bg-capi-surface-light rounded-lg appearance-none cursor-pointer accent-capi-orange"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-500">R$ 1.500</span>
                  <span className="text-lg font-bold text-capi-orange">{formatCurrency(custoAtendente)}</span>
                  <span className="text-sm text-gray-500">R$ 10.000</span>
                </div>
              </div>

              <button
                onClick={calcular}
                className="w-full bg-gradient-to-r from-capi-orange to-capi-cyan text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                Calcular meu ROI
              </button>
            </div>

            {/* Resultado */}
            <div className={`transition-all duration-500 ${mostrarResultado ? 'opacity-100' : 'opacity-50'}`}>
              <h3 className="text-xl font-bold text-white mb-4">Seu resultado:</h3>
              
              <div className="space-y-4">
                {/* Receita perdida */}
                <div className="bg-capi-surface-light/50 rounded-xl p-4 border border-red-500/20">
                  <p className="text-gray-400 text-sm mb-1">Receita perdida por mês</p>
                  <p className="text-2xl font-bold text-red-400">{formatCurrency(receitaPerdida)}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {leadsPerdidos} leads × {formatCurrency(ticketMedio)} × 30% conversão
                  </p>
                </div>

                {/* Economia mensal */}
                <div className="bg-capi-surface-light/50 rounded-xl p-4 border border-capi-cyan/20">
                  <p className="text-gray-400 text-sm mb-1">Economia potencial mensal</p>
                  <p className="text-2xl font-bold text-capi-cyan">{formatCurrency(economiaMensal)}</p>
                </div>

                {/* Economia anual */}
                <div className="bg-gradient-to-br from-capi-orange/20 to-capi-cyan/20 rounded-xl p-4 border border-capi-orange/30">
                  <p className="text-gray-400 text-sm mb-1">Economia potencial anual</p>
                  <p className="text-3xl font-bold gradient-text">{formatCurrency(economiaAnual)}</p>
                </div>

                {/* ROI */}
                <div className="bg-capi-surface-light/50 rounded-xl p-4 border border-green-500/20">
                  <p className="text-gray-400 text-sm mb-1">ROI estimado</p>
                  <p className="text-2xl font-bold text-green-400">{roiEstimado}%</p>
                  <p className="text-xs text-gray-500 mt-1">Considerando investimento médio de R$ 500/mês</p>
                </div>
              </div>

              {mostrarResultado && (
                <a 
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(`Olá! Fiz o cálculo no site e vi que posso economizar ${formatCurrency(economiaMensal)} por mês. Quero saber mais!`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-capi-cyan to-capi-cyan-dark text-capi-dark py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all duration-300"
                >
                  <WhatsAppIcon className="w-6 h-6" />
                  Quero economizar isso!
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
