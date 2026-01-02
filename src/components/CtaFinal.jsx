import { SITE_CONFIG } from '../config/content'
import { WhatsAppIcon } from './UI'

export default function CtaFinal() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-capi-orange/10 to-capi-cyan/10"></div>
      
      <div className="max-w-3xl mx-auto text-center relative">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Pronto para <span className="gradient-text">automatizar de verdade</span>?
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          Sem promessas milagrosas. Consultoria real, resultados reais.
        </p>
        <a 
          href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent('Olá! Vim pelo site da CAPIBOT e gostaria de agendar uma consultoria.')}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-capi-orange to-capi-cyan hover:opacity-90 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105 animate-glow"
        >
          <WhatsAppIcon className="w-7 h-7" />
          Agendar consultoria gratuita
        </a>
      </div>
    </section>
  )
}
