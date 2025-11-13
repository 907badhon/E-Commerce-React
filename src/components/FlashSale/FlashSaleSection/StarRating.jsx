import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function StarRating({ stars, counts }) {
  const fullStars = Math.floor(stars);
  const hasHalf = stars % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex space-x-1 leading-tight">
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <FaStar key={index} className="text-[#FFAD33]" />
        ))}
      {hasHalf && <FaStarHalfAlt className="text-[#FFAD33]" />}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <FaStar key={index} className="text-[#bfbfbf]" />
        ))}

      <span className="ml-2 text-[#747171]">({counts})</span>
    </div>
  );
}

export default StarRating;
