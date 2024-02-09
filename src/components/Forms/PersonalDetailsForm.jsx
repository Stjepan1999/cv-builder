import { Input } from '../Input';
import { Textarea } from '../Textarea';
import personIcon from '../../assets/images/person.png';
import '../../style.css';

export const PersonalDetailsForm = ({ register, errors }) => {
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
          id="firstName"
          placeholder="Enter First Name"
          register={register}
          errors={errors}
          maxLength={20}
        />
        <Input
          label="Last Name"
          type="text"
          id="lastName"
          placeholder="Enter Last Name"
          register={register}
          errors={errors}
          maxLength={20}
        />
        <Input
          label="Professional Title"
          type="text"
          id="professionalTitle"
          placeholder="e.g., Web Developer"
          register={register}
          errors={errors}
          maxLength={40}
        />
        <Textarea
          label="Summary"
          id="summary"
          placeholder="Write a brief summary about yourself"
          register={register}
          errors={errors}
          maxLength={500}
        />
      </form>
    </div>
  );
};
