import PropTypes from 'prop-types';

export const ResumeExperienceSection = ({ experienceData, formatDate }) => {
  if (experienceData[0].company) {
    return (
      <>
        <div className="resume-section">
          <div className="resume-section-title">Experience</div>
          {experienceData.map((experience, index) => (
            <div className="resume-entry" key={index}>
              <div className="resume-dates">
                {formatDate(experience.startDate)} <span>-</span> {formatDate(experience.endDate)}
                <div className="resume-entry-location">{experience.location}</div>
              </div>
              <div className="resume-entry-info">
                <div className="resume-entry-title">{experience.company}</div>
                <div className="resume-entry-position">{experience.position}</div>
                <p className="resume-entry-description">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
};

ResumeExperienceSection.propTypes = {
  experienceData: PropTypes.array,
  formatDate: PropTypes.func,
};
