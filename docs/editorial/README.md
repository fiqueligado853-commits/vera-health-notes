# Sistema editorial Vera Health Notes v3.0

O Vera Health Notes é uma publicação americana de saúde e bem-estar. Cada pauta deve continuar útil sem a oferta que inspirou a pesquisa. O catálogo comercial existente em src/data/offers.js pode mudar sem exigir reescrita das matérias. Esta base orienta novas pautas. O relatório de lançamento anterior registra uma decisão histórica.

## Da pergunta à publicação

| Etapa | Entrega e decisão |
| --- | --- |
| Subpersona | Registrar situação de busca, motivação, comportamento, tentativas, objeção, dúvidas em aberto, termos espontâneos, utilidade e próximo passo. Diferenciar fala observada de inferência. |
| Linguagem | Guardar fragmento curto, URL e data da consulta, com contexto e sem coletar dados privados. Vários relatos não estimam frequência ou prevalência. |
| Oportunidade | Conferir resultados para a consulta, identificar a lacuna, ver fontes e conflitos, delimitar risco e decidir se o assunto merece URL própria. Usar intenção observada sem estimar volume. |
| Briefing | Registrar título candidato, intenção, subpersona, estrutura, fontes por afirmação, exemplo, imagem, utilidade concreta e CTA voluntário. Para pedidos de dez pautas, selecionar dez necessidades distintas antes da redação. |
| Redação | Escrever em inglês americano. Abrir com um problema específico e entregar a resposta antes de sugerir leitura ou material. Usar 1.200–1.500 palavras como referência. Identificar exemplos hipotéticos. |
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

## Prioridade do próximo lote — 25/11/2026

Os três artigos evergreen publicados no PR nº 4 são material de apoio. Para pautas novas, partir de persona, preocupação do cotidiano e linguagem observada. Investigar causas e fatores verificáveis, apresentar caminhos e benefícios realistas, e terminar com uma pergunta genuína e um próximo passo voluntário. Variar dores específicas, causas, listas de alimentos, hábitos, erros comuns, comparações e mitos conforme a evidência. Interesse comercial entra depois da utilidade para a persona. Não repetir guias genéricos de compra como prioridade do próximo lote. [Registro da decisão e do funil Lead 03](../commercial/vitalflush-lead-03.md)
