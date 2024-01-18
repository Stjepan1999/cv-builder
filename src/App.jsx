import { PersonalDetails } from './components/PersonalDetails';
import { ContactInfo } from './components/ContactInfo';
import { ResumeInfoSection } from './components/ResumeInfo';
import { ResumeSummarySection } from './components/ResumeSummary';
import { useState } from 'react';
import './style.css';

export function App() {
  const [cvData, setCVData] = useState({
    personalInfo: {
      firstName: 'John',
      lastName: 'Smith',
      professionalTitle: 'Web Developer',
      summary: 'I love creating web applications',
    },
    contactInfo: {
      email: '',
      phone: '',
      location: '',
      website: '',
    },
    skills: [],
    education: [
      {
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
      },
    ],
    experience: [
      {
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        location: '',
        description: '',
      },
    ],
  });

  const handleCVDataChange = (e, section) => {
    const { name, value } = e.target;
    setCVData((prevData) => ({ ...prevData, [section]: { ...prevData[section], [name]: value } }));
  };

  return (
    <>
      <div className="main">
        <div className="forms-container">
          <PersonalDetails
            firstName={cvData.personalInfo.firstName}
            lastName={cvData.personalInfo.lastName}
            professionalTitle={cvData.personalInfo.professionalTitle}
            summary={cvData.personalInfo.summary}
            onChange={(e) => handleCVDataChange(e, 'personalInfo')}
          />
          <ContactInfo
            email={cvData.contactInfo.email}
            phone={cvData.contactInfo.phone}
            location={cvData.contactInfo.location}
            website={cvData.contactInfo.website}
            onChange={(e) => handleCVDataChange(e, 'contactInfo')}
          />
        </div>
        <div className="resume-container">
          <ResumeInfoSection personalInfo={cvData.personalInfo} contactInfo={cvData.contactInfo} />
          <div className="resume-main-section">
            <ResumeSummarySection summary={cvData.summary} />
          </div>
        </div>
      </div>
    </>
  );
}
