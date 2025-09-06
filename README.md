# Frontend Teste Contabilidade

Uma aplicação React moderna para apresentação de serviços contábeis, desenvolvida com Vite, TypeScript e Tailwind CSS.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool e dev server ultra-rápido
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca para animações
- **ESLint** - Linter para qualidade de código

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** (geralmente vem com o Node.js)

## 🔧 Instalação

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd frontend-teste-contabilidade
```

### 2. Instale as dependências
```bash
npm install
```

## 🚀 Como executar o projeto

### Modo de desenvolvimento
```bash
npm run dev
```

O projeto será executado em: `https://github.com/ThiagoKufa/frontend-teste-contabilidade.git`

> **Nota:** O projeto usa HTTPS por padrão com certificado SSL local.

### Build para produção
```bash
npm run build
```

### Preview da build de produção
```bash
npm run preview
```

### Linting do código
```bash
npm run lint
```

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes React reutilizáveis
│   ├── PricingCards/    # Componente de cards de preços (modular)
│   │   ├── PricingCards.tsx
│   │   ├── PricingCard.tsx
│   │   ├── VideoButton.tsx
│   │   ├── types.ts
│   │   ├── data.ts
│   │   └── index.ts
│   ├── HeroSection.tsx  # Seção principal da página
│   ├── Table.tsx        # Tabela de benefícios
│   ├── Title.tsx        # Componente de título reutilizável
│   └── index.ts         # Barrel exports
├── hooks/               # Custom hooks
│   └── useLocation.ts   # Hook para geolocalização
├── services/            # Serviços e APIs
│   └── LocationService.ts
├── types/               # Definições de tipos TypeScript
│   └── index.ts
├── App.tsx              # Componente principal
├── main.tsx             # Ponto de entrada da aplicação
└── index.css            # Estilos globais
```

## 🎨 Funcionalidades

- **Seção Hero** com detecção automática de localização
- **Tabela de benefícios** comparativa
- **Cards de preços** com animações suaves
- **Design responsivo** e moderno
- **Animações** com Framer Motion
- **Tipagem completa** com TypeScript

## 🔧 Configurações

### Vite
O projeto usa Vite com as seguintes configurações:
- Plugin React para JSX
- Plugin Tailwind CSS
- Plugin mkcert para HTTPS local

### TypeScript
Configuração estrita habilitada com:
- `noUnusedLocals`
- `noUnusedParameters`
- `strict: true`

### ESLint
Regras configuradas para:
- React Hooks
- React Refresh
- TypeScript

## 🌐 Fontes

O projeto utiliza a fonte **Inter** e **Poppins** importada via Google Fonts no `index.html`.

## 📱 Responsividade

O projeto é otimizado para diferentes tamanhos de tela usando Tailwind CSS com breakpoints responsivos.

