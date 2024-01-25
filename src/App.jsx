import { PersonalDetails } from './components/PersonalDetails';
import { ContactInfo } from './components/ContactInfo';
import { ResumeInfoSection } from './components/ResumeInfo';
import { ResumeSummarySection } from './components/ResumeSummary';
import { EducationForm } from './components/EducationForm';
import { useState } from 'react';
import './style.css';
import { ResumeEducationSection } from './components/ResumeEducation';
import logo from './assets/images/cv.png';

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
    education: [],
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

  const [educationData, setEducationData] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
  });

  const [editIndex, setEditIndex] = useState(null);

  const handleCVDataChange = (e, section) => {
    const { name, value } = e.target;
    setCVData((prevData) => ({ ...prevData, [section]: { ...prevData[section], [name]: value } }));
  };

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setEducationData({ ...educationData, [name]: value });
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();
    setCVData((prevData) => ({ ...prevData, education: [...prevData.education, educationData] }));
    setEducationData({ school: '', degree: '', startDate: '', endDate: '' });
  };

  const handleEditButton = (e, index) => {
    e.preventDefault();
    setEducationData(cvData.education[index]);
    setEditIndex(index);
  };

  const handleSaveButton = (e) => {
    e.preventDefault();
    const updatedData = [...cvData.education];
    updatedData[editIndex] = educationData;
    setCVData((prevData) => ({ ...prevData, education: updatedData }));
    setEducationData({ school: '', degree: '', startDate: '', endDate: '' });
    setEditIndex(null);
  };

  const handleDeleteButton = (e) => {
    e.preventDefault();
    const updatedData = [...cvData.education];
    updatedData.splice(editIndex, 1);
    setCVData((prevData) => ({ ...prevData, education: updatedData }));
    setEducationData({ school: '', degree: '', startDate: '', endDate: '' });
    setEditIndex(null);
  };

  const handleCancelButton = (e) => {
    e.preventDefault();
    setEducationData({ school: '', degree: '', startDate: '', endDate: '' });
    setEditIndex(null);
  };

  return (
    <>
      <div className="main">
        <div className="forms-container">
          <div className="logo-container">
            <img src={logo} className="logo" />
            <h1 className="header">CV BUILDER</h1>
          </div>
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
          <EducationForm
            onChange={(e) => handleEducationChange(e)}
            onSubmit={handleSubmitButton}
            handleEdit={handleEditButton}
            handleSave={handleSaveButton}
            handleDelete={handleDeleteButton}
            handleCancel={handleCancelButton}
            editIndex={editIndex}
            savedEducation={cvData.education}
            educationData={educationData}
          />
        </div>
        <div className="resume-container">
          <ResumeInfoSection personalInfo={cvData.personalInfo} contactInfo={cvData.contactInfo} />
          <div className="resume-main-section">
            <ResumeSummarySection summary={cvData.personalInfo.summary} />
            <ResumeEducationSection education={cvData.education} />
          </div>
        </div>
      </div>
    </>
  );
}
