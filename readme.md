# Site de Portfólio

## Visão Geral

Este é um site de portfólio moderno e interativo desenvolvido para e por Ítalo Silva, um desenvolvedor full-stack.  
A aplicação exibe projetos, habilidades e experiências profissionais em uma interface elegante, com tema escuro, efeitos de glassmorphism e animações personalizadas.  
O site segue o modelo de aplicação de página única (SPA), com navegação por rolagem suave e layouts responsivos otimizados tanto para desktop quanto para dispositivos móveis.

## Arquitetura do Sistema

### Arquitetura do Frontend
- **React 18 com TypeScript**: Aplicação moderna em React utilizando componentes funcionais e hooks
- **Vite Build System**: Servidor de desenvolvimento rápido com hot module replacement e builds de produção otimizados
- **Aplicação de Página Única (SPA)**: Roteamento no cliente usando Wouter para navegação leve
- **Design Baseado em Componentes**: Componentes de UI modulares com clara separação entre seções, componentes e utilitários

### Estilização e Framework de UI
- **Tailwind CSS**: Framework CSS utilitário com variáveis de design personalizadas
- **Componentes Shadcn/ui**: Componentes acessíveis pré-construídos com primitivos Radix UI
- **Design Glassmorphism**: Variáveis e efeitos CSS personalizados para estética moderna
- **Design Responsivo**: Abordagem mobile-first com layouts baseados em breakpoints
- **Animações Personalizadas**: Animações CSS e observadores de interseção para efeitos acionados ao rolar

### Gerenciamento de Estado e Busca de Dados
- **TanStack React Query**: Gerenciamento de estado do servidor com cache, atualizações em segundo plano e tratamento de erros
- **Gerenciamento de Estado Local**: Hooks do React (useState, useEffect) para estado em nível de componente
- **Manipulação de Formulários**: React Hook Form com validação via Zod para processamento de formulários com segurança de tipos

### Arquitetura do Backend
- **Servidor Express.js**: Framework web para Node.js com middleware para tratamento de requisições
- **TypeScript**: Segurança de tipos full-stack com tipos compartilhados entre cliente e servidor
- **Sistema de Rotas Modular**: Endpoints de API organizados com separação de responsabilidades
- **Ferramentas de Desenvolvimento**: Logs personalizados, tratamento de erros e middleware para desenvolvimento

### Banco de Dados e Armazenamento
- **Drizzle ORM**: Toolkit de banco de dados com segurança de tipos e suporte ao dialeto PostgreSQL
- **Integração com PostgreSQL**: Configurado para produção com Neon Database serverless
- **Gerenciamento de Esquema**: Esquema centralizado com integração de validação Zod
- **Sistema de Migração**: Controle de versão e deploy do banco via Drizzle Kit

### Desenvolvimento e Build System
- **Módulos ESM**: Sistema moderno de módulos JavaScript em toda a stack
- **Aliases de Caminho**: Imports simplificados com mapeamento de paths no TypeScript
- **Servidor de Desenvolvimento**: Vite integrado ao proxy de API do Express
- **Build de Produção**: Assets otimizados com suporte a renderização no servidor (SSR)

### Sistema de Estilização
- **Propriedades Personalizadas CSS**: Tematização centralizada com variáveis de cores, espaçamento e efeitos
- **Variantes de Componentes**: Class Variance Authority para padrões consistentes de estilização
- **Design Tokens**: Abordagem sistemática para cores, tipografia e espaçamento
- **Tema Escuro**: Implementação nativa de dark mode com detecção da preferência do sistema

## Dependências Externas

### Dependências Principais do Framework
- **Ecossistema React**: React 18, React DOM, React Hook Form com resolvers
- **Ferramentas de Build**: Vite com plugin React, compilador TypeScript, ESBuild para produção
- **Roteamento**: Wouter para roteamento leve no cliente

### UI e Estilização
- **Radix UI**: Conjunto completo de primitivos acessíveis e sem estilo
- **Tailwind CSS**: Framework CSS utilitário com processamento via PostCSS
- **Lucide React**: Biblioteca de ícones consistente com suporte a tree-shaking
- **Class Variance Authority**: Gerenciamento seguro de variantes de componentes

### Banco de Dados e Backend
- **Drizzle ORM**: Toolkit de banco de dados com suporte a PostgreSQL
- **Neon Database**: PostgreSQL serverless para deploy em produção
- **Express.js**: Framework de aplicações web para Node.js
- **Connect PG Simple**: Armazenamento de sessões em PostgreSQL para Express

### Gerenciamento de Dados
- **TanStack React Query**: Sincronização poderosa de dados no React
- **Zod**: Biblioteca de validação de esquemas com suporte a TypeScript
- **Date-fns**: Biblioteca moderna de utilitários para datas em JavaScript

### Ferramentas de Desenvolvimento
- **TypeScript**: Tipagem estática e melhor experiência de desenvolvimento
- **TSX**: Execução de TypeScript no servidor de desenvolvimento
- **Integração com Replit**: Plugins de ambiente de desenvolvimento e tratamento de erros
