# MASTER INDEX

## Status repozytorium

ACTIVE: sales MVP dla produktu `Firmowy Asystent AI dla małych firm technicznych`.

CANDIDATE: przyszłe integracje, prawdziwe dane klienta, automatyzacje, backend AI, Make, n8n, ERP, CRM i eksporty PDF. Te elementy nie są częścią aktywnego MVP, dopóki nie zostaną jawnie wdrożone i przetestowane.

## Aktywna wersja

- Branch: `feature/sales-mvp-3000-pln`.
- Frontend: `src/`.
- Aktywne demo workflow: `src/data/workflows.ts`.
- Dane demonstracyjne do audytu: `demo/sample_inputs_pl.json`, `demo/sample_outputs_pl.json`.
- Dokumentacja produktu: `docs/`.

## Co jest produktem

Produkt pokazuje klientowi prostą transformację:

```text
WIADOMOŚĆ Z FIRMY
-> PL NORMALIZATION
-> ROUTER
-> WORKFLOW
-> DRAFT PL
-> QA
-> FINAL PL DOCUMENT
```

## Co nie jest produktem w tym MVP

- Brak realnego backendu AI.
- Brak bazy danych.
- Brak wysyłki e-mail.
- Brak integracji ERP / CRM / Make / n8n.
- Brak deklaracji, że dokument został wysłany, podpisany lub zaakceptowany.

## Jak uruchomić

```bash
npm install
npm run dev
```

## Jak testować

```bash
npm run lint
npm run build
```

Manualnie sprawdź:

- sekcję hero,
- flow `Chaos -> gotowy dokument`,
- trzy zakładki demo,
- blok `Pilotaż wdrożeniowy — 3000 zł`,
- CTA `Pokaż 3 wiadomości z Twojej firmy`,
- mobile viewport około 390 px szerokości.

## Jak deployować

Vercel:

1. Import repozytorium.
2. Framework: Vite.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Environment variables: brak wymaganych w MVP.

## Granice danych

Do repozytorium i demo nie wolno dodawać prawdziwych danych prywatnych, danych pracowników, adresów obiektów, konfliktów, CV, finansów prywatnych ani danych wewnętrznych firm źródłowych.
