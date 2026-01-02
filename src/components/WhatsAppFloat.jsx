import { SITE_CONFIG } from '../config/content'
import { WhatsAppIcon } from './UI'

export default function WhatsAppFloat() {
  return (
    <a 
      href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110 group"
      title="Falar no WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-capi-surface border border-capi-border text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
        Fale conosco
      </span>
    </a>
  )
}
