/**
 * ============================================
 * CAPIBOT - Landing Page Principal
 * ============================================
 * 
 * Estrutura da página:
 * 1. Header (navegação)
 * 2. Hero (chamada principal)
 * 3. Como Funciona (4 passos)
 * 4. Serviços (tabs com vídeos)
 * 5. Calculadora ROI
 * 6. Quiz de Diagnóstico
 * 7. Métricas/Resultados
 * 8. Parceiros
 * 9. FAQ
 * 10. Agendamento (Cal.com)
 * 11. Formulário de Contato
 * 12. CTA Final
 * 13. Footer
 * 14. WhatsApp Flutuante
 */

import {
  Header,
  Hero,
  ComoFunciona,
  Servicos,
  Calculadora,
  Quiz,
  Metricas,
  Parceiros,
  Faq,
  Agendamento,
  Formulario,
  CtaFinal,
  Footer,
  WhatsAppFloat,
} from './components'

function App() {
  return (
    <div className="bg-capi-dark text-gray-100 min-h-screen bg-grid">
      {/* Navegação fixa */}
      <Header />
      
      {/* Seção principal */}
      <Hero />
      
      {/* Como funciona em 4 passos */}
      <ComoFunciona />
      
      {/* Serviços com tabs */}
      <Servicos />
      
      {/* Calculadora de ROI */}
      <Calculadora />
      
      {/* Quiz de diagnóstico */}
      <Quiz />
      
      {/* Métricas e resultados */}
      <Metricas />
      
      {/* Parceiros */}
      <Parceiros />
      
      {/* FAQ */}
      <Faq />
      
      {/* Agendamento Cal.com */}
      <Agendamento />
      
      {/* Formulário de contato */}
      <Formulario />
      
      {/* CTA Final */}
      <CtaFinal />
      
      {/* Footer */}
      <Footer />
      
      {/* Botão WhatsApp flutuante */}
      <WhatsAppFloat />
    </div>
  )
}

export default App
