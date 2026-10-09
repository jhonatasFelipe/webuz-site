# Cores

**Quente, com um toque de azul.** O laranja do ônibus lidera; o azul-petróleo das janelas entra em dose pequena para dar frescor. Proporção: fundo creme, bastante laranja (`brand`), pouco azul (`teal`).

<span title="brand" style="display:inline-block;width:56px;height:56px;border-radius:12px;background:#f1920e;margin:0 6px 6px 0;border:1px solid #0001"></span><span title="brand-deep" style="display:inline-block;width:56px;height:56px;border-radius:12px;background:#d66709;margin:0 6px 6px 0;border:1px solid #0001"></span><span title="sun" style="display:inline-block;width:56px;height:56px;border-radius:12px;background:#f9ad0d;margin:0 6px 6px 0;border:1px solid #0001"></span><span title="teal" style="display:inline-block;width:56px;height:56px;border-radius:12px;background:#4ba1b5;margin:0 6px 6px 0;border:1px solid #0001"></span><span title="teal-deep" style="display:inline-block;width:56px;height:56px;border-radius:12px;background:#1b6a7a;margin:0 6px 6px 0;border:1px solid #0001"></span><span title="night" style="display:inline-block;width:56px;height:56px;border-radius:12px;background:#2f1e11;margin:0 6px 6px 0;border:1px solid #0001"></span><span title="surface-100" style="display:inline-block;width:56px;height:56px;border-radius:12px;background:#fbf6ea;margin:0 6px 6px 0;border:1px solid #0001"></span><span title="surface-300" style="display:inline-block;width:56px;height:56px;border-radius:12px;background:#f1e7d3;margin:0 6px 6px 0;border:1px solid #0001"></span><span title="ink" style="display:inline-block;width:56px;height:56px;border-radius:12px;background:#2f1e11;margin:0 6px 6px 0;border:1px solid #0001"></span>

## Tokens

| Token | Claro | Escuro | Uso |
|---|---|---|---|
| `surface-100` | `#fbf6ea` | `#1c140d` | Fundo da página — o creme quente das telas do app. |
| `surface-200` | `#ffffff` | `#281d14` | Cards, listas, campos e o cabeçalho do site. |
| `surface-300` | `#f1e7d3` | `#140e09` | Faixas de seção alternadas e o trilho da barra de progresso. |
| `line` | `#e8dcc6` | `#3f3024` | Divisórias entre linhas de lista e bordas de cards. Decorativa: nunca a única pista de um controle. |
| `ink` | `#2f1e11` | `#f8efe1` | Texto principal e o traço do mascote, em surface-100, surface-200 e surface-300 (14:1+ nos dois temas). |
| `ink-muted` | `#6b5a4c` | `#c4b3a0` | Texto secundário: legendas, pontos ao lado do nome, metadados. Em surface-100 e surface-200 (6:1+). |
| `brand` | `#f1920e` | `#f39a1e` | O laranja do ônibus. Preenchimento de botões primários, barra de nível, ícones em círculo. Texto sobre ele usa on-brand. |
| `brand-deep` | `#d66709` | `#d66709` | Laranja queimado do teto e do para-choque. Sombras de pressão, onda do rodapé e blocos de destaque. Não usar como cor de texto pequeno. |
| `brand-text` | `#9e4b06` | `#f6a94a` | Laranja legível para texto: saldo de pontos, sobretítulos, links e avisos de nível em surface-100, surface-200 e surface-300 (4.5:1+). |
| `on-brand` | `#2f1e11` | `#2f1e11` | Texto e ícones sobre brand, sun e teal (6.7:1 em brand). Branco sobre laranja falha no contraste — não usar. |
| `sun` | `#f9ad0d` | `#f9ad0d` | Amarelo da faixa lateral do ônibus. Medalha do 1º lugar, destaques de conquista, segunda camada da onda. |
| `teal` | `#4ba1b5` | `#6cbdd0` | Azul das janelas — o toque de frescor da marca, em dose pequena: camada da onda, círculo atrás do celular no hero, mapa, barra concluída, checks e alguns ícones em círculo (alternando com brand). Ícones sobre ele em on-brand. |
| `teal-deep` | `#1b6a7a` | `#1b6a7a` | Petróleo profundo — o azul usado em blocos: o bloco Comunidade e a camada de base da onda. Texto sobre ele em cream (6:1). Um bloco azul por página, como contraponto ao laranja. |
| `teal-text` | `#256a7c` | `#8fd0df` | Azul legível para texto e status 'concluído', confirmações de alerta e ícone das perguntas frequentes, em surface-100 e surface-200 (5:1+). |
| `cream` | `#fdfcef` | `#fdfcef` | Branco dos olhos e faróis do mascote. Fundo de selos e badges sobre blocos escuros. |
| `night` | `#2f1e11` | `#120c07` | Fundo fixo escuro: rodapé do site, moldura do telefone e botões de loja. Texto sobre ele em cream (16:1+), destaque em sun. |
| `wheel` | `#5c4d43` | `#6e5f53` | Cinza-marrom das rodas. Medalhas de posição 4+ no ranking e ícones inativos. |
| `focus` | `#256a7c` | `#8fd0df` | Anel de foco de 3px em todo controle; 3:1+ sobre todas as superfícies. |
| `danger` | `#b4321f` | `#f08a74` | Erros e saldo insuficiente — sempre com texto junto, nunca só a cor. |

## Regras

- Texto sobre `brand`, `sun` e `teal` é sempre `on-brand` (marrom). **Branco sobre laranja não passa contraste** (2,3:1).
- Laranja como texto só em `brand-text`; `brand` puro é para preenchimentos.
- Onde entra o azul: camada de base da onda, círculo atrás do celular no hero, mapa, barra concluída, checks, ícones alternados nas grades e **um** bloco por página em `teal-deep` (Comunidade). Não usar `teal` em fundos de seção nem em títulos.
- `sun`: 1º lugar, alertas, frase em destaque sobre `night`.
- `night`: rodapé, moldura do telefone, botões de loja, fechamento do Sobre.
- `danger` sempre acompanhado de texto.

## Contraste (WCAG 2)

Mínimo 4,5:1 para texto comum, 3:1 para texto ≥ 24px ou negrito ≥ 19px, ícones e bordas.

| Texto | Fundo | Claro | Escuro |
|---|---|---|---|
| `ink` | `surface-100` | 14.8:1 | 15.9:1 |
| `ink` | `surface-300` | 13.0:1 | 16.8:1 |
| `ink-muted` | `surface-100` | 6.1:1 | 8.9:1 |
| `ink-muted` | `surface-200` | 6.6:1 | 8.1:1 |
| `ink-muted` | `surface-300` | 5.4:1 | 9.4:1 |
| `brand-text` | `surface-100` | 5.6:1 | 9.3:1 |
| `brand-text` | `surface-200` | 6.1:1 | 8.4:1 |
| `brand-text` | `surface-300` | 4.9:1 | 9.8:1 |
| `teal-text` | `surface-100` | 5.7:1 | 10.6:1 |
| `teal-text` | `surface-200` | 6.1:1 | 9.6:1 |
| `on-brand` | `brand` | 6.7:1 | 7.2:1 |
| `on-brand` | `sun` | 8.4:1 | 8.4:1 |
| `on-brand` | `teal` | 5.4:1 | 7.5:1 |
| `cream` | `night` | 15.5:1 | 18.8:1 |
| `sun` | `night` | 8.4:1 | 10.2:1 |
| `cream` | `teal-deep` | 6.0:1 | 6.0:1 |
| `cream` | `wheel` | 7.8:1 | 5.9:1 |
