import { useState } from 'react'
import { SITE_CONFIG } from '../config/content'
import { Section, SectionTitle, CalculatorIcon, WhatsAppIcon } from './UI'

// Modos de cálculo disponíveis
const MODOS = [
  {
    id: 'leads',
    nome: 'Leads Perdidos',
    icone: '📉',
    descricao: 'Calcule quanto você perde por não atender fora do horário',
  },
  {
    id: 'horas',
    nome: 'Horas de Trabalho',
    icone: '⏱️',
    descricao: 'Calcule quanto economiza automatizando tarefas repetitivas',
  },
  {
    id: 'atendimentos',
    nome: 'Atendimentos',
    icone: '💬',
    descricao: 'Calcule a economia ao escalar seu atendimento',
  },
]

export default function Calculadora() {
  const [modoAtivo, setModoAtivo] = useState('leads')
  const [mostrarResultado, setMostrarResultado] = useState(false)

  // Estados para modo LEADS
  const [leadsPerdidos, setLeadsPerdidos] = useState(50)
  const [ticketMedio, setTicketMedio] = useState(500)
  const [taxaConversao, setTaxaConversao] = useState(30)

  // Estados para modo HORAS
  const [horasTarefa, setHorasTarefa] = useState(20)
  const [custoHora, setCustoHora] = useState(50)
  const [reducaoTempo, setReducaoTempo] = useState(70)

  // Estados para modo ATENDIMENTOS
  const [atendimentosDia, setAtendimentosDia] = useState(50)
  const [custoAtendente, setCustoAtendente] = useState(2500)
  const [atendentesAtuais, setAtendentesAtuais] = useState(2)

  // Investimento médio mensal
  const investimentoMedio = 497

  // Cálculos por modo
  const calcularResultados = () => {
    switch (modoAtivo) {
      case 'leads': {
        const receitaPerdida = leadsPerdidos * ticketMedio * (taxaConversao / 100)
        const economiaMensal = receitaPerdida
        const economiaAnual = economiaMensal * 12
        const roi = ((economiaMensal - investimentoMedio) / investimentoMedio * 100).toFixed(0)
        return {
          principal: { label: 'Receita recuperada/mês', valor: receitaPerdida, cor: 'capi-cyan' },
          detalhes: [
            { label: 'Leads que seriam perdidos', valor: `${leadsPerdidos} leads/mês`, tipo: 'texto' },
            { label: 'Conversão estimada', valor: `${taxaConversao}%`, tipo: 'texto' },
          ],
          economiaMensal,
          economiaAnual,
          roi,
        }
      }
      case 'horas': {
        const horasEconomizadas = horasTarefa * (reducaoTempo / 100)
        const economiaMensal = horasEconomizadas * custoHora
        const economiaAnual = economiaMensal * 12
        const roi = ((economiaMensal - investimentoMedio) / investimentoMedio * 100).toFixed(0)
        return {
          principal: { label: 'Economia mensal', valor: economiaMensal, cor: 'capi-cyan' },
          detalhes: [
            { label: 'Horas economizadas/mês', valor: `${horasEconomizadas.toFixed(0)}h`, tipo: 'texto' },
            { label: 'Redução de tempo', valor: `${reducaoTempo}%`, tipo: 'texto' },
          ],
          economiaMensal,
          economiaAnual,
          roi,
        }
      }
      case 'atendimentos': {
        const capacidadeBot = atendimentosDia * 30 * 0.6 // Bot resolve 60% dos atendimentos
        const atendentesNecessarios = Math.ceil((atendimentosDia * 30 * 0.4) / 500) // 500 atendimentos/mês por atendente
        const economiaAtendentes = Math.max(0, atendentesAtuais - atendentesNecessarios) * custoAtendente
        const economiaMensal = economiaAtendentes
        const economiaAnual = economiaMensal * 12
        const roi = economiaMensal > 0 ? ((economiaMensal - investimentoMedio) / investimentoMedio * 100).toFixed(0) : 0
        return {
          principal: { label: 'Economia com equipe/mês', valor: economiaMensal, cor: 'capi-cyan' },
          detalhes: [
            { label: 'Atendimentos automatizados', valor: `${capacidadeBot.toFixed(0)}/mês`, tipo: 'texto' },
            { label: 'Atendentes necessários', valor: `${atendentesNecessarios} (antes: ${atendentesAtuais})`, tipo: 'texto' },
          ],
          economiaMensal,
          economiaAnual,
          roi,
        }
      }
      default:
        return null
    }
  }

  const resultados = calcularResultados()

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
  }

  const handleModoChange = (modo) => {
    setModoAtivo(modo)
    setMostrarResultado(false)
  }

  const mensagemWhatsApp = () => {
    const modo = MODOS.find(m => m.id === modoAtivo)
    return `Olá! Fiz o cálculo de ${modo.nome} no site e vi que posso economizar ${formatCurrency(resultados.economiaMensal)} por mês. Quero saber mais!`
  }

  return (
    <Section id="calculadora">
      <SectionTitle subtitle="Descubra quanto você pode economizar com automação">
        <span className="inline-flex items-center gap-3">
          <CalculatorIcon className="w-10 h-10 text-capi-cyan" />
          Calculadora de ROI
        </span>
      </SectionTitle>

      <div className="max-w-4xl mx-auto">
        {/* Seletor de Modo */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {MODOS.map((modo) => (
            <button
              key={modo.id}
              onClick={() => handleModoChange(modo.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                modoAtivo === modo.id
                  ? 'bg-gradient-to-r from-capi-orange to-capi-orange-dark text-white shadow-lg shadow-capi-orange/25'
                  : 'bg-capi-surface hover:bg-capi-surface-light text-gray-400 hover:text-white border border-capi-border'
              }`}
            >
              <span className="text-xl">{modo.icone}</span>
              <span className="hidden sm:inline">{modo.nome}</span>
            </button>
          ))}
        </div>

        {/* Descrição do modo */}
        <p className="text-center text-gray-400 mb-6">
          {MODOS.find(m => m.id === modoAtivo)?.descricao}
        </p>

        <div className="bg-capi-surface border border-capi-border rounded-3xl p-6 sm:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">Informe seus dados:</h3>

              {/* ==================== MODO LEADS ==================== */}
              {modoAtivo === 'leads' && (
                <>
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

                  <div>
                    <label className="block text-gray-400 mb-2">
                      Qual o ticket médio do seu serviço?
                    </label>
                    <input
                      type="range"
                      min="100"
                      max="10000"
                      step="100"
                      value={ticketMedio}
                      onChange={(e) => setTicketMedio(Number(e.target.value))}
                      className="w-full h-2 bg-capi-surface-light rounded-lg appearance-none cursor-pointer accent-capi-cyan"
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-500">R$ 100</span>
                      <span className="text-lg font-bold text-capi-cyan">{formatCurrency(ticketMedio)}</span>
                      <span className="text-sm text-gray-500">R$ 10.000</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2">
                      Taxa de conversão esperada
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="50"
                      value={taxaConversao}
                      onChange={(e) => setTaxaConversao(Number(e.target.value))}
                      className="w-full h-2 bg-capi-surface-light rounded-lg appearance-none cursor-pointer accent-capi-orange"
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-500">5%</span>
                      <span className="text-lg font-bold text-capi-orange">{taxaConversao}%</span>
                      <span className="text-sm text-gray-500">50%</span>
                    </div>
                  </div>
                </>
              )}

              {/* ==================== MODO HORAS ==================== */}
              {modoAtivo === 'horas' && (
                <>
                  <div>
                    <label className="block text-gray-400 mb-2">
                      Horas gastas em tarefas repetitivas por mês
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="160"
                      value={horasTarefa}
                      onChange={(e) => setHorasTarefa(Number(e.target.value))}
                      className="w-full h-2 bg-capi-surface-light rounded-lg appearance-none cursor-pointer accent-capi-orange"
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-500">5h</span>
                      <span className="text-lg font-bold text-capi-orange">{horasTarefa}h/mês</span>
                      <span className="text-sm text-gray-500">160h</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2">
                      Custo médio da hora de trabalho
                    </label>
                    <input
                      type="range"
                      min="20"
                      max="300"
                      step="10"
                      value={custoHora}
                      onChange={(e) => setCustoHora(Number(e.target.value))}
                      className="w-full h-2 bg-capi-surface-light rounded-lg appearance-none cursor-pointer accent-capi-cyan"
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-500">R$ 20</span>
                      <span className="text-lg font-bold text-capi-cyan">{formatCurrency(custoHora)}/h</span>
                      <span className="text-sm text-gray-500">R$ 300</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2">
                      Redução de tempo esperada com automação
                    </label>
                    <input
                      type="range"
                      min="30"
                      max="90"
                      value={reducaoTempo}
                      onChange={(e) => setReducaoTempo(Number(e.target.value))}
                      className="w-full h-2 bg-capi-surface-light rounded-lg appearance-none cursor-pointer accent-capi-orange"
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-500">30%</span>
                      <span className="text-lg font-bold text-capi-orange">{reducaoTempo}%</span>
                      <span className="text-sm text-gray-500">90%</span>
                    </div>
                  </div>
                </>
              )}

              {/* ==================== MODO ATENDIMENTOS ==================== */}
              {modoAtivo === 'atendimentos' && (
                <>
                  <div>
                    <label className="block text-gray-400 mb-2">
                      Quantos atendimentos você recebe por dia?
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="500"
                      value={atendimentosDia}
                      onChange={(e) => setAtendimentosDia(Number(e.target.value))}
                      className="w-full h-2 bg-capi-surface-light rounded-lg appearance-none cursor-pointer accent-capi-orange"
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-500">10</span>
                      <span className="text-lg font-bold text-capi-orange">{atendimentosDia}/dia</span>
                      <span className="text-sm text-gray-500">500</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2">
                      Quantos atendentes você tem hoje?
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={atendentesAtuais}
                      onChange={(e) => setAtendentesAtuais(Number(e.target.value))}
                      className="w-full h-2 bg-capi-surface-light rounded-lg appearance-none cursor-pointer accent-capi-cyan"
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-500">1</span>
                      <span className="text-lg font-bold text-capi-cyan">{atendentesAtuais} atendentes</span>
                      <span className="text-sm text-gray-500">20</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2">
                      Custo mensal por atendente (salário + encargos)
                    </label>
                    <input
                      type="range"
                      min="1500"
                      max="8000"
                      step="500"
                      value={custoAtendente}
                      onChange={(e) => setCustoAtendente(Number(e.target.value))}
                      className="w-full h-2 bg-capi-surface-light rounded-lg appearance-none cursor-pointer accent-capi-orange"
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-500">R$ 1.500</span>
                      <span className="text-lg font-bold text-capi-orange">{formatCurrency(custoAtendente)}</span>
                      <span className="text-sm text-gray-500">R$ 8.000</span>
                    </div>
                  </div>
                </>
              )}

              <button
                onClick={() => setMostrarResultado(true)}
                className="w-full bg-gradient-to-r from-capi-orange to-capi-cyan text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                Calcular meu ROI
              </button>
            </div>

            {/* Resultado */}
            <div className={`transition-all duration-500 ${mostrarResultado ? 'opacity-100' : 'opacity-50'}`}>
              <h3 className="text-xl font-bold text-white mb-4">Seu resultado:</h3>

              <div className="space-y-4">
                {/* Resultado principal */}
                <div className={`bg-capi-surface-light/50 rounded-xl p-4 border border-${resultados.principal.cor}/20`}>
                  <p className="text-gray-400 text-sm mb-1">{resultados.principal.label}</p>
                  <p className={`text-2xl font-bold text-${resultados.principal.cor}`}>
                    {formatCurrency(resultados.principal.valor)}
                  </p>
                </div>

                {/* Detalhes */}
                {resultados.detalhes.map((detalhe, index) => (
                  <div key={index} className="bg-capi-surface-light/30 rounded-xl p-3 border border-capi-border/50">
                    <p className="text-gray-500 text-xs">{detalhe.label}</p>
                    <p className="text-white font-medium">{detalhe.valor}</p>
                  </div>
                ))}

                {/* Economia anual */}
                <div className="bg-gradient-to-br from-capi-orange/20 to-capi-cyan/20 rounded-xl p-4 border border-capi-orange/30">
                  <p className="text-gray-400 text-sm mb-1">Economia potencial anual</p>
                  <p className="text-3xl font-bold gradient-text">{formatCurrency(resultados.economiaAnual)}</p>
                </div>

                {/* ROI */}
                <div className="bg-capi-surface-light/50 rounded-xl p-4 border border-green-500/20">
                  <p className="text-gray-400 text-sm mb-1">ROI estimado</p>
                  <p className="text-2xl font-bold text-green-400">{resultados.roi}%</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Considerando investimento médio de {formatCurrency(investimentoMedio)}/mês
                  </p>
                </div>
              </div>

              {mostrarResultado && (
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(mensagemWhatsApp())}`}
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
