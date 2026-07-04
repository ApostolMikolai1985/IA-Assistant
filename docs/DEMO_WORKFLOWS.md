# Demo Workflows

## Ważna informacja

Demo używa danych demonstracyjnych. Nie jest podłączone do produkcyjnego backendu AI i nie wykonuje automatycznych działań zewnętrznych.

## Workflow 1: Raport dzienny

Input:

```text
Dane demonstracyjne: dzisiaj ekipa terenowa była na obiekcie klienta demo. Wykonano kanał 160, około 12 metrów. Brakuje 2 kolan i obejm. Jutro trzeba wrócić i dokończyć mocowanie.
```

Router:

```text
Raport z wykonanych prac
```

Wynik:

- dane ogólne;
- wykonane prace;
- braki materiałowe;
- plan dalszych prac;
- QA.

## Workflow 2: Zapotrzebowanie na materiał

Input:

```text
Dane demonstracyjne: potrzebne na jutro: 4 kolana 160, 10 m kanału 160, taśma alu 2 rolki, obejmy do kanału - nie wiem ile, trzeba dobrać na miejscu.
```

Router:

```text
Zamówienie / zapotrzebowanie na materiał
```

Wynik:

- lista materiałów;
- ilości podane przez użytkownika;
- niepewne ilości jako `WYMAGA POTWIERDZENIA`;
- krótka wiadomość robocza do magazynu;
- QA.

## Workflow 3: Potwierdzenie wykonania usługi

Input:

```text
Dane demonstracyjne: serwis zakończony. Wyczyściliśmy jednostkę, sprawdziliśmy odpływ skroplin, klient demo mówi, że działa. Brak zdjęcia tabliczki. Filtr do wymiany przy następnym serwisie.
```

Router:

```text
Potwierdzenie wykonania usługi
```

Wynik:

- wykonane czynności;
- brak danych urządzenia;
- zalecenie na przyszłość;
- brak formalnego odbioru;
- QA.

## Reguły wspólne

- Nie dopisuj brakujących danych.
- Nie zapisuj planu jako faktu.
- Nie twórz informacji o wysyłce, podpisie ani akceptacji.
- Zostaw widoczne `BRAK DANYCH`.
