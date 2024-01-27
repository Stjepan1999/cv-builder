import { PersonalDetails } from './components/PersonalDetails';
import { ContactInfo } from './components/ContactInfo';
import { ResumeInfoSection } from './components/ResumeInfo';
import { ResumeSummarySection } from './components/ResumeSummary';
import { EducationForm } from './components/EducationForm';
import { ExperienceForm } from './components/ExperienceForm';
import { ResumeExperienceSection } from './components/ResumeExperience';
import { useState } from 'react';
import './style.css';
import { ResumeEducationSection } from './components/ResumeEducation';
import logo from './assets/images/cv.png';

export function App() {
  const [userData, setUserData] = useState({
    personalInfo: {
      firstName: 'John',
      lastName: 'Smith',
      professionalTitle: 'Web Developer',
      summary: 'I love creating web applications',
    },
    contactInfo: {
      email: 'john.smith@gmail.com',
      phone: '+49 879 3123 983',
      location: 'London, UK',
      website: 'www.linkedin.com/johnsmith',
    },
    skills: [],
    education: [
      {
        school: 'University Of London',
        degree: 'Master degree in computer science',
        startDate: '2019-10-06',
        endDate: '2024-05-17',
      },
    ],
    experience: [],
  });

  const [educationFormData, setEducationFormData] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
  });

  const [experienceFormData, setExperienceFormData] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    location: '',
    description: '',
  });

  const [editIndex, setEditIndex] = useState(null);

  const handleUserDataChange = (e, section) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [section]: { ...prevData[section], [name]: value } }));
  };

  const handleFormDataChange = (e, section) => {
    const { name, value } = e.target;
    setEducationFormData({ ...educationFormData, [name]: value });
    if (section === 'education') {
      setEducationFormData({ ...educationFormData, [name]: value });
    } else if (section === 'experience') {
      setExperienceFormData({ ...experienceFormData, [name]: value });
    }
  };

  const handleSubmitButton = (e, section) => {
    e.preventDefault();
    if (section === 'education') {
      setUserData((prevData) => ({ ...prevData, education: [...prevData.education, educationFormData] }));
      setEducationFormData({ school: '', degree: '', startDate: '', endDate: '' });
    } else {
      setUserData((prevData) => ({ ...prevData, experience: [...prevData.experience, experienceFormData] }));
      setExperienceFormData({ company: '', position: '', startDate: '', endDate: '', location: '', description: '' });
    }
  };

  const handleEditButton = (e, index) => {
    e.preventDefault();
    setEducationFormData(userData.education[index]);
    setEditIndex(index);
  };

  const handleSaveButton = (e) => {
    e.preventDefault();
    const updatedData = [...userData.education];
    updatedData[editIndex] = educationFormData;
    setUserData((prevData) => ({ ...prevData, education: updatedData }));
    setEducationFormData({ school: '', degree: '', startDate: '', endDate: '' });
    setEditIndex(null);
  };

  const handleDeleteButton = (e) => {
    e.preventDefault();
    const updatedData = [...userData.education];
    updatedData.splice(editIndex, 1);
    setUserData((prevData) => ({ ...prevData, education: updatedData }));
    setEducationFormData({ school: '', degree: '', startDate: '', endDate: '' });
    setEditIndex(null);
  };

  const handleCancelButton = (e) => {
    e.preventDefault();
    setEducationFormData({ school: '', degree: '', startDate: '', endDate: '' });
    setEditIndex(null);
  };

  const formatDate = (date) => {
    const dateInput = new Date(date);
    const yyyy = dateInput.getFullYear();
    let mm = dateInput.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    return `${mm}/${yyyy}`;
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
            firstName={userData.personalInfo.firstName}
            lastName={userData.personalInfo.lastName}
            professionalTitle={userData.personalInfo.professionalTitle}
            summary={userData.personalInfo.summary}
            onChange={(e) => handleUserDataChange(e, 'personalInfo')}
          />
          <ContactInfo
            email={userData.contactInfo.email}
            phone={userData.contactInfo.phone}
            location={userData.contactInfo.location}
            website={userData.contactInfo.website}
            onChange={(e) => handleUserDataChange(e, 'contactInfo')}
          />
          <EducationForm
            onChange={(e) => handleFormDataChange(e, 'education')}
            onSubmit={(e) => handleSubmitButton(e, 'education')}
            handleEdit={handleEditButton}
            handleSave={handleSaveButton}
            handleDelete={handleDeleteButton}
            handleCancel={handleCancelButton}
            editIndex={editIndex}
            savedEducation={userData.education}
            educationFormData={educationFormData}
          />
          <ExperienceForm
            onChange={(e) => handleFormDataChange(e, 'experience')}
            onSubmit={(e) => handleSubmitButton(e, 'experience')}
            handleEdit={handleEditButton}
            handleSave={handleSaveButton}
            handleDelete={handleDeleteButton}
            handleCancel={handleCancelButton}
            editIndex={editIndex}
            experienceFormData={experienceFormData}
            savedExperience={userData.experience}
          />
        </div>
        <div className="resume-container">
          <ResumeInfoSection personalInfo={userData.personalInfo} contactInfo={userData.contactInfo} />
          <div className="resume-main-section">
            <ResumeSummarySection summary={userData.personalInfo.summary} />
            <ResumeEducationSection education={userData.education} formatDate={formatDate} />
            <ResumeExperienceSection experienceData={userData.experience} formatDate={formatDate} />
          </div>
        </div>
      </div>
    </>
  );
}
