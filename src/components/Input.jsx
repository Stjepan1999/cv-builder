import '../style.css';

export const Input = ({ id, label, type, placeholder, register, maxLength }) => {
  return (
    <div className="input-container">
      <label htmlFor={id} className="label-text">
        {label}:
      </label>
      <input
        className="input"
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        {...register(id)}
        maxLength={maxLength}
        required
      />
    </div>
  );
};
