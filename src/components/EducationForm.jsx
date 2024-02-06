import { Input } from './Input';
import { FormButtons } from './FormButtons';
import '../style.css';
import graduationCap from '../assets/images/graduation-cap.png';
import editIcon from '../assets/images/edit.png';

export const EducationForm = ({
  savedEducation,
  educationFormData,
  editIndex,
  onChange,
  onSubmit,
  onEditClick,
  onSaveClick,
  onDeleteClick,
  onCancelClick,
}) => {
  return (
    <div className="section-container">
      <h1>
        <img src={graduationCap} className="section-icon education" alt="Graduation cap" />
        Education
      </h1>
      {savedEducation[0].school &&
        savedEducation.map((data, index) => (
          <div key={index} className="section-saved-data">
            <p>{data.school}</p>
            <button onClick={(e) => onEditClick(e, index)} className="no-button-style">
              <img src={editIcon} alt="Edit" className="button-image" />
            </button>
          </div>
        ))}

      <form className="form" onSubmit={onSubmit}>
        <Input
          type="text"
          id="school"
          label="School"
          name="school"
          placeholder="e.g., University of London"
          value={educationFormData.school}
          onChange={onChange}
        />
        <Input
          type="text"
          id="degree"
          label="Degree"
          name="degree"
          placeholder="e.g., Master's Degree in Computer Science"
          value={educationFormData.degree}
          onChange={onChange}
        />
        <Input
          type="date"
          id="startDate"
          label="Start Date"
          name="startDate"
          placeholder="MM/YYYY"
          value={educationFormData.startDate}
          onChange={onChange}
        />
        <Input
          type="date"
          id="endDate"
          label="End Date"
          name="endDate"
          placeholder="MM/YYYY"
          value={educationFormData.endDate}
          onChange={onChange}
        />
        <FormButtons
          buttonText={'Education'}
          editIndex={editIndex}
          onSaveClick={onSaveClick}
          onDeleteClick={onDeleteClick}
          onCancelClick={onCancelClick}
        />
      </form>
    </div>
  );
};
