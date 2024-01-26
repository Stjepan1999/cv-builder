export function ResumeExperienceSection({ experienceData }) {
  return (
    <>
      <div className="resume-section">
        <div className="resume-section-title">Experience</div>
        <div className="resume-entry">
          <div className="resume-dates">
            02/2019 <span>-</span> 04/2023
            <div className="resume-entry-location">London, UK</div>
          </div>
          <div className="resume-entry-info">
            <div className="resume-entry-title">Company A</div>
            <div className="resume-entry-position">Software Engineer</div>
            <p className="resume-entry-description">I developed software with JavaScript</p>
          </div>
        </div>
      </div>
    </>
  );
}
