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
import './style.css';
import logo from './assets/images/cv.png';
import jsPDF from 'jspdf';

export const App = () => {
  const [userData, setUserData] = useState({
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

  const [skillFormData, setSkillFormData] = useState('');

  const [educationEditIndex, setEducationEditIndex] = useState(null);
  const [experienceEditIndex, setExperienceEditIndex] = useState(null);
  const [skillEditIndex, setSkillEditIndex] = useState(null);

  const handleUserDataChange = (e, section) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [section]: { ...prevData[section], [name]: value } }));
  };

  const handleFormDataChange = (e, section) => {
    const { name, value } = e.target;
    if (section === 'education') {
      setEducationFormData({ ...educationFormData, [name]: value });
    } else if (section === 'experience') {
      setExperienceFormData({ ...experienceFormData, [name]: value });
    } else if (section === 'skills') {
      setSkillFormData(value);
    }
  };

  const handleSubmitClick = (e, section) => {
    e.preventDefault();
    if (section === 'education') {
      setUserData((prevData) => ({ ...prevData, education: [...prevData.education, educationFormData] }));
      setEducationFormData({ school: '', degree: '', startDate: '', endDate: '' });
    } else if (section === 'experience') {
      setUserData((prevData) => ({ ...prevData, experience: [...prevData.experience, experienceFormData] }));
      setExperienceFormData({ company: '', position: '', startDate: '', endDate: '', location: '', description: '' });
    } else if (section === 'skills') {
      setUserData((prevData) => ({ ...prevData, skills: [...prevData.skills, skillFormData] }));
      setSkillFormData('');
    }
  };

  const handleEducationEditClick = (e, index) => {
    e.preventDefault();
    setEducationFormData(userData.education[index]);
    setEducationEditIndex(index);
  };

  const handleExperienceEditClick = (e, index) => {
    e.preventDefault();
    setExperienceFormData(userData.experience[index]);
    setExperienceEditIndex(index);
  };

  const handleSkillEditClick = (e, index) => {
    e.preventDefault();
    setSkillFormData(userData.skills[index]);
    setSkillEditIndex(index);
  };

  const handleSaveClick = (e, section) => {
    e.preventDefault();
    if (section === 'education') {
      const updatedData = [...userData.education];
      updatedData[educationEditIndex] = educationFormData;
      setUserData((prevData) => ({ ...prevData, education: updatedData }));
      setEducationFormData({ school: '', degree: '', startDate: '', endDate: '' });
      setEducationEditIndex(null);
    } else if (section === 'experience') {
      const updatedData = [...userData.experience];
      updatedData[experienceEditIndex] = experienceFormData;
      setUserData((prevData) => ({ ...prevData, experience: updatedData }));
      setExperienceFormData({ company: '', position: '', startDate: '', endDate: '', location: '', description: '' });
      setExperienceEditIndex(null);
    } else if (section === 'skills') {
      const updatedData = [...userData.skills];
      updatedData[skillEditIndex] = skillFormData;
      setUserData((prevData) => ({ ...prevData, skills: updatedData }));
      setSkillFormData('');
      setSkillEditIndex(null);
    }
  };

  const handleDeleteClick = (e, section) => {
    e.preventDefault();
    if (section === 'education') {
      const updatedData = [...userData.education];
      updatedData.splice(educationEditIndex, 1);
      setUserData((prevData) => ({ ...prevData, education: updatedData }));
      setEducationFormData({ school: '', degree: '', startDate: '', endDate: '' });
      setEducationEditIndex(null);
    } else if (section === 'experience') {
      const updatedData = [...userData.experience];
      updatedData.splice(experienceEditIndex, 1);
      setUserData((prevData) => ({ ...prevData, experience: updatedData }));
      setExperienceFormData({ company: '', position: '', startDate: '', endDate: '', location: '', description: '' });
      setExperienceEditIndex(null);
    } else if (section === 'skills') {
      const updatedData = [...userData.skills];
      updatedData.splice(skillEditIndex, 1);
      setUserData((prevData) => ({ ...prevData, skills: updatedData }));
      setSkillFormData('');
      setSkillEditIndex(null);
    }
  };

  const handleCancelClick = (e, section) => {
    e.preventDefault();
    if (section === 'education') {
      setEducationFormData({ school: '', degree: '', startDate: '', endDate: '' });
      setEducationEditIndex(null);
    } else if (section === 'experience') {
      setExperienceFormData({ company: '', position: '', startDate: '', endDate: '', location: '', description: '' });
      setExperienceEditIndex(null);
    } else if (section === 'skills') {
      setSkillFormData('');
      setSkillEditIndex(null);
    }
  };

  const loadExampleData = () => {
    setUserData(exampleData);
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
          <PersonalDetailsForm {...userData.personalInfo} onChange={(e) => handleUserDataChange(e, 'personalInfo')} />
          <ContactInfoForm {...userData.contactInfo} onChange={(e) => handleUserDataChange(e, 'contactInfo')} />
          <EducationForm
            onChange={(e) => handleFormDataChange(e, 'education')}
            onSubmit={(e) => handleSubmitClick(e, 'education')}
            onEditClick={handleEducationEditClick}
            onSaveClick={(e) => handleSaveClick(e, 'education')}
            onDeleteClick={(e) => handleDeleteClick(e, 'education')}
            onCancelClick={(e) => handleCancelClick(e, 'education')}
            editIndex={educationEditIndex}
            savedEducation={userData.education}
            educationFormData={educationFormData}
          />
          <ExperienceForm
            onChange={(e) => handleFormDataChange(e, 'experience')}
            onSubmit={(e) => handleSubmitClick(e, 'experience')}
            onEditClick={handleExperienceEditClick}
            onSaveClick={(e) => handleSaveClick(e, 'experience')}
            onDeleteClick={(e) => handleDeleteClick(e, 'experience')}
            onCancelClick={(e) => handleCancelClick(e, 'experience')}
            editIndex={experienceEditIndex}
            experienceFormData={experienceFormData}
            savedExperience={userData.experience}
          />
          <SkillsForm
            onChange={(e) => handleFormDataChange(e, 'skills')}
            onSubmit={(e) => handleSubmitClick(e, 'skills')}
            onEditClick={handleSkillEditClick}
            onSaveClick={(e) => handleSaveClick(e, 'skills')}
            onDeleteClick={(e) => handleDeleteClick(e, 'skills')}
            onCancelClick={(e) => handleCancelClick(e, 'skills')}
            editIndex={skillEditIndex}
            skillFormData={skillFormData}
            savedSkills={userData.skills}
          />
        </div>
        <div className="resume-container">
          <ResumeInfoSection personalInfo={userData.personalInfo} contactInfo={userData.contactInfo} />
          <div className="resume-main-section">
            <ResumeSummarySection summary={userData.personalInfo.summary} />
            <ResumeEducationSection education={userData.education} />
            <ResumeExperienceSection experienceData={userData.experience} />
            <ResumeSkillsSection skills={userData.skills} />
          </div>
        </div>
      </div>
    </>
  );
};
