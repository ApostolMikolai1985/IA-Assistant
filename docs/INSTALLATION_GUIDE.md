# Installation Guide

## Wymagania

- Node.js `^20.19.0` lub `>=22.12.0`.
- npm.
- Dostęp do repozytorium.

## Instalacja lokalna

```bash
npm ci
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

## GitHub Pages

Ustawienia:

- Build command: `npm run build`.
- Output directory: `dist`.
- Install command: `npm ci`.
- Environment variables: brak wymaganych w MVP.
- Vite base path: `/IA-Assistant/`.
- Workflow: `.github/workflows/deploy-pages.yml`.

## Konfiguracja przed sprzedażą

Przed sprzedażą należy potwierdzić:

- czy kontakt `filanovich1985@gmail.com` i `+48 793 192 773` pozostaje aktualny,
- szczegóły rozliczenia ceny `3000 zł`,
- ewentualną docelową domenę,
- docelową nazwę produktu, jeżeli właściciel nie chce używać nazwy roboczej.
