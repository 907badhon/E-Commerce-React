import PromoImage from "./PromoImage"
import CountdownTimer from "./CountdownTimer"

function JBLPromoSection() {
    const targetTime = new Date(Date.now() + 6 * 24 * 60 * 60 * 1000);

    
  return (
    <section className="container bg-black text-white rounded mt-[140px] h-[500px] flex justify-between">
      <div className="ml-14 mt-[69px]">
        <p className="uppercase text-sm text-green-500 font-semibold">Categories</p>
        <h2 className="mt-8 text-5xl font-semibold tracking-[2px] leading-[60px] w-[443px]">
          Enhance Your Music Experience
        </h2>
        <CountdownTimer targetTime={targetTime} />
        <button className="mt-10 bg-green-600 hover:bg-green-500 text-white btn rounded-md">
          Buy Now!
        </button>
      </div>
      <div className=" flex items-center justify-center ">
        <PromoImage />
      </div>
    </section>
  );
}

export default JBLPromoSection;
