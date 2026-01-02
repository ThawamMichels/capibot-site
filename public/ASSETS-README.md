# 📁 Pasta de Assets do CAPIBOT

Esta pasta contém todos os arquivos estáticos do site (imagens, vídeos, etc).

## 📂 Estrutura de Pastas

```
public/
├── assets/
│   ├── images/
│   │   ├── logo-capibot.png              # Logo pequena (header/footer)
│   │   ├── logo-hero-capibot.png         # Logo horizontal grande ✅
│   │   ├── capichat-icon.png             # Ícone do CapiChat
│   │   ├── capishop-logo.png             # Logo do CapiShop
│   │   ├── parceiro-resolvoo.png         # Logo parceiro
│   │   ├── parceiro-garantedireito.png   # Logo parceiro
│   │   ├── og-image.png                  # Imagem para redes sociais
│   │   ├── favicon-16.png
│   │   ├── favicon-32.png
│   │   ├── apple-touch-icon.png
│   │   └── thumb-*.png                   # Thumbnails dos demos (fallback)
│   └── videos/
│       ├── background.mp4                # Vídeo de fundo Hero (loop)
│       ├── video-ia.mp4                  # Vídeo avatar IA do Hero ⭐
│       ├── consultoria-overview.mp4      # Demo Consultoria
│       ├── capijudi-overview.mp4         # Demo CapiJudi - Visão Geral
│       ├── capijudi-peticoes.mp4         # Demo CapiJudi - Petições
│       ├── capijudi-contratos.mp4        # Demo CapiJudi - Contratos
│       ├── capijudi-sdr.mp4              # Demo CapiJudi - SDR
│       ├── capijudi-monitoramento.mp4    # Demo CapiJudi - Monitoramento
│       ├── capishop-overview.mp4         # Demo CapiShop - Visão Geral
│       ├── capishop-pedidos.mp4          # Demo CapiShop - Pedidos
│       ├── capishop-estoque.mp4          # Demo CapiShop - Estoque
│       ├── capicare-overview.mp4         # Demo CapiCare - Visão Geral
│       ├── capicare-agendamento.mp4      # Demo CapiCare - Agendamento
│       ├── capichat-overview.mp4         # Demo CapiChat - Visão Geral
│       └── capichat-multiagente.mp4      # Demo CapiChat - Multiagente
├── robots.txt
└── sitemap.xml
```

## 🎬 Vídeos

### Vídeos do Hero (Obrigatórios)
| Arquivo | Descrição | Specs |
|---------|-----------|-------|
| `video-ia.mp4` | Avatar IA fazendo CTA | 1280x720, até 10MB, COM áudio |
| `background.mp4` | Fundo ambiente (loop) | 1920x1080, até 5MB, SEM áudio |

### Vídeos de Demo (Opcionais)
Se o vídeo não existir, o site mostra um placeholder "Demo em breve".

| Arquivo | Descrição | Duração Max |
|---------|-----------|-------------|
| `consultoria-overview.mp4` | Apresentação da consultoria | 4 min |
| `capijudi-overview.mp4` | Visão geral CapiJudi | 4 min |
| `capijudi-peticoes.mp4` | Demo gerador de petições | 4 min |
| `capijudi-contratos.mp4` | Demo gerador de contratos | 4 min |
| `capijudi-sdr.mp4` | Demo agente SDR | 4 min |
| `capijudi-monitoramento.mp4` | Demo monitoramento AASP | 4 min |
| `capishop-overview.mp4` | Visão geral CapiShop | 4 min |
| `capishop-pedidos.mp4` | Demo gestão de pedidos | 4 min |
| `capishop-estoque.mp4` | Demo gestão de estoque | 4 min |
| `capicare-overview.mp4` | Visão geral CapiCare | 4 min |
| `capicare-agendamento.mp4` | Demo agendamento WhatsApp | 4 min |
| `capichat-overview.mp4` | Visão geral CapiChat | 4 min |
| `capichat-multiagente.mp4` | Demo multiagente | 4 min |

### Especificações dos Vídeos de Demo
- **Formato:** MP4 (H.264)
- **Resolução:** 1280x720 (HD) ou 1920x1080 (Full HD)
- **Tamanho:** Até 20MB (idealmente até 10MB)
- **Duração:** Até 4 minutos
- **Áudio:** Sim, com voz clara
- **Aspect Ratio:** 16:9

### Otimizar Vídeos com FFmpeg
```bash
# Com áudio (demos)
ffmpeg -i input.mp4 -vcodec libx264 -crf 23 -preset medium -acodec aac -b:a 128k output.mp4

# Sem áudio (background)
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -an output.mp4
```

## 🖼️ Imagens

### Obrigatórias
| Arquivo | Tamanho | Descrição |
|---------|---------|-----------|
| `logo-capibot.png` | 200x200 | Logo para header/footer |
| `logo-hero-capibot.png` | 900x250 | Logo horizontal (já incluída) |
| `capichat-icon.png` | 100x100 | Ícone do CapiChat |
| `og-image.png` | 1200x630 | Compartilhamento redes sociais |

### Parceiros
| Arquivo | Tamanho | Descrição |
|---------|---------|-----------|
| `parceiro-resolvoo.png` | 200x200 | Logo Resolvoo |
| `parceiro-garantedireito.png` | 200x200 | Logo GaranteDireito |

### Thumbnails (Fallback quando vídeo não existe)
| Arquivo | Tamanho | Descrição |
|---------|---------|-----------|
| `thumb-consultoria-overview.png` | 1280x720 | Preview Consultoria |
| `thumb-capijudi-*.png` | 1280x720 | Previews CapiJudi |
| `thumb-capishop-*.png` | 1280x720 | Previews CapiShop |
| `thumb-capicare-*.png` | 1280x720 | Previews CapiCare |
| `thumb-capichat-*.png` | 1280x720 | Previews CapiChat |

## 📊 Comportamento do Site

### Quando o vídeo existe:
✅ Exibe o player com controles
✅ Autoplay ao clicar na aba
✅ Controles de play/pause e som

### Quando o vídeo NÃO existe:
1. Se tem thumbnail → mostra thumbnail com "Demo em breve"
2. Se não tem nada → mostra placeholder colorido com "Demo em breve"

## 🚀 Como Adicionar Novos Vídeos

1. Grave o vídeo do demo (até 4 min)
2. Otimize com FFmpeg (comando acima)
3. Renomeie seguindo o padrão: `{servico}-{demo}.mp4`
4. Coloque em `public/assets/videos/`
5. Commit e push
6. O site exibe automaticamente!

## 📝 Checklist de Deploy

- [ ] `logo-capibot.png` (header/footer)
- [ ] `logo-hero-capibot.png` ✅ já incluída
- [ ] `capichat-icon.png`
- [ ] `video-ia.mp4` (Hero principal)
- [ ] `og-image.png` (compartilhamento)
- [ ] Vídeos de demo (adicione conforme gravar)
