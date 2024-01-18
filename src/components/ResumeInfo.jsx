export function ResumeInfoSection({ personalInfo, contactInfo }) {
  return (
    <div className="resume-info-section">
      <div className="resume-name-section">
        <div className="resume-name">
          {personalInfo.firstName} {personalInfo.lastName}
        </div>
        <div className="resume-title">{personalInfo.professionalTitle}</div>
      </div>
      <div className="resume-contact-section">
        <div className="resume-email">{contactInfo.email}</div>
        <div className="resume-phone">{contactInfo.phone}</div>
        <div className="resume-address">{contactInfo.location}</div>
        <div className="resume-website">{contactInfo.website}</div>
      </div>
    </div>
  );
}
