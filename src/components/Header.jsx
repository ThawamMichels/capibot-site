import { useState, useEffect } from 'react'
import { SITE_CONFIG } from '../config/content'
import { WhatsAppIcon } from './UI'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'bg-capi-dark/95 backdrop-blur-xl shadow-lg' : 'bg-capi-dark/80 backdrop-blur-xl'
    } border-b border-capi-border`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={SITE_CONFIG.logo} alt="CAPIBOT" className="h-10 w-10 object-contain"/>
            <span className="text-xl font-bold">
              <span className="text-capi-orange">CAPI</span>
              <span className="text-capi-cyan">BOT</span>
            </span>
          </a>

          {/* Nav Links - Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#servicos" className="text-gray-400 hover:text-white transition-colors">Serviços</a>
            <a href="#como-funciona" className="text-gray-400 hover:text-white transition-colors">Como Funciona</a>
            <a href="#calculadora" className="text-gray-400 hover:text-white transition-colors">Calculadora</a>
            <a href="#parceiros" className="text-gray-400 hover:text-white transition-colors">Parceiros</a>
            <a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
          </nav>

          {/* CTA Button */}
          <a 
            href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-capi-orange to-capi-orange-dark hover:from-capi-orange-dark hover:to-capi-orange text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span className="hidden lg:inline">Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  )
}
