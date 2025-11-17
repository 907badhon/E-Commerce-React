import { useState, useEffect, useRef } from "react";
import FlashSaleCard from "./FlashSaleCard";
import products from "./flashSaleData.js";
import ArrowNavigation from "../../CommonComponent/ArrowNavigation";
import DiscountBadge from "./DiscountBadge.jsx";

function FlashSaleSlider() {
  const [position, setPosition] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);
  const timerRef = useRef(null);

  const extendedProducts = [...products, ...products.slice(0, 4)];

  const autoStart = () => {
    timerRef.current = setInterval(() => {
      setPosition((prev) => prev + 1);
    }, 4000);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setPosition((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(timerRef.current);
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
  }, [position]);

  const onRightClick = () => {
    clearInterval(timerRef.current);

    if (position === products.length) {
      setIsTransitioning(false);
      setPosition(0);

      setTimeout(() => {
        setIsTransitioning(true);
        setPosition(1);
      }, 50);
    } else {
      setPosition((prev) => prev + 1);
    }

    autoStart();
  };

  const onLeftClick = () => {
    clearInterval(timerRef.current);

    if (position === 0) {
      setIsTransitioning(false);
      setPosition(products.length);

      setTimeout(() => {
        setIsTransitioning(true);
        setPosition(products.length - 1);
      }, 50);
    } else {
      setPosition((prev) => prev - 1);
    }

    autoStart();
  };

  return (
    <div className="mt-10 w-full overflow-hidden pb-10 ">
      <ArrowNavigation
        className="absolute top-[62px] left-[1055px]"
        onRightClick={onRightClick}
        onLeftClick={onLeftClick}
      />

      <div
        ref={sliderRef}
        className={`flex ${
          isTransitioning ? "transition-transform duration-1500" : ""
        }`}
        style={{ transform: `translateX(-${position * 25}%)` }}
      >
        {extendedProducts.map((product, index) => (
          <div className="w-1/4 shrink-0 px-3 " key={index}>
            <FlashSaleCard product={product}>
              <DiscountBadge text={product.discount} />
            </FlashSaleCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlashSaleSlider;
