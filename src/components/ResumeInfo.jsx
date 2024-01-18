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
        <div className="resume-email">{personalInfo.email}</div>
        <div className="resume-phone">{personalInfo.phone}</div>
        <div className="resume-address">{personalInfo.location}</div>
        <div className="resume-website">{personalInfo.website}</div>
      </div>
    </div>
  );
}
