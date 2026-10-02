---
name: Powerdrive
description: "Věrné zachování původního webu Powerdrive při migraci z Joomla do Next.js."
colors:
  primary: "#6ea6e7"
  primary-hover: "#9fbee6"
  link-hover: "#aed3ff"
  link-strong: "#3071ff"
  heading: "#2b303c"
  body-muted: "#667489"
  white: "#FFFFFF"
  section: "#f9fafa"
  hero-panel: "rgba(255, 255, 255, 0.9)"
  icon-panel: "#d4e4f7"
  card-heading: "#333"
  card-copy: "#666"
  card-border: "#e1e1e1"
  pill-text: "#1F2937"
  pill-border: "#E2E8F0"
  field-text: "#303b46"
  field-border: "#cfd6dc"
  mobile-menu: "#1f2937"
  contact-hover: "#00a878"
typography:
  display:
    fontFamily: "Inter, sans-serif"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: "65px"
  display-mobile:
    fontFamily: "Inter, sans-serif"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: "38px"
  headline:
    fontFamily: "Inter, sans-serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: "44px"
  headline-mobile:
    fontFamily: "Inter, sans-serif"
    fontSize: "25px"
    fontWeight: 700
    lineHeight: "35px"
  hero-body:
    fontFamily: "Inter, sans-serif"
    fontSize: "20px"
    lineHeight: "30px"
    letterSpacing: "-0.7px"
  card-title:
    fontFamily: "Inter, sans-serif"
    fontSize: "16px"
    fontWeight: 600
  card-body:
    fontFamily: "Inter, sans-serif"
    fontSize: "14px"
    lineHeight: 1.5
  hero-action:
    fontFamily: "Inter, sans-serif"
    fontSize: "18px"
    fontWeight: 500
  field:
    fontFamily: "Inter, sans-serif"
    fontSize: "16px"
    lineHeight: "24px"
  navigation:
    fontFamily: "Inter, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: "100px"
  pill:
    fontFamily: "Inter, sans-serif"
    fontSize: "12px"
    lineHeight: 1
rounded:
  control: "4px"
  field: "15px"
  dropdown: "15px"
  icon: "16px"
  card: "20px"
  hero: "25px"
  pill: "9999px"
spacing:
  gutter: "15px"
  small: "12px"
  card: "25px"
  card-mobile: "20px"
  field-row: "25px"
components:
  button-contact:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    typography: "{typography.hero-action}"
    rounded: "{rounded.control}"
    padding: "15px 30px"
  button-contact-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.white}"
  button-action:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "8px 12px"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
  button-submit:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "8px 12px"
  input-contact:
    backgroundColor: "{colors.white}"
    textColor: "{colors.field-text}"
    typography: "{typography.field}"
    rounded: "{rounded.field}"
    padding: "10px 12px"
  consultation-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.card-copy}"
    rounded: "{rounded.card}"
    padding: "{spacing.card}"
  brand-pill:
    backgroundColor: "{colors.white}"
    textColor: "{colors.pill-text}"
    typography: "{typography.pill}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  hero-panel:
    backgroundColor: "{colors.hero-panel}"
    textColor: "{colors.heading}"
    rounded: "{rounded.hero}"
---

# Design System: Powerdrive

## Overview

**Creative North Star: "Původní Powerdrive"**

Vizuální autoritou je původní firemní web zachycený v `migration/source/` a `migration/reference/`. Název výše pouze označuje tuto autoritu. `PRODUCT.md` vyžaduje zachovat identitu, fotografie, typografii, rozvržení a animace; nevzniká nová kreativní koncepce.

Dokument popisuje implementaci k 27. 9. 2026. Podkladem jsou `public/styles/base.css`, `public/styles/refinements.css`, `public/styles/pages/home.css`, další stránkové CSS a komponenty v `content/pages/` a `components/`. Původní snímky jsou `migration/reference/desktop.png` a `mobile.png`, lokální kontrolní snímky leží v `.impeccable/review/`. Frontmatter obsahuje opakovaně použité hodnoty; konkrétní stránkové odchylky zůstávají ve svém zdroji. Tento zápis sám nepotvrzuje pixelovou shodu.

