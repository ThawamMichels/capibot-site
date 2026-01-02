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
 * 5. Quiz + Formulário (lado a lado)
 * 6. Calculadora ROI
 * 7. Métricas/Resultados
 * 8. Parceiros
 * 9. FAQ
 * 10. Agendamento (Cal.com)
 * 11. CTA Final
 * 12. Footer
 * 13. WhatsApp Flutuante
 */

import {
  Header,
  Hero,
  ComoFunciona,
  Servicos,
  QuizFormSection,
  Calculadora,
  Metricas,
  Parceiros,
  Faq,
  Agendamento,
  CtaFinal,
  Footer,
  WhatsAppFloat,
} from './components'

function App() {
  return (
    <div className="bg-capi-dark text-gray-100 min-h-screen bg-grid">
      {/* Pular para conteúdo - acessibilidade */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-capi-orange focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Pular para o conteúdo principal
      </a>
      
      {/* Navegação fixa */}
      <Header />
      
      {/* Conteúdo principal */}
      <main id="main-content">
        {/* Seção principal */}
        <Hero />
        
        {/* Como funciona em 4 passos */}
        <ComoFunciona />
        
        {/* Serviços com tabs */}
        <Servicos />
        
        {/* Quiz + Formulário lado a lado */}
        <QuizFormSection />
        
        {/* Calculadora de ROI */}
        <Calculadora />
        
        {/* Métricas e resultados */}
        <Metricas />
        
        {/* Parceiros */}
        <Parceiros />
        
        {/* FAQ */}
        <Faq />
        
        {/* Agendamento Cal.com */}
        <Agendamento />
        
        {/* CTA Final */}
        <CtaFinal />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Botão WhatsApp flutuante */}
      <WhatsAppFloat />
    </div>
  )
}

export default App
