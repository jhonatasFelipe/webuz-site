# Espaço, forma e profundidade

Tudo é arredondado como o ônibus.

## Espaçamento

| Token | Valor | Uso |
|---|---|---|
| `space-1` | 4px | Entre ícone e texto em badges. |
| `space-2` | 8px | Entre ícone e rótulo em botões; gap de abas. |
| `space-3` | 12px | Gap entre itens de lista e entre cards em grade. |
| `space-4` | 16px | Padding interno de cards e linhas de lista. |
| `space-5` | 24px | Padding de cards grandes; gutter lateral no mobile. |
| `space-6` | 32px | Entre blocos dentro de uma seção. |
| `space-7` | 48px | Gutter lateral do site no desktop. |
| `space-8` | 64px | Topo e base de seção no mobile. |
| `space-9` | 96px | Topo e base de seção no desktop. |

Seções do site: `space-9` em cima e embaixo no desktop, `space-8` no celular. Margem lateral: `space-7` no desktop, `space-5` no celular. Largura máxima do conteúdo: 1200px.

## Raios

| Token | Valor | Uso |
|---|---|---|
| `radius-sm` | 8px | Badges, chips de custo, campos pequenos. |
| `radius-md` | 12px | Botões, abas, linhas de lista. |
| `radius-lg` | 16px | Cards de recompensa, missão e saldo. |
| `radius-xl` | 24px | Painéis do site, moldura do telefone, blocos de seção. |
| `radius-pill` | 999px | Barra de progresso, selos de posição, ícones em círculo. |

## Sombras

| Token | Claro | Uso |
|---|---|---|
| `shadow-card` | `0 1px 0 rgba(47,30,17,0.06), 0 8px 24px rgba(47,30,17,0.07)` | Cards e linhas de lista elevadas sobre surface-100. |
| `shadow-press` | `0 3px 0 #d66709` | Base 'de brinquedo' do botão primário — some ao pressionar. |
| `shadow-phone` | `0 24px 48px rgba(47,30,17,0.18)` | Moldura de telefone no hero do site. |

## Estados e movimento

- Foco: anel sólido de 3px em `focus`, afastado 2px, em todo controle.
- Botão primário desce 3px ao pressionar e perde a `shadow-press`; no hover vira `sun`.
- Transições curtas (150–250ms). Respeitar `prefers-reduced-motion`.

## Responsivo

| Largura | O que muda |
|---|---|
| ≤ 1024px | Passos em 3 colunas, funcionalidades em 2, rodapé em 2 |
| ≤ 900px | Tudo em uma coluna; menu vira uma linha rolável abaixo da marca; títulos menores |
| ≤ 600px | Passos, funcionalidades e rodapé em 1 coluna; botões da chamada em largura total |
