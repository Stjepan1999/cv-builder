import '../style.css';
import skills from '../assets/images/skills.png';
import { InputContainer } from './InputContainer';

export function SkillsForm({
  onSubmit,
  onChange,
  savedSkills,
  editIndex,
  handleEdit,
  handleSave,
  handleDelete,
  handleCancel,
  skillFormData,
}) {
  return (
    <div className="section-container">
      <h1>
        {' '}
        <img src={skills} className="section-icon education" />
        Skills
      </h1>
      <div key="index" className="skill-container">
        {savedSkills.map((skill, index) => (
          <div className="skill" key={index}>
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
        {editIndex === null ? (
          <>
            <button type="submit" className="button button-wide">
              + Skill
            </button>
          </>
        ) : (
          <div className="edit-buttons-container">
            <button type="button" onClick={handleDelete} className="button">
              Delete
            </button>
            <div className="button-group">
              <button type="button" onClick={handleCancel} className="button">
                Cancel
              </button>
              <button type="button" onClick={handleSave} className="button button-blue">
                Save
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
