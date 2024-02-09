import { Input } from '../Input';
import contactIcon from '../../assets/images/phone-box.png';
import '../../style.css';

export const ContactInfoForm = ({ register, errors }) => {
  return (
    <div className="section-container">
      <h1 className="section-header">
        <img src={contactIcon} className="section-icon" alt="Phone Icon" />
        Contact Info
      </h1>
      <form className="form">
        <Input
          type="text"
          id="email"
          label="Email"
          placeholder="example@email.com"
          register={register}
          errors={errors}
          maxLength={50}
        />
        <Input
          type="tel"
          id="phone"
          label="Phone"
          placeholder="+44 123 4567 910"
          register={register}
          errors={errors}
          maxLength={20}
        />
        <Input
          type="text"
          id="location"
          label="Location"
          placeholder="e.g., London, UK"
          register={register}
          errors={errors}
          maxLength={50}
        />
        <Input
          type="text"
          id="website"
          label="Website"
          placeholder="www.linkedin.com/johnsmith"
          register={register}
          errors={errors}
          maxLength={60}
        />
      </form>
    </div>
  );
};
