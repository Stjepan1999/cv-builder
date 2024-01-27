import { InputContainer } from './InputContainer';
import '../style.css';
import experienceIcon from '../assets/images/briefcase.png';
import editIcon from '../assets/images/edit.png';

export function ExperienceForm({
  onSubmit,
  onChange,
  experienceFormData,
  savedExperience,
  editIndex,
  handleEdit,
  handleSave,
  handleDelete,
  handleCancel,
}) {
  return (
    <div className="section-container">
      <h1>
        <img src={experienceIcon} className="section-icon education" />
        Experience
      </h1>
      {savedExperience.map((data, index) => (
        <div key={index} className="section-saved-data">
          <p>{data.company}</p>
          <button onClick={(e) => handleEdit(e, index)} className="no-button-style">
            <img src={editIcon} alt="Edit" className="button-image" />
          </button>
        </div>
      ))}

      <form className="form" onSubmit={onSubmit}>
        <InputContainer
          type="text"
          id="company"
          label="Company"
          name="company"
          placeholder="Enter company name"
          value={experienceFormData.company}
          onChange={onChange}
        />
        <InputContainer
          type="text"
          id="position"
          label="Position"
          name="position"
          placeholder="Enter position"
          value={experienceFormData.position}
          onChange={onChange}
        />
        <InputContainer
          type="date"
          id="startDate"
          label="Start Date"
          name="startDate"
          value={experienceFormData.startDate}
          onChange={onChange}
        />
        <InputContainer
          type="date"
          id="endDate"
          label="End Date"
          name="endDate"
          value={experienceFormData.endDate}
          onChange={onChange}
        />
        <InputContainer
          type="text"
          id="location"
          label="Location"
          name="location"
          placeholder="Enter location"
          value={experienceFormData.location}
          onChange={onChange}
        />
        <InputContainer
          type="textarea"
          id="description"
          label="Description"
          name="description"
          placeholder="Main tasks"
          value={experienceFormData.description}
          onChange={onChange}
        />
        {editIndex === null ? (
          <>
            <button type="submit" className="button button-wide">
              + Experience
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
