import React from "react";
import { ButtonProps } from "./Button.types";

const Button = ({ children }: ButtonProps) => {
  return (
    <div>
      <button type="button">{children}</button>
    </div>
  );
};

export default Button;
