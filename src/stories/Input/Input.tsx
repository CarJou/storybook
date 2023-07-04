import React from "react";
import "./input.css";


interface InputProps {
  theme: "dark" | "light";
  size?: "medium" | "large";
}

export const Input = ({ theme = 'light', size = "medium", ...props }: InputProps) => {

  return (
    <input className={["storybook-input", `storybook-${theme}`, `storybook-${size}`].join(" ")} {...props} placeholder='Search' type="text"/>
   
  );
};
