# Vera Health Notes

## START HERE — VERA HEALTH NOTES

O Vera Health Notes é uma publicação editorial americana de wellness. O site oficial é [verahealthnotes.com](https://verahealthnotes.com/) e o código está no [repositório oficial](https://github.com/fiqueligado853-commits/vera-health-notes). O site usa Astro, GitHub e Cloudflare Pages. Artigos ficam em Markdown, e as imagens otimizadas ficam em WebP.

**Antes de iniciar qualquer tarefa, verificar o estado real do GitHub e ler as instruções persistentes. Nunca depender exclusivamente de lembranças da conversa.** Confira o HEAD, a base, o estado e os checks de cada PR. Para edição, crie um worktree ou branch a partir da revisão certa. Preserve as alterações locais do proprietário. Antes do push, verifique novamente as refs remotas e o escopo do diff.

### Protocolo permanente de inicialização

**O proprietário não é a memória operacional do Vera Health Notes.** Cabe ao agente recuperar, aplicar, registrar e verificar o conhecimento acumulado. Uma nova conversa começa pela versão remota desta seção em `docs/operational-memory`. A leitura local de outra branch é apenas apoio histórico.

1. Leia este START HERE e todas as autoridades pertinentes da matriz abaixo. Registre a ref e o commit consultados. Confira o HEAD real de `main`, a branch de trabalho, o inventário, os PRs e as aprovações aplicáveis. Uma evidência histórica só descreve a versão que foi testada.
2. Identifique o escopo e recupere as correções anteriores antes de editar. Confirme idioma, modelo, extensão, visuais, intenção, fontes, riscos, SEO/GEO/AEO e requisitos de autorização. Resolva discrepâncias pela versão aplicável e pela decisão aprovada mais recente. Registre conflito e procedência quando o estado continuar incerto.
3. Em cada lote, registre os aprendizados aplicáveis e preencha o checklist por artigo. Confirme exceções, pendências e evidências no mesmo PR ou no registro de QA. Compare rotas, intenção e IDs com o inventário antes da redação.
4. Se faltar acesso à autoridade ou a um requisito obrigatório, tente recuperá-lo e interrompa a parte dependente. Registre qual documento ou prova faltou e continue atividades independentes. Uma cota ou técnica ainda sem fonte aprovada fica pendente.
5. Antes de encerrar, valide o resultado, incorpore o aprendizado ao padrão e aos checklists afetados, registre no histórico e confirme os arquivos no GitHub. O procedimento detalhado está em [Lições aprendidas](#lições-aprendidas).

| Trabalho | Leitura obrigatória e fonte de verdade |
| --- | --- |
| Estratégia, pesquisa de ofertas, persona, VSL ou monetização | [Inteligência editorial e comercial](editorial/inteligencia-editorial-comercial.md), [dossiê de aplicação evergreen](editorial/evergreen-2026-11-25.md) e a seção de monetização abaixo. Leia os originais internos identificados na inteligência quando a tarefa depender deles. |
| Pauta, redação e hooks | [Sistema editorial e checklist](editorial/README.md), [headlines e aberturas](editorial/headlines.md), [briefings](editorial/article-briefs-vhn20.json) e [inventário](editorial/article-index-vhn20.csv). |
| Imagens, visual, integração e preview | [Piloto e modelos](editorial/pilot-e04.md), [importador](../scripts/stage-article.mjs) e [QA da fila](editorial/queue-a001-a020.md). Compare com os componentes da branch de trabalho. |
| SEO técnico, GEO e AEO | [Auditoria e monitoramento](seo/ai-search-visibility-audit.md), [sistema editorial](editorial/README.md) e [verificação do build](../scripts/verify-build.mjs). |
| Revisão e publicação | [Pareceres evergreen](editorial/reviews-2026-11-25.md), [QA da fila](editorial/queue-a001-a020.md), [pareceres formais da versão publicada no PR #8](https://github.com/fiqueligado853-commits/vera-health-notes/blob/79e71202f37b3435f8d0dd94f237ca4101341053/docs/editorial/reviews-pr8-2026-11-26.md) e os controles abaixo. |

Esta ordem é permanente. Regra obrigatória ou decisão aprovada exige referência e escopo. Uma hipótese é proposta a verificar. Um teste é uma observação datada e vinculada à versão. Uma pendência identifica a evidência ou autorização ausente. Um registro histórico preserva a decisão original e a versão em que se aplicava. Alterações que revoguem uma regra aprovada precisam de justificativa, evidência e autorização quando exigida. A atualização dos documentos acompanha a correção.

### Cláusula permanente de memória operacional e melhoria contínua

Aplica-se a todas as atividades do Vera Health Notes. Antes de iniciar cada tarefa, consulte a versão mais recente da branch remota `docs/operational-memory`, incluindo este START HERE e as referências aplicáveis. O GitHub é a fonte de verdade. O agente recupera e aplica o conhecimento versionado sem depender da memória da conversa ou de lembretes do proprietário.

Durante a execução e antes de finalizar, cumpra o [procedimento de fechamento](#fechamento-e-proteção-contra-regressão) e entregue o [resumo obrigatório da missão](#resumo-obrigatório-ao-encerrar-cada-missão). Uma correção só é concluída depois que o aprendizado correspondente foi registrado e sua gravação foi confirmada no GitHub.

**Regra permanente contra retrabalho.** Antes de executar, confira se a tarefa já foi feita e localize sua evidência, data, versão e ambiente. Só repita quando houver mudança relevante, evidência insuficiente ou contraditória, cadência prevista ou outra justificativa verificável. Confirme que a ação contribui para o objetivo comercial ou editorial vigente, respeita decisões e autorizações anteriores e é a alternativa mais eficiente. Registre o motivo da repetição ou a evidência reaproveitada. Se só uma parte perdeu validade, reteste apenas essa parte.

### Prioridades do proprietário — 28/11/2026

A **Missão 05 (VitalFlush) está temporariamente suspensa**. Nesta sessão, nenhuma pesquisa de monetização, configuração de checkout, integração de VSL, link de afiliado ou outra atividade de monetização é autorizada. Preservar integralmente os registros e pendências comerciais para retomada futura.

Executar as missões 04, 06, 07 e 08 sem dependência da Missão 05. Priorizar os dez novos artigos, a validação da capacidade e a pesquisa de lateralização. O bloqueio de acesso ao Google Search Console deve ser registrado e a produção editorial deve avançar imediatamente. As regras de revisão e publicação permanecem aplicáveis.

### Execução editorial e lateralização — 28/11/2026

O [PR #10](https://github.com/fiqueligado853-commits/vera-health-notes/pull/10) contém A026–A035 em rascunho e o registro das dez pautas. O [QA](https://github.com/fiqueligado853-commits/vera-health-notes/actions/runs/46142370605/job/140970928871) confirmou 30 renderizações e a exclusão do lote da saída publicável. Search Console permanece bloqueado por acesso autenticado. O teste de capacidade aferiu primeira passagem, preservando 40 artigos/dia como hipótese. O [relatório de execução](editorial/missoes-04-06-07-08-2026-11-28.md) guarda evidências, lacunas, método e pesquisa de lateralização. A `main` permanece em `e8b9524`. Próxima ação editorial: aprofundar os rascunhos e executar revisões independentes por versão e risco. Continuar tentando acesso ao Search Console na própria frente, sem bloqueio editorial. A Missão 05 permanece suspensa.

### Fechamento da Missão 03 — 26/11/2026, São Paulo

A `main` estava em `e8b9524` e o deploy Cloudflare Pages `0462c9b4` confirmado. Reaproveitado o QA do PR #9 e dos lotes anteriores. A [coleta pública desta missão](https://github.com/fiqueligado853-commits/vera-health-notes/actions/runs/45917571767/job/140240369763) verificou robots, redirecionamento HTTPS, sitemap e diretivas em dois artigos representativos. O sitemap retornou **36 URLs, incluindo 20 rotas de artigos**: 17 da fila e três guias E01–E03. Estes são números do XML servido. Os oito rascunhos excluídos conservam a evidência do QA anterior.

**Indexação e visibilidade.** O navegador conectado não estava disponível e as alternativas públicas não expuseram os dados da propriedade. Sem leitura atual de Google Search Console, Bing Webmaster Tools, configurações ou eventos autenticados Cloudflare e interfaces nativas de respostas. Propriedade e cobertura, indexação por URL, último rastreamento, impressões, cliques, consultas e problemas no painel ficaram sem medição. Nenhum pedido de indexação foi enviado. Veja [evidências e pendências da auditoria](seo/ai-search-visibility-audit.md#fechamento-da-missão-03--26112026).

**Comercial.** VitalFlush segue em `hold`. A preparação reaproveita os registros da Lead 03 e mantém os gates de player, termos e atribuição. Veja [evidências e requisitos comerciais](editorial/inteligencia-editorial-comercial.md#vitalflush--requisitos-para-sair-de-hold).

**Próxima missão prioritária.** Recuperar acesso autenticado ao Search Console e conferir o sitemap e a cobertura. Inspecionar amostra de URLs dos dois lotes, incluindo rota nova e rota com maior intenção comercial pertinente. Se houver causa técnica real, registrar e tratar a causa. Solicitar indexação apenas para uma URL elegível cuja inspeção justifique a ação. Depois, cruzar eventos verificados da zona Cloudflare e dados do Bing para as pendências de rastreamento.

### Estado atual em 26/11/2026 — publicação do lote 02

**Cinco artigos novos no ar.** O [PR #9](https://github.com/fiqueligado853-commits/vera-health-notes/pull/9) foi integrado à `main` em [`e8b9524`](https://github.com/fiqueligado853-commits/vera-health-notes/commit/e8b952407095bb9648dbc971b27b511e0346ae0b). A fila contabiliza 17 artigos publicados até A025, somando os 12 do PR #8 com os cinco abaixo. Os oito IDs do lote anterior fora da autorização seguem excluídos. Os guias anteriores E01–E03 são outra série.

| ID | Artigo | Palavras do corpo | Estado |
| --- | --- | ---: | --- |
| A021 | [How to Verify a Third-Party Tested Supplement Before You Buy](https://verahealthnotes.com/articles/verify-third-party-tested-supplement/) | 1229 | HTTP 200; canônica própria e sitemap conferidos |
| A022 | [What Does “Clinically Tested” Mean on a Supplement Ad?](https://verahealthnotes.com/articles/clinically-tested-supplement-claim/) | 1216 | HTTP 200; canônica própria e sitemap conferidos |
| A023 | [Does an FDA-Registered Facility Mean a Supplement Is FDA Approved?](https://verahealthnotes.com/articles/fda-registered-facility-supplement/) | 1211 | HTTP 200; canônica própria e sitemap conferidos |
| A024 | [Supplement Free Trials and Auto-Delivery: What to Check Before You Pay](https://verahealthnotes.com/articles/supplement-free-trial-auto-delivery-checkout/) | 1212 | HTTP 200; canônica própria e sitemap conferidos |
| A025 | [How to Request a Supplement Refund Under a Money-Back Guarantee](https://verahealthnotes.com/articles/supplement-money-back-guarantee-refund/) | 1207 | HTTP 200; canônica própria e sitemap conferidos |

- **Pauta e pareceres.** O [registro do lote](https://github.com/fiqueligado853-commits/vera-health-notes/blob/e8b952407095bb9648dbc971b27b511e0346ae0b/docs/editorial/lot-02-2026-11-26.md) contém subpersonas, pesquisa, cinco títulos por artigo, visuais, decisões independentes por blob e fontes. A022 foi corrigido e reaprovado. Três agentes independentes da redação aprovaram os cinco escopos documentais. O deploy não ativa oferta, VSL, afiliação ou coleta.
- **Evidência técnica.** [Cloudflare Pages `0462c9b4`](https://dash.cloudflare.com/?to=/80a8a63269540b6baeeae32f30e267f9/pages/view/vera-health-notes/0462c9b4-8b09-4ffe-b843-7029c56ba125) concluiu o deploy da `main`. [QA de rascunhos](https://github.com/fiqueligado853-commits/vera-health-notes/actions/runs/45897219260/job/140173999168) passou em 15 renderizações a 1440, 390 e 320 px. [Build de liberação](https://github.com/fiqueligado853-commits/vera-health-notes/actions/runs/45897891283/job/140176214597) verificou 37 HTML e 794 links internos. [QA no domínio](https://github.com/fiqueligado853-commits/vera-health-notes/actions/runs/45898174562/job/140177151309) confirmou HTTP 200, canônicas, falta de `noindex`, dados Article, imagem e alt, âncoras e sitemap nos cinco. Oito destinos internos distintos funcionaram. As oito rotas excluídas devolveram 404 e ficaram fora do sitemap. Indexação, ranking e citações continuam sem aferição autenticada.
- **Melhoria reproduzível.** Com o mesmo contador, os 12 do PR #8 têm 256–683 palavras de corpo, mediana 585. A021–A025 têm 1.207–1.229, mediana 1.212. O ganho inclui método ou exemplo original, distinção de documentos ou etapas de compra, e modelo concreto de ação nos cinco. A contagem não substitui a utilidade. Para pautas pós-anúncio, registrar a decisão do leitor, escolher uma URL por intenção, abrir com a dúvida situada e entregar evidência atribuída, exemplo rotulado, próxima ação e visual que explica o método. O padrão de arte do lote é diagramas originais com símbolos de processo, texto alternativo e área central segura para os recortes. Ao citar estudo, distinguir a menção ao documento de sua localização verificável.

**Retomada.** Acompanhar as cinco URLs junto da fila publicada no [monitoramento GEO/AEO](seo/ai-search-visibility-audit.md). Prosseguir com as pendências profissionais do PR #7 quando houver os responsáveis, preservando o escopo de aprovação. A biblioteca de copy ganhou a recuperação nominal de 11 fascinations e 18 elementos de prova. Os índices de ângulos disponíveis estão separados por fonte.

### Histórico em 26/11/2026 — publicação do PR #8

**12 artigos da fila no ar.** O [PR #8](https://github.com/fiqueligado853-commits/vera-health-notes/pull/8) foi integrado à `main` em [`79e7120`](https://github.com/fiqueligado853-commits/vera-health-notes/commit/79e71202f37b3435f8d0dd94f237ca4101341053), a partir do candidato [`2626c07`](https://github.com/fiqueligado853-commits/vera-health-notes/commit/2626c07aeeac20a619d597d02946096ff7018a9d). Publicados em 26/11/2026: A001, A003, A004, A006, A010, A011, A012, A013, A014, A015, A016 e A020. O [inventário](editorial/article-index-vhn20.csv) contém as URLs verificadas e o [registro de QA](editorial/queue-a001-a020.md) contém a evidência de produção.

- **Pareceres.** Três agentes automatizados separados da redação registraram [decisões editoriais e factuais individuais](https://github.com/fiqueligado853-commits/vera-health-notes/blob/79e71202f37b3435f8d0dd94f237ca4101341053/docs/editorial/reviews-pr8-2026-11-26.md), com nome do agente, versão, hash e fontes. A006, A013 e A015 foram aprovados após ajustes e leitura das versões corrigidas. Os 12 ficaram no escopo informativo com enquadramento clínico `not-required` fundamentado por artigo. A autorização expressa do proprietário foi o controle de liberação separado.
- **Produção.** [Cloudflare Pages](https://dash.cloudflare.com/?to=/80a8a63269540b6baeeae32f30e267f9/pages/view/vera-health-notes/4ed390fe-3646-4378-a475-116d486565f5) concluiu com sucesso o deploy `4ed390fe` de `79e7120`. [GitHub Actions](https://github.com/fiqueligado853-commits/vera-health-notes/actions/runs/45866968854/job/140072171467) conferiu 32 páginas estáticas e 655 links internos. No domínio oficial, as 12 rotas responderam HTTP 200 e apresentaram canônica própria, navegação por âncoras válida, imagens carregadas com texto alternativo e ausência de `noindex` em meta e cabeçalho HTTP. As 12 URLs aparecem no [sitemap](https://verahealthnotes.com/astro-sitemap-0.xml). Conferidos também 12 destinos internos distintos apontados pelos cards relacionados, todos com HTTP 200.
- **Oito fora do lote.** A002, A005, A007, A008, A009, A017, A018 e A019 retornaram HTTP 404 e seguem ausentes do sitemap. A002 aguarda enquadramento clínico. A005, A007, A008 e A019 exigem decisão clínica, A009 exige decisão científica e clínica, e A017 e A018 exigem decisão científica e clínica ou farmacêutica. Uma futura publicação desses oito requer autorização específica.

**Retomada.** Use `main` para os 12 publicados e o [PR #7](https://github.com/fiqueligado853-commits/vera-health-notes/pull/7) para os oito rascunhos. Para novas decisões, registre os pareceres separados por versão e hash antes de ativar os campos de publicação. Confira o deploy e cada URL pública antes de mudar o estado no inventário.

### Visibilidade em buscadores e respostas de IA — 26/11/2026

A [auditoria GEO/AEO](seo/ai-search-visibility-audit.md) reúne a matriz recuperada, a evidência do deploy do PR #8, a inspeção individual das 12 rotas e a documentação oficial de Google, OpenAI, Microsoft, Perplexity e Cloudflare. O robots de origem e as proteções editoriais foram conferidos. Restam a comparação do robots servido, os eventos de crawlers verificados, a indexação nas propriedades e a amostra nas interfaces nativas. Retome pelas seções de coleta do relatório quando houver acesso. Não há bloqueio de crawler comprovado que justifique alteração em produção.

### Histórico em 26/11/2026 — preparação antes da publicação

**Registro histórico anterior ao merge.** Para os estados, autorizações e números vigentes, use a seção de publicação do PR #8 no início do START HERE.

**Publicação A001–A020: 0 no ar.** O proprietário autorizou a publicação de A001, A003, A004, A006, A010, A011, A012, A013, A014, A015, A016, A020, condicionada às aprovações aplicáveis. Os 12 têm pareceres automatizados no PR #7, mas as aprovações editorial independente e factual formais da versão final continuam pendentes. Os registros do projeto não exigem genericamente um revisor humano para o parecer editorial, mas exigem um revisor separado da redação e uma decisão registrada por versão. Aprovação profissional continua obrigatória quando indicada.

| Linha | Estado verificado |
| --- | --- |
| Produção | `main` em [`5a7bcc9`](https://github.com/fiqueligado853-commits/vera-health-notes/commit/5a7bcc997d5c352b9d538039dada78a092089d72). [Cloudflare Pages](https://dash.cloudflare.com/80a8a63269540b6baeeae32f30e267f9/pages/view/vera-health-notes/0a06b2b8-8d04-41e6-8142-6b54a75955d3) mantém o deploy de produção `0a06b2b8`, iniciado em 25/11/2026 às 16h58 em São Paulo. A rodada atual não foi publicada. |
| Lote autorizado | [PR #8](https://github.com/fiqueligado853-commits/vera-health-notes/pull/8) em Draft, branch `editorial/release-12-2026-11-26`, commit [`de6936e`](https://github.com/fiqueligado853-commits/vera-health-notes/commit/de6936efb60f8028ae998d928ce505f4007037de), diretamente a partir da `main`. Contém apenas os 12 manuscritos e imagens correspondentes, com dependências comuns. Os campos de revisão continuam pendentes. |
| QA do lote | [GitHub Actions](https://github.com/fiqueligado853-commits/vera-health-notes/actions/runs/45862817881/job/140057949572) aprovou 20 páginas estáticas, 329 links internos e a exclusão de rascunhos e rotas desativadas da saída pública. O Chromium testou 12 rascunhos em 1440, 390 e 320 px, 36 renderizações ao todo. O [build de preview do Cloudflare](https://dash.cloudflare.com/?to=/80a8a63269540b6baeeae32f30e267f9/pages/view/vera-health-notes/c195ca5a-0f64-45bd-bc24-e6d2d219ca90) passou. |
| Domínio oficial | HTTP 200 na página inicial, biblioteca, registro imprimível e sitemap. As 20 rotas de artigos retornaram HTTP 404 e não constavam na [sitemap vigente](https://verahealthnotes.com/astro-sitemap-0.xml). O inventário registra a verificação por artigo. |
| Oito fora da autorização | A002 mantém enquadramento clínico pendente. A005, A007, A008 e A019 requerem parecer clínico. A009 requer parecer científico e clínico. A017 e A018 requerem parecer científico e clínico ou farmacêutico. O PR #8 não altera esses manuscritos. |

**Retomada do PR #8.** Registrar as decisões editorial e factual da revisão exata por artigo, com responsável, data, fontes e resultado. Usar `clinical_review: not-required` só nos casos em que a análise de escopo esteja documentada. Promover apenas os IDs com todas as decisões registradas e a autorização já concedida. Repetir `npm run verify` no commit aprovado, conferir o escopo do diff e as rotas esperadas antes de integrar. Após o deploy, verificar HTTP 200, título, canônica, ausência de `noindex`, sitemap e páginas excluídas diretamente no domínio. Nenhuma nova autorização por artigo é necessária para os 12 IDs autorizados, dentro das condições já registradas.

**A011.** O manuscrito no PR #8 tem o mesmo hash da versão revisada no PR #7. A checagem dirigida confirmou as orientações de rotina e exposição a telas do [CDC](https://www.cdc.gov/sleep/about/) e a descrição dos sinais de apneia do [NHLBI](https://www.nhlbi.nih.gov/health/sleep-apnea/symptoms). A revisão automática de segurança bloqueou a tentativa de preparar A011 como publicável usando essa checagem automatizada sem os pareceres formais exigidos. Nenhum commit ou branch de publicação foi criado para A011, e o artigo continua em rascunho no PR #8. A checagem dirigida é evidência factual para o próximo parecer.

### Estado histórico em 25/11/2026, horário de São Paulo

| Linha de trabalho | GitHub | Estado |
| --- | --- | --- |
| Produção | [`main` em `5a7bcc9`](https://github.com/fiqueligado853-commits/vera-health-notes/commit/5a7bcc997d5c352b9d538039dada78a092089d72) | A base de produção contém o merge do PR #4. |
| Piloto A002 / VHN-E04 | [PR #5](https://github.com/fiqueligado853-commits/vera-health-notes/pull/5), `fiqueligado853-commits-patch-1`, `efb9048a7773e82b6dbed2da153a6f3ebe7999d2` | Aberto em Draft, base `main`. A direção visual foi aprovada pelo proprietário. Os gates editorial, factual, clínico e de liberação continuam pendentes. |
| Fila editorial | [PR #6](https://github.com/fiqueligado853-commits/vera-health-notes/pull/6), `editorial/queue-a001-a020`, `1851ebaba039d8a9db2855c62974c35e1e29f230` | Aberto em Draft, com base na branch do PR #5. Contém 18 novos rascunhos e a reconciliação de A019. |
| Memória operacional | `docs/operational-memory` | Branch de documentação baseada no HEAD verificado do PR #6. Para retomar edição de artigos, consulte a branch do PR correspondente. |

O [inventário oficial](editorial/article-index-vhn20.csv) relaciona os 20 IDs aos arquivos, imagens, gates e endereços. A002 é VHN-E04. A019 é VHN-VF-A01 e conserva o slug `why-blood-pressure-readings-differ`. Os originais em `src/drafts/intake/vhn-20` são arquivo de entrada. Na branch do PR #6, as versões de trabalho já estão na coleção Astro, com estado de rascunho.

### Revisão editorial de 26/11/2026, horário de São Paulo

O [PR #7](https://github.com/fiqueligado853-commits/vera-health-notes/pull/7) está aberto em Draft na branch `editorial/review-a001-a020`, com base na fila do PR #6 (`1851eba`) e HEAD verificado em [`2d629a0`](https://github.com/fiqueligado853-commits/vera-health-notes/commit/2d629a012c849f66d5b018d8f1f649fc891f88e9). O PR #5 continua como base do piloto e a `main` continua em `5a7bcc9`. Retome a revisão dos manuscritos na branch do PR #7.

| Evidência | Resultado |
| --- | --- |
| [Parecer por artigo e fontes](https://github.com/fiqueligado853-commits/vera-health-notes/blob/2d629a012c849f66d5b018d8f1f649fc891f88e9/docs/editorial/queue-a001-a020.md) | 20 passagens editoriais e 20 factuais automatizadas. Foram corrigidos 18 textos e o alt de A020. A011 foi preservado. O parecer aponta as fontes, alterações e bloqueios por artigo. |
| [Inventário da revisão](https://github.com/fiqueligado853-commits/vera-health-notes/blob/2d629a012c849f66d5b018d8f1f649fc891f88e9/docs/editorial/article-index-vhn20.csv) | Registra título atual, arquivo da coleção e decisão por item. As referências à entrada preservam a proveniência. |
| [GitHub Actions](https://github.com/fiqueligado853-commits/vera-health-notes/actions/runs/45859863923/job/140047750724) | Build Astro aprovado. 20 páginas públicas e 329 links internos conferidos. Rascunhos e rotas desativadas ficaram fora da saída estática e do sitemap. A planilha imprimível foi validada. |
| [Preview em Chromium](https://github.com/fiqueligado853-commits/vera-health-notes/actions/runs/45859863923/job/140047750724#step:6) | 60 verificações aprovadas, 20 a 1440 px, 20 a 390 px e 20 a 320 px. Metadados, imagens WebP, alt, ausência de rolagem horizontal, sumário, âncoras, links e rodapé verificados. Todos os rascunhos têm `noindex` e omitem canônica e dados estruturados. A comparação do piloto carregou ao entrar na tela. |

A001 prioriza orçamento e aproveitamento em dois jantares. A013 explica grupos do DASH e a diferença entre frequência diária e semanal. A005 trata de quando a sensação surge após ficar sentado. A008 registra turno, sintomas e impacto funcional para uma consulta. A019 continua em `VHN-VF-A01.md` com o slug `why-blood-pressure-readings-differ`. O diagrama de pressão usa a proporção original para manter todo o texto visível no celular. A imagem original foi preservada e 21 WebP foram inspecionados visualmente.

**Próximo passo editorial.** Solicitar revisão clínica de A005, A007, A008 e A019. A009 requer avaliação científica e clínica. A017 e A018 precisam de avaliação científica e clínica ou farmacêutica. Confirmar o enquadramento clínico do piloto A002 com quem aprova o lote. Os outros 12 artigos podem seguir para registro das aprovações editoriais e factuais e decisão do proprietário. Todos continuam em rascunho e inelegíveis para publicação. Registre nome, qualificação quando aplicável, data, versão exata e decisão. Uma aprovação automatizada não substitui parecer profissional ou autorização de publicação.

### Leia primeiro

- [Sistema editorial, modelos, escrita e imagens](editorial/README.md)
- [Padrão visual implementado, importação e QA do piloto](editorial/pilot-e04.md)
- [Revisões, sobreposições e QA da fila](editorial/queue-a001-a020.md)

### Importação, preview e controles

1. Prepare o pacote com `article.md`, pasta `images` com WebP e ficha no formato documentado no piloto. Rode `npm run editorial:stage -- /caminho/do/pacote` na branch de revisão. O importador valida ID/slug, modelo, categoria, idioma, estados pendentes, ausência de afiliação, hero com texto alternativo e arquivos de até 350.000 bytes. Para manuscrito já integrado, edite o arquivo existente.
2. Rode `npm ci` em um checkout limpo e `npm run verify` para compilar e testar a saída. O `package.json` requer Node 22.23.4 ou superior. O workflow do GitHub e os checks do Cloudflare são evidência técnica adicional.
3. Para rascunhos, rode `VHN_EDITORIAL_PREVIEW=1 npm run dev` no checkout correto e mantenha o encaminhamento **Private**. Siga o equivalente PowerShell no guia do piloto se necessário. Acesse `/articles/<slug>/`. Os links do inventário funcionam quando o Codespace e o servidor daquela branch estiverem ativos. O preview de desenvolvimento usa `noindex`, omite canônica e dados estruturados do artigo em rascunho e depende da autenticação do Codespace. O build estático exclui rascunhos da rota, listas e sitemap.
4. Registre separadamente verificação factual, parecer editorial independente, revisão científica ou clínica qualificada quando aplicável, aprovação do proprietário e resultado técnico. Registre revisor, data, fontes e versão. O gate do código exige `status: approved`, `editorial_review: approved`, `source_review: approved` e `clinical_review: approved` ou `not-required`. Use `not-required` só após decisão documentada. A revisão científica fica no parecer e no inventário.
5. Faça merge e publicação somente quando houver todas as aprovações e autorização explícita do proprietário. Depois, confira HTTP, canônica, links e sitemap em produção. Registre resultados de indexação à parte.

### Decisões que orientam a retomada

- Preserve nome, domínio, logotipo, paleta, tipografia, navegação e componentes aprovados. A página do piloto validou o sumário lateral, a comparação visual, a miniatura de leitura relacionada e o rodapé compacto do modelo D. Reabra somente um problema concreto demonstrado.
- Use os quatro modelos da coleção e adapte a estrutura à pergunta do leitor. O blog cresce com pautas evergreen, SEO orgânico, links úteis e conteúdo social. Newsletter, publicidade e afiliação contextual dependem de missão, elegibilidade, consentimento ou validação próprios. O blog é independente da oferta e não é etapa obrigatória de funil pago.
- A operação segue em **ChatGPT + Work**. Uma migração, VPS ou ferramentas externas como n8n, LangGraph e OpenClaw só voltam à pauta por nova solicitação.
- Consulte o estado atual acima. Use o PR #7 para retomar os oito excluídos. Registre as aprovações exigidas e a autorização do proprietário antes de publicar qualquer novo lote.

## Lições aprendidas

| Ocorrência | Procedimento atual |
| --- | --- |
| Pesquisa ou configuração repetida | Ler o Git e decisões vigentes antes de iniciar. Registrar qual evidência justificou reabrir algo. |
| Planejamento sem entrega | Definir um resultado verificável por rodada, como commit, preview, resultado de teste ou bloqueio comprovado. |
| Markdown criado manualmente pelo proprietário | Usar o importador e PR de revisão. Atualizar manuscrito existente se já houver ID ou slug correspondente. |
| ZIP preparado sem integração | Registrar separadamente artefato, transferência, commit, testes e publicação. |
| Bloqueio de upload no Chrome | Testar cedo a transferência para o Codespace. Usar só a permissão necessária e verificar o arquivo recebido. |
| Texto burocrático | Trabalhar a partir da pergunta da persona, explorar exemplos e conferir a voz em inglês americano. |
| Hero genérico ou imagem sem função | Planejar fotografia contextual, diagrama ou checklist pelo que cada visual explica. |
| Build interpretado como aprovação | Manter testes, pareceres e autorização em campos e registros separados. |
| Pautas próximas com intenção pouco clara | Comparar intenção e slugs antes de criar rotas. A002 e A019 já têm correspondência oficial. |
| Ajuste pequeno virou redesign | Restringir o diff e verificar o comportamento no desktop e no celular. |
| Recorte de fotografia ocultou conteúdo de diagrama | Conferir imagens com texto em telas estreitas e preservar a proporção do diagrama quando necessário. |
| Imagem interna carrega só após rolagem | Levar a figura à área visível antes de verificar a decodificação em Chromium. Usar o navegador do runner e manter as dependências do Astro do lockfile durante o preview. |

### Fechamento e proteção contra regressão

1. Registre problema, causa e alcance. Identifique a regra anterior e as levas afetadas.
2. Aplique e valide a solução na versão pertinente. Registre teste executado, resultado e limites. Quando houver impacto clínico, científico, comercial ou de publicação, preserve as decisões e autorizações separadas.
3. Atualize as autoridades e checklists afetados. Se uma regra foi substituída, preserve sua origem no histórico e indique a nova regra, vigência, justificativa e autorização quando aplicável.
4. Acrescente uma entrada ao histórico abaixo. Cada linha tem nove campos. Na referência, use o commit ou PR da solução. Se a solução e a entrada nascerem no mesmo commit, use o ID no assunto do commit e confirme o permalink após gravar. Nunca reescreva uma entrada anterior. Adicione uma correção com ID próprio.
5. Execute `node scripts/verify-operational-memory.mjs memory <base>` no checkout da memória e consulte o workflow [Verify Vera Health Notes operational memory](../.github/workflows/verify-operational-memory.yml). Confirme o HEAD remoto, o diff e o resultado dos checks. Um check estrutural verde permite localizar regras e evidências. A aplicação e o mérito editorial são verificados no checklist e nos pareceres.
6. Na próxima leva, use a tabela e o histórico como lista de regressões. Revalide casos próximos, incluindo ID/slug reconciliados, relações entre pautas, elegibilidade de rascunho, recorte de diagramas e aprovações independentes. Se uma alteração for aprovada sem a documentação correspondente, o fechamento fica pendente.

7. Durante a execução, reúna os novos aprendizados, os critérios de qualidade aprovados, os erros com suas causas e as abordagens que falharam. Registre a solução aplicada, a forma de validação, o resultado e seus limites. Separe observações ainda sem evidência dos procedimentos validados.
8. Compare o resultado com a produção anterior pertinente usando os mesmos critérios quando possível. Explicite diferenças de versão, escopo e medição. Incorpore as melhorias validadas ao próximo ciclo e aos checklists obrigatórios. Preserve prompts, técnicas, estratégias e procedimentos que funcionaram em sua fonte canônica, com a versão e as condições de aplicação.
9. Preserve a qualidade dos padrões aprovados. Uma mudança de padrão exige justificativa documentada e evidência de qualidade equivalente ou superior, além da autorização aplicável. Qualquer descarte exige justificativa e registro histórico suficientes para recuperar o conhecimento anterior.
10. Atualize o estado real do projeto, as pendências e a próxima ação operacional. Versione as alterações no GitHub e confirme a ref, o diff, os arquivos gravados e os checks aplicáveis antes de relatar a conclusão.

O comando de medição de extensão e os controles de build, importação e preview têm usos complementares no [checklist editorial](editorial/README.md#checklist-obrigatório-por-artigo). O workflow de memória é executado na branch de memória. Antes de cada nova leva, rode o verificador no checkout de memória e os controles técnicos pertinentes na branch dos manuscritos.

### Resumo obrigatório ao encerrar cada missão

1. **Novos conhecimentos adquiridos** e evidências que os sustentam.
2. **Erros que não deverão ser repetidos**, com causas e abordagens descartadas.
3. **Melhorias incorporadas ao processo**, com a comparação anterior e a validação aplicável.
4. **Documentos atualizados**, com links verificáveis.
5. **Commit correspondente**, confirmado no GitHub, e PR quando houver.
6. **Pendências identificadas**, com o requisito exato que falta.
7. **Estado atual do projeto e próxima ação operacional**.

Quando um item não se aplicar ou não houver alteração, explicite essa condição e o que foi verificado. Se a gravação ou validação estiver bloqueada, indique o ponto pendente e a evidência necessária antes de considerar a correção concluída.

### Histórico versionado de aprendizado

| ID | Data | Problema | Causa | Regra anterior | Solução e nova regra | Documentos afetados | Evidência de validação | Status e referência |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VHN-MEM-20261126-01 | 2026-11-26 | Uma nova conversa podia perder requisitos e aprendizados dispersos. | Autoridades divididas entre Git, briefing, pesquisa e registros de execução, sem checagem de regressão da memória. | START HERE com orientação de consulta e lições históricas, sem checklist individual nem comparação automática do histórico. | Inicialização obrigatória por tarefa, checklist por versão, síntese da inteligência, registro cumulativo, medição de extensão e comparação automática no Git. | operations.md, editorial/README.md, editorial/headlines.md, inteligência editorial e comercial, verificador, testes e workflow. | Node 24: 4 testes aprovados, 14 links de leitura, comparação local com base Git e medição dos 24 manuscritos presentes na coleção da branch de memória, incluindo os 20 da fila. | Implementado. Commit com assunto VHN-MEM-20261126-01; evidência editorial histórica no PR #8. |
| VHN-MEM-20261126-02 | 2026-11-26 | Lista de elementos de prova ainda não extraída. | A autoridade era um documento separado do acervo. | Comprovação e distinção de escopo estavam registradas de forma geral. | Indexar os 18 elementos com limites de uso editorial e comercial e documentar as lacunas de extração. | editorial/headlines.md | Aula sobre elementos de prova.pdf, cinco páginas com texto recuperável. Verificações adicionais registradas no documento. | Implementado com pendências identificadas. Commit VHN-MEM-20261126-02. |
| VHN-MEM-20261126-03 | 2026-11-26 | PDFs de copy não extraídos e lições do lote 02 ainda dispersas. | Materiais rasterizados e publicação verificada em outro fluxo. | Existiam a referência geral e o log de recuperação parcial, sem resultados de produção do lote. | Indexar as 11 fascinations e os ângulos por fonte, preservar a lacuna de 17, fixar o padrão de checagem documental e registrar as cinco rotas. | operations.md e editorial/headlines.md | Leitura visual dos PDFs, verificador de extensão, pareceres por blob, preview em três larguras, Cloudflare e QA HTTP no domínio. | Implementado. PR #9 e commit VHN-MEM-20261126-03. |
| VHN-MEM-20261126-04 | 2026-11-26 | O procedimento existente não explicitava o resumo de encerramento em todas as missões. | As regras de retomada, aprendizado e QA estavam distribuídas entre a memória e o checklist editorial. | O fechamento já exigia validação, registro no histórico e confirmação no GitHub. | Tornar obrigatórios em todas as missões a comparação com trabalhos anteriores, a preservação de abordagens validadas e o resumo de fechamento completo. | docs/operations.md e docs/editorial/README.md | Conferência do texto contra a cláusula do proprietário e validação estrutural da memória pelo workflow existente. | Implementado. Commit VHN-MEM-20261126-04. |
| VHN-MEM-20261126-05 | 2026-11-26 | Coleta anterior sem resposta de borda e risco de repetir trabalho já validado. | Rede da sessão e painéis autenticados indisponíveis, com evidência pública e privada ainda misturadas no planejamento. | O protocolo mandava recuperar o estado e checar regressões. | Reaproveitar QA confirmado, medir só lacunas públicas em runner isolado, exigir justificativa de repetição e registrar hipóteses de escala e melhorias editoriais. | docs/operations.md, docs/seo/ai-search-visibility-audit.md, docs/editorial/inteligencia-editorial-comercial.md e docs/editorial/README.md | Logs do runner confirmam robots idêntico, sitemap e amostra de diretivas. Comparação de abordagens e gates comerciais registrados. | Implementado com pendências de acesso. Commit VHN-MEM-20261126-05. |
| VHN-MEM-20261128-01 | 2026-11-28 | Monetização não é prioridade da sessão. | Ordem expressa do proprietário. | Missão 05 integrava a sequência anterior. | Suspender Missão 05, preservar evidências e executar 04, 06, 07 e 08 sem dependência, com foco editorial e mensuração. | docs/operations.md | Decisão do proprietário registrada no START HERE. | Vigente. VHN-MEM-20261128-01. |
| VHN-MEM-20261128-02 | 2026-11-28 | Capacidade de primeira passagem e produção pronta para release ainda sem separação mensurável. | Ausência de ensaio com etapas registradas e de acesso autenticado ao Search Console. | 40 artigos por dia constava como hipótese. | Medir piloto de rascunho, validar exclusão e preview, registrar etapa de revisão pendente e comparar oportunidades adjacentes por tarefa e risco. | docs/operations.md, docs/editorial/README.md e relatório de 28/11. | PR #10, 30 renderizações verificadas, palavra por manuscrito, horários de integração e fontes primárias. | Primeira passagem concluída. Validação plena pendente. VHN-MEM-20261128-02. |

## Infraestrutura e monitoramento

O Cloudflare Pages continua ligado ao repositório GitHub, com build do Astro em main. Cada revisão técnica deve passar por `npm run verify`. Use o preview do Cloudflare para rotas elegíveis e o Codespace privado para rascunhos. Para voltar a uma versão estável, use o histórico do Cloudflare e reavalie o commit correspondente no GitHub. Não use backups antigos como sitemap ativo.

| Indicador | Fonte | Quando registrar |
| --- | --- | --- |
| Impressões, cliques, consultas e indexação | Search Console por URL e consulta | Semanalmente, anotar a cobertura e o intervalo |
| Visitas, origens e Core Web Vitals em campo | Cloudflare Web Analytics, após revisão de privacidade e ativação | Por rota e janela, distinguir dados próprios de testes locais |
| VSL, vendas e atribuição | Destino aprovado e relatório oficial da rede | Após confirmação do tracking; usar somente eventos consentidos, sem dados clínicos |
| Inscritos, confirmações e descadastros | Plataforma de newsletter | Contar confirmados e manter supressões |
| Artigos em revisão e publicados | Git e output do Astro | A cada alteração |
| Links quebrados e falhas | npm run verify e deploy Cloudflare | A cada PR e deploy |
| Custos | Faturas e painel de serviços | Mensalmente; manter valores comprováveis |

## E-mail profissional

Confirme titularidade do domínio antes de configurar. Cloudflare Email Routing é encaminhamento de entrada. Para envio e recebimento pelo mesmo endereço, avalie primeiro Zoho Mail gratuito (se disponível na região da conta) ou uma caixa do provedor escolhido pelo proprietário. Use os valores de MX, SPF e DKIM fornecidos pelo provedor, sem criar mais de um registro SPF no mesmo hostname. Defina uma política DMARC após confirmar alinhamento e destinatário de relatórios. Teste mensagem de entrada, resposta externa e cabeçalhos Authentication-Results. Só publique o endereço depois de a caixa passar pelo teste.

- https://developers.cloudflare.com/email-service/
- https://www.zoho.com/mail/zohomail-pricing.html

## Newsletter em espera

O formulário em src/drafts/resources fica fora das rotas e com campos desativados. Avalie Brevo e MailerLite pelo suporte a confirmação dupla, lista de supressão, preferências, exportação e autenticação de domínio. Valide limites e condições do plano na conta antes de habilitar. Use página hospedada pelo serviço aprovado ou POST no servidor com proteção contra abuso. Nunca coloque chaves administrativas no browser. Armazene apenas e-mail, preferências, versão/origem do consentimento, horários e estado de confirmação. Evite coletar condições, sintomas, medições ou medicação.

Confirmação em inglês. Assunto “Confirm your Vera Health Notes subscription”. Corpo “Confirm your email to get Vera Health Notes updates. If you didn’t request this, you can ignore this message.” Só após confirmação: boas-vindas com link de preferências e, na edição seguinte, conteúdo de interesse. Cada edição precisa de identificação, endereço postal válido quando aplicável, descadastro funcional e supressão de reenvios. Confirme requisitos de privacidade e marketing com revisão especializada. Execute o fluxo com caixas de teste antes de abrir cadastro.

- https://www.brevo.com/pricing/
- https://www.mailerlite.com/pricing
- https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business

## Monetização futura, missão separada

VitalFlush permanece uma oferta candidata. A decisão é trabalhar somente com **Lead 03** quando houver nova autorização. O histórico descreve a cena de uma mulher de óculos com fundo azul e acesso ao Dropbox do produtor. A identificação do vídeo, a permissão de uso e a reprodução ainda precisam de evidência atual.

O [endereço histórico do Pageus](https://paginas-vitalflush-bff238.pageus.app/lead-3) teve relato de 404. Preserve a referência como histórico. Os três destinos de checkout de referência eram os caminhos CartPanda `/checkout/212800345`, `/checkout/212800346` e `/checkout/212800347`, informados respectivamente para 1, 2 e 3 frascos. Mantenha o identificador de afiliado e os links parametrizados no registro privado do proprietário.

Numa missão comercial posterior, confirme player, destino, quantidade, condições, atribuição de comissão, permissões e alegações antes de ativar qualquer integração. A presença de `afid` só mostra um parâmetro na URL. Use o catálogo versionado em `src/data/offers.js` e mantenha essa frente separada da revisão editorial. Não salve senhas, cookies ou tokens no repositório.
