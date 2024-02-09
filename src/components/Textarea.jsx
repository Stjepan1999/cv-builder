import '../style.css';

export const Textarea = ({ id, label, name, placeholder, register, errors }) => {
  return (
    <div className="input-container">
      <label htmlFor={id} className="label-text">
        {label}:
      </label>
      <textarea
        className="textarea"
        id={id}
        name={name}
        placeholder={placeholder}
        {...register(id, { required: true })}
      ></textarea>
      {errors[id] && errors[id].type === 'required' && <span className="error-message">This field is required.</span>}
    </div>
  );
};
