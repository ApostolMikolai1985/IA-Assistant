# Firmowy Asystent AI — Sales MVP / client demo v0.2

Sales MVP produktu B2B: web demo pokazujące, jak chaotyczna wiadomość z firmy technicznej może zostać uporządkowana w gotowy dokument po polsku.

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
npm ci
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

Typecheck oraz kontrola skryptu `lint`:

```bash
npm run typecheck
npm run lint
```

W tej wersji `npm run lint` uruchamia `tsc --noEmit`. Repozytorium nie zawiera konfiguracji ESLint, dlatego ten krok nie jest pełnym audytem ESLint.

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

## Aktualny zakres i ograniczenia

- Interaktywne demo działa na trzech przygotowanych scenariuszach.
- Projekt nie ma backendu AI, bazy danych, logowania, płatności ani integracji ERP/CRM.
- Nie wysyła wiadomości, nie generuje PDF i nie zapisuje danych klienta.
- Każdy wynik wymaga kontroli człowieka przed użyciem operacyjnym.
- Cena pilotażu wynosi `3000 zł`; szczegóły rozliczenia są ustalane przed zamówieniem.

## Deployment

Projekt jest statycznym frontendem Vite. Workflow `.github/workflows/deploy-pages.yml` buduje aplikację i publikuje katalog `dist` w GitHub Pages po zmianie w branchu `main`. Projekt nie wymaga zmiennych środowiskowych, bazy danych ani backendu.

Publiczny URL: [https://apostolmikolai1985.github.io/IA-Assistant/](https://apostolmikolai1985.github.io/IA-Assistant/)

## Kontakt

- E-mail: [filanovich1985@gmail.com](mailto:filanovich1985@gmail.com)
- Telefon: [+48 793 192 773](tel:+48793192773)
