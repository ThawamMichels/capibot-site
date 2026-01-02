import { SITE_CONFIG } from '../config/content'
import { Section, SectionTitle, CalendarIcon, WhatsAppIcon } from './UI'

export default function Agendamento() {
  return (
    <Section id="agendar" className="bg-gradient-to-b from-transparent via-capi-surface/30 to-transparent">
      <SectionTitle subtitle="Escolha o melhor horário para conversarmos sobre seu projeto">
        Agende sua <span className="gradient-text">Discovery Gratuita</span>
      </SectionTitle>

      <div className="max-w-4xl mx-auto">
        <div className="bg-capi-surface border border-capi-border rounded-3xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-capi-orange/20 to-capi-cyan/20 p-6 text-center border-b border-capi-border">
            <div className="flex items-center justify-center gap-3 mb-2">
              <CalendarIcon className="w-8 h-8 text-capi-cyan" />
              <h3 className="text-2xl font-bold text-white">Reunião de Discovery</h3>
            </div>
            <p className="text-gray-400">30 minutos • Online • Gratuito</p>
          </div>

          {/* Cal.com Embed */}
          <div className="p-4 sm:p-6">
            <div className="rounded-xl overflow-hidden" style={{ minHeight: '650px' }}>
              <iframe
                src={`${SITE_CONFIG.calendarUrl}?embed=true&theme=dark&hideEventTypeDetails=false`}
                width="100%"
                height="650"
                frameBorder="0"
                title="Agendar reunião"
                className="w-full"
                style={{ colorScheme: 'dark' }}
              />
            </div>
          </div>

          {/* Footer com alternativa */}
          <div className="bg-capi-surface-light p-6 text-center border-t border-capi-border">
            <p className="text-gray-400 mb-3">Prefere falar direto?</p>
            <a 
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent('Olá! Vim pelo site e gostaria de agendar uma reunião de discovery.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-capi-cyan hover:text-capi-orange transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>

        {/* Benefícios da reunião */}
        <div className="grid sm:grid-cols-3 gap-6 mt-8">
          {[
            { emoji: '🎯', titulo: 'Sem compromisso', descricao: 'Apenas uma conversa para entender seu negócio' },
            { emoji: '💡', titulo: 'Dicas gratuitas', descricao: 'Você sai com insights mesmo sem fechar' },
            { emoji: '📋', titulo: 'Proposta clara', descricao: 'Se fizer sentido, enviamos proposta em 48h' },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <span className="text-3xl mb-2 block">{item.emoji}</span>
              <h4 className="font-bold text-white mb-1">{item.titulo}</h4>
              <p className="text-gray-400 text-sm">{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
