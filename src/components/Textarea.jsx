import '../style.css';

export const Textarea = ({ id, label, type, name, value, placeholder, onChange }) => {
  return (
    <div className="input-container">
      <label htmlFor={id} className="label-text">
        {label}:
      </label>
      <textarea
        className="textarea"
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </div>
  );
};
