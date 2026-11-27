# Sistema editorial Vera Health Notes v3.0

O Vera Health Notes é uma publicação americana de saúde e bem-estar. Cada pauta deve continuar útil sem a oferta que inspirou a pesquisa. O catálogo comercial existente em src/data/offers.js pode mudar sem exigir reescrita das matérias. Esta base orienta novas pautas. O relatório de lançamento anterior registra uma decisão histórica.

## Da pergunta à publicação

| Etapa | Entrega e decisão |
| --- | --- |
| Subpersona | Registrar situação de busca, motivação, comportamento, tentativas, objeção, dúvidas em aberto, termos espontâneos, utilidade e próximo passo. Diferenciar fala observada de inferência. |
| Linguagem | Guardar fragmento curto, URL e data da consulta, com contexto e sem coletar dados privados. Vários relatos não estimam frequência ou prevalência. |
| Oportunidade | Conferir resultados para a consulta, identificar a lacuna, ver fontes e conflitos, delimitar risco e decidir se o assunto merece URL própria. Usar intenção observada sem estimar volume. |
| Briefing | Registrar título candidato, intenção, subpersona, estrutura, fontes por afirmação, exemplo, imagem, utilidade concreta e CTA voluntário. Para pedidos de dez pautas, selecionar dez necessidades distintas antes da redação. |
| Redação | Escrever em inglês americano. Abrir com um problema específico e entregar a resposta antes de sugerir leitura ou material. Usar 1.200–1.500 palavras como referência flexível. O pacote original tinha aproximadamente 580–825 palavras. Amplie com evidência, contexto ou exemplos quando houver uma lacuna real. Identificar exemplos hipotéticos. |
| Revisão | Um revisor separado da redação deve avaliar autoria e voz, intenção, título, originalidade, evidência por afirmação, benefícios, estrutura, imagem, SEO, persuasão, transparência e compliance. Registrar decisão e revisão exata observada. Encaminhar alegações clínicas a profissional qualificado. |
| QA | Rodar npm run verify e inspecionar o preview em desktop e celular. Conferir imagens, alt, contrastes, canônica, Open Graph, dados estruturados, fontes, links relacionados, sitemap e rotas despublicadas. O build verifica aspectos técnicos. |
| Pós-publicação | Testar HTTP em produção e registrar o commit e as pendências. Reavaliar quando fontes, intenção de busca ou políticas relevantes mudarem. |

## Estruturas e persuasão

Para comparação, alinhar unidades e dar um exemplo calculável. Para um checklist, começar pelo momento em que o leitor precisa agir. Para uma questão clínica, identificar incerteza, variáveis e limites da evidência com revisão qualificada antes da publicação. Evitar inferir diagnóstico ou prometer benefício terapêutico. Uma transição leva a uma pergunta honesta depois de entregar a resposta principal. A curiosidade não justifica reter informação importante nem transformar o texto em um anúncio disfarçado.

## Imagem, SEO e fontes

Produzir um visual principal útil. Só acrescentar imagens quando cada uma tiver função própria. Documentar criador, origem, permissão, data, formato e texto alternativo. Diagramas devem ser identificáveis como ilustrações. Nunca simular evidência. Usar arquivo otimizado, dimensões e visualização responsiva. Antes de publicar, conferir título e descrição únicos, intenção, slug estável, H1 único, links internos úteis, autoria e datas verdadeiras e marcação coerente. Tratar relatos públicos como pesquisa de linguagem. Conferir afirmações regulatórias e de saúde nas fontes primárias aplicáveis.

## Compliance, ofertas e captura voluntária

Usar CTA editorial ou recurso aberto por padrão. Só registrar uma oferta no catálogo quando houver vínculo com a necessidade, termos, destino, autorização, evidência para as afirmações e revisão regulatória. Avaliar o artigo individualmente antes de qualquer inserção. Identificar publicidade e relação de afiliado perto do CTA, manter oferta removível sem afetar o conteúdo e marcar links comerciais patrocinados. Uma VSL tem natureza comercial e deve ser identificada como tal. O acesso a uma VSL não exige cadastro.

Preparar oportunidades por interesse declarado, como atualizações de leitura de rótulos ou organização de informações para consultas. Evitar segmentação que infira condição de saúde. Manter coleta inativa enquanto faltarem provedor, política atualizada, consentimento e descadastro testados. A operação está descrita em [operations.md](../operations.md).

