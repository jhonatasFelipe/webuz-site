# Código do Design System

- `bundle.js` — os componentes em React 18 (script clássico, define `window.WeBuz`). Lê `window.React`.
- `bundle.css` — estilos dos componentes e o layout `s-*` das seções; usa as variáveis de `../tokens.css`.
- `index.d.ts` — props de cada componente (documentação).
- `capa.html` — capa do Design System (blocos de cor + nome).

O site publicado **não** usa React: o HTML foi gerado a partir destes componentes e o CSS final está em `/assets/css/site.css` (tokens + `bundle.css` + regras responsivas, minificado). Os ícones do bundle são provisórios de traço; o site usa Font Awesome (ver `../icones.md`).
