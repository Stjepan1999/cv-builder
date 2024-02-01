import PropTypes from 'prop-types';
import emailIcon from '../assets/images/email.png';
import locationIcon from '../assets/images/location.png';
import phoneIcon from '../assets/images/phone.png';
import webIcon from '../assets/images/web.png';

export const ResumeInfoSection = ({ personalInfo, contactInfo }) => {
  return (
    <div className="resume-info-section">
      <div className="resume-name-section">
        <div className="resume-name">
          {personalInfo.firstName} {personalInfo.lastName}
        </div>
        <div className="resume-title">{personalInfo.professionalTitle}</div>
      </div>
      <div className="resume-contact-section">
        <div className="resume-info-container">
          {contactInfo.email}
          {contactInfo.email && <img src={emailIcon} className="resume-info-icon" />}
        </div>
        <div className="resume-info-container">
          {contactInfo.phone}
          {contactInfo.phone && <img src={phoneIcon} className="resume-info-icon" />}
        </div>
        <div className="resume-info-container">
          {contactInfo.location}
          {contactInfo.location && <img src={locationIcon} className="resume-info-icon" />}
        </div>
        <div className="resume-info-container">
          {contactInfo.website}
          {contactInfo.website && <img src={webIcon} className="resume-info-icon" />}
        </div>
      </div>
    </div>
  );
};

ResumeInfoSection.propTypes = {
  personalInfo: PropTypes.object,
  contactInfo: PropTypes.object,
};
