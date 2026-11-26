# Auditoria GEO/AEO — Vera Health Notes

## Checkpoint de recuperação — 26/11/2026, São Paulo

Base verificada: `main` em `79e71202f37b3435f8d0dd94f237ca4101341053` e memória em `5b7bc31`. Consultei as 11 árvores de branches remotas, sem truncamento, os oito PRs e o histórico recuperável. O prompt de retomada foi recuperado. Não encontrei um relatório GEO/AEO anterior, uma branch específica ou evidência persistida de testes de citações dessa execução. A auditoria técnica geral do PR #1 e a migração do PR #2 são antecedentes, e o [QA verificado do PR #8](../editorial/queue-a001-a020.md) é a evidência reaproveitável. Resultados temporários anteriores à interrupção não puderam ser recuperados com segurança.

| ID | Objetivo e evidência anterior | Status atual | Trabalho restante e próxima ação |
|---|---|---|---|
| G01 | Histórico, 11 branches, oito PRs e memória verificados | CONCLUÍDO E VERIFICADO | Usar o inventário e o QA do PR #8. |
| G02 | Documentação oficial de cada plataforma. Sem pesquisa GEO comprovada anterior | PENDENTE | Consultar fontes oficiais. |
| G03 | Robots e sitemap de origem encontrados na main | PARCIALMENTE CONCLUÍDO | Comparar com os bytes servidos e o painel. |
| G04 | Cloudflare. Deploy confirmado no QA anterior, regras de bots não evidenciadas | PENDENTE | Verificar painel e eventos acessíveis. |
| G05 | QA anterior. 12 HTTP 200 com canônica, imagem e noindex ausente. Oito HTTP 404 | PARCIALMENTE CONCLUÍDO | Completar HTML, metadados, autoridade e lacunas de produção. |
| G06 | Google, ChatGPT, Bing/Copilot e Perplexity. Citações e indexação por URL sem evidência recuperável | PENDENTE | Consultar superfícies acessíveis com amostra controlada. |
| G07 | Medição, priorização, registro final e correções mínimas | PENDENTE | Concluir após os testes. Artigos e configurações sensíveis fora da edição. |
