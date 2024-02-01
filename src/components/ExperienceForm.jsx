import { InputContainer } from './InputContainer';
import { FormButtons } from './FormButtons';
import '../style.css';
import experienceIcon from '../assets/images/briefcase.png';
import editIcon from '../assets/images/edit.png';

export const ExperienceForm = ({
  onSubmit,
  onChange,
  experienceFormData,
  savedExperience,
  editIndex,
  handleEdit,
  handleSave,
  handleDelete,
  handleCancel,
}) => {
  return (
    <div className="section-container">
      <h1>
        <img src={experienceIcon} className="section-icon education" alt="Briefcase icon" />
        Experience
      </h1>
      {savedExperience[0].company &&
        savedExperience.map((data, index) => (
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
        <FormButtons
          buttonText={'Experience'}
          editIndex={editIndex}
          handleSave={handleSave}
          handleDelete={handleDelete}
          handleCancel={handleCancel}
        />
      </form>
    </div>
  );
};
