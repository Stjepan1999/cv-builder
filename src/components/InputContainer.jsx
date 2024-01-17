import '../style.css';

export function InputContainer({ id, label, type, value, placeholder, onChange }) {
  return (
    <div className="input-container">
      <label htmlFor={id}>
        {' '}
        {label}:
        <input type={type} id={id} value={value} placeholder={placeholder} onChange={onChange} />
      </label>
    </div>
  );
}
