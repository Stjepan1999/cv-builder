import '../style.css';

export const Input = ({ id, label, type, placeholder, register, maxLength, errors }) => {
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
        {...register(id, { required: true, maxLength })}
      />
      {errors[id] && errors[id].type === 'required' && <span className="error-message">This field is required.</span>}
      {errors[id] && errors[id].type === 'maxLength' && <span className="error-message">Max length exceeded.</span>}
    </div>
  );
};
