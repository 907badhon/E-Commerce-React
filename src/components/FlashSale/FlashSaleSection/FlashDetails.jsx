import StarRating from "./StarRating";

function FlashDetails({ product }) {
  return (
    <div className="ml-3 mt-2 space-y-2">
      <h3 className="font-semibold">{product.name}</h3>
      <div className="">
        <span className="text-[#DB4444]">${product.price}</span>
        <span className="text-[#7f7f7f] line-through ml-3">
          ${product.oldPrice}
        </span>
      </div>
      <StarRating stars={product.rating.stars} counts={product.rating.count} />
    </div>
  );
}

export default FlashDetails;
