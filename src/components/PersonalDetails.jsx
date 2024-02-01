import { InputContainer } from './InputContainer';
import personIcon from '../assets/images/person.png';
import PropTypes from 'prop-types';
import '../style.css';

export const PersonalDetails = ({ firstName, lastName, professionalTitle, summary, onChange }) => {
  return (
    <div className="section-container">
      <h1 className="section-header">
        <img src={personIcon} className="section-icon" alt="Person icon" />
        Personal Details
      </h1>
      <form className="form">
        <InputContainer
          label="First Name"
          type="text"
          id="first-name"
          name="firstName"
          placeholder="Enter First Name"
          value={firstName}
          onChange={onChange}
        />
        <InputContainer
          label="Last Name"
          type="text"
          name="lastName"
          id="last-name"
          placeholder="Enter Last Name"
          value={lastName}
          onChange={onChange}
        />
        <InputContainer
          label="Professional Title"
          type="text"
          name="professionalTitle"
          id="professional-title"
          placeholder="Software Developer"
          value={professionalTitle}
          onChange={onChange}
        />
        <InputContainer
          label="Summary"
          type="textarea"
          name="summary"
          id="summary"
          placeholder="Write summary about yourself"
          value={summary}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

PersonalDetails.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  professionalTitle: PropTypes.string,
  summary: PropTypes.string,
  onChange: PropTypes.func,
};
