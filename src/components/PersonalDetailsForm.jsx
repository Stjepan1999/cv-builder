import { Input } from './Input';
import { Textarea } from './Textarea';
import personIcon from '../assets/images/person.png';
import '../style.css';

export const PersonalDetailsForm = ({ firstName, lastName, professionalTitle, summary, onChange }) => {
  return (
    <div className="section-container">
      <h1 className="section-header">
        <img src={personIcon} className="section-icon" alt="Person icon" />
        Personal Details
      </h1>
      <form className="form">
        <Input
          label="First Name"
          type="text"
          id="first-name"
          name="firstName"
          placeholder="Enter First Name"
          value={firstName}
          onChange={onChange}
        />
        <Input
          label="Last Name"
          type="text"
          name="lastName"
          id="last-name"
          placeholder="Enter Last Name"
          value={lastName}
          onChange={onChange}
        />
        <Input
          label="Professional Title"
          type="text"
          name="professionalTitle"
          id="professional-title"
          placeholder="e.g., Web Developer"
          value={professionalTitle}
          onChange={onChange}
        />
        <Textarea
          label="Summary"
          type="textarea"
          name="summary"
          id="summary"
          placeholder="Write a brief summary about yourself"
          value={summary}
          onChange={onChange}
        />
      </form>
    </div>
  );
};
