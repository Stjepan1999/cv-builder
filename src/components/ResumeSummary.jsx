import '../style.css';

export const ResumeSummarySection = ({ summary }) => {
  if (summary) {
    return (
      <div className="resume-section">
        <div className="resume-section-title">Summary</div>
        <div className="resume-entry-description">{summary}</div>
      </div>
    );
  }
};
