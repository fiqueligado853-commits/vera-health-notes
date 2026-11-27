# Auditoria GEO/AEO — Vera Health Notes

**26/11/2026, São Paulo.** Retomada documentada a partir da produção do PR #8 em [`79e7120`](https://github.com/fiqueligado853-commits/vera-health-notes/commit/79e71202f37b3435f8d0dd94f237ca4101341053). A auditoria confirma a base do repositório e recupera o QA de produção do mesmo dia. A verificação autenticada dos buscadores e do Cloudflare, a comparação com o robots servido e a amostra nas interfaces de IA ficaram bloqueadas por acesso. Nenhum impedimento de rastreamento foi comprovado. Nenhuma edição de produção foi indicada pelas evidências obtidas.

## 1. Retomada e matriz

Consultei as árvores completas das 11 branches remotas, os oito PRs e a memória a partir de `5b7bc31`. Recuperei as instruções da auditoria. O PR #1 (base técnica, `6308390`), o PR #2 (migração, `5feee51`) e o PR #8 são antecedentes. Nenhuma branch ou relatório anterior de GEO/AEO com resultados verificáveis foi encontrado. O [checkpoint](https://github.com/fiqueligado853-commits/vera-health-notes/commit/68fe7eb2a3a548a1c6dc555d1233297bc928b187) preserva o estado inicial desta retomada.

