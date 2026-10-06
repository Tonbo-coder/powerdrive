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

Od 6. 10. 2026 je Production nakonfigurováno pro Resend SMTP s vlastním klíčem omezeným na `forms.powerdrive.cz`, uloženým jako Sensitive `SMTP_PASSWORD`. Odesílatel je `Powerdrive <web@forms.powerdrive.cz>` a příjemce `CONTACT_TO=info@powerdrive.cz`. Resend potvrdil doručení produkčního testu. Preview SMTP údaje nemá. Příjemce nebo SMTP nastavení lze upravit v [serverových proměnných](https://vercel.com/tonbo-coders-projects/powerdrive/settings/environment-variables); po změně proveďte nové nasazení a test doručení. Přístupové údaje nepatří do repozitáře.

## Vlastní doména

Domény `powerdrive.cz` a `www.powerdrive.cz` jsou od 3. 10. 2026 přidané k produkčnímu prostředí. Varianta `www` má trvalé přesměrování 308 na `powerdrive.cz`. DNS zůstává u WEDOSu a webové záznamy již směřují na Vercel; obě adresy mají funkční HTTPS. Metadata a sitemap používají `https://powerdrive.cz`.

Přesné webové a odesílací DNS, zachování Microsoft 365 pošty, SMTP konfigurace a výsledky produkčních testů obou webů jsou v [GO-LIVE.md](GO-LIVE.md). Kořenové poštovní MX/SPF a nastavení Microsoft 365 se při zapojení formulářů neměnily.

## Kontrola a ruční nasazení

```powershell
vercel project inspect powerdrive --scope tonbo-coders-projects
vercel list powerdrive --scope tonbo-coders-projects
vercel deploy --prod --scope tonbo-coders-projects
```

Běžné změny stačí commitnout a pushnout. Chráněná preview ověřujte přes `vercel curl`; ochranu kvůli testování nevypínejte.
