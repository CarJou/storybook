import React from "react";
import "./card.css";
import Image from "next/image";
import AnyaImg from "../assets/anya-taylor.webp";

interface CardProps {
  theme: "dark" | "light";
  /**
   * How large should the button be?
   */
  size?: "medium" | "large";

  /**
   * Optional click handler
   */
}

export const Card = ({ theme = 'light', size = "medium", ...props }: CardProps) => {

  return (
    <div className={["storybook-div", `storybook-${theme}`, `storybook-${size}`].join(" ")} {...props}>
      <Image
        src={AnyaImg}
        width={200}
        height={200}
        alt="Anya Taylor Joy"
        className="styled-img"
      />
      <div className="styled-bio-content">
      <h1 className="styled-title">Anya Taylor-Joy</h1>
      <p className="styled-text">Es una actriz y modelo estadounidense de origen argentino-británico.​​ Es conocida por su papel protagonista como Beth Harmon en la serie Gambito de Dama, como Thomasin en la película de terror sobrenatural The Witch y como Casey Cooke en las películas de terror y suspenso Split y Glass.</p> </div>
    </div>
  );
};
