import React from "react";

function Button({
  text,
  style,
  iconLeft,
  iconRight,
  children,
  onClick,
  disabled = false,
}) {
  return (
    <button
      type="Button"
      disabled={disabled}
      className={
        "transition-all duration-300 bg-opacity-80 hover:bg-opacity-100 " +
        style
      }
      onClick={onClick}
    >
      {iconLeft}
      {children ? children : text}
      {iconRight}
    </button>
  );
}

export default Button;
