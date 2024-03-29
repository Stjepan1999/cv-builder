import { Input } from '../Input';
import { FormButtons } from './FormButtons';
import { useState } from 'react';
import '../../style.css';
import graduationCap from '../../assets/images/graduation-cap.png';
import editIcon from '../../assets/images/edit.png';
import { useForm } from 'react-hook-form';

export const EducationForm = ({ savedEducation, onSubmitSuccess, onSaveClick }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const [editIndex, setEditIndex] = useState(null);

  const initialEducationForm = {
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
  };

  const handleSubmitClick = (data) => {
    onSubmitSuccess(data, 'education');
    reset(initialEducationForm);
  };

  const handleEditClick = (index) => {
    reset(savedEducation[index]);
    setEditIndex(index);
  };

  const handleSaveClick = () => {
    const updatedData = savedEducation.map((item, index) => (index === editIndex ? watch() : item));
    onSaveClick(updatedData, 'education');
    setEditIndex(null);
    reset(initialEducationForm);
  };

  const handleDeleteClick = () => {
    const updatedData = savedEducation.filter((item, index) => index !== editIndex);
    onSaveClick(updatedData, 'education');
    setEditIndex(null);
    reset(initialEducationForm);
  };

  const handleCancelClick = () => {
    setEditIndex(null);
    reset(initialEducationForm);
  };

  return (
    <div className="section-container">
      <h1 className="section-header">
        <img src={graduationCap} className="section-icon education" alt="Graduation cap" />
        Education
      </h1>
      {savedEducation.map((data, index) => (
        <div key={index} className="section-saved-data">
          <p>{data.school}</p>
          <button onClick={() => handleEditClick(index)} className="button-no-style">
            <img src={editIcon} alt="Edit" className="button-image" />
          </button>
        </div>
      ))}

      <form className="form" onSubmit={handleSubmit(handleSubmitClick)}>
        <Input
          id="school"
          label="School"
          type="text"
          placeholder="e.g., University of London"
          register={register}
          errors={errors}
          maxLength={60}
        />
        <Input
          id="degree"
          label="Degree"
          type="text"
          placeholder="e.g., Master's Degree in Computer Science"
          register={register}
          errors={errors}
          maxLength={60}
        />
        <Input
          id="startDate"
          label="Start Date"
          type="date"
          placeholder="MM/YYYY"
          register={register}
          errors={errors}
        />
        <Input id="endDate" label="End Date" type="date" placeholder="MM/YYYY" register={register} errors={errors} />

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
