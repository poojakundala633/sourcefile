import React, { FC } from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";

const Button: React.FC<ButtonProps> = ({
  children,
  color = "primary",
  variant = "contained",
  disabled = false,
  sx,
  size = "medium",
  onClick,
}) => {
  return (
    <MuiButton
      color={color}
      variant={variant}
      disabled={disabled}
      size={size}
      sx={sx}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
};

export default Button;