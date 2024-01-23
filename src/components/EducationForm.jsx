import { InputContainer } from './InputContainer';
import '../style.css';

export function EducationForm({ school, degree, startDate, endDate, onChange, onSubmit }) {
  return (
    <div className="section-container">
      <h1>Education</h1>
      <form className="form" onSubmit={onSubmit}>
        <InputContainer
          type="text"
          id="school"
          label="School"
          name="school"
          placeholder="University of London"
          value={school}
          onChange={onChange}
        />
        <InputContainer
          type="text"
          id="degree"
          label="Degree"
          name="degree"
          placeholder="Master's Degree in Programming"
          value={degree}
          onChange={onChange}
        />
        <InputContainer
          type="date"
          id="startDate"
          label="Start Date"
          name="startDate"
          placeholder=""
          value={startDate}
          onChange={onChange}
        />
        <InputContainer
          type="date"
          id="endDate"
          label="End Date"
          name="endDate"
          placeholder=""
          value={endDate}
          onChange={onChange}
        />
        <button type="submit" className="button button-wide">
          + Education
        </button>
      </form>
    </div>
  );
}
