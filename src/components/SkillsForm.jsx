import '../style.css';
import skills from '../assets/images/skills.png';
import { InputContainer } from './InputContainer';
import { FormButtons } from './FormButtons';

export const SkillsForm = ({
  onSubmit,
  onChange,
  savedSkills,
  editIndex,
  handleEdit,
  handleSave,
  handleDelete,
  handleCancel,
  skillFormData,
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
          <div className="skill" key={index} onClick={(e) => handleEdit(e, index)}>
            {skill}
          </div>
        ))}
      </div>
      <form className="form" onSubmit={onSubmit}>
        <InputContainer
          type="Skill"
          id="skill"
          label="Skill"
          name="skills"
          placeholder="Enter skill"
          value={skillFormData}
          onChange={onChange}
        />
        <FormButtons
          editIndex={editIndex}
          handleSave={handleSave}
          handleDelete={handleDelete}
          handleCancel={handleCancel}
        />
      </form>
    </div>
  );
};
