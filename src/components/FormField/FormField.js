import "./FormField.css";

function FormField({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  rows
}) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>

      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows || 6}
          required
        ></textarea>
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
        />
      )}
    </div>
  );
}

export default FormField;