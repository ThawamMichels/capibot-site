import { useState, useRef, useEffect } from 'react'
import { SERVICOS, SITE_CONFIG } from '../config/content'
import { Section, SectionTitle, WhatsAppIcon } from './UI'

// ==========================================
// COMPONENTE DE VÍDEO COM FALLBACK
// ==========================================
function VideoPlayer({ video, thumbnail, titulo, onPlay }) {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef(null)

  // Reset quando muda o vídeo
  useEffect(() => {
    setHasError(false)
    setIsLoading(true)
    setIsPlaying(false)
    setIsMuted(true)
  }, [video])

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
      onPlay?.()
    }
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  // Se não tem vídeo ou deu erro, mostra placeholder
  if (!video || hasError) {
    return (
      <div className="relative aspect-video bg-gradient-to-br from-capi-surface to-capi-dark rounded-xl overflow-hidden border border-capi-border">
        {/* Thumbnail se existir */}
        {thumbnail && !hasError ? (
          <img 
            src={thumbnail} 
            alt={titulo}
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-capi-orange/10 flex items-center justify-center">
              <svg className="w-12 h-12 text-capi-orange/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        )}
        
        {/* Badge "Em breve" */}
        <div className="absolute inset-0 flex items-center justify-center bg-capi-dark/60 backdrop-blur-sm">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-capi-orange/20 text-capi-orange px-4 py-2 rounded-full text-sm font-medium mb-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Demo em breve
            </div>
            <p className="text-gray-400 text-sm">Estamos preparando este conteúdo</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative aspect-video bg-capi-surface rounded-xl overflow-hidden border border-capi-border group">
      {/* Loading */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-capi-dark z-10">
          <div className="w-10 h-10 border-2 border-capi-orange border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Vídeo */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted={isMuted}
        playsInline
        preload="metadata"
        onLoadedData={() => setIsLoading(false)}
        onError={() => {
          setHasError(true)
          setIsLoading(false)
        }}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Overlay de play (antes de iniciar) */}
      {!isPlaying && !isLoading && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-capi-dark/40 cursor-pointer transition-all hover:bg-capi-dark/30"
          onClick={handlePlay}
        >
          <div className="w-20 h-20 rounded-full bg-capi-orange/90 flex items-center justify-center transition-transform hover:scale-110 shadow-lg">
            <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      )}

      {/* Controles (quando está tocando) */}
      {isPlaying && (
        <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={togglePlay}
            className="w-10 h-10 bg-capi-dark/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-capi-dark transition-all border border-capi-border/50"
            aria-label="Pausar"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          </button>
          
          <button
            onClick={toggleMute}
            className="w-10 h-10 bg-capi-dark/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-capi-dark transition-all border border-capi-border/50"
            aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
          >
            {isMuted ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
            )}
          </button>
        </div>
      )}

      {/* Indicador de som mutado */}
      {isPlaying && isMuted && (
        <div 
          className="absolute top-3 right-3 bg-capi-orange/90 text-white text-xs px-3 py-1.5 rounded-full cursor-pointer hover:bg-capi-orange transition-colors"
          onClick={toggleMute}
        >
          🔊 Ativar som
        </div>
      )}
    </div>
  )
}

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================
export default function Servicos() {
  const [servicoAtivo, setServicoAtivo] = useState(0)
  const [demoAtivo, setDemoAtivo] = useState(0)

  const servico = SERVICOS[servicoAtivo]
  const demo = servico?.demos?.[demoAtivo]

  // Reset demo quando muda o serviço
  useEffect(() => {
    setDemoAtivo(0)
  }, [servicoAtivo])

  if (!servico || !demo) return null

  const whatsappLink = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(demo.cta.mensagem)}`

  return (
    <Section id="servicos">
      <SectionTitle 
        titulo="Nossas Soluções" 
        subtitulo="Escolha a solução ideal para o seu negócio"
      />

      {/* ==========================================
          ABAS DE SERVIÇOS (principais)
          ========================================== */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {SERVICOS.map((s, index) => (
          <button
            key={s.id}
            onClick={() => setServicoAtivo(index)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
              servicoAtivo === index
                ? 'bg-gradient-to-r from-capi-orange to-capi-orange-dark text-white shadow-lg shadow-capi-orange/25'
                : 'bg-capi-surface hover:bg-capi-surface-light text-gray-400 hover:text-white border border-capi-border'
            }`}
          >
            {/* Ícone */}
            {s.icone?.startsWith?.('/') || s.icone?.startsWith?.('http') ? (
              <img src={s.icone} alt="" className="w-5 h-5 object-contain" loading="lazy" />
            ) : (
              <span className="text-lg">{s.emoji}</span>
            )}
            <span className="hidden sm:inline">{s.nome}</span>
          </button>
        ))}
      </div>

      {/* ==========================================
          CONTEÚDO DO SERVIÇO SELECIONADO
          ========================================== */}
      <div className="bg-gradient-to-br from-capi-surface/50 to-capi-dark border border-capi-border rounded-2xl p-6 lg:p-8">
        {/* Header do serviço */}
        <div className="text-center mb-6">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
            {servico.emoji} {servico.titulo}
          </h3>
          <p className="text-gray-400">{servico.subtitulo}</p>
        </div>

        {/* ==========================================
            SUB-ABAS DE DEMOS (se tiver mais de 1)
            ========================================== */}
        {servico.demos.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 mb-6 pb-6 border-b border-capi-border">
            {servico.demos.map((d, index) => (
              <button
                key={d.id}
                onClick={() => setDemoAtivo(index)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  demoAtivo === index
                    ? 'bg-capi-cyan/20 text-capi-cyan border border-capi-cyan/30'
                    : 'bg-capi-dark/50 text-gray-400 hover:text-white hover:bg-capi-dark border border-transparent'
                }`}
              >
                {d.nome}
              </button>
            ))}
          </div>
        )}

        {/* ==========================================
            CONTEÚDO DO DEMO
            ========================================== */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Vídeo */}
          <div>
            <VideoPlayer 
              video={demo.video}
              thumbnail={demo.thumbnail}
              titulo={demo.titulo}
            />
          </div>

          {/* Descrição */}
          <div className="flex flex-col">
            <h4 className="text-xl lg:text-2xl font-bold text-white mb-4">
              {demo.titulo}
            </h4>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              {demo.descricao}
            </p>

            {/* Benefícios */}
            <ul className="space-y-3 mb-8">
              {demo.beneficios.map((beneficio, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-capi-cyan/20 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-capi-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                    </svg>
                  </span>
                  <span className="text-gray-300">{beneficio}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-capi-orange to-capi-orange-dark hover:from-capi-orange-dark hover:to-capi-orange text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-capi-orange/25 mt-auto"
            >
              <WhatsAppIcon className="w-5 h-5" />
              {demo.cta.texto}
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
