import "./CheckBox.css"

function CheckBox(props) {
    const {malzeme} = props
    const id = malzeme.toLowerCase()

  return (
    <div className="checkbox-container">
      <input type="checkbox" id={id} name={id} value={id} />
      <label htmlFor={id}>{malzeme}</label>
    </div>
  );
}

export default CheckBox;
