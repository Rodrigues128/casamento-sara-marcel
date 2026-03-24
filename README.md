# 💍 Convite de Casamento Interativo

Este projeto é um convite de casamento digital, moderno e de alta performance, construído com **React**, **Framer Motion** e uma arquitetura **Serverless** para o backend.

## 🚀 Tecnologias e Decisões de Arquitetura

### Frontend
- **React (Vite)**: Escolhido pela performance de build e experiência de desenvolvimento fluida.
- **Tailwind CSS**: Estilização baseada em utilitários para garantir design consistente e responsivo.
- **Framer Motion**: Utilizado para criar uma experiência imersiva (Splash Screen com efeito de envelope e transições suaves).
- **Shadcn/UI**: Componentes de acessibilidade (WAI-ARIA) prontos para uso profissional.

### Backend (Serverless Integration)
- **Google Apps Script**: Implementado como um microserviço para receber dados do formulário RSVP via requisções `POST`.
- **Google Sheets**: Utilizado como banco de dados NoSQL leve, permitindo aos noivos acessar os dados em tempo real sem custos de infraestrutura.
- **WhatsApp API**: Integração direta para notificações instantâneas e backup de confirmação.

## 🛠️ Boas Práticas Implementadas

- **Modularização**: Lógica de RSVP isolada em serviços (`rsvp-service.js`).
- **Segurança**: Uso de variáveis de ambiente (`.env`) para URLs sensíveis.
- **UX/UI**: Bloqueio de scroll durante o Splash Screen, animações não-intrusivas e formulário com validação e formatação automática de telefone.
- **Performance**: Assets carregados sob demanda e animações otimizadas para GPU.

## 📦 Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/Rodrigues128/casamento-sara-marcel.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure o arquivo `.env` com a sua URL do Apps Script:
   ```env
   VITE_GOOGLE_SHEETS_URL=seu_link_aqui
   ```
4. Rode em ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```

---
Desenvolvido por **Paulo Henrique** como parte de seu portfólio profissional.
