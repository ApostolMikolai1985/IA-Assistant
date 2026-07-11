# QA Checklist

## Build i technika

- [ ] `npm ci` wykonane.
- [ ] `npm run typecheck` przechodzi.
- [ ] `npm run lint` przechodzi.
- [ ] `npm run build` przechodzi.
- [ ] Strona działa lokalnie.
- [ ] Brak zepsutych anchor links: `#demo`, `#pilot`, `#contact`.

## Demo

- [ ] Widoczne są 3 workflow.
- [ ] Każdy workflow ma input, routing/QA i finalny dokument.
- [ ] Demo jasno mówi, że używa danych demonstracyjnych.
- [ ] Strona nie udaje aktywnego backendu AI.
- [ ] Brak deklaracji wysłania wiadomości, zapisania pliku, podpisania dokumentu albo akceptacji klienta.

## Mobile

- [ ] Hero jest zrozumiałe na Android / około 390 px.
- [ ] Zakładki workflow nie wychodzą poza ekran.
- [ ] Dokument preview jest czytelny.
- [ ] CTA i cena 3000 zł są widoczne bez poziomego scrolla.

## Polish copy

- [ ] Interfejs jest po polsku.
- [ ] Komercyjne materiały są po polsku.
- [ ] Technical identifiers są po angielsku.
- [ ] Tekst odpowiada na pytanie: co kupuję za 3000 zł?

## Privacy

- [ ] Brak prywatnych danych.
- [ ] Brak danych pracowników.
- [ ] Brak prawdziwych adresów obiektów.
- [ ] Brak CV.
- [ ] Brak finansów prywatnych.
- [ ] Brak danych wewnętrznych firm źródłowych.
- [ ] Demo data jest wyraźnie oznaczone jako demonstracyjne.

## Anti-hallucination

- [ ] `PLAN != FAKT`.
- [ ] `BRAK DANYCH` zostaje widoczne.
- [ ] Nie dopisano nazwisk.
- [ ] Nie dopisano dat.
- [ ] Nie dopisano godzin.
- [ ] Nie dopisano cen.
- [ ] Nie dopisano adresów.
- [ ] Nie dopisano parametrów technicznych.
- [ ] Nie dopisano podpisów ani odbiorów.

## Sales clarity

- [ ] W 60 sekund widać problem, demo i ofertę.
- [ ] Blok `Pilotaż wdrożeniowy — 3000 zł` jest konkretny.
- [ ] CTA brzmi: pokaż 3 wiadomości z firmy.
- [ ] Kontakt odpowiada danym podanym przez właściciela produktu.
