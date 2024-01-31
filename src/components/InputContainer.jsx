import '../style.css';

export const InputContainer = ({ id, label, type, name, value, placeholder, onChange }) => {
  return (
    <div className="input-container">
      <label htmlFor={id} className="label-text">
        {label}:
      </label>
      {type === 'textarea' ? (
        <textarea
          className="textarea"
          type={type}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        ></textarea>
      ) : (
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
      )}
    </div>
  );
};
