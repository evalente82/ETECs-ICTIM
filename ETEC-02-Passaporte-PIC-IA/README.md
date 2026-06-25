# ETEC 02 — IA para Gestão do Passaporte Universitário e PIC

**Proponente:** VCorp Sistem | **Área:** Educação e Pesquisa Científica | **Status:** Proposta Inicial

## Problema a Resolver

O Passaporte Universitário e o PIC são os programas mais identitários do ICTIM. Movimentam dezenas de bolsistas simultâneos, orientadores, projetos de 12 meses, relatórios científicos e seleções periódicas.

A gestão atual é **manual**: planilhas e e-mails. Não há sistema que:
- Faça matching automático entre perfil do bolsista e tema de pesquisa
- Acompanhe entregas de marcos ao longo dos 12 meses
- Revise relatórios científicos antes da submissão
- Extraia indicadores de impacto automaticamente
- Atenda dúvidas dos bolsistas fora do horário comercial

## Solução Proposta

**Plataforma de Gestão de Pesquisa Científica com IA** para o Passaporte Universitário e o PIC do ICTIM.

### Módulo 1 — Seleção Inteligente
- Matching semântico entre currículo do candidato e temas de pesquisa disponíveis
- Parecer preliminar automático para o comitê (triagem acelerada, decisão permanece humana)

### Módulo 2 — Acompanhamento de Bolsistas
- Painel de marcos, entregas e status em tempo real por bolsista
- Alertas automáticos para orientadores próximo de vencimentos

### Módulo 3 — Assistente de Redação Científica
- LLM treinado nas normas do PIC (ABNT, estrutura de relatório, linguagem científica)
- Bolsista submete rascunho e recebe feedback estruturado
- Orienta e revisa — não escreve pelo bolsista

### Módulo 4 — Dashboard de Impacto
- Extração automática de indicadores (artigos, eventos, parcerias)
- Geração automática do Relatório de Impacto do PIC para prestação de contas

### Módulo 5 — Suporte via WhatsApp (AtendIA)
- Suporte 24/7: dúvidas sobre normas, prazos, documentação
- Notificações proativas de marcos e entregas

## Por que é uma ETEC

Sistemas acadêmicos existentes (Lattes/CNPq, SIGAA) são universitários, não municipais, e não têm LLM para assistência à redação em contexto de inovação social.

Risco tecnológico:
1. Treinamento do LLM nas normas específicas do PIC de Maricá (inovação social, sustentabilidade, ODS)
2. Matching semântico calibrado para o perfil do bolsista do Passaporte Universitário (inclusão social)
3. Integração com sistemas municipais existentes

## Contexto do Proponente

O fundador da VCorp Sistem é **egresso do próprio Programa Passaporte Universitário de Maricá** (Unilasalle, BSI). A proposta nasce da experiência direta como beneficiário e do entendimento de suas limitações operacionais.

## Alinhamento com o ICTIM

| Programa | Conexão |
|---|---|
| Passaporte Universitário | Beneficiários diretos — gestão digital completa da jornada |
| PIC 2025/2026 | Plataforma de acompanhamento dos 14 projetos aprovados |
| Formatec: Maricá+Técnico | Expansão futura para cursos técnicos |
| Incubadora de Tecnologias | Startups mapeadas como empregadores futuros dos bolsistas |

## Stack Tecnológico

- Backend: .NET 8 + EF Core 8
- LLM: Gemini 2.0-flash (Google Vertex AI)
- RAG: Qdrant (normas do PIC, produções científicas históricas, literatura de inovação social)
- Banco: PostgreSQL 15 (Neon)
- Jobs: Hangfire
- Suporte WhatsApp: AtendIA (API Meta oficial)
- Frontend: React 18 + Vite + TanStack Query

## Cronograma

| Fase | Descrição | Duração |
|---|---|---|
| 1 | P&D: normas do PIC, matching, módulo de revisão | 4 meses |
| 2 | Piloto com ciclo PIC 2025/2026 em andamento | 4 meses |
| 3 | Ajustes pós-piloto, dashboard de impacto, módulo WhatsApp | 4 meses |
| **Total** | | **12 meses** |

## Propriedade Intelectual

Proposta: **titularidade compartilhada** — ICTIM tem direito de uso e de compartilhar com municípios parceiros; VCorp retém direito de licenciar (white label) para outros programas de bolsas municipais.

---
[← ETEC 01](../ETEC-01-Epidemiologia-IA/README.md) | [Voltar ao índice](../README.md) | [ETEC 03 →](../ETEC-03-Parque-Tecnologico-IA/README.md)
