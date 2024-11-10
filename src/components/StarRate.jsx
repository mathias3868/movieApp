/* eslint-disable react/prop-types */

import { useState } from "react";
import Star from "../assets/Star";

const mainStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  columnGap: "10px",
  padding: "10px 0 10px 0 ",
  background: "#383737",
  borderRadius: "5px",
  overFlow: "hidden",
  boxShadow: `0 0 4px #383737`,
  border: "none",
};

const starStyle = {
  display: "flex",
  alignItems: "center",
  gap: "3px",
  cursor: "pointer",
};

const StarRate = ({
  starRate = 5,
  color = "#fcc419",
  size = 16,
  className = "",
  message = [],
  defaultRate = 0,
  onSetMovieRate = 0,
}) => {
  const textStyle = {
    fontSize: size,
    color,
    padding: 0,
  };
  const [rating, setRating] = useState(defaultRate);
  const [tempRating, setTempRating] = useState(0);

  function handleRate(rating) {
    setRating(rating);
    onSetMovieRate(rating);
  }
  return (
    <div style={mainStyle} className={className}>
      <div style={starStyle}>
        {Array.from({ length: starRate }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRate(i + 1)}
            onHoverin={() => setTempRating(i + 1)}
            onHoverout={() => setTempRating(0)}
            color={color}
            fontSize={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {message.length === starRate
          ? message[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
};

export default StarRate;
