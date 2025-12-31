import { useState } from 'react'
import { QUIZ_PERGUNTAS, SERVICOS, SITE_CONFIG } from '../config/content'
import { Section, SectionTitle, WhatsAppIcon } from './UI'

export default function Quiz() {
  const [etapa, setEtapa] = useState(0) // 0 = intro, 1-4 = perguntas, 5 = resultado
  const [respostas, setRespostas] = useState({})
  const [solucaoRecomendada, setSolucaoRecomendada] = useState(null)

  const iniciarQuiz = () => setEtapa(1)

  const responder = (perguntaIndex, resposta) => {
    const novasRespostas = { ...respostas, [perguntaIndex]: resposta }
    setRespostas(novasRespostas)

    if (perguntaIndex < QUIZ_PERGUNTAS.length - 1) {
      // Próxima pergunta
      setEtapa(perguntaIndex + 2)
    } else {
      // Calcular resultado
      calcularResultado(novasRespostas)
      setEtapa(QUIZ_PERGUNTAS.length + 1)
    }
  }

  const calcularResultado = (respostas) => {
    // Pega a solução da primeira resposta (segmento)
    const segmento = respostas[0]
    const solucaoId = segmento?.solucao || 'consultoria'
    const solucao = SERVICOS.find(s => s.id === solucaoId) || SERVICOS[0]
    setSolucaoRecomendada(solucao)
  }

  const reiniciar = () => {
    setEtapa(0)
    setRespostas({})
    setSolucaoRecomendada(null)
  }

  // Intro do Quiz
  if (etapa === 0) {
    return (
      <Section id="quiz" className="bg-gradient-to-b from-capi-surface/20 to-transparent">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">🎯</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Qual solução é <span className="gradient-text">ideal para você</span>?
          </h2>
          <p className="text-gray-400 mb-8">
            Responda 4 perguntas rápidas e descubra qual automação vai transformar seu negócio.
          </p>
          <button
            onClick={iniciarQuiz}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-capi-orange to-capi-cyan text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105 animate-glow"
          >
            Começar Quiz
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </button>
          <p className="text-gray-500 text-sm mt-4">⏱️ Leva menos de 1 minuto</p>
        </div>
      </Section>
    )
  }

  // Perguntas
  if (etapa <= QUIZ_PERGUNTAS.length) {
    const perguntaAtual = QUIZ_PERGUNTAS[etapa - 1]
    const progresso = (etapa / QUIZ_PERGUNTAS.length) * 100

    return (
      <Section id="quiz" className="bg-gradient-to-b from-capi-surface/20 to-transparent">
        <div className="max-w-2xl mx-auto">
          {/* Barra de progresso */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Pergunta {etapa} de {QUIZ_PERGUNTAS.length}</span>
              <span>{Math.round(progresso)}%</span>
            </div>
            <div className="h-2 bg-capi-surface-light rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-capi-orange to-capi-cyan transition-all duration-500"
                style={{ width: `${progresso}%` }}
              />
            </div>
          </div>

          {/* Pergunta */}
          <div className="bg-capi-surface border border-capi-border rounded-3xl p-6 sm:p-8 animate-fade-in">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
              {perguntaAtual.pergunta}
            </h3>

            {/* Opções */}
            <div className="grid gap-4">
              {perguntaAtual.opcoes.map((opcao, index) => (
                <button
                  key={index}
                  onClick={() => responder(etapa - 1, opcao)}
                  className="w-full text-left bg-capi-surface-light hover:bg-capi-surface-light/80 border border-capi-border hover:border-capi-cyan/50 rounded-xl p-4 sm:p-5 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 bg-capi-surface rounded-full flex items-center justify-center text-gray-400 group-hover:text-capi-cyan group-hover:bg-capi-cyan/10 transition-all">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-gray-300 group-hover:text-white text-lg">
                      {opcao.texto}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Section>
    )
  }

  // Resultado
  return (
    <Section id="quiz" className="bg-gradient-to-b from-capi-surface/20 to-transparent">
      <div className="max-w-2xl mx-auto text-center animate-fade-in">
        {/* Confetti visual */}
        <div className="text-6xl mb-6">🎉</div>
        
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Sua solução ideal é o <span className="gradient-text">{solucaoRecomendada?.titulo}</span>!
        </h2>
        
        <p className="text-gray-400 mb-8 text-lg">
          {solucaoRecomendada?.descricao.texto}
        </p>

        {/* Card da solução */}
        <div className="bg-capi-surface border border-capi-cyan/30 rounded-2xl p-6 mb-8 text-left">
          <div className="flex items-center gap-4 mb-4">
            {solucaoRecomendada?.icone.startsWith('http') ? (
              <img src={solucaoRecomendada.icone} alt={solucaoRecomendada.titulo} className="w-12 h-12 object-contain"/>
            ) : (
              <span className="text-4xl">{solucaoRecomendada?.icone}</span>
            )}
            <div>
              <h3 className="text-xl font-bold text-white">{solucaoRecomendada?.titulo}</h3>
              <p className="text-gray-400 text-sm">{solucaoRecomendada?.subtitulo}</p>
            </div>
          </div>
          
          <ul className="space-y-2">
            {solucaoRecomendada?.descricao.beneficios.map((beneficio, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-300">
                <span className="text-capi-cyan">✓</span>
                {beneficio}
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(`Olá! Fiz o quiz no site e a solução recomendada foi ${solucaoRecomendada?.titulo}. Quero saber mais!`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-capi-orange to-capi-cyan text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Falar com especialista
          </a>
          <button
            onClick={reiniciar}
            className="inline-flex items-center justify-center gap-2 bg-capi-surface hover:bg-capi-surface-light border border-capi-border text-gray-300 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
          >
            Refazer quiz
          </button>
        </div>
      </div>
    </Section>
  )
}
