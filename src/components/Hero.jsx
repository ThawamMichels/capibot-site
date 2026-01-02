import { useState, useRef } from 'react'
import { SITE_CONFIG } from '../config/content'
import { WhatsAppIcon, ArrowDownIcon } from './UI'

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef(null)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section 
      id="hero"
      aria-label="Seção principal"
      className="pt-24 pb-12 sm:pt-32 sm:pb-16 px-4 relative overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* ============================================
          VÍDEO DE FUNDO (ambiente)
          ============================================ */}
      <div className="absolute inset-0 z-0 bg-capi-dark">
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={SITE_CONFIG.videoBackground} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-capi-dark/90 via-capi-dark/85 to-capi-dark/75"></div>
      </div>
      
      {/* Gradientes de cor decorativos */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-capi-orange/10 rounded-full blur-[120px] z-[1]" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-capi-cyan/10 rounded-full blur-[100px] z-[1]" aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto relative w-full z-[2]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* ============================================
              COLUNA ESQUERDA - Texto e CTAs
              ============================================ */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-capi-surface/80 border border-capi-border rounded-full px-4 py-2 mb-6 animate-fade-in backdrop-blur-sm">
              <span className="w-2 h-2 bg-capi-cyan rounded-full animate-pulse" aria-hidden="true"></span>
              <span className="text-sm text-gray-400">{SITE_CONFIG.slogan}</span>
            </div>
            
            {/* Título */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up">
              <span className="gradient-text">Automação que resolve de verdade</span>
            </h1>
            
            {/* Subtítulo */}
            <p className="text-lg sm:text-xl text-gray-300 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Chega de chatbots que não funcionam. Aqui, a gente entende seu problema antes de automatizar.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <a 
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent('Olá! Vim pelo site e gostaria de saber mais sobre automação.')}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-capi-orange to-capi-orange-dark hover:from-capi-orange-dark hover:to-capi-orange text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 neon-orange"
                aria-label="Iniciar conversa no WhatsApp para consultoria"
              >
                <WhatsAppIcon className="w-6 h-6" aria-hidden="true" />
                Quero uma consultoria
              </a>
              <a 
                href="#servicos" 
                className="inline-flex items-center justify-center gap-2 bg-capi-surface/80 backdrop-blur-sm hover:bg-capi-surface-light border border-capi-border text-gray-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                aria-label="Ver lista de serviços oferecidos"
              >
                Conhecer serviços
                <ArrowDownIcon className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
          
          {/* ============================================
              COLUNA DIREITA - Vídeo IA + Logo
              ============================================ */}
          <div className="order-1 lg:order-2 flex flex-col items-center">
            {/* Container do Vídeo IA */}
            <div className="relative w-full max-w-md lg:max-w-lg animate-fade-in">
              {/* Vídeo da IA */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-capi-border/50 bg-capi-surface">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  playsInline
                  className="w-full aspect-video object-cover"
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src={SITE_CONFIG.videoIA} type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
                
                {/* Controles do vídeo */}
                <div className="absolute bottom-3 right-3 flex gap-2">
                  {/* Botão Play/Pause */}
                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 bg-capi-dark/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-capi-dark transition-all border border-capi-border/50"
                    aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
                  >
                    {isPlaying ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    )}
                  </button>
                  
                  {/* Botão Mute/Unmute */}
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
                
                {/* Indicador "Clique para ativar som" - só aparece se mudo */}
                {isMuted && isPlaying && (
                  <div 
                    className="absolute top-3 right-3 bg-capi-orange/90 text-white text-xs px-3 py-1.5 rounded-full animate-pulse cursor-pointer"
                    onClick={toggleMute}
                  >
                    🔊 Ativar som
                  </div>
                )}
              </div>
              
              {/* Logo CAPIBOT flutuante abaixo do vídeo */}
              <div className="mt-6 flex justify-center animate-float">
                <img 
                  src="/assets/images/logo-hero-capibot.png"
                  alt="CAPIBOT - Consultoria, Automação, Processos, Integração"
                  width="280"
                  height="80"
                  className="h-16 sm:h-20 w-auto drop-shadow-lg"
                  loading="eager"
                  style={{ filter: 'drop-shadow(0 4px 20px rgba(255, 107, 53, 0.3))' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block z-[2]" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gray-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
