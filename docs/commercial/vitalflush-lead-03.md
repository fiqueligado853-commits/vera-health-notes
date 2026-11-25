# VitalFlush Lead 03 — execução em 25/11/2026

## Identificação e decisão

- O documento Pageus.docx aponta ao preview [Lead 02](https://paginas-vitalflush-bff238.pageus.app/lead-2). No Chrome, título LEAD-2-VF, player VTurb 6a54374d0a9f72b511fb34a5. O caminho candidato /lead-3 no mesmo host retornou 404.
- O HTML arquivado VitalFlush_index_links_afiliado.html contém o ID 6abd1c49b4e7f79fd9584235. Sem identificação direta desta versão no arquivo. O ID é diferente do Pageus, mas não foi promovido a Lead 03 por inferência.
- [Inventário do Drive](https://docs.google.com/document/d/1pspUHP9fAmudSUbdk0n6jG7gBt5kC4IIQs1vkADQ2NE/edit) registra apenas marcadores de Lead 02 e 03 no roteiro examinado. A pasta de pesquisa, o repositório e a busca por material Pageus, VTurb e Dropbox não forneceram prova de uma mídia final Lead 03.
- A indicação da mentoria de que a Lead 03 converte melhor segue sem dados da operação. O dossiê registra alertas de alegações e personagens em outras versões. Esses achados orientam o checklist e não são atribuídos à Lead 03. Uma vez obtida a mídia correta, conferir a versão inteira com timestamps, alegações explícitas e implícitas, suporte científico de produto, credenciais, depoimentos e termos de cada oferta. [FTC Health Products Compliance Guidance](https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance)

## Checkout

| Pacote visível | Referência testada no Chrome | Resultado |
| --- | --- | --- |
| VitalFlush 1 Bottle FE | https://astrongroup.mycartpanda.com/checkout/212800345:1?afid=YKbS6mntuY | Abriu o checkout do pacote e preservou afid na URL final |
| VitalFlush 2 Bottles FE | https://astrongroup.mycartpanda.com/checkout/212800346:1?afid=YKbS6mntuY | Abriu o checkout do pacote e preservou afid na URL final |
| VitalFlush 3 Bottles FE | https://astrongroup.mycartpanda.com/checkout/212800347:1?afid=YKbS6mntuY | Abriu o checkout do pacote e preservou afid na URL final |

Os três caminhos sem :1 redirecionaram à página institucional da CartPanda após a etapa intermediária do checkout. As variantes com :1 carregaram os três itens previstos. A sessão brasileira mostrou BRL e exigiu endereço para cotar entrega. Condições para os EUA, total final, pós-compra, garantia, recorrência, autorização do canal e atribuição de comissão continuam em aberto. O teste de linha de comando recebeu bloqueio HTTP em solicitações CartPanda. O navegador real forneceu a evidência dos carrinhos. Nenhuma compra, formulário ou pagamento foi submetido. Os URLs acima são evidência, sem configuração como destinos ativos do catálogo.

## Implementação e testes

| Verificação | Estado | Evidência ou dependência |
| --- | --- | --- |
| Identidade do player Lead 03 e direito de uso | BLOQUEADO | Necessário link oficial ou embed com versão identificável e autorização de uso no domínio. |
| Alegações, depoimentos, garantias e terceiros | BLOQUEADO | Revisão integral depende da mídia correta, documentos da produtora e termos aplicáveis. |
| Reprodução desktop e celular | BLOQUEADO | A prévia não carrega player alternativo. |
| Layout em desktop e celular | APROVADO | Chrome no preview privado a 1440, 390 e 320 px. Sem overflow e com três botões desativados. |
| Botões e pacote | APROVADO para o bloqueio da prévia e identificação manual dos três carrinhos :1 | Liberação de compra depende dos outros itens. |
| afid, HTTPS e redirecionamentos | APROVADO para transporte no navegador nos três links :1 | URL final /checkout preservou afid. Os links sem :1 falharam. |
| Atribuição de comissão e condições EUA | PENDENTE | Exigem evidência do painel ou validação controlada autorizada e condições escritas do vendedor. |
| Divulgação comercial e privacidade no estado atual | APROVADO para a prévia | Divulgação antes da área de vídeo e compra, links institucionais e sem iframe externo carregado. Aprovar player, coleta, cookies e consentimento antes da ativação. |
| Build, links internos e velocidade básica | APROVADO no estado sem player | npm run verify validou 20 HTML e 313 links. A rota foi removida da saída e sitemap. As três páginas editoriais responderam em cerca de 0,12–0,31 s na sondagem de servidor; sem medição do player ou Core Web Vitals. |

A página tem uma rota exclusiva em src/pages/offers/[slug].astro. Ela só existe no servidor de desenvolvimento. Cloudflare Pages e previews de branch não a geram. A porta do Codespaces usada no teste estava marcada como private. O catálogo src/data/offers.js mantém os dados de player, termos e checkouts ativos vazios e trava o modo comercial. Antes de abrir tráfego, é necessário incorporar as provas, revalidar o fluxo em prévia autenticada e revisar explicitamente a regra de publicação. Sem player ou pixels na prévia atual. O carregamento futuro projetado usa ação voluntária e não importa scripts do HTML antigo.

## Funil orgânico e próxima decisão

Os três conteúdos publicados são apoio. O guia de rótulo ajuda a entender ingredientes, mas não justifica uma chamada de compra sem rótulo confirmado e sem vínculo de evidência. O guia do vendedor ensina a verificar o pedido e não recomenda compras. A lista de medicamentos serve para consulta e não é ponto adequado para VSL. Nenhum recebeu CTA comercial.

Futuras pautas podem partir de uma dúvida real sobre a diferença entre alho culinário e preparações estudadas, como interpretar a evidência citada num anúncio ou quais perguntas levar a um profissional antes de considerar um suplemento. A futura relevância depende de revisão clínica quando aplicável, rótulo e mensagem verificáveis. Uma transição comercial, se aprovada, explicita seu destino: “See the manufacturer’s sales presentation. Vera Health Notes may earn a commission if you buy through our link.” Não aplicar CTA em dúvidas urgentes, mudanças de tratamento ou organização de prescrições.

As [cinco postagens do Facebook](facebook-organic-2026-11-26.md) remetem apenas a artigos que já estão publicados. Os parâmetros distinguem a variante de post. Se futuramente houver passagem para um checkout, o afid permanece fixo e qualquer propagação de UTM exige confirmação de suporte pelo fornecedor, parâmetros permitidos e consentimento aplicável. Nenhum pixel, anúncio pago ou postagem automática ativado.
