/* @ds-bundle: {"format":4,"namespace":"WeBuz","components":[{"name":"Button"},{"name":"Icon"},{"name":"IconBadge"},{"name":"Mascot"},{"name":"PointsCard"},{"name":"LevelProgress"},{"name":"MissionItem"},{"name":"RewardCard"},{"name":"RankingRow"},{"name":"SegmentedTabs"},{"name":"StoreButton"},{"name":"FeatureStep"},{"name":"PhoneFrame"},{"name":"SiteHeader"},{"name":"Hero"},{"name":"WaveDivider"},{"name":"SiteFooter"},{"name":"LiveMap"},{"name":"AlertCard"},{"name":"FeatureCard"},{"name":"ProblemItem"},{"name":"FaqItem"},{"name":"PageIntro"},{"name":"FinalCta"}]} */
(function () {
  var R = window.React, h = R.createElement;
  var cx = function () { return Array.prototype.filter.call(arguments, Boolean).join(" "); };
  var fmt = function (n) { return typeof n === "number" ? n.toLocaleString("pt-BR") : n; };

  var MASCOTS = {
    onibus: { src: "/_blob/90275dd36aba14c2501c9eb295a5c0d4", alt: "Mascote WeBuz, um ônibus laranja sorridente" },
    campeao: { src: "/_blob/ebde48691ef2269b849788e422a88a90", alt: "Mascote WeBuz de capa no topo do pódio" },
    avatar: { src: "/_blob/c6f81a16cb4008ab17d1cf79153f3a06", alt: "Avatar do passageiro acenando" },
    logo: { src: "/_blob/ccc538c8f5bdf83c3d9cca3b9288a91c", alt: "WeBuz" }
  };

  /* Stroke icons, 24px grid, round caps — stand-ins for the illustrated set. */
  var PATHS = {
    bus: "M6 17V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v11M6 17h12M6 11h12M8 20v-3M16 20v-3M9 14h.01M15 14h.01",
    star: "M12 3.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z",
    gift: "M4 10h16v10H4zM3 7h18v3H3zM12 7v13M12 7c-1.5-3-5-3-5-1s3 1 5 1zm0 0c1.5-3 5-3 5-1s-3 1-5 1z",
    trophy: "M8 4h8v5a4 4 0 0 1-8 0zM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 20h8M10 17h4v3h-4z",
    check: "M5 12.5l4.5 4.5L19 7.5",
    chat: "M4 5h16v11H9l-5 4zM8 9h8M8 12h5",
    map: "M9 4L3 6v14l6-2 6 2 6-2V4l-6 2zM9 4v14M15 6v14",
    phone: "M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM11 18h2",
    crown: "M4 18h16M5 15l-1-9 5 4 3-6 3 6 5-4-1 9z",
    coupon: "M4 7h16v3a2 2 0 0 0 0 4v3H4v-3a2 2 0 0 0 0-4zM10 7v10",
    share: "M18 8a3 3 0 1 0 0-.01M6 15a3 3 0 1 0 0-.01M18 22a3 3 0 1 0 0-.01M8.6 13.5l6.8-4M8.6 16.5l6.8 4",
    pin: "M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12zM12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
    bell: "M6 16V11a6 6 0 0 1 12 0v5l2 2H4zM10 20a2 2 0 0 0 4 0",
    user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0",
    arrowLeft: "M19 12H5M11 6l-6 6 6 6",
    arrowRight: "M5 12h14M13 6l6 6-6 6",
    apple: "M16 3c-1.2.1-2.6.9-3.3 2-.7 1-.9 2.2-.8 3 1.3.1 2.6-.7 3.3-1.8.7-1 1-2.2.8-3.2zM19.5 16.6c-.5 1.2-.8 1.7-1.5 2.8-1 1.4-2.3 3.2-4 3.2-1.5 0-1.9-1-3.9-1s-2.5 1-3.9 1c-1.7 0-3-1.6-3.9-3-2.7-4-3-8.8-1.3-11.4 1.2-1.8 3-2.8 4.7-2.8 1.8 0 2.9 1 4.3 1 1.4 0 2.3-1 4.3-1 1.5 0 3.1.8 4.3 2.3-3.8 2.1-3.2 7.5.9 8.9z",
    play: "M5 3.5v17l15-8.5z",
    search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 20l-4-4",
    alert: "M12 4L2.5 20h19zM12 10v4.5M12 17.5h.01",
    news: "M5 5h12v14H6a1 1 0 0 1-1-1zM17 9h2v9a1 1 0 0 1-2 0M8 9h6M8 12h6M8 15h4",
    battery: "M4 8h14v8H4zM20 11v2M7 11v2M10 11v2",
    route: "M6 19a2 2 0 1 0 0-.01M18 7a2 2 0 1 0 0-.01M6 17V12a3 3 0 0 1 3-3h6M18 9v3a3 3 0 0 1-3 3H9",
    clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2",
    users: "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 6.5M18 14a6 6 0 0 1 3.5 6",
    calendar: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4",
    question: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.5v.7M12 17h.01",
    plus: "M12 5v14M5 12h14",
    navigation: "M3 11l18-8-8 18-2-8z"
  };

  function Icon(p) {
    var size = p.size || 24, filled = p.name === "apple" || p.name === "play";
    return h("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: filled ? "currentColor" : "none", stroke: filled ? "none" : "currentColor", strokeWidth: p.strokeWidth || 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": p.label ? undefined : true, role: p.label ? "img" : undefined, "aria-label": p.label, className: p.className },
      h("path", { d: PATHS[p.name] || PATHS.star }));
  }

  function Button(p) {
    var variant = p.variant || "primary", size = p.size || "md";
    var rest = Object.assign({}, p); ["variant", "size", "icon", "block", "className", "children", "href"].forEach(function (k) { delete rest[k]; });
    var kids = [p.icon ? h(Icon, { key: "i", name: p.icon, size: size === "lg" ? 22 : 18 }) : null, p.children];
    var cls = cx("wb-btn", "wb-btn-" + variant, size === "lg" && "wb-btn-lg", p.block && "wb-btn-block", p.className);
    return p.href ? h("a", Object.assign({ href: p.href, className: cls }, rest), kids) : h("button", Object.assign({ type: "button", className: cls }, rest), kids);
  }

  function IconBadge(p) {
    var size = p.size || 48;
    return h("span", { className: cx("wb-ib", "wb-ib-" + (p.tone || "brand"), p.ring && "wb-ib-ring", p.className), style: { width: size, height: size } },
      h(Icon, { name: p.icon, size: Math.round(size * 0.5), label: p.label }));
  }

  function Mascot(p) {
    var m = MASCOTS[p.pose || "onibus"];
    return h("img", { src: m.src, alt: p.alt != null ? p.alt : m.alt, width: p.size || 160, className: p.className, style: Object.assign({ height: "auto", display: "block" }, p.style) });
  }

  function PointsCard(p) {
    return h("section", { className: cx("wb-card wb-points", p.className) },
      h("p", { className: "wb-points-label" }, p.label || "Seus pontos atuais"),
      h("p", { className: "wb-points-value" }, fmt(p.value)),
      p.hint ? h("p", { className: "wb-points-hint" }, p.hint) : null);
  }

  function LevelProgress(p) {
    var goal = p.goal || 1, cur = Math.max(0, Math.min(p.current || 0, goal));
    var done = (p.previous || 0) / goal * 100, now = (cur - (p.previous || 0)) / goal * 100;
    return h("div", { className: cx("wb-level", p.className) },
      p.showMascot === false ? null : h(Mascot, { pose: "campeao", size: 110, style: { margin: "0 auto 8px" }, alt: "" }),
      h("p", { className: "wb-level-title" }, "Nível " + p.level + (p.title ? ": " + p.title : "")),
      h("div", { className: "wb-bar", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": goal, "aria-valuenow": cur, "aria-label": "Progresso para o nível " + (p.level + 1) },
        h("span", { className: "wb-bar-done", style: { width: done + "%" } }),
        h("span", { className: "wb-bar-now", style: { width: now + "%" } })),
      h("p", { className: "wb-level-hint" }, "Você precisa de " + fmt(goal - cur) + " pontos para o Nível " + (p.level + 1) + "!"));
  }

  function MissionItem(p) {
    return h("div", { className: cx("wb-mission", p.className) },
      h(IconBadge, { icon: p.icon || "bus", size: 40, tone: "soft" }),
      h("div", { style: { flex: 1 } },
        h("p", { className: "wb-mission-title" }, p.title),
        p.points ? h("span", { className: "wb-mission-pts" }, "+" + fmt(p.points) + " pontos") : null),
      h("span", { className: cx("wb-check", p.done ? "wb-check-done" : "wb-check-open"), role: "img", "aria-label": p.done ? "Concluída" : "Pendente" },
        p.done ? h(Icon, { name: "check", size: 16, strokeWidth: 3 }) : null));
  }

  function RewardCard(p) {
    return h("article", { className: cx("wb-card wb-reward", p.featured && "wb-reward-featured", p.className) },
      h(IconBadge, { icon: p.icon || "gift", size: 56, tone: p.featured ? "soft" : "brand" }),
      h("h3", { className: "wb-reward-title" }, p.title),
      h("p", { className: "wb-reward-cost" }, fmt(p.cost) + " pontos"),
      h(Button, { block: true, onClick: p.onRedeem, disabled: p.disabled }, p.cta || "Trocar agora"));
  }

  function RankingRow(p) {
    var pos = p.position;
    return h("div", { className: cx("wb-rank", p.me && "wb-rank-me", p.className) },
      h("span", { className: cx("wb-rank-pos", pos <= 3 && "wb-rank-pos-" + pos), "aria-label": pos + "º lugar" }, pos),
      h("span", { className: "wb-rank-name" }, p.name),
      h("span", { className: "wb-rank-pts" }, fmt(p.points) + " pontos"));
  }

  function SegmentedTabs(p) {
    var st = R.useState(p.value != null ? p.value : 0), sel = p.value != null ? p.value : st[0];
    return h("div", { className: cx("wb-tabs", p.className), role: "tablist", "aria-label": p.label },
      (p.items || []).map(function (it, i) {
        return h("button", { key: i, role: "tab", className: "wb-tab", "aria-selected": i === sel ? "true" : "false", onClick: function () { st[1](i); p.onChange && p.onChange(i); } }, it);
      }));
  }

  function StoreButton(p) {
    var apple = p.store !== "google";
    return h("a", { className: cx("wb-store", p.className), href: p.href || "#" },
      h(Icon, { name: apple ? "apple" : "play", size: 24 }),
      h("span", null, h("small", null, apple ? "Baixe na" : "Disponível no"), h("strong", null, apple ? "App Store" : "Google Play")));
  }

  function FeatureStep(p) {
    return h("div", { className: cx("wb-step", p.className) },
      h(IconBadge, { icon: p.icon, size: 88, ring: true }),
      p.step ? h("span", { className: "wb-step-n" }, "PASSO " + p.step) : null,
      h("h3", { className: "wb-step-title" }, p.title),
      h("p", { className: "wb-step-text" }, p.text));
  }

  function PhoneFrame(p) {
    return h("div", { className: cx("wb-phone", p.className), style: p.style },
      h("div", { className: "wb-phone-screen" }, h("span", { className: "wb-phone-notch", "aria-hidden": true }), p.children));
  }

  function LiveMap(p) {
    var line = p.line || "312", eta = p.eta || "4 min";
    var bus = function (x, y, k) {
      return h("g", { key: k, transform: "translate(" + x + " " + y + ")" },
        h("circle", { className: "wb-map-bus", r: 15 }),
        h("rect", { className: "wb-map-glyph", x: -6, y: -7, width: 12, height: 12, rx: 3 }),
        h("rect", { className: "wb-map-win", x: -4, y: -5, width: 8, height: 4, rx: 1 }));
    };
    return h("div", { className: cx("wb-map", p.className) },
      p.search === false ? null : h("div", { className: "wb-map-search" }, h(Icon, { name: "search", size: 16 }), "Linha " + line + " · Centro"),
      h("svg", { viewBox: "0 0 260 240", role: "img", "aria-label": "Mapa com os ônibus da linha " + line + " em tempo real" },
        h("rect", { className: "wb-map-land", width: 260, height: 240 }),
        h("rect", { className: "wb-map-park", x: 150, y: 16, width: 90, height: 64, rx: 12 }),
        ["M0 60H260", "M0 150H260", "M0 210H260", "M60 0V240", "M130 0V240", "M200 0V240"].map(function (d, i) { return h("path", { key: i, className: "wb-map-street", d: d }); }),
        h("path", { className: "wb-map-route", d: "M-10 210H60V150H130V60H200V-10" }),
        bus(60, 182, "b1"), bus(130, 104, "b2"),
        h("g", { transform: "translate(130 150)" }, h("circle", { className: "wb-map-me-halo", r: 16 }), h("circle", { className: "wb-map-me", r: 7 }))),
      p.eta === false ? null : h("div", { className: "wb-map-eta" },
        h(IconBadge, { icon: "bus", size: 36 }),
        h("div", null, h("strong", null, "Linha " + line + " chega em " + eta), h("span", null, "Localização compartilhada por passageiros"))));
  }

  function AlertCard(p) {
    return h("div", { className: cx("wb-card wb-alert", p.className) },
      h(IconBadge, { icon: p.icon || "alert", size: 40, tone: "sun" }),
      h("div", { style: { flex: 1, minWidth: 0 } },
        h("p", { className: "wb-alert-title" }, p.title),
        h("p", { className: "wb-alert-meta" }, [p.line, p.time].filter(Boolean).join(" · ")),
        p.confirmations != null ? h("span", { className: "wb-alert-ok" }, h(Icon, { name: "check", size: 14, strokeWidth: 3 }), fmt(p.confirmations) + " confirmaram") : null));
  }

  function FeatureCard(p) {
    return h("article", { className: cx("wb-card wb-feature", p.className) },
      h(IconBadge, { icon: p.icon, size: 52, tone: p.tone || "brand" }),
      h("h3", { className: "wb-feature-title" }, p.title),
      h("p", { className: "wb-feature-text" }, p.text));
  }

  function ProblemItem(p) {
    return h("li", { className: cx("wb-problem", p.className) },
      h(IconBadge, { icon: p.icon || "clock", size: 40, tone: "soft" }),
      h("span", null, p.children));
  }

  function FaqItem(p) {
    return h("details", { className: cx("wb-faq", p.className), open: p.open },
      h("summary", null, h("span", null, p.question), h(Icon, { name: "plus", size: 20, className: "wb-faq-icon" })),
      h("div", { className: "wb-faq-body" }, p.children));
  }

  var PAGES = [["Início", "index.html"], ["Funcionalidades", "funcionalidades.html"], ["Sobre a WeBuz", "sobre.html"], ["Perguntas", "perguntas.html"]];
  var hrefOf = function (label) { for (var i = 0; i < PAGES.length; i++) if (PAGES[i][0] === label) return PAGES[i][1]; return "#"; };

  function SiteHeader(p) {
    var links = p.links || PAGES;
    return h("header", { className: cx("wb-header", p.className) },
      h("a", { className: "wb-brand", href: hrefOf("Início") }, h("img", { src: MASCOTS.onibus.src, alt: "" }), "WeBuz"),
      h("nav", { className: "wb-nav", "aria-label": "Principal" }, links.map(function (l) {
        var label = typeof l === "string" ? l : l[0], href = typeof l === "string" ? hrefOf(l) : l[1];
        return h("a", { key: label, href: href, "aria-current": p.active === label ? "page" : undefined }, label);
      })),
      h(Button, { icon: "phone", href: p.href }, p.cta || "Baixe grátis"));
  }

  function PageIntro(p) {
    return h("section", { className: cx("s-intro", p.className) },
      h("div", { className: "s-in s-intro-grid" },
        h("div", null,
          h("p", { className: "s-crumb" }, h("a", { href: hrefOf("Início") }, "Início"), " / " + (p.crumb || p.eyebrow)),
          p.eyebrow ? h("p", { className: "s-eyebrow" }, p.eyebrow) : null,
          h("h1", null, p.title, p.highlight ? h("em", null, p.highlight) : null),
          p.text ? h("p", { className: "s-lead" }, p.text) : null),
        p.art ? h("div", { className: "s-intro-art" }, p.art) : null));
  }

  function FinalCta(p) {
    return h("section", { className: cx("s-sec s-band", p.className) },
      h("div", { className: "s-in s-final" },
        h(Mascot, { pose: p.pose || "onibus", size: 180, alt: "" }),
        h("h2", { className: "s-h2" }, p.title || "Pare de adivinhar. Comece a saber."),
        h("p", { className: "s-lead" }, p.text || "Baixe o WeBuz, encontre sua linha e faça parte da comunidade que está mudando a forma de andar de ônibus."),
        h("div", { className: "wb-hero-cta" },
          h(Button, { size: "lg", icon: "phone", href: p.href }, p.cta || "Baixar o WeBuz grátis"),
          h(StoreButton, { store: "google", href: p.href }))));
  }

  function Hero(p) {
    var stores = p.stores || ["google"];
    return h("section", { className: cx("wb-hero", p.className) },
      h("div", { className: "wb-hero-copy" },
        h("h1", null, p.title || "Saiba onde seu ônibus está. ", h("em", null, p.highlight || "De verdade.")),
        h("p", null, p.text || "O WeBuz mostra no mapa, em tempo real, os ônibus da sua linha, com a localização compartilhada por quem já está dentro deles. Menos tempo parado no ponto e mais controle sobre o seu dia."),
        h("div", { className: "wb-hero-cta" },
          h(Button, { size: "lg", icon: "phone", href: p.href }, p.cta || "Baixe grátis"),
          stores.map(function (s) { return h(StoreButton, { key: s, store: s, href: p.href }); }))),
      h("div", { className: "wb-hero-art" },
        h("span", { className: "wb-hero-disc", "aria-hidden": true }),
        p.art || null,
        h(Mascot, { pose: "onibus", className: "wb-hero-bus", alt: "" })));
  }

  function WaveDivider(p) {
    return h("svg", { className: cx("wb-wave", p.className), viewBox: "0 0 1440 72", preserveAspectRatio: "none", "aria-hidden": true, style: p.flip ? { transform: "scaleY(-1)" } : null },
      h("path", { className: "wb-wave-1", d: "M0 30 C180 0 360 60 540 30 S900 0 1080 30 S1320 60 1440 26 V72 H0Z" }),
      h("path", { className: "wb-wave-2", d: "M0 44 C200 18 380 70 600 44 S960 18 1160 44 S1360 62 1440 40 V72 H0Z" }),
      h("path", { className: "wb-wave-3", d: "M0 58 C240 40 420 76 660 58 S1020 42 1240 58 S1400 66 1440 56 V72 H0Z" }));
  }

  function SiteFooter(p) {
    var cols = p.columns || [
      ["Produto", [["Funcionalidades", "funcionalidades.html"], ["Pontos e prêmios", "funcionalidades.html#pontos-e-premios"], ["Baixar o app", "#"]]],
      ["WeBuz", [["Sobre a WeBuz", "sobre.html"], ["Comunidade", "sobre.html#comunidade"], ["Contato", "perguntas.html#contato"]]],
      ["Ajuda", [["Perguntas frequentes", "perguntas.html"], ["Termos de uso", "#"], ["Privacidade", "#"]]]
    ];
    return h("footer", { className: cx("wb-footer", p.className) },
      h("div", { className: "wb-footer-in" },
        h("div", null, h("a", { className: "wb-brand", href: hrefOf("Início") }, h("img", { src: MASCOTS.onibus.src, alt: "" }), "WeBuz"),
          h("p", null, p.tagline || "O mapa vivo do ônibus, feito pelos próprios passageiros. Seu trajeto de hoje é a informação de alguém amanhã.")),
        cols.map(function (c) { return h("div", { key: c[0] }, h("h4", null, c[0]), c[1].map(function (l) { var lb = typeof l === "string" ? l : l[0]; return h("a", { key: lb, href: typeof l === "string" ? "#" : l[1] }, lb); })); })),
      h("div", { className: "wb-footer-base" }, p.legal || "© 2026 WeBuz. Conectando cidades, aproximando pessoas."));
  }

  window.WeBuz = Object.assign(window.WeBuz || {}, {
    Button: Button, Icon: Icon, IconBadge: IconBadge, Mascot: Mascot, PointsCard: PointsCard, LevelProgress: LevelProgress,
    MissionItem: MissionItem, RewardCard: RewardCard, RankingRow: RankingRow, SegmentedTabs: SegmentedTabs,
    StoreButton: StoreButton, FeatureStep: FeatureStep, PhoneFrame: PhoneFrame, SiteHeader: SiteHeader, Hero: Hero,
    WaveDivider: WaveDivider, SiteFooter: SiteFooter, LiveMap: LiveMap, AlertCard: AlertCard, FeatureCard: FeatureCard,
    ProblemItem: ProblemItem, FaqItem: FaqItem, PageIntro: PageIntro, FinalCta: FinalCta, pages: PAGES, mascots: MASCOTS
  });
})();
