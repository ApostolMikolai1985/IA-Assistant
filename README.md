# Firmowy Asystent AI dla małych firm technicznych

Sales MVP produktu B2B: premium web demo pokazujące, jak chaotyczna wiadomość z firmy technicznej może zostać uporządkowana w gotowy dokument po polsku.

Ten projekt nie udaje produkcyjnego backendu AI. Interaktywne demo działa na przygotowanych scenariuszach i danych demonstracyjnych.

## Aktywny zakres

- Web demo w React + TypeScript + Vite.
- 3 workflow demonstracyjne:
  - raport dzienny,
  - zapotrzebowanie na materiał,
  - potwierdzenie wykonania usługi.
- Oferta `Pilotaż wdrożeniowy — 3000 zł`.
- Dokumentacja produktu, QA i granic prywatności.
- Demo data w `demo/sample_inputs_pl.json` i `demo/sample_outputs_pl.json`.

## Główna obietnica

Pokaż nam 3 typowe wiadomości z Twojej firmy. Zbudujemy na ich podstawie 3 gotowe procesy AI do tworzenia dokumentów.

## Zasady produktu

- `PLAN != FAKT`.
- `NO INVENTED FACTS`.
- `BRAK DANYCH` zostaje widoczny.
- `CANDIDATE != ACTIVE`.
- Jedna aktywna wersja demo.
- Bez fałszywych deklaracji automatyzacji.
- Zmienny fakt zewnętrzny wymaga sprawdzenia źródła przed użyciem.
- Demo używa wyłącznie danych demonstracyjnych.

## Uruchomienie

```bash
npm install
npm run dev
```

Adres lokalny:

```text
http://127.0.0.1:5173/
```

Build:

```bash
npm run build
```

Lint/typecheck:

```bash
npm run lint
```

## Struktura

```text
src/
  App.tsx
  index.css
  components/
  data/workflows.ts
docs/
  MASTER_INDEX.md
  PRODUCT_SPEC.md
  PILOT_3000_PLN.md
  INSTALLATION_GUIDE.md
  DEMO_WORKFLOWS.md
  QA_CHECKLIST.md
  PRIVACY_DATA_BOUNDARY.md
demo/
  sample_inputs_pl.json
  sample_outputs_pl.json
```

## Konfiguracja przed pokazem klientowi

- `Kontakt: TO CONFIGURE` w sekcji CTA.
- Status ceny netto/brutto: `TO CONFIGURE`.
- Docelowa nazwa produktu: `Firmowy Asystent AI`; robocza nazwa może zostać zmieniona w copy.
- Hosting Vercel: skonfigurować po wyborze repozytorium docelowego.

## Deployment

Projekt jest statycznym frontendem Vite, gotowym do wdrożenia na Vercel. Nie wymaga bazy danych ani backendu.
