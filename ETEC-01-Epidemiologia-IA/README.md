# ETEC 01 — IA para Monitoramento Epidemiológico Municipal

**Proponente:** VCorp Sistem | **Área:** Saúde Pública | **Status:** Proposta Inicial

## Problema a Resolver

Maricá possui o LACEN, a ETEC em andamento para tratamento de úlceras diabéticas (Heberprot-P) e o PIC 2025/2026 com projeto aprovado de monitoramento epidemiológico. Porém a análise dos dados de saúde pública é **manual e fragmentada**.

Os dados do SUS local, das USFs e do LACEN não conversam entre si e não geram alertas automáticos. A tomada de decisão depende de interpretação manual de tabelas. Surtos são identificados com atraso.

## Solução Proposta

Sistema de **IA/LLM para Vigilância Epidemiológica Municipal** que integra, analisa e comunica dados de saúde pública em linguagem natural.

### Funcionalidades

- Ingestão de dados do SINAN local, USFs e laudos do LACEN
- Detecção de padrões anômalos com IA (séries temporais + LLM)
- Alertas automáticos em linguagem natural para gestores
- Dashboard executivo narrativo — não apenas gráficos, mas interpretação automática
- Relatórios automáticos no formato do Ministério da Saúde
- Notificações via WhatsApp (AtendIA) para coordenadores das USFs 24/7

## Por que é uma ETEC

1. **Integração de dados fragmentados** — sistemas do SUS municipal não têm interoperabilidade nativa com IA
2. **Treinamento contextualizado** — LLM calibrado para padrões epidemiológicos de Maricá (área lagunar, crescimento demográfico acelerado, perfil específico de doenças)
3. **Incerteza do resultado** — viabilidade técnica depende de P&D com os dados reais municipais

Não existe solução equivalente no mercado adaptada a municípios brasileiros de médio porte com essas características.

## Alinhamento com o ICTIM

| Programa | Conexão |
|---|---|
| LACEN | Fonte primária de dados laboratoriais |
| ETEC Heberprot-P | Dados de evolução diabética como input |
| PIC 2025/2026 — Epidemiologia | Bolsistas como colaboradores do P&D |
| Qualifica Maricá | Capacitação dos profissionais de saúde no sistema |

## Stack Tecnológico

- Backend: .NET 8 + EF Core 8
- LLM: Gemini 2.0-flash (Google Vertex AI)
- RAG: Qdrant (dados epidemiológicos históricos vetorizados)
- Banco: PostgreSQL 15 (Neon)
- Jobs: Hangfire
- Notificações: AtendIA (WhatsApp API Meta oficial)
- Frontend: React 18 + Vite + TanStack Query

## Cronograma

| Fase | Descrição | Duração |
|---|---|---|
| 1 | P&D: mapeamento das fontes, conectores, treinamento do modelo | 6 meses |
| 2 | Validação com dados reais do LACEN e USFs (PoC) | 3 meses |
| 3 | Dashboard em produção, treinamento de equipes | 3 meses |
| **Total** | | **12 meses** |

## Propriedade Intelectual

Proposta: **titularidade compartilhada** — ICTIM tem direito de uso perpétuo; VCorp retém direito de replicar a solução (anonimizada) para outros municípios.

---
[← Voltar ao índice](../README.md) | [ETEC 02 →](../ETEC-02-Passaporte-PIC-IA/README.md)
