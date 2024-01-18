import { PersonalDetails } from './components/PersonalDetails';
import { ContactInfo } from './components/ContactInfo';
import { ResumeInfoSection } from './components/ResumeInfo';
import { ResumeSummarySection } from './components/ResumeSummary';
import { useState } from 'react';
import './style.css';

export function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: 'John',
    lastName: 'Smith',
    professionalTitle: 'Web Developer',
    summary: 'I love creating web applications',
    email: '',
    phone: '',
    location: '',
    website: '',
  });

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <div className="main">
        <div className="forms-container">
          <PersonalDetails
            firstName={personalInfo.firstName}
            lastName={personalInfo.lastName}
            professionalTitle={personalInfo.professionalTitle}
            summary={personalInfo.summary}
            onChange={handlePersonalInfoChange}
          />
          <ContactInfo
            email={personalInfo.email}
            phone={personalInfo.phone}
            location={personalInfo.location}
            website={personalInfo.website}
            onChange={handlePersonalInfoChange}
          />
        </div>
        <div className="resume-container">
          <ResumeInfoSection personalInfo={personalInfo} />
          <div className="resume-main-section">
            <ResumeSummarySection summary={personalInfo.summary} />
          </div>
        </div>
      </div>
    </>
  );
}
