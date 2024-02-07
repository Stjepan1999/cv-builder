import '../style.css';

export const Textarea = ({ id, label, type, name, placeholder, register }) => {
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
        placeholder={placeholder}
        {...register[id]}
        required
      ></textarea>
    </div>
  );
};
