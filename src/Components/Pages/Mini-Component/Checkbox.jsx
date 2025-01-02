import "./CheckBox.css";

function CheckBox(props) {
  const { malzeme, handleFiyat, isDisabled, checked } = props;
  const id = malzeme.toLowerCase();

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={id}
        data-cy="ingredient-checkbox"
        name="ekMalzeme"
        value={malzeme}
        onChange={handleFiyat}
        disabled={isDisabled && !checked}
      />
      <label htmlFor={id}>{malzeme}</label>
    </div>
  );
}

export default CheckBox;
