import { useState, useEffect } from 'react'
import { SITE_CONFIG } from '../config/content'
import { WhatsAppIcon } from './UI'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fecha menu ao clicar em link
  const handleLinkClick = () => setMenuOpen(false)

  // Previne scroll quando menu está aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  const navLinks = [
    { href: '#servicos', label: 'Serviços' },
    { href: '#como-funciona', label: 'Como Funciona' },
    { href: '#contato', label: 'Diagnóstico' },
    { href: '#calculadora', label: 'Calculadora' },
    { href: '#parceiros', label: 'Parceiros' },
    { href: '#faq', label: 'FAQ' },
    { href: '#agendar', label: 'Agendar' },
  ]

  return (
    <>
      <header 
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-capi-dark/95 backdrop-blur-xl shadow-lg' : 'bg-capi-dark/80 backdrop-blur-xl'
        } border-b border-capi-border`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2" aria-label="CAPIBOT - Voltar ao início">
              <span className="text-xl font-bold">
                <span className="text-capi-orange">CAPI</span>
                <span className="text-capi-cyan">BOT</span>
              </span>
              <img 
                src={SITE_CONFIG.logo} 
                alt="" 
                width="32" 
                height="32" 
                className="h-8 w-8 object-contain"
                loading="eager"
              />
            </a>

            {/* Nav Links - Desktop */}
            <nav aria-label="Menu principal" className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + Menu Button */}
            <div className="flex items-center gap-3">
              {/* WhatsApp Button - Desktop */}
              <a 
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-capi-orange to-capi-orange-dark hover:from-capi-orange-dark hover:to-capi-orange text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span className="hidden md:inline">WhatsApp</span>
              </a>

              {/* Hamburger Menu Button - Mobile/Tablet */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                aria-label="Menu"
              >
                <div className="relative w-6 h-5">
                  <span className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'top-2 rotate-45' : 'top-0'}`} />
                  <span className={`absolute left-0 top-2 w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
                  <span className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div className={`fixed top-16 right-0 bottom-0 w-72 bg-capi-dark border-l border-capi-border z-40 lg:hidden transition-transform duration-300 ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <nav className="p-6 space-y-2">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="block text-gray-300 hover:text-white hover:bg-capi-surface-light px-4 py-3 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          
          {/* WhatsApp no menu mobile */}
          <div className="pt-4 mt-4 border-t border-capi-border">
            <a 
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="flex items-center gap-3 bg-gradient-to-r from-capi-orange to-capi-orange-dark text-white px-4 py-3 rounded-lg font-medium"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