- [Biblioteca de headlines](headlines.md)
- [Pesquisa, briefing e decisões do primeiro lote](evergreen-2026-11-25.md)
- [Pareceres editoriais do primeiro lote](reviews-2026-11-25.md)
- [Modelos, imagens e fluxo do piloto VHN-E04](pilot-e04.md)
- [Inventário reconciliado do pacote de 20 artigos](article-index-vhn20.csv)
- [Briefings e visuais sugeridos no pacote de 20 artigos](article-briefs-vhn20.json)


## Referências de forma editorial

| Referência estudada | Princípios aproveitados |
| --- | --- |
| [Medical News Today](https://www.medicalnewstoday.com/articles/321670) | Organizar causas, sintomas, dúvidas, medidas práticas e momento de procurar atendimento. |
| The Vein Institute e publicações vasculares | Fotografia natural, títulos com serifa, colunas quando ajudam, situação cotidiana e próximo passo. |
| [Sleep Foundation](https://www.sleepfoundation.org/sleep-hygiene/bedtime-routine-for-adults) | Navegação por seção, resumo útil, hierarquia tipográfica e recursos complementares. |
| [EatingWell](https://www.eatingwell.com/easy-dinner-recipes-for-the-dash-diet-11867185) | Listas escaneáveis, fotografia de alimentos e imagens por item quando pertinentes. |
| [Healthline](https://www.healthline.com/nutrition/walking-after-eating) | Subtítulos em forma de pergunta, evidência acessível e navegação com continuidade editorial. |

Use esses princípios como referência de organização. Textos, fotografias, marcas e layouts devem permanecer próprios ou com autorização explícita. A observação das páginas não mediu sua conversão.

O [guia de retomada](../operations.md#start-here--vera-health-notes) registra o estado das branches. O [QA da fila](queue-a001-a020.md) documenta a distinção de pautas próximas e os resultados dos testes.

## Checklist obrigatório por artigo

Preencha uma ficha por ID, slug e revisão exata (hash ou commit). Inclua origem do briefing, versão do padrão consultado, quem preencheu, data e links aos resultados. Use **passou**, **pendente**, **bloqueado** ou **não aplicável com justificativa** para cada linha. Compare com o [histórico de aprendizado](../operations.md#histórico-versionado-de-aprendizado) e as sobreposições registradas no [QA da fila](queue-a001-a020.md). Use estas linhas também para verificar correções em artigos existentes.

| Controle | Evidência a registrar |
| --- | --- |
| Intenção, objetivo comercial e diferenciação | Consulta em inglês americano, estágio, pergunta decisória, resultados observados versus hipótese, lacuna, entrega original e função comercial ou editorial. Uma URL principal por intenção. |
| Persona, subpersona e hook | Cenário, motivação, objeção, vocabulário e de onde veio. Primeira linha reconhecível para a pessoa e o momento, promessa informacional comprovável e resposta inicial. Ver [biblioteca](headlines.md). |
| Extensão, estrutura e inglês | Total e contagem por H2 quando útil. Regra de referência de **1.200–1.500 palavras**, salvo exceção editorial registrada com razão. Nenhuma cota por seção foi recuperada. H1 vem do frontmatter. Conferir a estrutura do modelo, clareza, voz local, exemplos concretos, originalidade, profundidade e utilidade da conclusão. |
| Visuais | **Uma imagem principal relevante e até três complementares quando úteis**. Colocar complemento junto da explicação correspondente. Registrar origem/licença, prompt usado quando aplicável, alt, formato, peso, proporção e posição. Priorizar fotografia licenciada ou oficial autorizada e diagramas originais conforme a necessidade. Conferir também recorte, leitura e carregamento em desktop/celular. Aplicar valores técnicos do [piloto](pilot-e04.md). |
| SEO editorial e técnico | Palavra-chave principal, secundárias e termos semânticos naturais, title, meta description, URL, canônica, H1/H2/H3, alt, Open Graph, dados estruturados coerentes, sitemap, indexabilidade técnica e ausência de rota duplicada. Registrar eventual mudança de slug com justificativa e plano de redirecionamento. |
| GEO e AEO | Resposta direta legível em HTML, contexto e limites, fonte atribuída junto à afirmação, exemplos reutilizáveis, autoria/datas verdadeiras e elegibilidade técnica. Evidenciar indexação e citações separadamente quando observadas. Ver [auditoria](../seo/ai-search-visibility-audit.md). |
| Links internos e externos | Âncoras úteis, destinos internos publicados com intenção complementar, links a fontes primárias rastreáveis, resultado dos testes e revisão qualitativa dos destinos. Conferir relacionados e TOC. |
| CTA, monetização e compliance | Entrega antes do CTA. Registrar posição, objetivo, pertinência e destino comprovado. Usar leitura/recurso aberto por padrão. VSL somente comercial, identificada e autorizada, com relação material em linguagem clara perto da recomendação e `rel="sponsored"` para links comerciais, quando aplicável. Exigir verificação do funil completo conforme a [inteligência comercial](inteligencia-editorial-comercial.md). |
| Evidência e revisão | Afirmações relevantes ligadas à fonte e ao contexto da prova. Parecer editorial independente da redação e aceite factual por versão; revisão científica, clínica, farmacêutica ou regulatória aplicável, com pessoa qualificada, data e decisão quando exigida. |
| Técnica e elegibilidade | Evidências de importação ou atualização do ID oficial, build, links, metadados, imagens, preview privado, renderização desktop/celular, gates e resultado de exclusão de rascunhos. Registrar liberação do proprietário separadamente. Produção só após todos os requisitos aplicáveis. |

**Fechamento do lote.** Consolide os aprendizados de cada ficha e compare as melhorias com um lote anterior pertinente. Vincule os prompts, técnicas e procedimentos testados às evidências e registre as falhas e suas causas. Atualize o checklist quando houver uma melhoria validada e use o [resumo obrigatório da missão](../operations.md#resumo-obrigatório-ao-encerrar-cada-missão) para fechar a entrega.

**Automação.** A partir do checkout de memória, rode `node scripts/verify-operational-memory.mjs articles /caminho/do/artigo.md` para total e contagem por H2. A medição usa o corpo e exclui títulos H2, URLs, alt de imagens e bibliografia demarcada. A faixa gera indicação para justificar exceção, como previsto pelo padrão editorial. A contagem não penaliza artigos históricos nem decide publicação. Na branch da edição, `npm run editorial:stage` valida o pacote, os campos obrigatórios e as imagens quando disponível nessa branch, e `npm run verify` verifica o build, links internos, metadados, imagens e exclusão de rotas conforme o script da branch. Para rascunhos, use o verificador de preview quando presente e confira visualmente o que depende de julgamento. O agente registra as verificações manuais no checklist.

## Melhoria dos próximos lotes e hipóteses de escala

Aprendizado do lote 02: manter o exemplo próprio, método reproduzível, resposta cedo e decisor específico. Os cinco guias reutilizaram bem a estrutura documental e a linguagem visual em três etapas. Para o próximo lote, comparar a variedade com esse conjunto sem reabrir os cinco aprovados.

- **Diversidade narrativa.** Escolher a forma pela intenção. Testar, conforme o caso, cenário antes/depois da decisão, comparação documental, percurso do leitor, quadro de escolha ou roteiro de perguntas. Preservar exemplo real verificável ou simulação claramente identificada.
- **Headlines.** Entre as cinco opções, documentar a escolha pela correspondência à busca, clareza da resposta e diferenciação, com critérios equivalentes entre pautas. Variar estrutura quando a intenção justificar.
- **Visual.** Comparar o hero e sua função com os anteriores. Escolher entre fotografia contextual licenciada, diagrama próprio ou outro visual realmente útil ao método, com prova de origem, alt e teste de recorte. Evitar repetir a composição sem motivo.
- **Lateralização e capacidade.** Preservar a proposta de lateralização da operação e a hipótese de capacidade produtiva de **40 artigos por dia** como estratégias a validar. A definição operacional da lateralização e o método para medir capacidade ainda não estão consolidados. Nenhum volume diário foi comprovado ou aprovado como meta de publicação. Um teste futuro precisa medir produção por etapa, tempo, retrabalho, pareceres pendentes, defeitos e qualidade versus a linha de base, com os gates existentes.
