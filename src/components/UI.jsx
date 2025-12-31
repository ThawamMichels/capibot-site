/**
 * Componentes de UI reutilizáveis
 */

// Ícone do WhatsApp
export const WhatsAppIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

// Ícone de Check
export const CheckIcon = () => (
  <span className="benefit-check w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0">
    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
    </svg>
  </span>
)

// Ícone de seta para baixo
export const ArrowDownIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
  </svg>
)

// Ícone de email
export const EmailIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
)

// Ícone de calendário
export const CalendarIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
  </svg>
)

// Ícone de calculadora
export const CalculatorIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
  </svg>
)

// Botão primário (laranja)
export const ButtonPrimary = ({ children, href, onClick, className = "" }) => {
  const classes = `inline-flex items-center justify-center gap-2 bg-gradient-to-r from-capi-orange to-capi-orange-dark hover:from-capi-orange-dark hover:to-capi-orange text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 neon-orange ${className}`
  
  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{children}</a>
  }
  return <button onClick={onClick} className={classes}>{children}</button>
}

// Botão secundário (cyan)
export const ButtonSecondary = ({ children, href, onClick, className = "" }) => {
  const classes = `inline-flex items-center justify-center gap-2 bg-gradient-to-r from-capi-cyan to-capi-cyan-dark hover:from-capi-cyan-dark hover:to-capi-cyan text-capi-dark px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 neon-cyan ${className}`
  
  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{children}</a>
  }
  return <button onClick={onClick} className={classes}>{children}</button>
}

// Botão outline
export const ButtonOutline = ({ children, href, onClick, className = "" }) => {
  const classes = `inline-flex items-center justify-center gap-2 bg-capi-surface hover:bg-capi-surface-light border border-capi-border text-gray-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${className}`
  
  if (href) {
    return <a href={href} className={classes}>{children}</a>
  }
  return <button onClick={onClick} className={classes}>{children}</button>
}

// Card de estatística
export const StatCard = ({ valor, label, sub, destaque = false }) => (
  <div className={`bg-capi-surface border border-capi-border rounded-2xl p-6 text-center hover:border-capi-cyan/50 transition-all duration-300 group ${destaque ? 'hover:border-capi-orange/50' : ''}`}>
    <div className={`text-4xl sm:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 ${destaque ? 'text-capi-orange' : 'gradient-text'}`}>
      {valor}
    </div>
    <div className="text-base font-medium text-white mb-1">{label}</div>
    <div className="text-xs text-gray-500">{sub}</div>
  </div>
)

// Container de seção
export const Section = ({ children, className = "", id = "" }) => (
  <section id={id} className={`py-16 px-4 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
)

// Título de seção
export const SectionTitle = ({ children, subtitle, className = "" }) => (
  <div className={`text-center mb-12 ${className}`}>
    <h2 className="text-3xl sm:text-4xl font-bold mb-4">{children}</h2>
    {subtitle && <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
)

// Container de vídeo responsivo
export const VideoContainer = ({ videoId, title }) => (
  <div className="video-container neon-cyan">
    <iframe 
      src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
      title={title}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
    />
  </div>
)
