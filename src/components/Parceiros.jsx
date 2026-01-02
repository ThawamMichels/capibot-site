import { PARCEIROS } from '../config/content'
import { Section, SectionTitle } from './UI'

export default function Parceiros() {
  // Duplica os parceiros para criar efeito de loop infinito
  const parceirosLoop = [...PARCEIROS, ...PARCEIROS, ...PARCEIROS]

  return (
    <Section id="parceiros" className="overflow-hidden">
      <SectionTitle subtitle="Juntos, entregamos soluções completas para transformar seu negócio">
        Nossos <span className="gradient-text">Parceiros</span>
      </SectionTitle>

      {/* Container do carrossel */}
      <div className="relative">
        {/* Gradiente de fade nas laterais
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-capi-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-capi-dark to-transparent z-10 pointer-events-none" /> */}
        
        {/* Carrossel animado */}
        <div className="flex gap-16 animate-scroll py-4">
          {parceirosLoop.map((parceiro, index) => (
            <a
              key={index}
              href={parceiro.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 group"
            >
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 bg-capi-surface border-2 border-capi-border rounded-full flex items-center justify-center p-5 sm:p-6 transition-all duration-500 hover:border-capi-cyan hover:scale-110 hover:shadow-[0_0_30px_rgba(0,212,170,0.3)]">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-capi-orange/10 to-capi-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Logo */}
                <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center p-3 overflow-hidden">
                  <img 
                    src={parceiro.logo} 
                    alt={parceiro.nome}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center text-2xl font-bold text-capi-dark">
                    {parceiro.nome.charAt(0)}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Cards detalhados abaixo */}
      <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
        {PARCEIROS.map((parceiro, index) => (
          <a
            key={index}
            href={parceiro.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-br from-capi-surface to-capi-surface-light border border-capi-border rounded-2xl p-6 hover:border-capi-cyan/50 transition-all duration-500 overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-capi-orange/5 to-capi-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex items-center gap-5">
              {/* Logo bubble */}
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-3 shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,212,170,0.3)] transition-all duration-500">
                <img 
                  src={parceiro.logo} 
                  alt={parceiro.nome}
                  loading="lazy"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center text-xl font-bold text-capi-dark">
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
                <span className="inline-flex items-center gap-2 text-capi-orange text-sm font-medium group-hover:gap-3 transition-all">
                  Visitar site
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </span>
              </div>
            </div>

            {/* Animated border bottom */}
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-capi-orange to-capi-cyan w-0 group-hover:w-full transition-all duration-500" />
          </a>
        ))}
      </div>

      {/* CTA para novos parceiros */}
      <div className="mt-12 text-center">
        <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-capi-surface/50 border border-capi-border rounded-full px-6 py-3">
          <span className="text-gray-400">Quer ser nosso parceiro?</span>
          <a 
            href="mailto:comercial@capibot.cloud?subject=Parceria CAPIBOT"
            className="inline-flex items-center gap-2 text-capi-cyan hover:text-capi-orange transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Entre em contato
          </a>
        </div>
      </div>
    </Section>
  )
}
