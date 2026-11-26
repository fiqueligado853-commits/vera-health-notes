# Piloto visual VHN-E04 e fluxo de publicação

- **Decisão do proprietário em 25/11/2026.** Trabalhar no PR #5 em Draft, preservar o slug e a identidade visual, usar o A002 no arquivo existente e aguardar aprovação antes de merge ou publicação.
- **Carteira.** O [inventário](article-index-vhn20.csv) registra 20 entradas, incluindo o piloto. Os outros 19 textos estão em `src/drafts/intake/vhn-20`, fora da coleção Astro. A019 está em `reconcile` e cobre a pergunta clínica já tratada por VHN-VF-A01. Decidir qual conteúdo incorporar na revisão desse artigo antes de criar qualquer rota. As quatro filas do inventário mantêm gates individuais. Ver também os [briefings](article-briefs-vhn20.json).

## Modelos

| Frontmatter `format` | Estrutura em Markdown | Tratamento compartilhado |
| --- | --- | --- |
| `A_LIST` | Abertura concreta, H2 numerados, exemplo ou imagem junto ao item em que ajuda | Itens separados, navegação por item e imagens responsivas |
| `B_SYMPTOMS` | Experiência, possíveis causas com limites, cuidados, sinais de alerta com a ação indicada, fontes | Navegação por tópico e bloco de atenção escrito como citação Markdown quando clinicamente indicado |
| `C_EVIDENCE` | Resposta curta, H2 para as perguntas, forças e limites da evidência, implicações, fontes | Navegação por pergunta, perguntas com marca visual e sumário factual quando útil |
| `D_GUIDE` | Situação prática, passos numerados, exemplo, checklist e fontes | Navegação do guia e sequência de passos destacada. Pode usar a lista visual de A dentro da estrutura |

O H1 vem do frontmatter. Use H2 para as seções e H3 para subdivisões. A navegação é gerada a partir dos H2 a partir de quatro seções. Em telas largas fica ao lado da leitura e no celular vem antes do corpo. O sistema reutiliza fontes, cores e cabeçalho do site. A coluna de artigos tem até 720 px, com corpo de 19 px em desktop e 17 px no celular. Os cards de biblioteca e tópicos usam o mesmo componente.

## Imagens e checagem

Hero original ou com licença documentada, sem marcas acidentais. Prepare WebP, texto alternativo específico, tamanho proporcional e composição que tolere recorte. Use imagens complementares junto à informação que explicam. Em todo gráfico, registre origem dos números, ofereça equivalente textual e identifique exemplos simulados. Meta de até 350 KB por arquivo de entrada.

| Arquivo do VHN-E04 | Origem e uso | Dimensões |
| --- | --- | --- |
| `vhn-e04-lunch.webp` | Ilustração fotográfica original gerada para Vera Health Notes, 25/11/2026, uso editorial no projeto. Mostra sanduíche de peru, sopa de tomate e pizza de legumes | 1440 × 960 |
| `vhn-e04-sodium-comparison.webp` | Diagrama original do projeto, 25/11/2026. Compara dois rótulos hipotéticos com porções de 1 copo e ½ copo. A conta também aparece no texto | 960 × 620 |

**Revisão factual de implementação, 25/11/2026.** FDA confirma quantidade por porção, 5% e 20% do DV e redução de pelo menos 25% relativa ao produto regular. A conversão do exemplo é 240 × 2 = 480 mg por copo, ao lado dos 360 mg por copo da primeira sopa. CDC sustenta a origem predominante em alimentos processados e de restaurantes. AHA corrobora o papel das preparações processadas. NHLBI sustenta a descrição geral do DASH. As URLs estão no artigo e foram conferidas. A edição encurtou a abertura e acrescentou procedimento, exemplo e checklist. Seleção de categoria, título, descrição, hierarquia, alt e slug conferidos. Vínculo futuro com A001 depende da publicação desse texto. A leitura/revisão editorial independente, o registro de enquadramento clínico por quem aprova e a autorização do proprietário continuam pendentes. Os campos de aprovação permanecem pendentes.

## Receber e revisar

1. O proprietário entrega uma pasta ou ZIP com `article.md` pronto, `images/` e, em separado, referências e créditos. O preparador entrega esses itens, adiciona metadados no formato abaixo e mantém a autoria/datas em branco até serem confirmadas.
2. Na branch da revisão, rode `npm run editorial:stage -- /caminho/da/pasta-extraida`. O comando valida a ficha, os nomes e o peso das imagens, rejeita IDs/slugs repetidos e só importa como rascunho, sem afiliação. O build do Astro valida a coleção e as referências a arquivos. Atualize o inventário e registre a revisão.
3. Rode `npm run verify`. Para ver o rascunho, rode `VHN_EDITORIAL_PREVIEW=1 npm run dev` no Codespace com porta **Private** e acesse `/articles/<slug>/`. Em PowerShell, use `$env:VHN_EDITORIAL_PREVIEW='1'` antes de `npm run dev`. A rota do rascunho recebe noindex em desenvolvimento. A flag não gera rascunhos no build do Cloudflare Pages. Use o preview do PR para verificar as páginas públicas.
4. Rode QA de títulos, imagens, âncoras, links, layout desktop e celular. Registre responsável, data, conteúdo revisado e decisão para fontes, editorial e clínica quando aplicável. Se houver risco médico, aguarde revisão qualificada. Se clínica for dispensável, a decisão precisa ser registrada.
5. Só marque os campos aprovados na branch quando as revisões existirem. Após autorização explícita, promova o PR e faça merge manual para o Cloudflare Pages existente. Confira a URL, canônica, imagens e inclusão no sitemap em produção.

```yaml
id: "VHN-E05"
title: "Example of an editorial article title"
description: "Describe the specific question and what the reader can do with the answer."
slug: "example-editorial-article"
format: "D_GUIDE"
category: "nutrition-ingredients"
language: "en-US"
status: "draft"
editorial_review: "pending"
source_review: "pending"
clinical_review: "pending"
affiliate_links: false
hero:
  image: "./images/hero.webp"
  alt: "Specific alternative text for the supplied photo"
```
