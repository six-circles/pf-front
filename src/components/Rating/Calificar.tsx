import { useState } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";

interface Props {
  setState: Function;
}

function Calificar({ setState }: Props) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleRating = (value: any) => {
    if (rating === value) {
      setRating(0);
      setState(0);
    } else {
      setRating(value);
      setState(value);
    }
  };

  const handleHoverRating = (value: any) => {
    setHoveredRating(value);
  };

  const handleHoverEnd = () => {
    setHoveredRating(0);
  };

  return (
    <ul style={{ color: "orange", listStyle: "none", padding: 0 }}>
      {[1, 2, 3, 4, 5].map((value) => (
        <li
          key={value}
          style={{ display: "inline-block", cursor: "pointer" }}
          onMouseEnter={() => handleHoverRating(value)}
          onMouseLeave={handleHoverEnd}
          onClick={() => handleRating(value)}
        >
          {value <= (hoveredRating || rating) ? <BsStarFill /> : <BsStar />}
        </li>
      ))}
    </ul>
  );
}

export default Calificar;
