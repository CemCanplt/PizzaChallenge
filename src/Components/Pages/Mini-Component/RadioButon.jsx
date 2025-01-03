function RadioButon({ buton, handleFiyat }) {
  const { id, value, ikon } = buton;

  return (
    <div className="label-flex">
      <input
        type="radio"
        id={id}
        name="hamurSecimi"
        value={value}
        onChange={handleFiyat}
        defaultChecked={value == 0}
      ></input>
      <label htmlFor={id}>{ikon}</label>
    </div>
  );
}

export default RadioButon;
