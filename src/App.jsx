import { PersonalDetailsForm } from './components/Forms/PersonalDetailsForm';
import { ContactInfoForm } from './components/Forms/ContactInfoForm';
import { ResumeInfoSection } from './components/Resume/ResumeInfoSection';
import { ResumeSummarySection } from './components/Resume/ResumeSummarySection';
import { EducationForm } from './components/Forms/EducationForm';
import { ExperienceForm } from './components/Forms/ExperienceForm';
import { SkillsForm } from './components/Forms/SkillsForm';
import { ResumeExperienceSection } from './components/Resume/ResumeExperienceSection';
import { ResumeSkillsSection } from './components/Resume/ResumeSkillsSection';
import { ResumeEducationSection } from './components/Resume/ResumeEducationSection';
import { exampleData } from './exampleData';
import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import './style.css';
import logo from './assets/images/cv.png';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const App = () => {
  const {
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const resumeRef = useRef(null);

  const initialUserData = {
    personalInfo: {
      firstName: '',
      lastName: '',
      professionalTitle: '',
      summary: '',
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

  const contactInfo = {
    email: watch('email'),
    phone: watch('phone'),
    location: watch('location'),
    website: watch('website'),
  };

  const handleDataSubmit = (formData, section) => {
    setUserData((prevData) => ({ ...prevData, [section]: [...prevData[section], formData] }));
  };

  const handleDataSaveClick = (formData, section) => {
    setUserData((prevData) => ({ ...prevData, [section]: formData }));
  };

  const handleLoadExampleClick = () => {
    setUserData(exampleData);
    reset(exampleData.personalInfo);
  };

  const handleClearClick = () => {
    setUserData(initialUserData);
    reset(initialUserData.personalInfo);
  };

  const handleDownloadClick = () => {
    const pdfWidth = 210; // Width of A4 page in mm
    const pdfHeight = 297; // Height of A4 page in mm

    const content = new jsPDF('portrait', 'mm', 'a4');

    html2canvas(resumeRef.current, { scale: 6 })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/jpeg', 0.8);
        content.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
        content.save('resume.pdf');
      })
      .catch((error) => {
        console.error('Error generating PDF:', error);
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
              <button className="button button-wide" onClick={handleLoadExampleClick}>
                Load Example
              </button>
              <button className="button button-wide" onClick={handleClearClick}>
                Clear
              </button>
              <button className="button button-wide button-red" onClick={handleDownloadClick}>
                Download PDF
              </button>
            </div>
          </div>
          <PersonalDetailsForm register={register} errors={errors} />
          <ContactInfoForm register={register} errors={errors} />
          <EducationForm
            onSubmitSuccess={handleDataSubmit}
            onSaveClick={handleDataSaveClick}
            savedEducation={userData.education}
          />
          <ExperienceForm
            onSubmitSuccess={handleDataSubmit}
            onSaveClick={handleDataSaveClick}
            savedExperience={userData.experience}
          />
          <SkillsForm
            onSubmitSuccess={handleDataSubmit}
            onSaveClick={handleDataSaveClick}
            savedSkills={userData.skills}
          />
        </div>
        <div className="resume-container">
          <div className="resume" ref={resumeRef}>
            <ResumeInfoSection personalInfo={personalInfo} contactInfo={contactInfo} />
            <div className="resume-main-section">
              <ResumeSummarySection summary={personalInfo.summary} />
              <ResumeEducationSection education={userData.education} />
              <ResumeExperienceSection experienceData={userData.experience} />
              <ResumeSkillsSection skills={userData.skills} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
