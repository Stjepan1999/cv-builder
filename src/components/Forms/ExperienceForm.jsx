import { useState } from 'react';
import { Input } from '../Input';
import { Textarea } from '../Textarea';
import { FormButtons } from './FormButtons';
import '../../style.css';
import experienceIcon from '../../assets/images/briefcase.png';
import editIcon from '../../assets/images/edit.png';
import { useForm } from 'react-hook-form';

export const ExperienceForm = ({ savedExperience, onSubmitSuccess, onSaveClick }) => {
  const { register, handleSubmit, reset, watch } = useForm();

  const [editIndex, setEditIndex] = useState(null);

  const initialExperienceForm = {
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    location: '',
    description: '',
  };

  const handleSubmitClick = (data) => {
    onSubmitSuccess(data, 'experience');
    reset(initialExperienceForm);
  };

  const handleEditClick = (index) => {
    reset(savedExperience[index]);
    setEditIndex(index);
  };

  const handleSaveClick = () => {
    const updatedData = savedExperience.map((item, index) => (index === editIndex ? watch() : item));
    onSaveClick(updatedData, 'experience');
    setEditIndex(null);
    reset(initialExperienceForm);
  };

  const handleDeleteClick = () => {
    const updatedData = savedExperience.filter((item, index) => index !== editIndex);
    onSaveClick(updatedData, 'experience');
    setEditIndex(null);
    reset(initialExperienceForm);
  };

  const handleCancelClick = () => {
    setEditIndex(null);
    reset(initialExperienceForm);
  };

  return (
    <div className="section-container">
      <h1 className="section-header">
        <img src={experienceIcon} className="section-icon education" alt="Briefcase icon" />
        Experience
      </h1>
      {savedExperience.map((data, index) => (
        <div key={index} className="section-saved-data">
          <p>{data.company}</p>
          <button onClick={() => handleEditClick(index)} className="button-no-style">
            <img src={editIcon} alt="Edit" className="button-image" />
          </button>
        </div>
      ))}

      <form className="form" onSubmit={handleSubmit(handleSubmitClick)}>
        <Input
          type="text"
          id="company"
          label="Company"
          placeholder="Enter Company Name"
          register={register}
          maxLength={60}
        />
        <Input
          type="text"
          id="position"
          label="Position"
          placeholder="Enter Position"
          register={register}
          maxLength={60}
        />
        <Input type="date" id="startDate" label="Start Date" placeholder="MM/YYYY" register={register} />
        <Input type="date" id="endDate" label="End Date" placeholder="MM/YYYY" register={register} />
        <Input
          type="text"
          id="location"
          label="Location"
          placeholder="Enter location"
          register={register}
          maxLength={25}
        />
        <Textarea
          id="description"
          label="Description"
          placeholder="Describe main tasks and achievements"
          register={register}
          maxLength={500}
        />
        <FormButtons
          buttonText={'Experience'}
          editIndex={editIndex}
          onSaveClick={handleSaveClick}
          onDeleteClick={handleDeleteClick}
          onCancelClick={handleCancelClick}
        />
      </form>
    </div>
  );
};
