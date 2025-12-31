import { useState } from 'react'
import { FAQ } from '../config/content'
import { Section, SectionTitle } from './UI'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section id="faq">
      <SectionTitle subtitle="Tire suas dúvidas sobre nossas soluções">
        Perguntas <span className="gradient-text">Frequentes</span>
      </SectionTitle>

      <div className="max-w-3xl mx-auto space-y-4">
        {FAQ.map((item, index) => (
          <div
            key={index}
            className="bg-capi-surface border border-capi-border rounded-xl overflow-hidden transition-all duration-300 hover:border-capi-cyan/30"
          >
            {/* Pergunta (sempre visível) */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <span className="text-lg font-medium text-white pr-4">
                {item.pergunta}
              </span>
              <span className={`flex-shrink-0 w-8 h-8 bg-capi-surface-light rounded-full flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                <svg className="w-5 h-5 text-capi-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </span>
            </button>

            {/* Resposta (expandível) */}
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-5 pb-5 text-gray-400 border-t border-capi-border/50 pt-4">
                {item.resposta}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
