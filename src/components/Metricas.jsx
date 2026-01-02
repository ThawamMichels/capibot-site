import { METRICAS, SITE_CONFIG } from '../config/content'
import { Section, StatCard } from './UI'

export default function Metricas() {
  return (
    <Section className="bg-capi-surface/20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{METRICAS.titulo}</h2>
        <p className="text-gray-400">{METRICAS.subtitulo}</p>
        <p className="text-capi-cyan text-sm mt-2">{METRICAS.periodo}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Cards de métricas */}
        <div className="grid grid-cols-2 gap-4">
          {METRICAS.items.map((item, index) => (
            <StatCard 
              key={index}
              valor={item.valor}
              label={item.label}
              sub={item.sub}
              destaque={item.destaque}
            />
          ))}
        </div>

        {/* Imagem do dashboard */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-capi-orange to-capi-cyan rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
          <img 
            src={SITE_CONFIG.dashboard}
            alt="Dashboard CAPIBOT" 
            className="relative rounded-2xl border border-capi-border w-full shadow-2xl"
          />
        </div>
      </div>
    </Section>
  )
}