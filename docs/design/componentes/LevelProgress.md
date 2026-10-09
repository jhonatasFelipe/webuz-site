# LevelProgress

Nível atual com o mascote campeão e a barra de progresso em dois tons.

Props: `level`, `title` (nome do nível), `previous` (pontos já consolidados — parte `teal`), `current` (pontos atuais — o trecho até aqui fica `brand`), `goal` (pontos para o próximo nível), `showMascot` (padrão `true`).

A frase "Você precisa de N pontos para o Nível X!" é gerada a partir de `goal − current`.

No site (HTML/CSS): `.wb-level .wb-bar`.
