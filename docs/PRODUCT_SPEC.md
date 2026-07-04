# PRODUCT SPEC

## Nazwa produktu

Firmowy Asystent AI dla małych firm technicznych.

## Cel MVP

W 30-60 sekund pokazać właścicielowi małej firmy technicznej:

- jaki problem rozwiązuje system,
- jak wygląda chaotyczny input pracownika,
- jak działa porządkowanie przez AI,
- jaki dokument po polsku otrzymuje firma,
- co zawiera pilotaż za 3000 zł,
- jak zamówić wdrożenie.

## Problem klienta

Małe firmy techniczne często pracują na krótkich wiadomościach, notatkach głosowych i chaotycznych opisach z terenu. Informacje są użyteczne, ale nie są dokumentem.

System ma pokazać przejście:

```text
chaotyczna wiadomość -> uporządkowany dokument po polsku
```

## Główna logika

```text
ANY INPUT
-> PL NORMALIZATION
-> ROUTER
-> SKILL / WORKFLOW
-> DRAFT PL
-> MULTI-LEVEL QA
-> FINAL PL DOCUMENT
```

## Reguły faktów

- Planowane prace nie są wykonanymi pracami.
- Brak danych zostaje oznaczony jako `BRAK DANYCH`, `DO UZUPEŁNIENIA` lub `WYMAGA POTWIERDZENIA`.
- Nie wolno dopisywać nazwisk, dat, godzin, ilości, cen, adresów, parametrów, podpisów, odbiorów ani statusów, jeżeli nie występują w źródle.
- Zewnętrzne, zmienne fakty wymagają sprawdzenia źródła przed zmianą.

## Aktywne workflow

1. Raport dzienny.
2. Zapotrzebowanie na materiał.
3. Potwierdzenie wykonania usługi.

## Użytkownik docelowy

- właściciel małej firmy technicznej,
- kierownik / brygadzista,
- osoba w biurze porządkująca informacje z terenu,
- ekipa terenowa wysyłająca krótkie wiadomości.

## Zakres techniczny

- Frontend static SPA.
- React + TypeScript + Vite.
- Brak backendu.
- Brak bazy danych.
- Demo oparte na statycznych scenariuszach.

## Komunikacja produktu

Język interfejsu, README i dokumentów klienta: polski.

Technical identifiers, code and comments: English.
