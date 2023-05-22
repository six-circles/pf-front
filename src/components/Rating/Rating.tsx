import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Rating = ({ punctuation }: { punctuation: number }) => {
  const fullStars = Math.floor(punctuation);
  const hasHalfStar = punctuation % 1 !== 0;
  // console.log(hasHalfStar, punctuation);
  const voidStar = Math.floor(5 - Math.ceil(punctuation));

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
