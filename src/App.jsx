import { PersonalDetails } from './components/PersonalDetails';
import { ContactInfo } from './components/ContactInfo';
import { ResumeInfoSection } from './components/ResumeInfo';
import { ResumeSummarySection } from './components/ResumeSummary';
import { EducationForm } from './components/EducationForm';
import { ExperienceForm } from './components/ExperienceForm';
import { SkillsForm } from './components/SkillsForm';
import { ResumeExperienceSection } from './components/ResumeExperience';
import { ResumeSkillsSection } from './components/ResumeSkills';
import { ResumeEducationSection } from './components/ResumeEducation';
import { useState } from 'react';
import './style.css';
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
    skills: ['JavaScript', 'HTML', 'CSS', 'Git', 'React', 'Node.js', 'SQL', 'Communication', 'Teamwork', 'Germany'],
    education: [
      {
        school: 'University Of London',
        degree: 'Master degree in computer science',
        startDate: '2019-10-06',
        endDate: '2024-05-17',
      },
    ],
    experience: [
      {
        company: 'Tech Innovators Ltd',
        position: 'Senior Software Engineer',
        startDate: '2018-06-01',
        endDate: '2022-12-31',
        location: 'San Francisco, CA',
        description:
          'Led a team of developers in creating cutting-edge software solutions. Collaborated with cross-functional teams to deliver high-quality products. Contributed to the development and optimization of scalable and efficient code.',
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
    setEducationFormData({ ...educationFormData, [name]: value });
    if (section === 'education') {
      setEducationFormData({ ...educationFormData, [name]: value });
    } else if (section === 'experience') {
      setExperienceFormData({ ...experienceFormData, [name]: value });
    } else if (section === 'skills') {
      setSkillFormData(value);
    }
  };

  const handleSubmitButton = (e, section) => {
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

  const handleEducationEditButton = (e, index) => {
    e.preventDefault();
    setEducationFormData(userData.education[index]);
    setEducationEditIndex(index);
  };

  const handleExperienceEditButton = (e, index) => {
    e.preventDefault();
    setExperienceFormData(userData.experience[index]);
    setExperienceEditIndex(index);
  };

  const handleSkillEditButton = (e, index) => {
    e.preventDefault();
    setSkillFormData(userData.skills[index]);
    setSkillEditIndex(index);
  };

  const handleSaveButton = (e, section) => {
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

  const handleDeleteButton = (e, section) => {
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

  const handleCancelButton = (e, section) => {
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
            handleEdit={handleEducationEditButton}
            handleSave={(e) => handleSaveButton(e, 'education')}
            handleDelete={(e) => handleDeleteButton(e, 'education')}
            handleCancel={(e) => handleCancelButton(e, 'education')}
            editIndex={educationEditIndex}
            savedEducation={userData.education}
            educationFormData={educationFormData}
          />
          <ExperienceForm
            onChange={(e) => handleFormDataChange(e, 'experience')}
            onSubmit={(e) => handleSubmitButton(e, 'experience')}
            handleEdit={handleExperienceEditButton}
            handleSave={(e) => handleSaveButton(e, 'experience')}
            handleDelete={(e) => handleDeleteButton(e, 'experience')}
            handleCancel={(e) => handleCancelButton(e, 'experience')}
            editIndex={experienceEditIndex}
            experienceFormData={experienceFormData}
            savedExperience={userData.experience}
          />
          <SkillsForm
            onChange={(e) => handleFormDataChange(e, 'skills')}
            onSubmit={(e) => handleSubmitButton(e, 'skills')}
            handleEdit={handleSkillEditButton}
            handleSave={(e) => handleSaveButton(e, 'skills')}
            handleDelete={(e) => handleDeleteButton(e, 'skills')}
            handleCancel={(e) => handleCancelButton(e, 'skills')}
            editIndex={skillEditIndex}
            skillFormData={skillFormData}
            savedSkills={userData.skills}
          />
        </div>
        <div className="resume-container">
          <ResumeInfoSection personalInfo={userData.personalInfo} contactInfo={userData.contactInfo} />
          <div className="resume-main-section">
            <ResumeSummarySection summary={userData.personalInfo.summary} />
            <ResumeEducationSection education={userData.education} formatDate={formatDate} />
            <ResumeExperienceSection experienceData={userData.experience} formatDate={formatDate} />
            <ResumeSkillsSection skills={userData.skills} />
          </div>
        </div>
      </div>
    </>
  );
}
