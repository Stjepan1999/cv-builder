import '../style.css';
import PropTypes from 'prop-types';

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

InputContainer.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
