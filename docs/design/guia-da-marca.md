# Guia da marca

WeBuz é um app de mobilidade urbana colaborativo para quem anda de ônibus: quem está dentro do ônibus compartilha a localização, e quem está no ponto vê o ônibus chegando no mapa, em tempo real. Alertas da comunidade, planejamento de rota e notícias completam o mapa; pontos, missões, ranking e prêmios recompensam quem ajuda. A marca é um ônibus laranja sorridente — simpático, com traço grosso marrom e janelas azuis. Tudo no sistema sai dele.

## Voz e conteúdo

- **Tom: próximo, otimista, comunitário e direto.** O passageiro deixa de ser refém da espera e passa a fazer parte da solução. Nada de linguagem técnica: "localização compartilhada por quem já está dentro", nunca "GPS crowdsourced".
- **Assinatura:** "WeBuz. Conectando cidades, aproximando pessoas." Ao falar da empresa, use o feminino: "a WeBuz".
- **Frases-âncora:** "Saiba onde seu ônibus está. De verdade.", "Um mapa vivo, feito pelos próprios passageiros", "Seu trajeto de hoje é a informação de alguém amanhã.", "Pare de adivinhar. Comece a saber."
- **Fale com "você"**, informal e animado, como um amigo que pega o mesmo ônibus. "Você precisa de 150 pontos para o Nível 6!", nunca "O usuário necessita…".
- **Verbo primeiro nos botões**, caixa de frase: "Baixe grátis", "Trocar agora", "Ver ranking". Nada de CAIXA ALTA.
- **Números são heróis.** Pontos, nível e posição aparecem grandes e com separador brasileiro: `1.250`, `14.320 pontos`, `Sua posição: #73`.
- **Exclamação com moderação**: uma por bloco, para comemorar ("Missão concluída!"), nunca em erro.
- **Sem emoji na interface.** A emoção vem do mascote e dos ícones em círculo — inclusive na lista de funcionalidades.
- **Só dados reais.** Números de usuários, viagens, depoimentos, cidades e parceiros entram apenas quando confirmados; sem eles, a seção fica de fora.
- Escreva a marca sempre **WeBuz**, como no logotipo.
- Vocabulário da marca: *linha*, *carro*, *embarcar*, *compartilhar*, *alerta*, *confirmar*, *comunidade*, *pontos*, *missões do dia*, *conquistas*, *nível*, *trocar*, *parcerias locais*, *viajantes*. Níveis têm nome: "Nível 5: Explorador da Cidade".
- Os mockups de referência foram gerados com erros de digitação ("pontes", "Aora", "Funcinça"). Use sempre a grafia correta.

## Cor

- **Quente, com um toque de azul.** O laranja do ônibus lidera; o azul-petróleo das janelas entra em dose pequena para dar frescor. Proporção: fundo creme, bastante `brand`, pouco `teal`.
- **Fundos de seção alternam branco e pastel:** `surface-100` (branco) e um pastel — `surface-band` (creme claro) ou `surface-band-alt` (azul-petróleo bem claro), variando entre eles — nunca duas seções brancas nem duas pastel seguidas. Como o cabeçalho é branco, o hero e as aberturas das páginas internas são pastel; a seção seguinte é branca, e assim por diante. Cards em `surface-200`; `surface-300` só em detalhes pequenos (trilhos, abas).
- Texto em `ink`; secundário em `ink-muted`. Laranja como texto só em `brand-text` — `brand` puro não passa contraste em texto.
- `brand` é a cor da ação e da marca: botão primário, ícones em círculo, sobretítulos, barra de nível. Texto sobre `brand`, `sun` e `teal` é sempre `on-brand` (marrom), nunca branco.
- **Onde entra o azul:** a camada de base da `WaveDivider`, o círculo atrás do celular no hero, o mapa, a parte concluída da barra, os checks, um bloco por página em `teal-deep` com texto `cream` (Comunidade) e ícones alternados nas grades. Não use `teal` em fundos de seção nem em títulos.
- Em texto, o azul é `teal-text`: status "concluído", confirmações de alerta, ícone das perguntas frequentes.
- `sun` é reservado para o 1º lugar, alertas e conquistas. `wheel` para posições 4+ e ícones inativos.
- `brand-deep` cria profundidade: sombra `shadow-press` do botão. `night` é o fundo escuro fixo: rodapé, moldura do telefone, botões de loja, fechamento do Sobre.
- `danger` só aparece com texto junto ("Saldo insuficiente").

