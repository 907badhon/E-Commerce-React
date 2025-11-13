import CommonTitle from "../CommonComponent/CommonTitle.jsx";
import CommonHeader from "../CommonComponent/CommonHeader.jsx";
import CountdownTimer from "./FlashSaleSection/CountdownTimer.jsx";
import FlashSaleSlider from "./FlashSaleSection/FlashSaleSlider.jsx";

function FlashSale() {
  const targetTime = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
  return (
    <section className="container mt-35">
      <CommonTitle text={"Today's"} />
      <div className="flex items-center gap-22">
        <CommonHeader text={"Flash Sales"} />
        <CountdownTimer targetTime={targetTime} />
      </div>
      <FlashSaleSlider />
      <div className="flex-center">
        <button className="btn bg-primary ">View All Products</button>
      </div>
      <div className="bg-[#b3b3b3] mt-15 h-px"></div>
    </section>
  );
}

export default FlashSale;
