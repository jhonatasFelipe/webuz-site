# Componentes

Cada componente existe em duas formas:

- **No site** — HTML + classes do `assets/css/site.css` (prefixo `wb-` para componentes, `s-` para o layout das seções).
- **No Design System** — componente React (`codigo/bundle.js`, global `window.WeBuz`), usado para montar as telas de referência.

| Componente | Resumo |
|---|---|
| [AlertCard](AlertCard.md) | Alerta da comunidade: o que aconteceu, em qual linha, quando e quantos passageiros confirmaram. |
| [Button](Button.md) | Botão de ação com verbo primeiro, em três variantes. |
| [FaqItem](FaqItem.md) | Pergunta frequente que abre e fecha (`<details>` nativo, acessível por teclado). |
| [FeatureCard](FeatureCard.md) | Card de funcionalidade: ícone em círculo, título e uma ou duas frases. |
| [FeatureStep](FeatureStep.md) | Um passo do "Como funciona": ícone em anel, número, título e frase. |
| [FinalCta](FinalCta.md) | Chamada final de toda página: mascote, título, frase e os botões de download, sobre `surface-300`. Sempre seguida de `WaveDivider` com `className="s-wave-band"` e do `SiteFooter`. |
| [Hero](Hero.md) | Abertura do site: título com destaque laranja, subtítulo, botão "Baixe grátis", selos de loja e a arte (telefone + mascote). |
| [Icon](Icon.md) | Ícone herdando a cor do texto (`currentColor`). No site: Font Awesome embutido; no Design System: traço provisório. |
| [IconBadge](IconBadge.md) | Ícone dentro de um círculo — o selo de categoria e de passo visto nas telas e no "Como funciona". |
| [LevelProgress](LevelProgress.md) | Nível atual com o mascote campeão e a barra de progresso em dois tons. |
| [LiveMap](LiveMap.md) | Mapa ilustrado com a linha, os ônibus compartilhados pelos passageiros e a previsão de chegada — a promessa central do produto em uma imagem. |
| [Mascot](Mascot.md) | O mascote do WeBuz em suas poses oficiais, carregado do acervo do sistema. |
| [MissionItem](MissionItem.md) | Linha de missão do dia com ícone, título, recompensa e estado. |
| [PhoneFrame](PhoneFrame.md) | Moldura de telefone para mostrar telas do app no site. |
| [PointsCard](PointsCard.md) | Card do saldo de pontos, com o número em `number-xl` e `brand-text`. |
| [ProblemItem](ProblemItem.md) | Item da lista de dores do passageiro, com ícone neutro. |
| [RankingRow](RankingRow.md) | Linha do ranking com selo de posição, apelido e pontos. |
| [RewardCard](RewardCard.md) | Card de recompensa trocável por pontos. |
| [SegmentedTabs](SegmentedTabs.md) | Abas segmentadas para alternar visões dentro de uma tela. |
| [SiteFooter](SiteFooter.md) | Rodapé do site em `night`, com marca, frase e colunas de links. |
| [SiteHeader](SiteHeader.md) | Cabeçalho do site: marca, navegação entre as páginas e o botão de download. |
| [StoreButton](StoreButton.md) | Botão de download nas lojas, em `night` com texto `cream`. |
| [WaveDivider](WaveDivider.md) | Onda em três camadas (`sun`, `brand` e, na base, `teal`) que separa o hero do resto da página — tirada do esboço do site. |
