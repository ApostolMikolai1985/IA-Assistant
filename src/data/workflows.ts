import type { LucideIcon } from "lucide-react";
import { ClipboardList, FileCheck2, PackageCheck } from "lucide-react";

export type DemoWorkflow = {
  id: "daily-report" | "material-request" | "service-confirmation";
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  inputLabel: string;
  input: string;
  route: string;
  qa: string[];
  outputTitle: string;
  outputSections: Array<{
    title: string;
    lines: string[];
  }>;
};

export const demoWorkflows: DemoWorkflow[] = [
  {
    id: "daily-report",
    title: "Raport dzienny",
    shortTitle: "Raport",
    icon: ClipboardList,
    inputLabel: "Wiadomość z ekipy",
    input:
      "Dane demonstracyjne: dzisiaj ekipa terenowa była na obiekcie klienta demo. Wykonano kanał 160, około 12 metrów. Brakuje 2 kolan i obejm. Jutro trzeba wrócić i dokończyć mocowanie.",
    route: "Router: raport z wykonanych prac",
    qa: [
      "Oddzielono wykonane prace od planu na jutro.",
      "Nie dopisano adresu, godzin ani nazwisk.",
      "Braki materiałowe oznaczono jako do uzupełnienia."
    ],
    outputTitle: "RAPORT DZIENNY Z WYKONANYCH PRAC",
    outputSections: [
      {
        title: "Dane ogólne",
        lines: [
          "Data: BRAK DANYCH",
          "Obiekt / lokalizacja: klient demo - lokalizacja niepodana",
          "Ekipa: ekipa terenowa",
          "Charakter danych: przykład demonstracyjny"
        ]
      },
      {
        title: "Wykonane prace",
        lines: ["Wykonano odcinek kanału 160.", "Podana długość: około 12 m."]
      },
      {
        title: "Braki / materiały",
        lines: ["Brakuje: 2 kolana.", "Brakuje: obejmy - ilość BRAK DANYCH."]
      },
      {
        title: "Plan dalszych prac",
        lines: ["Powrót na obiekt i dokończenie mocowania - plan, nie fakt wykonania."]
      },
      {
        title: "QA",
        lines: ["PLAN != FAKT: sprawdzono.", "Nie wymyślono danych: TAK."]
      }
    ]
  },
  {
    id: "material-request",
    title: "Zapotrzebowanie na materiał",
    shortTitle: "Materiały",
    icon: PackageCheck,
    inputLabel: "Krótka notatka do biura",
    input:
      "Dane demonstracyjne: potrzebne na jutro: 4 kolana 160, 10 m kanału 160, taśma alu 2 rolki, obejmy do kanału - nie wiem ile, trzeba dobrać na miejscu.",
    route: "Router: zamówienie / zapotrzebowanie na materiał",
    qa: [
      "Nie dopisano dostawcy, ceny ani modelu materiału.",
      "Niepewną ilość obejm oznaczono jako WYMAGA POTWIERDZENIA.",
      "Termin opisano tylko tak, jak podał użytkownik."
    ],
    outputTitle: "ZAPOTRZEBOWANIE NA MATERIAŁ",
    outputSections: [
      {
        title: "Dane ogólne",
        lines: [
          "Data zgłoszenia: BRAK DANYCH",
          "Termin potrzebny na: jutro - wymaga potwierdzenia daty",
          "Obiekt / lokalizacja: BRAK DANYCH",
          "Źródło: wiadomość demonstracyjna"
        ]
      },
      {
        title: "Lista materiałów",
        lines: [
          "1. Kolano 160 - 4 szt.",
          "2. Kanał 160 - 10 m.",
          "3. Taśma aluminiowa - 2 rolki.",
          "4. Obejmy do kanału - ilość WYMAGA POTWIERDZENIA."
        ]
      },
      {
        title: "Wiadomość robocza",
        lines: [
          "Proszę o przygotowanie materiałów z listy powyżej. Ilość obejm wymaga potwierdzenia przed wydaniem."
        ]
      },
      {
        title: "QA",
        lines: ["Ceny: nie podano.", "Dostawca: nie podano.", "Nie wymyślono parametrów: TAK."]
      }
    ]
  },
  {
    id: "service-confirmation",
    title: "Potwierdzenie wykonania usługi",
    shortTitle: "Usługa",
    icon: FileCheck2,
    inputLabel: "Wiadomość po zakończeniu pracy",
    input:
      "Dane demonstracyjne: serwis zakończony. Wyczyściliśmy jednostkę, sprawdziliśmy odpływ skroplin, klient demo mówi, że działa. Brak zdjęcia tabliczki. Filtr do wymiany przy następnym serwisie.",
    route: "Router: potwierdzenie wykonania usługi",
    qa: [
      "Nie zapisano odbioru formalnego ani podpisu klienta.",
      "Brak zdjęcia tabliczki oznaczono jako brak danych.",
      "Wymianę filtra wpisano jako zalecenie / następny krok."
    ],
    outputTitle: "POTWIERDZENIE WYKONANIA USŁUGI",
    outputSections: [
      {
        title: "Dane usługi",
        lines: [
          "Data wykonania: BRAK DANYCH",
          "Klient / obiekt: klient demo",
          "Urządzenie: BRAK DANYCH",
          "Nr seryjny / model: BRAK DANYCH"
        ]
      },
      {
        title: "Wykonane czynności",
        lines: [
          "Wyczyszczono jednostkę.",
          "Sprawdzono odpływ skroplin.",
          "Według informacji z wiadomości urządzenie działa."
        ]
      },
      {
        title: "Braki i zalecenia",
        lines: [
          "Brak zdjęcia tabliczki znamionowej.",
          "Filtr do wymiany przy następnym serwisie - zalecenie, nie wykonanie."
        ]
      },
      {
        title: "QA",
        lines: [
          "Odbiór formalny: BRAK DANYCH.",
          "Podpis klienta: BRAK DANYCH.",
          "Wymaga kontroli człowieka przed użyciem: TAK."
        ]
      }
    ]
  }
];

export const processSteps = [
  "Wiadomość z firmy",
  "Normalizacja PL",
  "Router workflow",
  "Draft dokumentu",
  "QA: fakty, braki, privacy",
  "Finalny dokument PL"
];

export const pilotScope = [
  "analiza 3 realnych procesów dokumentowych klienta",
  "konfiguracja firmowego asystenta AI",
  "przygotowanie 3 gotowych workflow",
  "testy na przykładowych wiadomościach firmy",
  "korekta wyników",
  "instrukcja uruchomienia",
  "pakiet testowy",
  "przekazanie gotowego systemu do użytkowania"
];
