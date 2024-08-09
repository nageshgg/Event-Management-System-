import React from "react";

function InputField({ placeholder, style, value, onChange, type="text", required=false }) {
  return (
    <div>
      <input
        placeholder={placeholder}
        className={style}
        value={value}
        onChange={onChange}
        type={type}
        required={required}
      />
    </div>
  );
}

export default InputField;
