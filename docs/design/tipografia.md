# Tipografia

- **Baloo 2** (`--font-display`) — títulos, números e a marca. Arredondada e pesada como o logotipo.
- **Nunito** (`--font-body`) — texto corrido, botões, legendas.

Carregamento usado no site (Google Fonts, só os pesos necessários):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Nunito:wght@400;500;600;700&display=swap">
```

## Escala

| Estilo | Fonte | Tamanho / altura | Peso | Uso |
|---|---|---|---|---|
| `display-xl` | Baloo 2 | 56px / 60px | 800 | Título do hero do site. Uma vez por página. |
| `display-lg` | Baloo 2 | 40px / 44px | 800 | Títulos de seção do site. |
| `number-xl` | Baloo 2 | 48px / 52px | 800 | Saldo de pontos no PointsCard, em brand-text. |
| `heading` | Baloo 2 | 28px / 34px | 800 | Título de tela no app e de bloco no site. |
| `title` | Baloo 2 | 20px / 26px | 700 | Título de card e de grupo de lista. |
| `body-lg` | Nunito | 18px / 28px | 500 | Subtítulo do hero e textos de abertura de seção. |
| `body` | Nunito | 16px / 24px | 400 | Texto corrido padrão. |
| `label` | Nunito | 14px / 20px | 700 | Botões, abas, nomes no ranking. |
| `caption` | Nunito | 12px / 16px | 600 | Custo de recompensa, pontos no ranking, legendas. |

No celular (≤ 900px) os títulos reduzem: hero e páginas internas 38/42px, títulos de seção 32/36px.

## Regras

- Caixa de frase em títulos e botões. Nada de CAIXA ALTA, exceto os sobretítulos de seção (13px, espaçamento 1,5px).
- Números em destaque com separador brasileiro: `1.250`, `14.320 pontos`.
