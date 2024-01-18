import '../style.css';

export function ResumeSummarySection({ summary }) {
  return (
    <div className="resume-section">
      <div className="resume-section-title">Summary</div>
      <div className="resume-summary">{summary}</div>
    </div>
  );
}
