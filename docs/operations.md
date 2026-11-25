# Vera Health Notes

Para novas pautas, consulte o [sistema editorial v3.0](editorial/README.md) e registre a revisão de conteúdo antes do QA técnico.

## Publicação editorial

O arquivo ativo de cada artigo fica em src/content/articles. VHN-VF-A01 em src/drafts é um registro histórico da v2. Antes da aprovação, documente as fontes e a validação de cada alegação, confirme autoria, datas e créditos, confira imagens e links, e registre o responsável e a data de cada revisão. Separe revisão de fontes, revisão editorial e revisão clínica. A rota e os cards só são gerados com status aprovado e todos os estados requeridos. Nos dois pilotos há revisão clínica pendente. Valide em uma cópia isolada antes de publicar.

Os diagramas originais two-readings.webp e log-fields.webp foram produzidos para Vera Health Notes em 25/11/2026. Uso editorial do projeto, sem material fotográfico de terceiros e sem crédito externo requerido. Referência factual para o primeiro: guia de monitoramento domiciliar da American Heart Association. O segundo ilustra os campos da planilha original e omite valores de saúde. As tabelas nos artigos marcam números como exemplos fictícios. Cada imagem tem 1200 × 630 px. O Astro gera o card a 480 px e preserva a altura proporcional.

## Infraestrutura e monitoramento

O Cloudflare Pages continua ligado ao repositório GitHub, com build do Astro em main. Cada revisão técnica deve passar por npm run verify e preview do Pages. Para voltar a uma versão estável, use o histórico do Cloudflare e reavalie o commit correspondente no GitHub. Não use backups antigos como sitemap ativo.

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

## Ofertas e VSLs

O catálogo em src/data/offers.js concentra estado, destino, relação editorial, versões e evidências comerciais. Mantenha os identificadores de conta e condições não verificadas no registro privado do proprietário. As duas ofertas começam em espera. A01 e A02 têm finalidade editorial e não integram a rota comercial. Para VitalFlush, priorize primeiro a pauta A04 de checagem da oferta conforme a revisão comercial já documentada no Drive, sem estimar volume nem prometer eficácia. Valide rótulo e responsável, política de reembolso divergente, custo final, permissão de mídia e atribuição antes de aprovar uma página comercial.

Quando autorizado, use o Astro e o Cloudflare existentes. Reserve uma rota de oferta com assets HTML versionados e players hospedados pelo produtor autorizado. Documente as variantes Lead 02 e Lead 03, checkout elegível e comportamento de cada destino. Suba apenas uma versão autorizada, com revisão de claims, política, dados e consentimento. Use links patrocinados identificados e divulgação junto ao CTA. Dependências de vídeo ficam fora do Git, sem cópia de VSLs para esta entrega.
