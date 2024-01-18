export function ResumeInfoSection({ personalInfo }) {
  return (
    <div className="resume-info-section">
      <div className="resume-name-section">
        <div className="resume-name">
          {personalInfo.firstName} {personalInfo.lastName}
        </div>
        <div className="resume-title">{personalInfo.professionalTitle}</div>
      </div>
      <div className="resume-contact-section">
        <div className="resume-email">john.smith@gmail.com</div>
        <div className="resume-phone">+44 8327 0423 743</div>
        <div className="resume-address">London, UK</div>
        <div className="resume-website">www.linkedin.com</div>
      </div>
    </div>
  );
}
