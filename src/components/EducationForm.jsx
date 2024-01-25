import { InputContainer } from './InputContainer';
import '../style.css';
import graduationCap from '../assets/images/graduation-cap.png';

export function EducationForm({
  savedEducation,
  educationData,
  editIndex,
  onChange,
  onSubmit,
  handleEdit,
  handleSave,
  handleDelete,
  handleCancel,
}) {
  return (
    <div className="section-container">
      <h1>
        <img src={graduationCap} className="section-icon education" />
        Education
      </h1>
      {savedEducation.map((data, index) => (
        <div key={index} className="section-saved-data">
          <p>{data.school}</p>
          <button onClick={(e) => handleEdit(e, index)}>Edit</button>
        </div>
      ))}

      <form className="form" onSubmit={onSubmit}>
        <InputContainer
          type="text"
          id="school"
          label="School"
          name="school"
          placeholder="University of London"
          value={educationData.school}
          onChange={onChange}
        />
        <InputContainer
          type="text"
          id="degree"
          label="Degree"
          name="degree"
          placeholder="Master's Degree in Programming"
          value={educationData.degree}
          onChange={onChange}
        />
        <InputContainer
          type="date"
          id="startDate"
          label="Start Date"
          name="startDate"
          placeholder=""
          value={educationData.startDate}
          onChange={onChange}
        />
        <InputContainer
          type="date"
          id="endDate"
          label="End Date"
          name="endDate"
          placeholder=""
          value={educationData.endDate}
          onChange={onChange}
        />
        {editIndex === null ? (
          <>
            <button type="submit" className="button button-wide">
              + Education
            </button>
          </>
        ) : (
          <>
            <button type="button" onClick={handleDelete}>
              Delete
            </button>
            <button type="button" onClick={handleSave}>
              Save
            </button>
            <button type="button" onClick={handleCancel}>
              cancel
            </button>
          </>
        )}
      </form>
    </div>
  );
}
