import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Rating = ({ punctuation }: { punctuation: number }) => {
  const fullStars = Math.floor(punctuation);
  const hasHalfStar = punctuation % 1 !== 0;
  const voidStar = Math.floor(5 - punctuation);

  return (
    <div style={{ color: "orange" }}>
      {[...Array(fullStars)].map((_, index) => (
        <BsStarFill key={index} />
      ))}
      {hasHalfStar && <BsStarHalf />}
      {[...Array(voidStar)].map((_, index) => (
        <BsStar key={index} />
      ))}
    </div>
  );
};

export default Rating;
