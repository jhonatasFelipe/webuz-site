# WeBuz — site institucional

Site estático da WeBuz: HTML e CSS puros, sem framework e sem JavaScript.

| Página | Arquivo |
|---|---|
| Início | `index.html` |
| Funcionalidades | `funcionalidades.html` |
| Sobre a WeBuz | `sobre.html` |
| Perguntas frequentes | `perguntas.html` |

## Estrutura

```
assets/css/site.css   tokens de cor, tipografia, componentes e layout responsivo (minificado)
assets/img/           mascote e logo em WebP, favicon e imagem de compartilhamento (og.png)
robots.txt, sitemap.xml
```

- **Fontes:** Baloo 2 (títulos) e Nunito (texto), via Google Fonts.
- **Ícones:** [Font Awesome Free 6.7.2](https://fontawesome.com), embutidos como SVG só os usados (licença CC BY 4.0). Nenhum arquivo extra é baixado.
- **Perguntas frequentes:** abrem com `<details>` nativo do navegador.

## Design

Toda a referência de design — guia da marca, cores, tipografia, espaçamentos, ícones, componentes, mascote e tokens (`tokens.json` / `tokens.css`) — está em [`docs/design/`](docs/design/README.md).

## Rodar localmente

Abra `index.html` no navegador, ou sirva a pasta:

```bash
python3 -m http.server 8000
```

## Publicação

Publicado pelo GitHub Pages a partir da branch `main` (pasta raiz): https://jhonatasfelipe.github.io/webuz-site/

## Antes de divulgar

- [ ] Link da Play Store nos botões "Baixe grátis" e "Google Play" (hoje apontam para `#`).
- [ ] Confirmar que o app é gratuito (Perguntas frequentes).
- [ ] Adicionar "Em quais cidades funciona?" com as cidades reais.
- [ ] Canal de contato do botão "Falar com a equipe".
- [ ] Links de Termos de uso e Privacidade.
- [ ] Ao usar domínio próprio, atualizar as URLs em `sitemap.xml`, `robots.txt` e nas tags `canonical`/`og:` das páginas.
