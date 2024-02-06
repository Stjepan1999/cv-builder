import '../style.css';
import skills from '../assets/images/skills.png';
import { Input } from './Input';
import { FormButtons } from './FormButtons';

export const SkillsForm = ({
  skillFormData,
  savedSkills,
  editIndex,
  onSubmit,
  onChange,
  onEditClick,
  onSaveClick,
  onDeleteClick,
  onCancelClick,
}) => {
  return (
    <div className="section-container">
      <h1>
        {' '}
        <img src={skills} className="section-icon education" alt="Person skill icon" />
        Skills
      </h1>
      <div key="index" className="skill-container">
        {savedSkills.map((skill, index) => (
          <div className="skill" key={index} onClick={(e) => onEditClick(e, index)}>
            {skill}
          </div>
        ))}
      </div>
      <form className="form" onSubmit={onSubmit}>
        <Input
          type="Skill"
          id="skill"
          label="Skill"
          name="skills"
          placeholder="Enter skill"
          value={skillFormData}
          onChange={onChange}
        />
        <FormButtons
          buttonText={'Skill'}
          editIndex={editIndex}
          onSaveClick={onSaveClick}
          onDeleteClick={onDeleteClick}
          onCancelClick={onCancelClick}
        />
      </form>
    </div>
  );
};
