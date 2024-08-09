export default function Textfield({
  idname,
  placeholder,
  value,
  onInput,
  type,
}) {
  return (
    <input
      id={idname}
      placeholder={placeholder}
      value={value}
      defaulktValue={value}
      onChange={onInput}
      autoFocus
      type={type}
    />
  );
}
