
import { GrFavorite } from "react-icons/gr";
import { IoEyeOutline } from "react-icons/io5";
import FlashDetails from "./FlashDetails";

function FlashSaleCard({ product, children  }) {
  return (
    <div className="relative h-[350px] bg-white rounded-lg shadow-md ">
      <div className="h-[250px] bg-[#F5F5F5] flex-center">
        <div className="px-10 py-9 flex justify-center items-center">
          <img src={product.image} alt={product.name} />
        </div>
          {children}
        <button className="px-2.5 py-2.5 absolute cursor-pointer bg-white rounded-full top-3 right-3">
          <GrFavorite />
        </button>
        <button className="px-2.5 py-2.5 absolute cursor-pointer bg-white rounded-full top-[54px] right-3">
          <IoEyeOutline />
        </button>
      </div>
      <FlashDetails product={product} />
    </div>
  );
}

export default FlashSaleCard;
