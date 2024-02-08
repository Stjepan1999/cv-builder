import '../../style.css';

export const ResumeSkillsSection = ({ skills }) => {
  if (skills && skills.length > 0) {
    return (
      <div className="resume-section">
        <div className="resume-section-title">Skills</div>
        <div className="resume-skills">
          {skills.map((skill, index) => (
            <div key={index} className="resume-skill-item">
              • {skill}
            </div>
          ))}
        </div>
      </div>
    );
  }
};
