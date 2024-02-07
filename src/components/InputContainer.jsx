import '../style.css';

export const InputContainer = ({ id, label, type, placeholder, register }) => {
  return (
    <div className="input-container">
      <label htmlFor={id} className="label-text">
        {label}:
      </label>
      <input className="input" type={type} id={id} name={id} placeholder={placeholder} {...register(id)} required />
    </div>
  );
};
