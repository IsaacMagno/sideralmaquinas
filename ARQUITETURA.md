# Documento de Arquitetura de Software

## 1. Visão Geral

- Projeto: Ecommerce Vitrine + WhatsApp + Área de Membros
- Frontend: Next.js (React) + TailwindCSS
- Backend: Node.js (Express) + Sequelize
- Banco de Dados: PostgreSQL
- Deploy: Vercel (frontend), Railway/Render/AWS (backend)

## 2. Tecnologias Utilizadas

- **Frontend:** Next.js, React, TailwindCSS
- **Backend:** Node.js, Express, Sequelize
- **Banco de Dados:** PostgreSQL
- **Autenticação:** JWT (próprio), OAuth2 (futuro, integração Eduzz)
- **Hospedagem:** Vercel (frontend), Railway/Render (backend)
- **Outros:** API RESTful, integração WhatsApp

## 3. Estrutura do Projeto

- Monorepo (exemplo):
  - `/apps/web` (Next.js)
  - `/apps/api` (Express/Sequelize)
  - `/packages/*` (compartilhados, se necessário)

## 4. Fluxo de Deploy

- **Frontend:** Deploy automático na Vercel (build Next.js)
- **Backend:** Deploy automático em Railway/Render (build e start do Express)
- **Integração:** Frontend consome API do backend via HTTP

## 5. Padrões e Boas Práticas

- Componentização no frontend
- Validação e sanitização de dados no backend
- Uso de variáveis de ambiente para segredos
- Versionamento de banco de dados (migrations)
- **Mobile First:** O desenvolvimento do frontend será feito priorizando a experiência em dispositivos móveis, garantindo responsividade e usabilidade em telas pequenas antes de adaptar para desktop.

## 6. Futuro

- Integração OAuth2 com Eduzz
- Área de membros protegida
- Comentários persistentes
