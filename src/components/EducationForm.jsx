import { Input } from './Input';
import { FormButtons } from './FormButtons';
import { useState } from 'react';
import '../style.css';
import graduationCap from '../assets/images/graduation-cap.png';
import editIcon from '../assets/images/edit.png';

export const EducationForm = ({ savedEducation, onSubmit, onSaveClick }) => {
  const [educationFormData, setEducationFormData] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
  });

  const [editIndex, setEditIndex] = useState(null);

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    setEducationFormData({ ...educationFormData, [name]: value });
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    onSubmit(educationFormData);
    setEducationFormData({ school: '', degree: '', startDate: '', endDate: '' });
  };

  const handleEditClick = (index) => {
    setEducationFormData(savedEducation[index]);
    setEditIndex(index);
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    const updatedData = [...savedEducation];
    updatedData[editIndex] = educationFormData;
    onSaveClick(updatedData);
    setEducationFormData({ school: '', degree: '', startDate: '', endDate: '' });
    setEditIndex(null);
  };

  const handleDeleteClick = () => {
    const updatedData = [...savedEducation];
    updatedData.splice(editIndex, 1);
    onSaveClick(updatedData);
    setEducationFormData({ school: '', degree: '', startDate: '', endDate: '' });
    setEditIndex(null);
  };

  const handleCancelClick = () => {
    setEducationFormData({ school: '', degree: '', startDate: '', endDate: '' });
    setEditIndex(null);
  };

  return (
    <div className="section-container">
      <h1>
        <img src={graduationCap} className="section-icon education" alt="Graduation cap" />
        Education
      </h1>
      {savedEducation.map((data, index) => (
        <div key={index} className="section-saved-data">
          <p>{data.school}</p>
          <button onClick={(e) => handleEditClick(index)} className="no-button-style">
            <img src={editIcon} alt="Edit" className="button-image" />
          </button>
        </div>
      ))}

      <form className="form" onSubmit={handleSubmitClick}>
        <Input
          type="text"
          id="school"
          label="School"
          name="school"
          placeholder="e.g., University of London"
          value={educationFormData.school}
          onChange={handleFormDataChange}
        />
        <Input
          type="text"
          id="degree"
          label="Degree"
          name="degree"
          placeholder="e.g., Master's Degree in Computer Science"
          value={educationFormData.degree}
          onChange={handleFormDataChange}
        />
        <Input
          type="date"
          id="startDate"
          label="Start Date"
          name="startDate"
          placeholder="MM/YYYY"
          value={educationFormData.startDate}
          onChange={handleFormDataChange}
        />
        <Input
          type="date"
          id="endDate"
          label="End Date"
          name="endDate"
          placeholder="MM/YYYY"
          value={educationFormData.endDate}
          onChange={handleFormDataChange}
        />
        <FormButtons
          buttonText={'Education'}
          editIndex={editIndex}
          onSaveClick={handleSaveClick}
          onDeleteClick={handleDeleteClick}
          onCancelClick={handleCancelClick}
        />
      </form>
    </div>
  );
};
