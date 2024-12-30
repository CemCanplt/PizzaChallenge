import "./CheckBox.css";

function CheckBox(props) {
  const { malzeme, handleFiyat } = props;
  const id = malzeme.toLowerCase();

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={id}
        name="ekMalzeme"
        value={id}
        onChange={handleFiyat}
      />
      <label htmlFor={id}>{malzeme}</label>
    </div>
  );
}

export default CheckBox;
