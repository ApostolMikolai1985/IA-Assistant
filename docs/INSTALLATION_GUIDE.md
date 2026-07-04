# Installation Guide

## Wymagania

- Node.js 18+.
- npm.
- Dostęp do repozytorium.

## Instalacja lokalna

```bash
npm install
```

## Start dev server

```bash
npm run dev
```

Otwórz:

```text
http://127.0.0.1:5173/
```

## Build produkcyjny

```bash
npm run build
```

Wynik powstaje w:

```text
dist/
```

## Preview buildu

```bash
npm run preview
```

## Vercel

Ustawienia:

- Framework preset: Vite.
- Build command: `npm run build`.
- Output directory: `dist`.
- Install command: `npm install`.
- Environment variables: brak wymaganych w MVP.

## Konfiguracja przed sprzedażą

W produkcie należy ustawić:

- kontakt sprzedażowy: `TO CONFIGURE`,
- status ceny netto/brutto: `TO CONFIGURE`,
- docelową domenę,
- docelową nazwę produktu, jeżeli właściciel nie chce używać nazwy roboczej.
