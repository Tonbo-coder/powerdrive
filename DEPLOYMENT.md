# Powerdrive na Vercelu

Propojeno 3. 10. 2026.

- Vercel tým: `tonbo-coders-projects`
- Projekt: [powerdrive](https://vercel.com/tonbo-coders-projects/powerdrive)
- GitHub: [Tonbo-coder/powerdrive](https://github.com/Tonbo-coder/powerdrive)
- Adresa webu: [powerdrive-lemon.vercel.app](https://powerdrive-lemon.vercel.app)
- Produkční větev: `main`
- Framework: Next.js; Node.js: `24.x`; kořen projektu: kořen repozitáře
- Instalace: `npm ci`; sestavení: `npm run build`

Vercel používá Git integraci: push do `main` vytváří produkční nasazení, ostatní větve preview. Lokální adresář je propojený pomocí `.vercel/project.json`; tato složka a `.env.local` se necommitují. Po novém klonování lze propojení obnovit:

```powershell
vercel link --yes --project powerdrive --scope tonbo-coders-projects
```

CLI může při propojení přepsat `.env.local`; před propojením si uchovejte vlastní lokální nastavení. Aktuální lokální náhled stále používá `CONTACT_MODE=preview`.

## Formulář

V prostředí Production a Preview jsou nastavené `CONTACT_MODE=smtp`, `CONTACT_ALLOWED_ORIGINS` a samostatný náhodný `CONTACT_SECRET` uložený jako Secret. Hodnota klíče se do repozitáře neukládá. Backend povoluje pouze přesné adresy z konfigurace a systémových proměnných `VERCEL_URL`, `VERCEL_BRANCH_URL` a `VERCEL_PROJECT_PRODUCTION_URL`.

Pro skutečné doručení doplňte `SMTP_HOST`, `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_PORT`, `SMTP_SECURE` a případně `CONTACT_FROM`/`CONTACT_TO` v [nastavení proměnných](https://vercel.com/tonbo-coders-projects/powerdrive/settings/environment-variables). Po změně proměnných proveďte nové nasazení. Bez SMTP formulář vrací výslovnou chybu konfigurace.

## Vlastní doména

Doménu `powerdrive.cz` připojte přes Domains a nastavte DNS podle konkrétních pokynů Vercelu. Zachovejte poštovní záznamy MX/TXT. Před přepnutím ověřte doručení formuláře a obě varianty domény; metadata a sitemap již používají `https://powerdrive.cz`.

## Kontrola a ruční nasazení

```powershell
vercel project inspect powerdrive --scope tonbo-coders-projects
vercel list powerdrive --scope tonbo-coders-projects
vercel deploy --prod --scope tonbo-coders-projects
```

Běžné změny stačí commitnout a pushnout. Chráněná preview ověřujte přes `vercel curl`; ochranu kvůli testování nevypínejte.
