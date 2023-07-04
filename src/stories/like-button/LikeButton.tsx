import React, { useState } from "react";
import "./likeButton.css";
import Image from "next/image";
import HeartFill from "../assets/heart-fill.svg";
import HeartOutline from "../assets/heart-line.svg";

interface Props {
  theme: "dark" | "light";
  backgroundColor?: string;
}

export const LikeButton = ({
  theme = "light",
  backgroundColor,
  ...props
}: Props) => {
  const [isLike, setIsLike] = useState(false);

  return (
    <button
    style={{ backgroundColor: `${backgroundColor}`}}
      className={[
        "storybook-button",
        `storybook-${theme}`,
      ].join(" ")}
      {...props}
      onClick={() => setIsLike(!isLike)}
    >
      {isLike ? (
        <Image
          src={HeartFill}
          width={20}
          height={20}
          alt="Heart"
        />
      ) : (
        <Image
          src={HeartOutline}
          width={20}
          height={20}
          alt="Heart outline"
        />
      )}
    </button>
  );
};
