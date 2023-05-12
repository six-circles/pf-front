import { BsStarFill, BsStarHalf } from "react-icons/bs";

const Rating = ({ punctuation }: { punctuation: number }) => {
  const fullStars = Math.floor(punctuation);
  const hasHalfStar = punctuation % 1 !== 0;

  return (
    <div style={{ color: "orange" }}>
      {[...Array(fullStars)].map((_, index) => (
        <BsStarFill key={index} />
      ))}
      {hasHalfStar && <BsStarHalf />}
    </div>
  );
};

export default Rating;
