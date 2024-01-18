import { PersonalDetails } from './components/PersonalDetails';
import { ResumeInfoSection } from './components/ResumeInfo';
import { useState } from 'react';
import './style.css';

export function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: 'John',
    lastName: 'Smith',
    professionalTitle: 'Web Developer',
    summary: '',
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
        </div>
        <div className="resume-container">
          <ResumeInfoSection personalInfo={personalInfo} />
          <div className="resume-main-section"></div>
        </div>
      </div>
    </>
  );
}
