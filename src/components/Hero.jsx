import { SITE_CONFIG } from '../config/content'
import { WhatsAppIcon, ArrowDownIcon } from './UI'

export default function Hero() {
  return (
    <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-capi-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-capi-cyan/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-capi-surface/80 border border-capi-border rounded-full px-4 py-2 mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-capi-cyan rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-400">{SITE_CONFIG.slogan}</span>
            </div>
            
            {/* Título */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up">
              <span className="gradient-text">Automação que resolve de verdade</span>
            </h1>
            
            {/* Subtítulo */}
            <p className="text-lg sm:text-xl text-gray-400 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Chega de chatbots que não funcionam. Aqui, a gente entende seu problema antes de automatizar.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <a 
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent('Olá! Vim pelo site e gostaria de saber mais sobre automação.')}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-capi-orange to-capi-orange-dark hover:from-capi-orange-dark hover:to-capi-orange text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 neon-orange"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Quero uma consultoria
              </a>
              <a 
                href="#servicos" 
                className="inline-flex items-center justify-center gap-2 bg-capi-surface hover:bg-capi-surface-light border border-capi-border text-gray-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                Conhecer serviços
                <ArrowDownIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Mascote */}
          <div className="hidden lg:flex justify-center">
            <img 
              src={SITE_CONFIG.mascote}
              alt="CAPIBOT Mascote" 
              className="w-[420px] h-[420px] object-contain drop-shadow-2xl animate-float"
              style={{ filter: 'drop-shadow(0 0 30px rgba(255, 107, 53, 0.4)) drop-shadow(0 0 60px rgba(0, 212, 170, 0.3))' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
