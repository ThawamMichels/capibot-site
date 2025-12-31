import { SITE_CONFIG } from '../config/content'
import { WhatsAppIcon, EmailIcon } from './UI'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-capi-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={SITE_CONFIG.logo} alt="CAPIBOT" className="h-10 w-10 object-contain"/>
              <span className="text-xl font-bold">
                <span className="text-capi-orange">CAPI</span>
                <span className="text-capi-cyan">BOT</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              {SITE_CONFIG.descricao}
            </p>
            <div className="flex gap-4">
              <a 
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-capi-surface hover:bg-capi-surface-light border border-capi-border rounded-lg flex items-center justify-center text-gray-400 hover:text-capi-cyan transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-capi-surface hover:bg-capi-surface-light border border-capi-border rounded-lg flex items-center justify-center text-gray-400 hover:text-capi-cyan transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href={SITE_CONFIG.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-capi-surface hover:bg-capi-surface-light border border-capi-border rounded-lg flex items-center justify-center text-gray-400 hover:text-capi-cyan transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-bold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#servicos" className="text-gray-400 hover:text-capi-cyan transition-colors">Serviços</a></li>
              <li><a href="#como-funciona" className="text-gray-400 hover:text-capi-cyan transition-colors">Como Funciona</a></li>
              <li><a href="#calculadora" className="text-gray-400 hover:text-capi-cyan transition-colors">Calculadora ROI</a></li>
              <li><a href="#parceiros" className="text-gray-400 hover:text-capi-cyan transition-colors">Parceiros</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-capi-cyan transition-colors">FAQ</a></li>
              <li><a href="#agendar" className="text-gray-400 hover:text-capi-cyan transition-colors">Agendar Reunião</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold text-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-capi-cyan transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  +55 41 98478-8066
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-capi-cyan transition-colors"
                >
                  <EmailIcon className="w-5 h-5" />
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-capi-border py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-gray-500">
            © {currentYear} CAPIBOT. Todos os direitos reservados.
          </span>
          <span className="text-sm text-gray-500">
            Consultoria • Automação • Processos • Integração
          </span>
        </div>
      </div>
    </footer>
  )
}
