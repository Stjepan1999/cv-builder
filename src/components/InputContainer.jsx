import '../style.css';

export function InputContainer({ id, label, type, value, placeholder, onChange }) {
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
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        ></textarea>
      ) : (
        <input className="input" type={type} id={id} value={value} placeholder={placeholder} onChange={onChange} />
      )}
    </div>
  );
}
