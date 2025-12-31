import { COMO_FUNCIONA } from '../config/content'
import { Section, SectionTitle } from './UI'

export default function ComoFunciona() {
  return (
    <Section id="como-funciona" className="bg-capi-surface/20">
      <SectionTitle subtitle="Nosso processo é simples e transparente">
        Como <span className="gradient-text">funciona</span>
      </SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {COMO_FUNCIONA.map((passo, index) => (
          <div 
            key={index}
            className="relative bg-capi-surface border border-capi-border rounded-2xl p-6 hover:border-capi-cyan/50 transition-all duration-300 group"
          >
            {/* Número */}
            <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-capi-orange to-capi-cyan rounded-full flex items-center justify-center font-bold text-white text-sm">
              {passo.numero}
            </div>
            
            {/* Ícone */}
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {passo.icone}
            </div>
            
            {/* Título */}
            <h3 className="text-xl font-bold text-white mb-2">{passo.titulo}</h3>
            
            {/* Descrição */}
            <p className="text-gray-400 text-sm">{passo.descricao}</p>

            {/* Linha conectora (exceto último) */}
            {index < COMO_FUNCIONA.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-capi-cyan/50 to-transparent"></div>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
