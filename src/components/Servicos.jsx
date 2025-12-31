import { useState } from 'react'
import { SERVICOS, SITE_CONFIG } from '../config/content'
import { Section, SectionTitle, VideoContainer, CheckIcon, WhatsAppIcon } from './UI'

export default function Servicos() {
  const [activeTab, setActiveTab] = useState(0)
  const servico = SERVICOS[activeTab]

  return (
    <Section id="servicos">
      <SectionTitle subtitle="Escolha a solução que mais se encaixa no seu cenário ou fale conosco para um diagnóstico personalizado.">
        Soluções para o <span className="gradient-text">seu negócio</span>
      </SectionTitle>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 bg-capi-surface/50 p-2 rounded-2xl border border-capi-border max-w-fit mx-auto">
        {SERVICOS.map((serv, index) => (
          <button
            key={serv.id}
            onClick={() => setActiveTab(index)}
            className={`px-4 sm:px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 text-sm sm:text-base ${
              activeTab === index 
                ? 'bg-capi-surface-light text-white relative tab-active' 
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            {serv.emoji} <span className="hidden sm:inline">{serv.nome}</span>
          </button>
        ))}
      </div>

      {/* Conteúdo da Tab */}
      <div className="bg-capi-surface/30 border border-capi-border rounded-3xl p-6 sm:p-8 animate-fade-in">
        {/* Header do serviço */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            {servico.icone.startsWith('http') ? (
              <img src={servico.icone} alt={servico.titulo} className="w-16 h-16 object-contain"/>
            ) : (
              <span className="text-4xl">{servico.icone}</span>
            )}
            <h3 className="text-2xl sm:text-3xl font-bold">{servico.titulo}</h3>
          </div>
          <p className="text-gray-400">{servico.subtitulo}</p>
        </div>

        {/* Grid: Vídeo + Descrição */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-8">
          {/* Vídeo */}
          <VideoContainer videoId={servico.videoId} title={`Vídeo ${servico.titulo}`} />
          
          {/* Descrição */}
          <div className="space-y-4">
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              {servico.descricao.titulo}
            </h4>
            <p className="text-gray-400 leading-relaxed">
              {servico.descricao.texto}
            </p>
            <div className="space-y-3 pt-2">
              {servico.descricao.beneficios.map((beneficio, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-gray-300">{beneficio}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a 
            href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(servico.cta.mensagem)}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-capi-cyan to-capi-cyan-dark hover:from-capi-cyan-dark hover:to-capi-cyan text-capi-dark px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 neon-cyan"
          >
            <WhatsAppIcon className="w-6 h-6" />
            {servico.cta.texto}
          </a>
        </div>
      </div>
    </Section>
  )
}
