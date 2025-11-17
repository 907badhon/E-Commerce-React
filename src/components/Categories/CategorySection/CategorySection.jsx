import CategoryCard from "./CategoryCard";
import ArrowNavigation from "../../CommonComponent/ArrowNavigation";
import deviceCategories from "../deviceCategories";
import { useState, useRef, useEffect } from "react";

function CategorySection() {
  const [position, setPosition] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const [activeIndex, setActiveIndex] = useState(3);

  const sliderRef = useRef(null);
  const timerRef = useRef(null);

  const newCategories = [...deviceCategories, ...deviceCategories.slice(0, 6)];

  // Auto scroll
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % deviceCategories.length);
      setPosition((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, []);

  const autoStart = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setPosition((prev) => prev + 1);
      setActiveIndex(prev => (prev + 1) % deviceCategories.length);
    }, 4000);
  };

  // Looping slider
  useEffect(() => {
    const slider = sliderRef.current;
    const handleTransitionEnd = () => {
      if (position >= deviceCategories.length) {
        setPosition(0);
        setIsResetting(true);
        setTimeout(() => {
          setIsResetting(false);
        }, 100);
      }
    };
    slider.addEventListener("transitionend", handleTransitionEnd);
    return () =>
      slider.removeEventListener("transitionend", handleTransitionEnd);
  }, [position]);

const onLeftClick = () => {
  clearInterval(timerRef.current);
  setActiveIndex(prev => (prev === 0 ? 0 : prev - 1));
  setPosition(prev => (prev === 0 ? 0 : prev - 1));
  setTimeout(autoStart, 300);
};

const onRightClick = () => {
  clearInterval(timerRef.current);
  setActiveIndex(prev => (prev + 1) % deviceCategories.length);
  setPosition(prev => prev + 1);
  setTimeout(autoStart, 300);
};

  return (
    <div className="overflow-hidden mt-15">
      <ArrowNavigation
        onLeftClick={onLeftClick}
        onRightClick={onRightClick}
        className="absolute top-[62px] left-[1055px]"
      />
      <div
        ref={sliderRef}
        className={`flex gap-[30px] ${
          isResetting ? "" : "transition-transform duration-1000 ease"
        }`}
        style={{ transform: `translateX(-${position * 200}px)` }}
      >
        {newCategories.map((device, index) => (
          <div
            onClick={() => {
              setActiveIndex(index % deviceCategories.length); 
            }}
            key={index}
            className="flex shrink-0 cursor-pointer "
          >
            <CategoryCard
              name={device.name}
              icon={device.icon}
              active={activeIndex === index % deviceCategories.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
