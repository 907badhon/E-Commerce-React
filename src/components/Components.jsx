import FlashSale from "./FlashSale/FlashSale";
import HeaderSection from "./Header/HeaderSection";
import Hero from "./Hero/Hero";
import Categories from "./Categories/Categories"
import BestSellingSection from "./BestSellingSection/BestSellingSection"
import JBLPromoSection from "./JBLPromoSection/JBLPromoSection"
import NewArrival from "./NewArrival/NewArrival"
import SupportFeatured from "./SupportFeatured/SupportFeatured"

function Components() {
  return (
    <div className="overflow-hidden pb-2">
      <HeaderSection />
      <Hero />
      <FlashSale />
      <Categories />
      <BestSellingSection />
      <JBLPromoSection />
      <NewArrival />
      <SupportFeatured />
    </div>
  );
}

export default Components;
