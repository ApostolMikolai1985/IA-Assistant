import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  ClipboardCheck,
  FileText,
  LockKeyhole,
  MessageSquareText,
  PhoneCall,
  Route,
  ShieldCheck,
  Sparkles,
  Wrench
} from "lucide-react";
import { DemoFlow } from "./components/DemoFlow";
import { Section } from "./components/Section";
import { pilotScope, processSteps } from "./data/workflows";

const outcomes = [
  "3 gotowe workflow dokumentowe oparte na typowych wiadomościach firmy",
  "polskie szablony raportów, zapotrzebowań i potwierdzeń usług",
  "zasady QA: PLAN != FAKT, BRAK DANYCH, brak zgadywania",
  "pakiet testowych wiadomości i wyników",
  "instrukcja uruchomienia dla osoby technicznej lub właściciela"
];

const targetGroups = [
  "instalacje",
  "serwis",
  "montaż",
  "utrzymanie techniczne",
  "małe firmy produkcyjne",
  "ekipy terenowe"
];

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a href="#top" className="brand-mark" aria-label="Firmowy Asystent AI">
          <span>AI</span>
          <strong>Firmowy Asystent</strong>
        </a>
        <nav aria-label="Nawigacja strony">
          <a href="#demo">Demo</a>
          <a href="#pilot">3000 zł</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__copy">
            <p className="eyebrow">Polski B2B AI produkt dla małych firm technicznych</p>
            <h1>Chaos w wiadomościach → gotowy dokument po polsku</h1>
            <p className="hero__lead">
              Firmowy Asystent AI porządkuje krótkie notatki z pracy, wybiera właściwy workflow i
              tworzy czytelny dokument bez dopisywania niepodanych faktów.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#demo">
                Zobacz demo
                <ArrowRight aria-hidden="true" />
              </a>
              <a className="button button--secondary" href="#pilot">
                Pilotaż za 3000 zł
              </a>
            </div>
            <p className="hero__hook">
              Pokaż nam 3 typowe wiadomości z Twojej firmy. Zbudujemy na ich podstawie 3 gotowe
              procesy AI do tworzenia dokumentów.
            </p>
          </div>

          <div className="hero__visual" aria-label="Przykład chaosu zamienionego w dokument">
            <div className="chaos-card">
              <div className="card-top">
                <MessageSquareText aria-hidden="true" />
                <span>WIADOMOŚĆ Z FIRMY</span>
              </div>
              <p>
                "Dane demo: dzisiaj zrobione kanały, brakuje dwóch elementów, jutro trzeba wrócić."
              </p>
            </div>
            <div className="flow-line" aria-hidden="true">
              <span />
              <ArrowRight />
              <span />
            </div>
            <div className="document-card">
              <div className="card-top">
                <FileText aria-hidden="true" />
                <span>GOTOWY DOKUMENT</span>
              </div>
              <ul>
                <li>Wykonane prace</li>
                <li>Braki materiałowe</li>
                <li>Plan dalszych prac</li>
                <li>QA: bez zgadywania</li>
              </ul>
            </div>
          </div>
        </section>

        <Section
          id="problem"
          eyebrow="Chaos → dokument"
          title="Firma nie potrzebuje kolejnego chatu. Potrzebuje powtarzalnego dokumentu."
          subtitle="Demo pokazuje statyczne scenariusze, nie udaje podłączonego backendu ani produkcyjnej automatyzacji."
        >
          <div className="process-strip">
            {processSteps.map((step, index) => (
              <div className="process-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="demo"
          eyebrow="Interaktywne demo"
          title="3 przykładowe workflow na danych demonstracyjnych"
          subtitle="Kliknij typ sprawy i zobacz, jak zwykła wiadomość zmienia się w uporządkowany dokument po polsku."
        >
          <DemoFlow />
        </Section>

        <Section id="how" eyebrow="Jak to działa" title="Prosta logika wdrożenia">
          <div className="feature-grid">
            <article>
              <MessageSquareText aria-hidden="true" />
              <h3>1. Bierzemy realne typy wiadomości</h3>
              <p>Klient pokazuje przykłady chaosu: notatki z budowy, listy materiałów, krótkie opisy usług.</p>
            </article>
            <article>
              <Route aria-hidden="true" />
              <h3>2. Budujemy router</h3>
              <p>System rozpoznaje, czy potrzebny jest raport, zapotrzebowanie, potwierdzenie usługi albo inny workflow.</p>
            </article>
            <article>
              <BrainCircuit aria-hidden="true" />
              <h3>3. Tworzymy draft PL</h3>
              <p>Informacje są porządkowane po polsku, z osobnym miejscem na braki i dane do potwierdzenia.</p>
            </article>
            <article>
              <ShieldCheck aria-hidden="true" />
              <h3>4. Sprawdzamy QA</h3>
              <p>PLAN != FAKT. Brak danych zostaje brakiem danych. System nie dopisuje osób, adresów, cen ani parametrów.</p>
            </article>
          </div>
        </Section>

        <Section
          id="package"
          eyebrow="Co otrzymuje firma"
          title="Konkretny pakiet, który można przetestować od razu"
        >
          <div className="outcome-list">
            {outcomes.map((item) => (
              <div className="outcome-item" key={item}>
                <BadgeCheck aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="pilot"
          eyebrow="Oferta"
          title="Pilotaż wdrożeniowy — 3000 zł"
          subtitle="Zakres pilotażu jest świadomie wąski: trzy procesy, testy, korekty i przekazanie gotowego systemu do używania."
        >
          <div className="pilot-layout">
            <article className="pilot-card">
              <div className="price-line">
                <span>3000 zł</span>
                <strong>netto / brutto: TO CONFIGURE</strong>
              </div>
              <p>
                W pilotażu nie obiecujemy integracji ERP, Make, n8n ani pełnej automatyzacji, jeśli
                nie zostaną osobno zamówione. Celem jest działający pakiet dokumentowy i sprawdzony
                proces na przykładach klienta.
              </p>
            </article>
            <div className="scope-grid">
              {pilotScope.map((item) => (
                <div className="scope-item" key={item}>
                  <ClipboardCheck aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="for-who" eyebrow="Dla kogo" title="Małe firmy techniczne i usługowe">
          <div className="target-grid">
            {targetGroups.map((group) => (
              <span key={group}>{group}</span>
            ))}
          </div>
        </Section>

        <section id="contact" className="cta-section">
          <div>
            <p className="eyebrow">Następny krok</p>
            <h2>Pokaż 3 wiadomości z Twojej firmy.</h2>
            <p>
              Na ich podstawie przygotujemy trzy workflow i pokażemy, jak firma może przejść od
              chaotycznej informacji do gotowego dokumentu po polsku.
            </p>
          </div>
          <div className="contact-box">
            <PhoneCall aria-hidden="true" />
            <strong>Kontakt: TO CONFIGURE</strong>
            <span>E-mail / telefon / formularz zostaną podłączone po decyzji właściciela produktu.</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Firmowy Asystent AI - sales MVP</span>
        <span>
          <LockKeyhole aria-hidden="true" /> Dane demo. Bez prywatnych danych i bez fałszywych deklaracji automatyzacji.
        </span>
        <span>
          <Sparkles aria-hidden="true" /> Produkt gotowy do rozmowy o pilotażu.
        </span>
      </footer>
    </div>
  );
}

export default App;