| ID | Objetivo | Evidência recuperada ou obtida nesta retomada | Estado | Próxima ação |
|---|---|---|---|---|
| G01 | Recuperar histórico | Memória, branches, PRs, inventário e QA do PR #8 | CONCLUÍDO E VERIFICADO | Usar os commits e links desta auditoria como ponto de partida. |
| G02 | Verificar documentação oficial | OpenAI, Google, Microsoft/Bing, IndexNow, Perplexity e Cloudflare | CONCLUÍDO E VERIFICADO | Revalidar documentação quando a plataforma anunciar mudança. |
| G03 | Robots, sitemap, HTTPS e diretivas servidas | Origem Git/Astro e [coleta direta de borda](https://github.com/fiqueligado853-commits/vera-health-notes/actions/runs/45917571767/job/140240369763). Robots idêntico e dois artigos amostrados. | CONCLUÍDO E VERIFICADO | Reabrir diante de mudança ou evidência nova. Painel e eventos reais seguem em G04. |
| G04 | Cloudflare, modos e tráfego dos bots | Deploy anterior confirmado. Configuração e eventos indisponíveis nesta sessão | BLOQUEADO POR ACESSO | Abrir a zona autenticada e correlacionar os eventos reais. |
| G05 | 12 rotas e oito exclusões | QA anterior no domínio + inspeção individual do Markdown e dos templates em `79e7120` | PARCIALMENTE CONCLUÍDO | Revalidar HTML servido, snippet e as 20 respostas de borda. |
| G06 | Indexação e citações por plataforma | Pesquisa web indicativa executada. Sem inspeções autenticadas ou respostas nativas com evidência | BLOQUEADO POR ACESSO | Abrir painéis e repetir amostra nativa. |
| G07 | Autoridade e diferenciação editorial | Cinco páginas institucionais e os 12 artigos avaliados por fonte e utilidade | CONCLUÍDO E VERIFICADO | Considerar prioridades P2 em missão separada. |
| G08 | Medir e preservar resultados | Matriz, procedimentos, registro de bloqueios e prioridades nesta memória | CONCLUÍDO E VERIFICADO | Começar série semanal quando houver dados. |
| G09 | Corrigir defeito técnico confirmado | Nenhum defeito técnico elegível para correção no material obtido | NÃO APLICÁVEL | Abrir PR draft independente somente após validar um defeito e seu impacto. |

## 2. Origem, produção e Cloudflare

### Origem verificada em Git

O [robots.txt](https://github.com/fiqueligado853-commits/vera-health-notes/blob/79e7120/public/robots.txt) de origem contém:

```text
User-agent: *
Allow: /
Sitemap: https://verahealthnotes.com/astro-sitemap-index.xml
```

[Astro](https://github.com/fiqueligado853-commits/vera-health-notes/blob/79e7120/astro.config.mjs) usa `https://verahealthnotes.com` como site e gera o sitemap com prefixo `astro-sitemap`, excluindo a rota 404. [`public/_redirects`](https://github.com/fiqueligado853-commits/vera-health-notes/blob/79e7120/public/_redirects) declara 301 de `/sitemap.xml` para `/astro-sitemap-index.xml`. O repositório não tem `public/_headers` nesse commit. O [layout](https://github.com/fiqueligado853-commits/vera-health-notes/blob/79e7120/src/layouts/EditorialLayout.astro) gera canônica HTTPS para publicados e `noindex` apenas quando a página é marcada dessa forma. A [rota de artigo](https://github.com/fiqueligado853-commits/vera-health-notes/blob/79e7120/src/pages/articles/%5Bslug%5D.astro) filtra publicação por `isPublishable`, deixando a visualização de rascunhos restrita ao desenvolvimento.

### Evidência do domínio e limites do teste

O [QA de produção do PR #8](../editorial/queue-a001-a020.md) confirmou em 26/11 o deploy [Cloudflare Pages `4ed390fe`](https://dash.cloudflare.com/?to=/80a8a63269540b6baeeae32f30e267f9/pages/view/vera-health-notes/4ed390fe-3646-4378-a475-116d486565f5), 12 URLs HTTPS com HTTP 200, canônicas correspondentes, ausência de `noindex` em meta e cabeçalho, imagens e texto alternativo, âncoras, destinos relacionados e presença em [`astro-sitemap-0.xml`](https://verahealthnotes.com/astro-sitemap-0.xml). O [job do GitHub Actions](https://github.com/fiqueligado853-commits/vera-health-notes/actions/runs/45866968854/job/140072171467) verificou 32 HTML e 655 links internos. Essa evidência é do deploy informado. Este levantamento acrescenta a leitura dos 12 arquivos e resultados independentes de DNS e busca.

| Verificação de borda | Resultado em 26/11 nesta retomada | Classificação |
|---|---|---|
| DNS do domínio | Resolveu IPv4 `104.21.65.148`, `172.67.164.28` e IPv6 `2606:4700:3033::6815:4194`, `2606:4700:3031::ac43:a41c`. | TESTE EXTERNO INDICATIVO |
| GET HTTPS do robots no domínio e no host Pages | `curl` retornou código 7 antes de receber cabeçalho. O extrator web também não abriu os URLs. O navegador local ficou indisponível. | TESTE EXTERNO INDICATIVO |
| Robots servido: HTTP, Content-Type, bytes, diretivas e regras por bot | Sem resposta coletada. Não há comparação Git × borda. | NÃO VERIFICADO |
| Redirect HTTP→HTTPS, sitemap índice e cabeçalhos de borda atuais | Sem nova resposta coletada. A inclusão no sitemap filho foi comprovada no QA anterior. | NÃO VERIFICADO |
| AI Crawl Control, Bot Preference Sync/managed robots, Content Signals, WAF, rate limits, Bot Fight/Super Bot Fight | Sem acesso autenticado à zona durante a auditoria. | NÃO VERIFICADO |
| Requisições reais de Googlebot, Bingbot, OpenAI e Perplexity | Sem eventos ou logs do domínio com IP verificado, caminho, ação e status. | NÃO VERIFICADO |

Os erros de conexão descrevem as superfícies desta sessão. A documentação do Cloudflare explica que Bot Preference Sync pode acrescentar diretivas ao robots na borda quando habilitado com políticas restritivas, e que AI Crawl Control pode aplicar bloqueios por meio de regras WAF. O WAF, os modos de bot e as políticas são camadas que precisam ser lidas na zona. Bot Fight Mode e Super Bot Fight Mode têm capacidades distintas. Fontes: [robots gerenciado](https://developers.cloudflare.com/bots/additional-configurations/managed-robots-txt/), [AI Crawl Control e modos de bot](https://developers.cloudflare.com/ai-crawl-control/configuration/ai-crawl-control-with-bots/), [análise de tráfego de IA](https://developers.cloudflare.com/ai-crawl-control/features/analyze-ai-traffic/), [WAF](https://developers.cloudflare.com/waf/get-started/) e [Super Bot Fight Mode](https://developers.cloudflare.com/bots/get-started/super-bot-fight-mode/).

**Coleta para fechar G03/G04.** Fazer GET em navegador/rede funcional de HTTP/HTTPS, robots, sitemap índice e filho, uma URL de cada grupo e oito excluídas. Registrar hora, URL final, redirecionamentos, HTTP, Content-Type, cabeçalho X-Robots-Tag, Ray ID quando houver e conteúdo/diretivas do robots. Comparar com o commit. Uma sonda por user-agent pode revelar tratamento diferente, mas seu IP não representa o crawler oficial. No painel Cloudflare, registrar a configuração exibida como `CONFIGURAÇÃO AUTENTICADA VERIFICADA`. Filtrar Security Events e AI Crawl Control com janela explícita, crawler, host e caminhos; registrar serviço, ação, regra, status, hora e Ray ID. Vincular IP à fonte oficial ou verificação oficial e só então registrar `EVENTO REAL DE BLOQUEIO VERIFICADO`. Guardar dados de segurança em evidência de acesso restrito e usar resumo sem IPs de visitantes no Git. Se a janela não tiver tráfego verificável, conservar a ausência de evidência e repetir na próxima janela. Nenhuma política ou regra deve ser alterada por esta coleta.

## 3. Regras e medição por plataforma

| Plataforma | Rastreamento, seleção e controles | Evidência de visibilidade a coletar |
|---|---|---|
| ChatGPT Search | `OAI-SearchBot` atende descoberta para Search. `GPTBot` tem finalidade de treinamento. `ChatGPT-User` pode abrir páginas em resposta a uma ação de usuário; a aplicação de robots pode variar nesse acesso, e ele não é o crawler de descoberta. Verificar logs com [IPs Search](https://openai.com/searchbot.json), [GPTBot](https://openai.com/gptbot.json) e [User](https://openai.com/chatgpt-user.json). [Bots oficiais](https://developers.openai.com/api/docs/bots). | Registrar links clicáveis de buscas nativas e, se o site já dispuser de dados de origem, sessões com `utm_source=chatgpt.com`. Tráfego é clique, e citações sem clique não aparecem ali. [FAQ de publishers](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq). |
| Google Search, AI Overviews e AI Mode | Googlebot e a elegibilidade a Search/snippet são a base. Sem markup especial exigido. `noindex`, `nosnippet`, `max-snippet` e `data-nosnippet` têm efeitos diferentes. Search Console tem controle de IA na Busca e no Discover separado da configuração de treinamento. `GoogleOther` cobre coletas genéricas fora de Search. [Recursos de IA](https://developers.google.com/search/docs/appearance/ai-features), [controles generativos](https://developers.google.com/search/docs/fundamentals/gen-ai-controls), [diretivas](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag) e [verificação do crawler](https://developers.google.com/crawling/docs/crawlers-fetchers/verify-google-requests). | Conferir propriedade, sitemap processado, inspeção indexada e teste ao vivo, canônica escolhida e data de coleta. Desempenho Web continua agregado. O [anúncio oficial](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) registra relatórios dedicados de Search/Discover e rollout mundial das informações desde 31/08/2026. Confirmar o que aparece no painel desta propriedade. [Inspeção de URL](https://support.google.com/webmasters/answer/9012289). |
| Gemini | A disponibilidade de grounding do app Gemini e outros produtos generativos fora de Search é tratada no controle `Google-Extended`, que também abrange usos de treinamento descritos pelo Google. É um token de robots, sem crawler separado. O controle do Search Console para AI Overviews/AI Mode tem escopo próprio. [Google-Extended](https://developers.google.com/crawling/docs/google-extended). | Registrar eventual citação na interface do Gemini como observação específica do Gemini. Separar do relatório de Search/Discover. |
| Bing e Microsoft Copilot | Bingbot é o crawler do Bing. Verificar via DNS reverso seguido do direto ou [intervalos oficiais](https://www.bing.com/toolbox/bingbot.json). IndexNow sinaliza inclusão, atualização ou remoção a mecanismos participantes; recebimento do ping não comprova coleta ou indexação. Prioridade só quando houver fluxo de mudanças que justifique integração. [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a), [Bingbot](https://www.bing.com/webmasters/help/which-crawlers-does-bing-use-8c184ec0) e [IndexNow](https://www.indexnow.org/documentation). | Consultar URL Inspection, sitemaps e AI Performance na propriedade existente. AI Performance é agregado de experiências de IA Microsoft/Bing e parceiros selecionados, com métricas de citação e complementos em preview. Citation Share é observação para uma consulta de grounding. [Microsoft Bing](https://blogs.bing.com/search/2026/6/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare/). |
| Perplexity | `PerplexityBot` serve descoberta e links na busca. `Perplexity-User` atua em requisições de usuários. A documentação recomenda identificar pedidos pela combinação de agente e IP quando regras de borda são problema. [Bots oficiais](https://docs.perplexity.ai/docs/resources/perplexity-crawlers), [IPs Bot](https://www.perplexity.ai/perplexitybot.json), [IPs User](https://www.perplexity.ai/perplexity-user.json). | Capturar na interface nativa links e domínios da amostra, sem presumir que robots aberto garanta inclusão. |

A nota histórica de Search Console relata sitemap processado, com zero URLs descobertas naquela consulta, anterior a esta medição. O número atual, o estado indexado das rotas e a configuração de IA da propriedade ainda precisam de leitura autenticada.

## 4. As 12 rotas publicadas

A coluna HTTPS usa o QA anterior em produção. H2 e fontes são contagens de títulos e URLs externas distintas no Markdown inspecionado nesta retomada. Cada arquivo tem H1 pelo template, título e descrição próprios, hierarquia H2 direta (nenhum H3 no corpo e nenhum salto de nível), imagem WebP principal com alt específico, fontes explícitas, data de publicação de 26/11 e schema Article pelo template. O JSON-LD inclui título, idioma, imagem, data e publisher Vera Health Notes. As 12 fontes Markdown não trazem autor nominal nem data de modificação. O template só emite esses campos quando há dados. A publicação e revisão por versão estão no [registro editorial](https://github.com/fiqueligado853-commits/vera-health-notes/blob/79e7120/docs/editorial/reviews-pr8-2026-11-26.md). Essa revisão registrada não equivale a uma assinatura profissional na página.

| ID | URL e título | HTTPS (QA de 26/11) | H2 / fontes | Relacionados no mapa | Diferencial e potencial de citação |
|---|---|---|---:|---|---|
| A001 | [10 Foods for a Heart-Healthy Grocery List on a Budget](https://verahealthnotes.com/articles/10-foods-worth-adding-to-a-heart-healthy-grocery-list/) | 200 · canônica própria · sitemap · sem noindex | 8 / 3 | A013, A014 | Compra para duas refeições, preço unitário e reaproveitamento. Manter distinta da taxonomia DASH. |
| A003 | [5 Easy Food Swaps for a More Heart-Friendly Kitchen](https://verahealthnotes.com/articles/5-easy-food-swaps-for-a-more-heart-friendly-kitchen/) | 200 · canônica própria · sitemap · sem noindex | 9 / 3 | A016 | Troca de um ingrediente por vez, com percurso da prateleira ao jantar. |
| A004 | [What Does a Heart-Healthy Breakfast Actually Look Like?](https://verahealthnotes.com/articles/what-does-a-heart-healthy-breakfast-actually-look-like/) | 200 · canônica própria · sitemap · sem noindex | 9 / 2 | A013 | Três padrões de café da manhã e preparo para dias corridos. |
| A006 | [7 Ways to Move More on Long Sitting Days](https://verahealthnotes.com/articles/7-everyday-habits-that-can-make-long-sitting-days-more-comfortable/) | 200 · canônica própria · sitemap · sem noindex | 10 / 2 | A010, A020 | Pausas em trabalho, casa ou viagem. Preservar a separação de A010, que é específica de mesa. |
| A010 | [How to Build More Movement Into a Day Spent at a Desk](https://verahealthnotes.com/articles/how-to-build-more-movement-into-a-day-spent-at-a-desk/) | 200 · canônica própria · sitemap · sem noindex | 5 / 2 | A006, A020 | Plano de transições no trabalho, versão reduzida e avaliação após cinco dias. |
| A011 | [5 Habits That May Be Getting in the Way of Better Sleep](https://verahealthnotes.com/articles/5-habits-that-may-be-getting-in-the-way-of-better-sleep/) | 200 · canônica própria · sitemap · sem noindex | 9 / 3 | — | Hábitos que atrapalham o sono e sinais que justificam avaliação clínica. Considerar link contextual para A012. |
| A012 | [How to Build a Simple Bedtime Wind-Down Routine](https://verahealthnotes.com/articles/why-your-evening-routine-matters-more-than-you-might-think/) | 200 · canônica própria · sitemap · sem noindex | 8 / 2 | A011 | Rotina aplicável e versão curta. Já aponta para A011; considerar reciprocidade. |
| A013 | [10 Everyday Foods That Fit DASH and the Food Groups They Cover](https://verahealthnotes.com/articles/10-everyday-foods-that-fit-a-dash-style-eating-plan/) | 200 · canônica própria · sitemap · sem noindex | 9 / 2 | A001, A004 | Grupos DASH e metas diárias versus semanais, com vínculo direto ao NHLBI. Manter separada da compra econômica de A001. |
| A014 | [Fresh, Frozen, or Canned Vegetables: Which Fit a Healthy Diet?](https://verahealthnotes.com/articles/fresh-frozen-or-canned-vegetables-which-fit-a-healthy-diet/) | 200 · canônica própria · sitemap · sem noindex | 9 / 4 | A015, A016 | Escolha por refeição, armazenamento e rótulo. Exemplo de uso é a principal contribuição própria. |
| A015 | [What to Look for When Buying Lower-Sodium Foods](https://verahealthnotes.com/articles/what-to-look-for-when-buying-lower-sodium-foods/) | 200 · canônica própria · sitemap · sem noindex | 10 / 3 | E01 | Comparação por porção e exemplo de duas latas. Melhor candidata inicial para teste de resposta e citação. |
| A016 | [7 Simple Ways to Make Heart-Healthy Meals Less Complicated](https://verahealthnotes.com/articles/7-simple-ways-to-make-heart-healthy-meals-less-complicated/) | 200 · canônica própria · sitemap · sem noindex | 11 / 4 | A003, A014 | Planejamento de refeições, atalhos e segurança das sobras com FoodSafety.gov e USDA. |
| A020 | [How Much Movement Do You Really Need During a Busy Week?](https://verahealthnotes.com/articles/how-much-movement-do-you-really-need-during-a-busy-week/) | 200 · canônica própria · sitemap · sem noindex | 9 / 2 | — | Diretriz semanal, teste de intensidade e calendário. Candidata inicial para consulta ampla, com CDC junto ao número. |

Links contextuais externos e referências incluem FDA, eCFR, NHLBI, CDC, FoodSafety.gov e USDA FSIS. O QA registrou os 12 destinos relacionados distintos como acessíveis. Os corpos não trazem links internos em Markdown. As ligações editoriais internas usam o mapa do template; A011 e A020 têm mapa vazio e continuam acessíveis pelo catálogo. Os 12 títulos, slugs, descrições e imagens de capa são distintos. A001 e A013 compartilham alimentos e atendem a decisões diferentes (comprar com orçamento versus entender DASH). A006 e A010 diferenciam vários tipos de dia sentado de uma rotina específica de mesa. A011 e A012 diferenciam a identificação de hábitos e a montagem de uma rotina. Não foi identificada duplicata literal no conjunto.

Controles de snippet por trecho, resposta real atual dos arquivos de imagem, status de fontes externas de cada artigo e marcação efetiva no HTML servido não puderam ser coletados novamente. A revisão factual formal do PR #8 permanece como fonte de verificação editorial, sem nova auditoria médica. Fonte primária citada no corpo junto à afirmação e exemplos próprios (como a comparação de latas ou a agenda semanal) são melhores pontos de amostragem de citação.

**Oito fora do lote.** A002, A005, A007, A008, A009, A017, A018 e A019 tiveram HTTP 404 e ausência no sitemap no QA do mesmo deploy. Seus registros permanecem no [inventário](../editorial/article-index-vhn20.csv). Não houve nova publicação nem mudança de escopo.

### Transparência institucional na origem

| Página | Evidência | Avaliação |
|---|---|---|
| [About](https://verahealthnotes.com/about/) | Identifica projeto editorial, temas e limite informativo em texto. | O texto é institucional e breve. Identificar responsáveis reais ou escopo metodológico verificável quando disponível. |
| [Editorial Policy](https://verahealthnotes.com/editorial-policy/) | Explica seleção de fontes, revisão, proteção de rascunhos e correções, com links para contato e divulgação. | O processo já é descrito. O link de correções leva à página de contato descrita abaixo. |
| [Contact](https://verahealthnotes.com/contact/) | O código diz explicitamente que ainda não há canal público configurado. | Lacuna de transparência demonstrada na origem. O proprietário precisa indicar canal válido antes de uma implementação. |
| [Privacy Policy](https://verahealthnotes.com/privacy-policy/) | Descreve infraestrutura Cloudflare, fontes externas e ausência atual de formulários. | Manter aderência caso um canal ou ferramenta futura seja adotado. |
| [Affiliate Disclosure](https://verahealthnotes.com/affiliate-disclosure/) | Explica divulgação e distinção entre fontes e testes realizados. | Nos 12 artigos `affiliate_links` está desativado. Avaliação restrita à transparência editorial. |

## 5. Amostra de descoberta e citação, 26/11/2026

Pesquisa web desta sessão, em inglês, sem visão controlada de localidade nos EUA e sem uso de uma interface nativa de respostas. Cada linha registra apenas a primeira recuperação do extrator.

| Consulta enviada | Primeira fonte recuperada | Vera Health Notes |
|---|---|---|
| What does reduced sodium mean on a US food label? | [FDA, Sodium in Your Diet](https://www.fda.gov/media/84261/download) | Sem ocorrência no retorno da amostra. |
| How can I compare sodium in two cans of soup with different serving sizes? | [Health Canada, Sodium detector](https://www.canada.ca/en/health-canada/services/nutrients/sodium/detector/processed-foods.html) | Sem ocorrência no retorno da amostra. |
| How much moderate physical activity do adults need each week? | [American Health Association, How much exercise do you need?](https://www.americanhealthassoc.org/how-much-exercise-do-you-need) | Sem ocorrência no retorno da amostra. |
| `site:verahealthnotes.com/articles/ Vera Health Notes` | Extrator sem resultados. | Sem resultado nesta superfície. Sem diagnóstico de indexação. |

O link da American Health Association registra o resultado exibido pela busca e não é usado para sustentar uma recomendação clínica. **Google Search/AI Overviews, AI Mode, Gemini, ChatGPT Search, Bing/Copilot e Perplexity:** amostra nas interfaces específicas bloqueada por acesso nesta sessão. Nenhum ranking, contagem de citações, ausência universal de citações ou status de indexação foi medido. Repetir as três perguntas acima e, para contraste de intenção, “What are practical ways to move more during a desk job?” (A010), “What foods count toward the DASH food groups?” (A013) e “How do I build a simple bedtime wind-down routine?” (A012). Usar inglês dos EUA, registrar região real/configurada quando disponível, produto, modo, data/hora, consultas e URLs exatas citadas; distinguir link clicável, menção sem link, resposta sem o recurso de IA e teste indisponível. Acrescentar uma consulta de navegação com a marca como controle de recuperação, em registro separado.

## 6. Prioridades e monitoramento

| Prioridade | Ação | Impacto e dependência | Risco ou critério |
|---|---|---|---|
| P0 | Nenhuma intervenção de produção confirmada. | Exigiria evidência de indisponibilidade sistemática ou bloqueio legítimo de descoberta. | Investigar primeiro quando houver HTTP/canônica/noindex incorretos ou bloqueio de crawler verificado em produção. |
| P1 | Fechar evidência de borda e painéis, em leitura. | Robôs efetivamente servidos, sitemap e inspeção por URL, acesso autenticado Cloudflare, Search Console e Bing. | Evita mudar regra ou atribuir bloqueio por um teste de rede inconclusivo. Abrir PR draft técnico apenas se surgir defeito comprovado. |
| P2 | Tornar contato e correções acionáveis. | Canal real indicado pelo proprietário e política coerente com o fluxo. | Não publicar endereço fictício nem aceitar informações médicas por formulário público nesta auditoria. |
| P2 | Melhorar identificação e continuidade editorial quando houver dados e necessidade. | Atribuição real de responsáveis, data de alteração apenas quando aplicável; links A011↔A012 e A020→guia de atividade específico são candidatos. A015, A013 e A020 são as primeiras referências para medir. | Evitar inventar autoria, revisão clínica, FAQ ou multiplicar páginas sobre a mesma intenção. |
| P3 | Avaliar IndexNow, novas métricas e mudanças de marcação somente se a cadência ou evidência justificar. | Cadastro legítimo, permissão e benefício demonstrável. | Preservar escopo do trabalho e não instalar rastreamento ou criar contas nesta auditoria. |

**Semanal.** A partir do mesmo dispositivo ou rede, comparar robots e sitemap ao Git; verificar HTTP, canônica e noindex das 12 URLs e ausência das oito quando houver release ou alerta. Em GSC, guardar status de sitemap, cobertura e inspeção das 12 na primeira coleta; repetir as divergências e uma amostra rotativa depois. Registrar canônica declarada e escolhida e diferenciar teste ao vivo de estado indexado. Em Bing, guardar cobertura e métricas de AI Performance, se disponíveis; em Cloudflare, registrar período, bots verificados, requisições, ações e regra dos eventos relevantes. Usar `indisponível` para falta de acesso ou dados, reservando zero para um valor observado.

**Mensal.** Repetir a mesma amostra nativa por plataforma e idioma. Registrar impressões, cliques e URLs citadas em colunas distintas. Quando houver relatórios disponíveis, usar o mesmo intervalo e anotar mudanças de interface e cobertura. Comparar por tema e URL, revisar referências e autores reais quando necessário e avaliar tendências por quatro janelas, sem atribuir causa a uma mudança isolada. Se houver dados de visitas existentes, medir referenciadores de IA e `utm_source=chatgpt.com` de forma agregada. Manter este documento como referência operacional.

**Registro mínimo de evidência.** Data/hora e zona | commit/deploy | plataforma/modo | propriedade ou URL | método e região | HTTP/estado indexado/citação | regra e Ray ID quando disponíveis | referência da evidência | classificação | próxima ação.

## 7. Alterações e retomada

Esta auditoria registrou apenas documentação na branch de memória. O próximo passo dependente de acesso é reabrir as superfícies oficiais e aplicar as coletas das seções 2, 3 e 5. `main`, artigos e gates, configuração de SEO, DNS, WAF, políticas de treinamento, catálogo comercial e publicação ficaram fora do diff. Nenhum novo deploy, PR ou integração externa foi necessário.

## Fechamento da Missão 03 — 26/11/2026

**Coleta pública às 21h35 de São Paulo** (27/11, 00h35 UTC). A conexão direta da sessão anterior e o navegador autenticado não ofereceram o acesso necessário. O método público que funcionou foi uma execução curta em GitHub Actions, na branch isolada `qa/mission-03-edge-2026-11-26`, sem deploy. [Logs integrais e cabeçalhos](https://github.com/fiqueligado853-commits/vera-health-notes/actions/runs/45917571767/job/140240369763).

| Sinal | Evidência nova | Limite |
| --- | --- | --- |
| HTTP e HTTPS | HTTP em `/robots.txt` redirecionou por 301 ao HTTPS. HTTPS respondeu 200, `text/plain; charset=utf-8`, sem sinal de desafio na resposta. | Medição de borda pública para o caminho consultado. |
| Robots servido | 84 bytes, idêntico ao arquivo Git em `e8b9524`. `User-agent: *`, `Allow: /` e indicação do sitemap. SHA-256 `53dcff8f8d83b348ccb49e64e8a08354abfb57bdcddd252fd60978f170f65ce1`. | Sem diretivas injetadas na resposta medida. O painel Cloudflare não foi inspecionado. |
| Sitemap | Índice e filho HTTP 200 com `application/xml`. O filho lista 36 URLs, das quais 20 são rotas de artigo. | Contagem pública do XML. Descoberta, processamento e indexação dependem de leitura do Google. |
| Diretivas em dois lotes | A015 e A022 responderam 200. Sem X-Robots-Tag, meta robots/Googlebot/Bingbot ou `data-nosnippet` nas respostas medidas. | Amostra dos pontos pendentes. QA prévio de canônicas e rotas foi reaproveitado. |
| Google, Bing, OpenAI e Perplexity | Cabeçalhos de agente Googlebot, bingbot, OAI-SearchBot, GPTBot, ChatGPT-User, PerplexityBot e Perplexity-User retornaram do robots o mesmo corpo em HTTP 200, sem desafio observado. | TESTE EXTERNO INDICATIVO. As requisições vieram do runner, sem vínculo com redes oficiais. Nenhum evento real foi verificado e nenhum bloqueio de crawler foi comprovado. |

### Dados autenticados pendentes

| Superfície | Situação desta missão | Evidência necessária |
| --- | --- | --- |
| Google Search Console | A interface pública levou à apresentação geral. Sem acesso autenticado à propriedade. O registro anterior de sitemap processado e zero URLs descobertas era histórico e não foi atualizado. | Confirmar propriedade e domínio, estado e última leitura do sitemap, descobertas, indexadas e não indexadas com razões, último rastreamento e canônica do Google. Extrair impressões, cliques, consultas e problemas por intervalo explícito. Separar estado indexado do teste ao vivo. |
| Solicitação de indexação | Nenhuma enviada. Sem inspeção não há evidência suficiente de pertinência. | Concluir a inspeção e decidir por URL dentro dos limites da plataforma. |
| Cloudflare | BLOQUEADO POR ACESSO para configurações e eventos reais. | AI Crawl Control e Security Events com host, janela, crawler verificado e, se aplicável, ação e regra. |
| Bing, ChatGPT, Perplexity e IA do Google | Cobertura, citações, consultas nativas e visibilidade continuam sem verificação. | Bing Webmaster Tools e amostra nativa com o procedimento já descrito. O robots servido comprova uma condição técnica, sem medir exposição. |

**Aprendizado aplicado.** Usar o runner isolado quando a rede da sessão falhar para verificações públicas. Reservar painéis e eventos autênticos para coleta própria. Conservar a evidência por commit, janela e escopo e evitar repetir a auditoria de documentação oficial ou o QA completo sem gatilho.
