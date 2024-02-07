import { Input } from './Input';
import { Textarea } from './Textarea';
import personIcon from '../assets/images/person.png';
import '../style.css';
import { InputContainer } from './InputContainer';

export const PersonalDetailsForm = ({ firstName, lastName, professionalTitle, summary, register }) => {
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
          id="firstName"
          placeholder="Enter First Name"
          register={register}
        />
        <InputContainer label="Last Name" type="text" id="lastName" placeholder="Enter Last Name" register={register} />
        <InputContainer
          label="Professional Title"
          type="text"
          id="professionalTitle"
          placeholder="e.g., Web Developer"
          register={register}
        />
        <Textarea label="Summary" id="summary" placeholder="Write a brief summary about yourself" register={register} />
      </form>
    </div>
  );
};