**Key Characteristics:**

- Světlá modrá pro akce, bílá a velmi světlé neutrální sekce.
- Inter v nadpisech, navigaci a obsahových blocích.
- Původní fotografie nabíjení přes celou šířku a světlý průsvitný úvodní panel.
- Zaoblené karty, fotografie produktů, reference a pohyblivá řada log partnerů.

## Colors

### Primary

`primary` patří CTA, odkazům a ikonám, `primary-hover` hoveru plných CTA a `link-hover` běžným odkazům. Textová CTA mají zvláštní `link-strong` při hoveru. U některých odkazů existuje zelená spodní linka; její stránkový styl nepřepisovat jen kvůli sjednocení.

### Secondary

`contact-hover` je původní lokální hover telefonních a e-mailových odkazů na úvodní stránce. Nejde o druhou plošnou barvu značky.

### Neutral

`heading` nese tmavé titulky, `body-muted` se opakuje v obsahových kartách. Bílé karty střídají `section`; `hero-panel` propouští původní fotografii pod textem. `icon-panel` je jemné modré podložení ikon pracovních kroků. Zvláštní barvy polí a pilulek odpovídají jejich skutečným komponentům.

**The Original Palette Rule.** Používat převzaté modré a neutrální role v původních souvislostech; nesjednocovat je s šedomodrou Power Pro.

## Typography

Inter je hlavní rodina webu, lokálně připojená přes základní stylesheet. Převzaté bloky mají vlastní konkrétní velikosti. Uvedený `display` je úvodní titulek, nikoli univerzální hodnota každého H1: pod 768px přechází na 35px/42px a pod 576px na `display-mobile`. Sekční `headline` přechází pod 768px na 30px/35px a pod 576px na `headline-mobile`.

Původní hero používá velká písmena. Text hero má vlastní `hero-body`; drobné popisy karet používají `card-body`, výrobní štítky `pill`. Navigace je výraznější než u Power Pro; aktivní odkaz má v aktuální implementaci váhu 500. Výchozí stránková deklarace 36px není předpis pro běžné odstavce: přednost mají skutečné lokální styly.

**The Local Typography Rule.** Zachovat konkrétní sazbu nadpisů, karet a produktových detailů; nenahrazovat ji jedním globálním H1/H2 systémem.

## Layout

Hlavička a obsah používají vycentrované kontejnery s bočním odsazením `gutter`. Maximální šířky: 540px od 576px, 720px od 768px, 960px od 992px, 1140px od 1200px a 1320px od 1400px. Stránkové breakpointy používají i odpovídající horní meze s .98px.

Desktopová hlavička je průhledná a vysoká 100px; původní hero začíná pod ní pomocí posunu −100px. Fotografie má cover ořez. Světlý panel leží vpravo v polovině šířky na velkém desktopu a pod 1200px používá celý sloupec. Hero má na desktopu odsazení 200px nahoře a 160px dole, pod 768px 150px a 50px. Přesné proporce média a panelu zachovat.

Pod 992px nastupuje mobilní menu a 50px hlavička. Logo má 105px na desktopu, 60px pod 992px a 50px pod 576px. Katalog, realizace, proces a reference mají vlastní převzaté mřížky; nesjednocovat jejich počty sloupců. Kontaktní pole tvoří dvojice, zpráva a souhlas jsou přes celou šířku; pod 576px jsou všechna pole v jednom sloupci.

## Elevation & Depth

Hlavička nemá stín. Úvodní panel stojí nad fotografií díky průsvitné bílé ploše. Karty pracovních kroků používají klidový stín `0 2px 10px rgba(0,0,0,0.05)`; hover mění stín na `0 8px 24px rgba(0,0,0,0.1)` a posouvá kartu o −4px. Tyto stíny nepřenášet automaticky na všechny obsahové karty.

Galerie má tmavé překrytí a fotografii s contain zobrazením. Některé sekce kombinují původní fotografii a gradient; nejde o zákaz gradientů ani o pokyn přidávat nové dekorace.

## Shapes

