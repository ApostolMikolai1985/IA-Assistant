import type { DemoWorkflow } from "../data/workflows";

type DocumentPreviewProps = {
  workflow: DemoWorkflow;
};

export function DocumentPreview({ workflow }: DocumentPreviewProps) {
  return (
    <article className="document-preview" aria-label={workflow.outputTitle}>
      <div className="document-preview__top">
        <span>FINAL PL DOCUMENT</span>
        <span>DEMO</span>
      </div>
      <h3>{workflow.outputTitle}</h3>
      {workflow.outputSections.map((section) => (
        <div className="document-section" key={section.title}>
          <h4>{section.title}</h4>
          <ul>
            {section.lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      ))}
    </article>
  );
}
