import { InputContainer } from './InputContainer';
import '../style.css';
import graduationCap from '../assets/images/graduation-cap.png';

export function EducationForm({ school, degree, startDate, endDate, onChange, onSubmit }) {
  return (
    <div className="section-container">
      <h1>
        <img src={graduationCap} className="section-icon education" />
        Education
      </h1>
      <div className="section-saved-data">University of London</div>
      <div className="section-saved-data">University of London</div>
      <div className="section-saved-data">University of London</div>

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
