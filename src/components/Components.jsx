import FlashSale from "./FlashSale/FlashSale";
import HeaderSection from "./Header/HeaderSection";
import Hero from "./Hero/Hero";
import Categories from "./Categories/Categories"

function Components() {
  return (
    <div className="overflow-hidden pb-2">
      <HeaderSection />
      <Hero />
      <FlashSale />
      <Categories />
    </div>
  );
}

export default Components;
