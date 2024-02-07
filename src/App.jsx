import { PersonalDetailsForm } from './components/PersonalDetailsForm';
import { ContactInfoForm } from './components/ContactInfoForm';
import { ResumeInfoSection } from './components/ResumeInfoSection';
import { ResumeSummarySection } from './components/ResumeSummarySection';
import { EducationForm } from './components/EducationForm';
import { ExperienceForm } from './components/ExperienceForm';
import { SkillsForm } from './components/SkillsForm';
import { ResumeExperienceSection } from './components/ResumeExperienceSection';
import { ResumeSkillsSection } from './components/ResumeSkillsSection';
import { ResumeEducationSection } from './components/ResumeEducationSection';
import { exampleData } from './exampleData';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './style.css';
import logo from './assets/images/cv.png';
import jsPDF from 'jspdf';

export const App = () => {
  const { register, watch, reset } = useForm();

  const initialUserData = {
    personalInfo: {
      firstName: '',
      lastName: '',
      professionalTitle: '',
      summary: '',
    },
    contactInfo: {
      email: '',
      phone: '',
      location: '',
      website: '',
    },
    skills: [],
    education: [],
    experience: [],
  };

  const [userData, setUserData] = useState(initialUserData);

  const personalInfo = {
    firstName: watch('firstName'),
    lastName: watch('lastName'),
    professionalTitle: watch('professionalTitle'),
    summary: watch('summary'),
  };

  const handleUserDataChange = (e, section) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [section]: { ...prevData[section], [name]: value } }));
  };

  const handleEducationSubmit = (formData) => {
    setUserData((prevData) => ({ ...prevData, education: [...prevData.education, formData] }));
  };

  const handleEducationSaveClick = (formData) => {
    setUserData((prevData) => ({ ...prevData, education: formData }));
  };

  const handleExperienceSubmit = (formData) => {
    setUserData((prevData) => ({ ...prevData, experience: { ...prevData.experience, formData } }));
  };

  const handleExperienceSaveClick = (formData) => {
    setUserData((prevData) => ({ ...prevData, experience: formData }));
  };

  const handleSkillSubmit = (formData) => {
    setUserData((prevData) => ({ ...prevData, skills: [...prevData.skills, formData] }));
  };

  const handleSkillSaveClick = (formData) => {
    setUserData((prevData) => ({ ...prevData, skills: formData }));
  };

  const loadExampleData = () => {
    setUserData(exampleData);
    reset(exampleData.personalInfo);
  };

  const handleDownload = () => {
    const content = new jsPDF('portrait', 'pt', 'a4');
    content.html(document.querySelector('.resume-container')).then(() => {
      content.save('resume.pdf');
    });
  };

  return (
    <>
      <div className="main">
        <div className="forms-container">
          <div className="logo-container">
            <img src={logo} className="logo" alt="CV Builder Logo" />
            <h1 className="header">CV BUILDER</h1>
          </div>
          <div className="section-container">
            <div className="control-buttons">
              <button className="button button-wide" onClick={loadExampleData}>
                Load Example
              </button>
              <button className="button button-wide button-red" onClick={handleDownload}>
                Download PDF
              </button>
            </div>
          </div>
          <PersonalDetailsForm {...userData.personalInfo} register={register} />
          <ContactInfoForm {...userData.contactInfo} onChange={(e) => handleUserDataChange(e, 'contactInfo')} />
          <EducationForm
            onSubmitSuccess={handleEducationSubmit}
            onSaveClick={handleEducationSaveClick}
            savedEducation={userData.education}
          />
          <ExperienceForm
            onSubmitSuccess={handleExperienceSubmit}
            onSaveClick={handleExperienceSaveClick}
            savedExperience={userData.experience}
          />
          <SkillsForm
            onSubmitSuccess={handleSkillSubmit}
            onSaveClick={handleSkillSaveClick}
            savedSkills={userData.skills}
          />
        </div>
        <div className="resume-container">
          <ResumeInfoSection personalInfo={personalInfo} contactInfo={userData.contactInfo} />
          <div className="resume-main-section">
            <ResumeSummarySection summary={personalInfo.summary} />
            <ResumeEducationSection education={userData.education} />
            <ResumeExperienceSection experienceData={userData.experience} />
            <ResumeSkillsSection skills={userData.skills} />
          </div>
        </div>
      </div>
    </>
  );
};
