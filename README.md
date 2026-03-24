# 💍 Convite de Casamento Interativo

Este projeto é um convite de casamento digital, moderno e de alta performance, construído com **React**, **Framer Motion** e uma arquitetura **Serverless** para o backend.

## 🚀 Tecnologias e Decisões de Arquitetura

### Frontend
- **React (Vite)**: Escolhido pela performance de build e experiência de desenvolvimento fluida.
- **Tailwind CSS**: Estilização baseada em utilitários para garantir design consistente e responsivo.
- **Framer Motion**: Experiência imersiva com animações de abertura (Envelope Splash Screen) e transições suaves entre seções.
- **Shadcn/UI**: Componentes de UI acessíveis e altamente customizáveis.
- **Lucide React**: Conjunto de ícones leves e consistentes.

### Backend (Serverless Integration)
- **Google Apps Script**: Microserviço em JavaScript que atua como middleware entre o formulário e a planilha.
- **Google Sheets API**: Utilizado como banco de dados em tempo real para armazenamento das confirmações.
- **WhatsApp API**: Notificação instantânea para os noivos com mensagem pré-formatada.

## ✨ Funcionalidades (Features)

- [x] **Splash Screen Imersiva**: Animação de abertura de envelope que bloqueia o scroll até a interação do usuário.
- [x] **Contagem Regressiva**: Timer dinâmico atualizado em tempo real até a data do evento.
- [x] **Galeria Responsiva**: Exibição otimizada de fotos com efeitos de hover e zoom.
- [x] **RSVP Inteligente**: Formulário com máscara de telefone automática e validação de campos obrigatórios.
- [x] **Sincronização Dupla**: Os dados são salvos em uma planilha e uma mensagem é preparada para o WhatsApp simultaneamente.
- [x] **SEO & Social Share**: Configuração de Open Graph para que o link exiba foto e descrição personalizada ao ser compartilhado.

## 📂 Estrutura do Projeto

```text
src/
├── assets/             # Imagens e recursos estáticos
├── components/
│   ├── ui/             # Componentes de base (Shadcn) - Limpos e otimizados
│   └── wedding/        # Seções específicas do convite (Hero, RSVP, Story, etc.)
├── lib/
│   ├── rsvp-service.js # Lógica de comunicação com o backend (Fetch/POST)
│   └── utils.js        # Utilitários globais (formatação, classes Tailwind)
├── pages/
│   └── Home.jsx        # Página principal com orquestração de animações
└── App.jsx             # Configuração de rotas e providers
```

## 🛠️ Configuração e Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Rodrigues128/casamento-sara-marcel.git
   ```
2. **Instale as dependências**:
   ```bash
   npm install
   ```
3. **Variáveis de Ambiente**:
   Crie um arquivo `.env` na raiz do projeto:
   ```env
   VITE_GOOGLE_SHEETS_URL=sua_url_do_apps_script_aqui
   ```
4. **Execução**:
   ```bash
   npm run dev
   ```

## 🌐 Deploy e Produção

O projeto está configurado para deploy automático no **GitHub Pages**.

**Importante**: Ao realizar o deploy, garanta que a variável `VITE_GOOGLE_SHEETS_URL` esteja configurada nos **Secrets** do seu repositório GitHub para que o formulário funcione na versão online.

---
Desenvolvido por **Paulo Henrique** • [Seu LinkedIn/Portfólio aqui]
