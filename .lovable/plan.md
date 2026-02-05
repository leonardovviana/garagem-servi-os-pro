
# GARAGEM SERVIÇOS - Web App Mobile-First

## Visão Geral
Criar uma landing page interativa mobile-first que funciona como um "Montador de Orçamento" para uma serralheria/metalúrgica. O usuário seleciona serviços e sub-opções, e com um clique envia tudo formatado para o WhatsApp.

---

## 🎨 Design & Identidade Visual

### Cores
- **Fundo:** Slate-950 (#0a0a0a) - preto profundo industrial
- **Acentos:** Dourado metálico (#D4AF37) para bordas, ícones e CTAs
- **Texto:** Branco/cinza claro para contraste

### Tipografia & Estilo
- Fonte Inter (já disponível), títulos em caixa alta
- Botões grandes e touch-friendly (mínimo 48px altura)
- Bordas douradas finas, sombras sutis para profundidade
- Cards com efeito hover/active sutil

---

## 📱 Estrutura da Página

### 1. Header Fixo
- Logo "GARAGEM SERVIÇOS" estilizado em dourado
- Ícone de localização + "Afogados da Ingazeira-PE"

### 2. Hero Section (Compacta)
- Título: "SOLUÇÕES EM METAL E RECUPERAÇÃO AUTOMOTIVA"
- Subtítulo explicativo do fluxo de orçamento

### 3. Grid de Serviços (5 Cards Accordion)
Cards verticais (1 por linha no mobile, 3 no desktop):

| Serviço | Ícone | Sub-opções |
|---------|-------|------------|
| Recuperação de Roda | Disc | 5 opções |
| Fabricação de Reboque | Truck | 5 opções |
| Serralheria | Hammer | 5 opções |
| Estantes de Aço | Library | 5 opções |
| Torno Mecânico | Cog | 5 opções |

**Comportamento Accordion:**
- Clique no card → expande mostrando checkboxes
- Usuário marca as opções desejadas
- Botão dourado "SOLICITAR ORÇAMENTO NO WHATSAPP" aparece

### 4. Rodapé
- Endereço completo da empresa
- Horário de funcionamento
- Links de contato

### 5. Botão Flutuante WhatsApp
- Sempre visível no canto inferior direito
- Abre conversa direta sem mensagem pré-formatada

---

## 🔧 Funcionalidades

### Seleção de Itens
- Checkboxes estilizados para cada sub-opção
- Estado visual claro (marcado/desmarcado)
- Contador de itens selecionados (opcional)

### Integração WhatsApp
Ao clicar "Solicitar Orçamento", gera mensagem formatada:
```
Olá, GARAGEM SERVIÇOS! Tenho interesse em *SERRALHERIA*.
Gostaria de orçar os seguintes itens:
- Portões (Basculante/Correr)
- Grades de Proteção
Aguardo retorno.
```
Abre: `https://wa.me/5587999274678?text=...`

---

## 📐 Responsividade
- **Mobile:** Cards 1 coluna, tipografia otimizada para toque
- **Tablet/Desktop:** Grid 2-3 colunas, layout expandido

---

## Componentes Utilizados
- Accordion (Shadcn) para expansão dos serviços
- Checkbox (Shadcn) para seleções
- Button (Shadcn) estilizado com tema dourado
- Lucide Icons para ícones dos serviços
