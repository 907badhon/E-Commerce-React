import { useState, useEffect, useRef } from "react";
import FlashSaleCard from "./FlashSaleCard";
import products from "./flashSaleData.js";

function FlashSaleSlider() {
  const [position, setPosition] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  const extendedProducts = [...products, ...products.slice(0, 4)];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    const handleTransitionEnd = () => {
      if (position >= products.length) {
        setIsTransitioning(false);
        setPosition(0);
        setTimeout(() => setIsTransitioning(true), 50);
      }
    };

    slider.addEventListener("transitionend", handleTransitionEnd);
    return () =>
      slider.removeEventListener("transitionend", handleTransitionEnd);
  }, [position, products.length]);

  return (
    <div className="mt-10 w-full overflow-hidden pb-10">
      <div
        ref={sliderRef}
        className={`flex ${
          isTransitioning ? "transition-transform duration-1000" : ""
        }`}
        style={{ transform: `translateX(-${position * 25}%)` }}
      >
        {extendedProducts.map((product, index) => (
          <div className="w-1/4 shrink-0 px-3" key={index}>
            <FlashSaleCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlashSaleSlider;
