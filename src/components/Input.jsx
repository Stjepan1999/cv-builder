import '../style.css';

export const Input = ({ id, label, type, name, value, placeholder, onChange }) => {
  return (
    <div className="input-container">
      <label htmlFor={id} className="label-text">
        {label}:
      </label>
      <input
        className="input"
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
};