## Tipografia

- Títulos, números e a marca em **Baloo 2** (`--font-display`), arredondada e pesada como o logotipo. Texto em **Nunito** (`--font-body`).
- Carregue as duas do Google Fonts: `https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@400;500;600;700;800&display=swap`.
- Use as classes: `display-xl` no hero, `display-lg` em títulos de seção, `number-xl` para saldo, `heading` em títulos de tela, `title` em cards, `body-lg`/`body` no texto, `label` em botões e abas, `caption` em custos e legendas.

## Forma, espaço e profundidade

- Tudo é arredondado como o ônibus: botões e linhas em `radius-md`, cards em `radius-lg`, painéis e moldura de telefone em `radius-xl`, barras e selos em `radius-pill`.
- Espaçamento em degraus de `space-1` a `space-9`. Cards com `space-4`; seções do site com `space-9` em cima e embaixo no desktop, `space-8` no mobile; gutter `space-5` no mobile e `space-7` no desktop.
- Cards sobem com `shadow-card`. O botão primário tem `shadow-press` — uma base laranja-escura que some ao apertar, como um botão de brinquedo.
- Foco: anel sólido de 3px em `focus` com 2px de afastamento, em todo controle.
- Movimento curto e elástico (150–250ms); o botão desce 3px ao pressionar. Respeite `prefers-reduced-motion`.

## Mascote e imagens

- O ônibus (`assets/Mascote/webuz-onibus.png`) é a assinatura: aparece no logo, no hero e em estados vazios. O campeão no pódio (`webuz-campeao.webp`) celebra nível e ranking. O avatar (`webuz-avatar.png`) representa o passageiro.
- Logo completo em `assets/Logos/webuz-logo.webp` (ônibus + "WeBuz"). Em cabeçalhos estreitos, use o ônibus pequeno + a palavra "WeBuz" em `display` 800, `ink`.
- Nunca redesenhe, recolora ou estique o mascote. Dê ar em volta dele, sobre `surface-100` ou `surface-200`.
- `assets/Referencias/` guarda as telas do app e o esboço do site que deram origem ao sistema — consulta, não para publicar.

## Iconografia

- Ícones de traço arredondado (2px, pontas redondas), 24px, desenhados em `ink`; dentro de um círculo `brand` (ícone em `on-brand`) quando representam categorias ou passos; alterne com `teal` em grades para um toque de azul. Use `WeBuz.Icon`.
- **Substituição:** as telas mostram ícones ilustrados que não foram fornecidos como arquivo. O conjunto em `WeBuz.Icon` é um substituto de traço simples — troque pelos originais quando existirem.

## Componentes

- App: `PointsCard` (saldo), `LevelProgress` (nível), `MissionItem`, `RewardCard`, `RankingRow`, `SegmentedTabs`.
- App: `AlertCard` (alerta da comunidade com confirmações).
- Site: `SiteHeader`, `Hero`, `PageIntro`, `FinalCta`, `LiveMap`, `ProblemItem`, `FeatureCard`, `FeatureStep`, `FaqItem`, `StoreButton`, `PhoneFrame`, `WaveDivider`, `SiteFooter`.
- O app é só Android por enquanto: `Hero` mostra o selo Google Play; acrescente `apple` quando houver iOS.
- Base: `Button`, `Icon`, `IconBadge`, `Mascot`.
- O site tem quatro páginas, no grupo **Páginas**: `PageInicio` (`index.html`), `PageFuncionalidades`, `PageSobre` e `PagePerguntas`. Toda página começa com `SiteHeader` (com `active`), abre com `Hero` (só no Início) ou `PageIntro`, e termina com `FinalCta`, `WaveDivider` e `SiteFooter`. As classes de layout `s-*` (seções, grades, sobretítulos) estão no `bundle.css`.
