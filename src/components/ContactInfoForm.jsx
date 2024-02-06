import { Input } from './Input';
import contactIcon from '../assets/images/phone-box.png';
import '../style.css';

export const ContactInfoForm = ({ email, phone, location, website, onChange }) => {
  return (
    <div className="section-container">
      <h1>
        <img src={contactIcon} className="section-icon" />
        Contact Info
      </h1>
      <form className="form">
        <Input
          type="text"
          id="email"
          label="Email"
          name="email"
          placeholder="example@email.com"
          value={email}
          onChange={onChange}
        />
        <Input
          type="tel"
          id="phone"
          label="Phone"
          name="phone"
          placeholder="+44 123 4567 910"
          value={phone}
          onChange={onChange}
        />
        <Input
          type="text"
          id="location"
          label="Location"
          name="location"
          placeholder="e.g., London, UK"
          value={location}
          onChange={onChange}
        />
        <Input
          type="text"
          id="website"
          label="Website"
          name="website"
          placeholder="www.linkedin.com/johnsmith"
          value={website}
          onChange={onChange}
        />
      </form>
    </div>
  );
};
