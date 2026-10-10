# SiteHeader

Cabeçalho do site: marca, navegação entre as páginas e o botão de download.

Props: `active` (rótulo da página atual — recebe `aria-current="page"` e sublinhado laranja), `links` (padrão: Início `index.html`, Funcionalidades `funcionalidades.html`, Sobre a WeBuz `sobre.html`, Perguntas `perguntas.html`; aceita `[rótulo, href]`), `cta` (padrão "Baixe grátis"), `href` (link da loja).

Abaixo de 860px, esconda a navegação e mantenha marca + botão.

Fica fixo no topo ao rolar (`position: sticky`). No topo da página o fundo é `surface-200` sólido; ao rolar os primeiros 120px ele passa a 78% de opacidade com desfoque (`backdrop-filter`) e uma sombra leve — feito só com CSS (`animation-timeline: scroll()`). Navegadores sem esse recurso mostram o header sempre levemente translúcido. Links para âncoras compensam a altura do header com `scroll-padding-top`.

No site (HTML/CSS): `.wb-header .wb-nav .wb-brand`.
