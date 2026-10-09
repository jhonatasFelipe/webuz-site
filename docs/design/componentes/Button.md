# Button

Botão de ação com verbo primeiro, em três variantes.

- `primary` (padrão): fundo `brand`, texto `on-brand`, base `shadow-press` que some ao apertar. Uma ação principal por tela ou card.
- `secondary`: contorno `ink` sobre `surface-200`, para a ação alternativa ao lado do primário.
- `ghost`: texto `brand-text`, para links de ação dentro de listas ("Como ganhar mais pontos?").

Props: `variant`, `size` (`md` | `lg` — `lg` no site), `icon` (nome de `Icon`), `block` (largura total), `href` (vira `<a>`), `disabled`, e qualquer atributo de botão. O consumidor fornece o rótulo como `children`.

Não use texto branco sobre laranja. Não empilhe dois primários lado a lado.

No site (HTML/CSS): `.wb-btn .wb-btn-primary|secondary|ghost .wb-btn-lg`.
