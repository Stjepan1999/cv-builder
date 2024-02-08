export const FormButtons = ({ buttonText, editIndex, onDeleteClick, onCancelClick, onSaveClick }) => {
  return editIndex === null ? (
    <button type="submit" className="button button-wide">
      + {buttonText}
    </button>
  ) : (
    <div className="edit-buttons-container">
      <button type="button" onClick={onDeleteClick} className="button">
        Delete
      </button>
      <div className="button-group">
        <button type="button" onClick={onCancelClick} className="button">
          Cancel
        </button>
        <button type="button" onClick={onSaveClick} className="button button-blue">
          Save
        </button>
      </div>
    </div>
  );
};
