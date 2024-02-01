import PropTypes from 'prop-types';

export const FormButtons = ({ buttonText, editIndex, handleDelete, handleCancel, handleSave }) => {
  return editIndex === null ? (
    <button type="submit" className="button button-wide">
      + {buttonText}
    </button>
  ) : (
    <div className="edit-buttons-container">
      <button type="button" onClick={handleDelete} className="button">
        Delete
      </button>
      <div className="button-group">
        <button type="button" onClick={handleCancel} className="button">
          Cancel
        </button>
        <button type="button" onClick={handleSave} className="button button-blue">
          Save
        </button>
      </div>
    </div>
  );
};

FormButtons.propTypes = {
  buttonText: PropTypes.string,
  editIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),
  handleDelete: PropTypes.func,
  handleCancel: PropTypes.func,
  handleSave: PropTypes.func,
};
