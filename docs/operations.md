# Vera Health Notes

## START HERE — VERA HEALTH NOTES

O Vera Health Notes é uma publicação editorial americana de wellness. O site oficial é [verahealthnotes.com](https://verahealthnotes.com/) e o código está no [repositório oficial](https://github.com/fiqueligado853-commits/vera-health-notes). O site usa Astro, GitHub e Cloudflare Pages. Artigos ficam em Markdown, e as imagens otimizadas ficam em WebP.

**Antes de iniciar qualquer tarefa, verificar o estado real do GitHub e ler as instruções persistentes. Nunca depender exclusivamente de lembranças da conversa.** Confira o HEAD, a base, o estado e os checks de cada PR. Para edição, crie um worktree ou branch a partir da revisão certa. Preserve as alterações locais do proprietário. Antes do push, verifique novamente as refs remotas e o escopo do diff.

### Estado confirmado em 25/11/2026, horário de São Paulo

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
- Use o parecer do PR #7 e as pendências acima para retomar cada artigo. Planeje uma publicação controlada somente depois de registrar as aprovações exigidas e receber a autorização do proprietário.

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
