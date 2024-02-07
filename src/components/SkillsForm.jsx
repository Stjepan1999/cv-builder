import '../style.css';
import skills from '../assets/images/skills.png';
import { Input } from './Input';
import { FormButtons } from './FormButtons';
import { InputContainer } from './InputContainer';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export const SkillsForm = ({ savedSkills, onSubmitSuccess, onSaveClick }) => {
  const { register, handleSubmit, reset, watch } = useForm();

  const [editIndex, setEditIndex] = useState(null);

  const handleSubmitClick = (data) => {
    onSubmitSuccess(data.skill);
    reset();
  };

  const handleEditClick = (index) => {
    reset({ skill: savedSkills[index] });
    setEditIndex(index);
  };

  const handleSaveClick = () => {
    onSaveClick(savedSkills.map((item, index) => (index === editIndex ? watch('skill') : item)));
    setEditIndex(null);
    reset({ skill: '' });
  };

  const handleDeleteClick = () => {
    onSaveClick(savedSkills.filter((item, index) => index !== editIndex));
    setEditIndex(null);
    reset({ skill: '' });
  };

  const handleCancelClick = () => {
    setEditIndex(null);
    reset({ skill: '' });
  };

  return (
    <div className="section-container">
      <h1>
        {' '}
        <img src={skills} className="section-icon education" alt="Person skill icon" />
        Skills
      </h1>
      <div key="index" className="skill-container">
        {savedSkills.map((skill, index) => (
          <div className="skill" key={index} onClick={() => handleEditClick(index)}>
            {skill}
          </div>
        ))}
      </div>
      <form className="form" onSubmit={handleSubmit(handleSubmitClick)}>
        <InputContainer type="text" id="skill" label="Skill" placeholder="Enter skill" register={register} />
        <FormButtons
          buttonText={'Skill'}
          editIndex={editIndex}
          onSaveClick={handleSaveClick}
          onDeleteClick={handleDeleteClick}
          onCancelClick={handleCancelClick}
        />
      </form>
    </div>
  );
};
