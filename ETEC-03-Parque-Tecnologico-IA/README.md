# ETEC 03 — Sistema de Gestão Inteligente do Parque Tecnológico de Maricá

**Proponente:** VCorp Sistem | **Área:** Inovação e Empreendedorismo | **Status:** Proposta Inicial

## Contexto: O Parque Tecnológico de Maricá

- **Localização:** Bairro de Ubatiba, vizinho ao IFF Maricá
- **Área:** 6.207 m² em 4 pavimentos
- **Estrutura:** Auditório 200 pessoas, salas de aula, coworking, restaurantes
- **Gestão:** ICTIM (pós-conclusão das obras pela Codemar)
- **Parceiros confirmados:** UFRJ — núcleo de biotecnologia, 50 vagas de graduação
- **Assessoria técnica:** Parque de Inovação Tecnológica de São José dos Campos
- **Operação provisória:** Galpão Tecnológico de Inoã (Fábrica de Apps, Escola de Startup, Maricá Edutech)

## Problema a Resolver

O ICTIM assume a gestão de um ecossistema de inovação de grande escala **sem nenhum sistema digital dedicado**. Vai gerenciar simultaneamente:

- Startups residentes em seleção e incubação
- Pesquisadores e núcleos universitários (UFRJ + futuros parceiros)
- Coworking com múltiplos perfis
- Auditório e salas com agendamento compartilhado
- Investidores e parceiros externos
- Obrigações de transparência pública municipal

Sistemas de mercado para parques tecnológicos não contemplam o modelo de autarquia pública com obrigação de transparência nem geração automática de prestação de contas municipais.

## Solução Proposta

**Sistema Integrado de Gestão do Ecossistema de Inovação** com IA e LLM.

### Módulo 1 — Onboarding e Seleção de Startups
- Portal de candidatura digital
- LLM analisa o plano de negócios e gera parecer estruturado automático: aderência ao perfil, maturidade tecnológica, potencial de empregos locais
- Histórico publicado automaticamente no portal de transparência

### Módulo 2 — Gestão de Residentes
- Painel de acompanhamento: marcos, métricas de crescimento, empregos gerados, receita, investimento
- Alertas automáticos para obrigações contratuais

### Módulo 3 — Dashboard Executivo e Transparência Pública
- Relatório Mensal de Impacto do Parque em linguagem narrativa (não apenas tabelas)
- Exportação no formato do portal de transparência municipal
- Dashboard público: quantas empresas, empregos, investimento captado

### Módulo 4 — Matchmaking Inteligente
- Matching semântico entre demandas das startups e pesquisadores da UFRJ/IFF disponíveis
- Sugestão de colaborações entre residentes com tecnologias complementares
- Conexão com editais externos (FINEP, FAPERJ, BID Invest) compatíveis com cada startup

### Módulo 5 — Gestão de Espaços
- Agendamento digital de auditório, salas e coworking
- Relatório de ocupação e aproveitamento

### Módulo 6 — Suporte via WhatsApp (AtendIA)
- Chatbot para startups residentes: dúvidas, solicitações, lembretes, editais
- Canal de comunicação ICTIM → ecossistema

## Por que é uma ETEC

Risco tecnológico:
1. **Transparência pública com IA generativa** — gerar relatórios narrativos no formato de prestação de contas do TCE-RJ via LLM é aplicação inédita
2. **Onboarding com análise de plano de negócios por LLM** em contexto de autarquia pública com critérios de impacto social — sem precedente no mercado brasileiro
3. **Matchmaking pesquisador-startup** calibrado para o ecossistema específico de Maricá

## Alinhamento com o Ecossistema ICTIM

| Elemento | Conexão |
|---|---|
| Parque Tecnológico (Ubatiba) | Usuário primário |
| Galpão Tecnológico (Inoã) | Ambiente de piloto |
| UFRJ (biotecnologia) | Fonte de pesquisadores para matchmaking |
| IFF Maricá | Parceiro acadêmico |
| PIC / Passaporte Universitário | Bolsistas como estagiários nas startups |
| Incubadora de Tecnologias | Pipeline de startups já mapeadas |
| Portal de Transparência | Destino dos relatórios automáticos |

## Stack Tecnológico

- Backend: .NET 8 + EF Core 8 + SignalR (tempo real)
- LLM: Gemini 2.0-flash (Google Vertex AI)
- RAG: Qdrant (legislação municipal, editais de fomento, perfis de pesquisadores)
- Banco: PostgreSQL 15 (Neon)
- Jobs: Hangfire
- Frontend: React 18 + Vite + TanStack Query (dashboard público + painel admin)
- Suporte WhatsApp: AtendIA (API Meta oficial)

## Cronograma

| Fase | Descrição | Duração |
|---|---|---|
| 1 | P&D: módulos 1-3 (onboarding, gestão, dashboard) | 5 meses |
| 2 | Piloto no Galpão de Inoã | 3 meses |
| 3 | Migração para Ubatiba + módulos 4-6 | 4 meses |
| **Total** | | **12 meses** |

## Valor Estratégico

Se a VCorp desenvolve este sistema para o Parque de Maricá, passa a deter o **primeiro sistema de gestão de parque tecnológico municipal com IA generativa do Rio de Janeiro** — replicável (white label) para outros municípios fluminenses.

## Propriedade Intelectual

Proposta: **titularidade compartilhada** — ICTIM tem direito de uso perpétuo e de compartilhar com municípios da rede de inovação do Estado; VCorp retém direito de licenciar a plataforma (white label) para outros parques tecnológicos municipais.

---
[← ETEC 02](../ETEC-02-Passaporte-PIC-IA/README.md) | [Voltar ao índice](../README.md)
