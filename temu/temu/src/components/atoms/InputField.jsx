// InputField.jsx
import "./InputField.css";

const InputField = ({ label, type, name, value, onChange }) => (
  <div className="input-group">
    <label className="input-label">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="input-field"
    />
  </div>
);

export default InputField;
