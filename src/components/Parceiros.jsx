import { useState } from 'react'
import { PARCEIROS } from '../config/content'
import { Section, SectionTitle } from './UI'

export default function Parceiros() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <Section id="parceiros">
      <SectionTitle subtitle="Juntos, entregamos soluções completas para transformar seu negócio">
        Nossos <span className="gradient-text">Parceiros</span>
      </SectionTitle>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {PARCEIROS.map((parceiro, index) => (
          <a
            key={index}
            href={parceiro.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative bg-capi-surface border border-capi-border rounded-2xl p-6 hover:border-capi-cyan/50 transition-all duration-500 overflow-hidden"
          >
            {/* Glow effect on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br from-capi-orange/5 to-capi-cyan/5 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`} />
            
            <div className="relative flex items-center gap-6">
              {/* Logo do parceiro */}
              <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={parceiro.logo} 
                  alt={parceiro.nome}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center text-2xl font-bold text-capi-dark">
                  {parceiro.nome.charAt(0)}
                </div>
              </div>

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white group-hover:text-capi-cyan transition-colors mb-1">
                  {parceiro.nome}
                </h3>
                <p className="text-gray-400 text-sm mb-2">
                  {parceiro.descricao}
                </p>
                <span className="inline-flex items-center gap-1 text-capi-orange text-sm group-hover:gap-2 transition-all">
                  Conhecer
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </span>
              </div>
            </div>

            {/* Animated border */}
            <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-capi-orange to-capi-cyan transition-all duration-500 ${hoveredIndex === index ? 'w-full' : 'w-0'}`} />
          </a>
        ))}
      </div>

      {/* CTA para novos parceiros */}
      <div className="mt-12 text-center">
        <p className="text-gray-400 mb-4">Quer ser nosso parceiro?</p>
        <a 
          href="mailto:comercial@capibot.cloud?subject=Parceria CAPIBOT"
          className="inline-flex items-center gap-2 text-capi-cyan hover:text-capi-orange transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          comercial@capibot.cloud
        </a>
      </div>
    </Section>
  )
}