Větší zaoblení `hero` patří světlému úvodnímu panelu, `card` kartám kroků a `icon` jejich ikonovým plochám. Tlačítka mají menší `control`, kontaktní pole `field` a desktopové rozbalovací menu `dropdown`. Štítky značek jsou skutečné pilulky podle `pill`. Produktové fotografie zachovávají původní poměr stran a vlastní vnitřní prostor.

## Components

### Buttons

Hero CTA „Chcete se zeptat?“ používá `button-contact`, přechod pozadí 300ms a bílý text. Menší akce mají `button-action`; jejich hover je světlejší. Textové odkazy mají původní spodní linku tam, kde ji stanovuje stránkový styl. Odesílací tlačítko má minimální výšku 44px; hover ztmavuje přes brightness(.92). Fokus používá 3px linku v primární modré a odsazení 4px.

### Chips

Štítky značek v části Produkty mají bílý podklad, tenký `pill-border` a drobný text. Představují označení značek, nikoli nový interaktivní filtr.

### Cards / Containers

Karty pracovních kroků mají světlou ikonovou plochu a popis odhalený při hoveru nebo fokusu. Na zařízeních bez hoveru je popis trvale viditelný. Odsazení se mění podle původních breakpointů; mobilní hodnota odpovídá `card-mobile`. Produktové a realizační karty tvoří samostatné původní varianty s konkrétními obrázky.

Původní obrazové materiály zůstávají autoritou: hero `/files/banner/mybox_vila_home_cam_6_3k_final.jpg`, produktové fotografie v `/files/produkty/`, realizace v `/files/2025/09/10/` a loga partnerů. Barevné a geometrické úpravy fotografií nevymýšlet.

### Inputs / Fields

Kontaktní formulář používá bílé orámované zaoblené pole podle `input-contact`, 20px mezeru mezi sloupci a `field-row` mezi řádky. Původní stránkový selektor přepisuje obecné zaoblení a řádkování na hodnoty `field`; zachovat skutečnou kaskádu. Textarea má výšku 150px. Pořadí: jméno, e-mail, telefon, služba, zpráva, souhlas a odeslání. Není to podtržená formulářová varianta Power Pro. Pole mají výslovný viditelný klávesnicový fokus (3px modrá linka s odsazením 4px). Stavové zprávy a dostupnost tlačítka řídí React komponenta.

### Navigation

Bílé desktopové odkazy leží nad fotografií; aktivní položka má světlejší modrou. Hlavní nabídka produktů je široká 230px, vnořená 160px, se světlým pozadím a zaoblením `dropdown`. Mobilní dialog se vysouvá zprava, má nejvýše 360px nebo 90vw, tmavé pozadí a odsazení 32px 24px. Ovládání klávesnicí a návrat fokusu jsou součástí komponenty.

### Motion and gallery

Nástupy sekcí používají původní fade/zoom třídy a hodnoty `data-motion-duration` / `data-motion-delay`; výchozí délka je 700ms. Obsah zůstává bez JavaScriptu viditelný a při omezeném pohybu se animace potlačí.

Řada partnerů posouvá loga každých 3500ms s přechodem transform 2000ms ease, zastaví se při hoveru a má SVG ovladač pauzy. Zobrazuje 5/4/3/2 log podle šířky (hranice 1200/992/576px). Galerie používá skutečné obrázky, SVG ovladače a Escape/šipky; do návrhu nepřidávat nové stylové animace.

## Do's and Don'ts

### Do:

- **Do** porovnávat změny s původními snímky na desktopu i telefonu.
- **Do** zachovat fotografie nabíječek, produktů, realizací a loga partnerů v jejich původní roli.
- **Do** respektovat stránkové rozměry, barevné výjimky a rozdílné varianty karet.
- **Do** zachovat přístupný fokus, klávesnici, čitelný obsah bez hoveru a omezený pohyb.

### Don't:

- **Don't** zavádět nový vizuální směr ani sloučit Powerdrive s identitou Power Pro.
- **Don't** měnit statické štítky značek na funkce, které původní komponenta nemá.
- **Don't** přebírat chybějící obrázky nebo historické přetečení jako závazný designový vzor.
- **Don't** vytvářet nová marketingová tvrzení, syntetické barevné řady nebo nové ilustrační materiály.

