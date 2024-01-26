export function ResumeEducationSection({ education }) {
  const formatDate = (date) => {
    const dateInput = new Date(date);
    const yyyy = dateInput.getFullYear();
    let mm = dateInput.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    return `${mm}/${yyyy}`;
  };
  if (education && education.length > 0) {
    return (
      <div className="resume-section">
        <div className="resume-section-title">Education</div>
        {education.map((edu, index) => (
          <div className="resume-entry" key={index}>
            <div className="resume-dates">
              {formatDate(edu.startDate)} <span>-</span> {formatDate(edu.endDate)}
            </div>
            <div className="resume-entry-info">
              <div className="resume-entry-title">{edu.school}</div>
              <div className="resume-entry-position">{edu.degree}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
