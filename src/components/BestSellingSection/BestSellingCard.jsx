import flashSaleData from "../FlashSale/FlashSaleSection/flashSaleData";
import FlashSaleCard from "../FlashSale/FlashSaleSection/FlashSaleCard";
import { RxDoubleArrowDown, RxDoubleArrowUp } from "react-icons/rx";
import { useState } from "react";

const bestSale = flashSaleData.filter((data) => {
  if (data.rating.stars === 5) {
    return data;
  }
});

function BestSellingCard() {
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? bestSale : bestSale.slice(0, 4);

  return (
    <div className="grid grid-cols-4 gap-[30px] mt-15 ">
      {visibleProducts.map((value, index) => (
        <div key={index} className="transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-x">
          <FlashSaleCard product={value} />
        </div>           
      ))}
      <button
        onClick={() => setShowAll((prev) => !prev)}
        className="btn bg-primary flex items-center gap-4 absolute right-0 top-[52px]"
      >
        <span>{showAll ? "View Less" : "View All"}</span>
        <span >{showAll ? <RxDoubleArrowUp size={24} /> : <RxDoubleArrowDown size={24} />}</span>
      </button>
    </div>
  );
}

export default BestSellingCard;
