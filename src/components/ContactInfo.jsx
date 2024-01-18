import { InputContainer } from './InputContainer';
import '../style.css';

export function ContactInfo({ email, phone, location, website, onChange }) {
  return (
    <div className="section-container">
      <h1>Contact Info</h1>
      <form className="form">
        <InputContainer
          type="text"
          id="email"
          label="Email"
          name="email"
          placeholder="example@email.com"
          value={email}
          onChange={onChange}
        />
        <InputContainer
          type="tel"
          id="phone"
          label="Phone"
          name="phone"
          placeholder="+44 123 4567 910"
          value={phone}
          onChange={onChange}
        />
        <InputContainer
          type="text"
          id="location"
          label="Location"
          name="location"
          placeholder="London, UK"
          value={location}
          onChange={onChange}
        />
        <InputContainer
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
}
