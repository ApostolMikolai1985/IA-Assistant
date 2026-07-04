import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useState } from "react";
import { demoWorkflows } from "../data/workflows";
import { DocumentPreview } from "./DocumentPreview";

export function DemoFlow() {
  const [activeId, setActiveId] = useState(demoWorkflows[0].id);
  const workflow = demoWorkflows.find((item) => item.id === activeId) ?? demoWorkflows[0];
  const Icon = workflow.icon;

  return (
    <div className="demo-flow">
      <div className="workflow-tabs" role="tablist" aria-label="Wybierz workflow demonstracyjny">
        {demoWorkflows.map((item) => {
          const ItemIcon = item.icon;
          const isActive = item.id === workflow.id;

          return (
            <button
              key={item.id}
              type="button"
              className={isActive ? "workflow-tab workflow-tab--active" : "workflow-tab"}
              onClick={() => setActiveId(item.id)}
              role="tab"
              aria-selected={isActive}
            >
              <ItemIcon aria-hidden="true" />
              <span>{item.shortTitle}</span>
            </button>
          );
        })}
      </div>

      <div className="demo-grid">
        <div className="message-panel">
          <div className="panel-label">
            <Icon aria-hidden="true" />
            <span>{workflow.inputLabel}</span>
          </div>
          <p>{workflow.input}</p>
          <p className="demo-note">Przykład działania systemu na danych demonstracyjnych.</p>
        </div>

        <div className="ai-panel" aria-label="AI porządkuje informacje">
          <div className="flow-pill">
            <Sparkles aria-hidden="true" />
            <span>AI porządkuje informacje</span>
          </div>
          <ArrowRight className="flow-arrow" aria-hidden="true" />
          <div className="route-box">
            <strong>{workflow.route}</strong>
            <ul>
              {workflow.qa.map((item) => (
                <li key={item}>
                  <CheckCircle2 aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <DocumentPreview workflow={workflow} />
      </div>
    </div>
  );
}
