# SiteHeader

Cabeçalho do site: marca, navegação entre as páginas e o botão de download.

Props: `active` (rótulo da página atual — recebe `aria-current="page"` e sublinhado laranja), `links` (padrão: Início `index.html`, Funcionalidades `funcionalidades.html`, Sobre a WeBuz `sobre.html`, Perguntas `perguntas.html`; aceita `[rótulo, href]`), `cta` (padrão "Baixe grátis"), `href` (link da loja).

Abaixo de 860px, esconda a navegação e mantenha marca + botão.

No site (HTML/CSS): `.wb-header .wb-nav .wb-brand`.
