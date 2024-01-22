export function ResumeEducationSection({ education }) {
  if (education && education.length > 0) {
    return (
      <div className="resume-section">
        <div className="resume-section-title">Education</div>
        {education.map((edu, index) => (
          <div className="resume-education" key={index}>
            <div className="resume-dates">
              {edu.startDate} <span>-</span> {edu.endDate}
            </div>
            <div className="resume-education-info">
              <div className="resume-education-school">{edu.school}</div>
              <div className="resume-education-degree">{edu.degree}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
