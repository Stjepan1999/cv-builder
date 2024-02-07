import { formatDate } from '../utils';

export const ResumeEducationSection = ({ education }) => {
  if (education[0]) {
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
};
