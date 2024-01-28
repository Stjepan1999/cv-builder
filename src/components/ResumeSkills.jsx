import '../style.css';

export function ResumeSkillsSection({ skills }) {
  if (skills) {
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
}
