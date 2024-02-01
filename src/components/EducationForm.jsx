import { InputContainer } from './InputContainer';
import { FormButtons } from './FormButtons';
import '../style.css';
import PropTypes from 'prop-types';
import graduationCap from '../assets/images/graduation-cap.png';
import editIcon from '../assets/images/edit.png';

export const EducationForm = ({
  savedEducation,
  educationFormData,
  editIndex,
  onChange,
  onSubmit,
  handleEdit,
  handleSave,
  handleDelete,
  handleCancel,
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
            <button onClick={(e) => handleEdit(e, index)} className="no-button-style">
              <img src={editIcon} alt="Edit" className="button-image" />
            </button>
          </div>
        ))}

      <form className="form" onSubmit={onSubmit}>
        <InputContainer
          type="text"
          id="school"
          label="School"
          name="school"
          placeholder="University of London"
          value={educationFormData.school}
          onChange={onChange}
        />
        <InputContainer
          type="text"
          id="degree"
          label="Degree"
          name="degree"
          placeholder="Master's Degree in Programming"
          value={educationFormData.degree}
          onChange={onChange}
        />
        <InputContainer
          type="date"
          id="startDate"
          label="Start Date"
          name="startDate"
          value={educationFormData.startDate}
          onChange={onChange}
        />
        <InputContainer
          type="date"
          id="endDate"
          label="End Date"
          name="endDate"
          value={educationFormData.endDate}
          onChange={onChange}
        />
        <FormButtons
          buttonText={'Education'}
          editIndex={editIndex}
          handleSave={handleSave}
          handleDelete={handleDelete}
          handleCancel={handleCancel}
        />
      </form>
    </div>
  );
};

EducationForm.propTypes = {
  savedEducation: PropTypes.array,
  educationFormData: PropTypes.object,
  editIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  handleEdit: PropTypes.func,
  handleSave: PropTypes.func,
  handleDelete: PropTypes.func,
  handleCancel: PropTypes.func,
};
